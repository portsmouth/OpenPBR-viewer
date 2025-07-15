
/* Implements:

    https://arxiv.org/abs/2410.18026

    "EON: A practical energy-preserving rough diffuse BRDF",
        Jamie Portsmouth, Peter Kutz, Stephen Hill
*/

const float constant1_FON = 0.5f - 2.0f / (3.0f * PI);
const float constant2_FON = 2.0f / 3.0f - 28.0f / (15.0f * PI);

// FON directional albedo (analytic)
float E_FON_exact(float mu, float r)
{
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))
    float AF = 1.0f / (1.0f + constant1_FON * r); // FON A coeff.
    float BF = r * AF;                            // FON B coeff.
    float Si = sqrt(1.0f - (mu * mu));
    float G = Si * (acos(clamp(mu, -1.0f, 1.0f)) - Si * mu)
            + (2.0f / 3.0f) * ((Si / mu) * (1.0f - (Si * Si * Si)) - Si);
    return AF + (BF/PI) * G;
}

// FON directional albedo (approx.)
 float E_FON_approx(float mu, float r)
  {
      float mucomp = 1.0f - mu;
      float mucomp2 = mucomp * mucomp;
      const mat2 Gcoeffs = mat2(0.0571085289f, -0.332181442f,
                                0.491881867f, 0.0714429953f);
      float GoverPi = dot(Gcoeffs * vec2(mucomp, mucomp2), vec2(1.0f, mucomp2));
      return (1.0f + r * GoverPi) / (1.0f + constant1_FON * r);
  }

////////////////////////////////////////////////////////////////////////////////
// EON BRDF
////////////////////////////////////////////////////////////////////////////////

  // Evaluates EON BRDF value, given inputs:
  //       rho = single-scattering albedo parameter
  //         r = roughness in [0, 1]
  //  wi_local = direction of incident ray (directed away from vertex)
  //  wo_local = direction of outgoing ray (directed away from vertex)
  //     exact = flag to select exact or fast approx. version
  //
  vec3 f_EON(vec3 rho, float r, vec3 wi_local, vec3 wo_local, bool exact)
  {
      float mu_i = wi_local.z;                               // input angle cos
      float mu_o = wo_local.z;                               // output angle cos
      float s = dot(wi_local, wo_local) - mu_i * mu_o;       // QON $s$ term
      float sovertF = s > 0.0f ? s / max(mu_i, mu_o) : s;    // FON $s/t$
      float AF = 1.0f / (1.0f + constant1_FON * r);          // FON $A$ coeff.
      vec3 f_ss = (rho/PI) * AF * (1.0f + r * sovertF); // single-scatter lobe
      float EFo = exact ? E_FON_exact(mu_o, r):              // FON $w_o$ albedo (exact)
                          E_FON_approx(mu_o, r);             // FON $w_o$ albedo (approx)
      float EFi = exact ? E_FON_exact(mu_i, r):              // FON $w_i$ albedo (exact)
                          E_FON_approx(mu_i, r);             // FON $w_i$ albedo (approx)
      float avgEF = AF * (1.0f + constant2_FON * r);         // avg. albedo
      vec3 rho_ms = (rho * rho) * avgEF / (vec3(1.0f) - rho * (1.0f - avgEF));
      const float eps = 1.0e-7f;
      vec3 f_ms = (rho_ms/PI) * max(eps, 1.0f - EFo)    // multi-scatter lobe
                              * max(eps, 1.0f - EFi)
                              / max(eps, 1.0f - avgEF);
      return f_ss + f_ms;
  }

////////////////////////////////////////////////////////////////////////////////
// EON directional albedo
////////////////////////////////////////////////////////////////////////////////

  vec3 E_EON(vec3 rho, float r, vec3 wi_local, bool exact)
  {
      float mu_i = wi_local.z;                       // input angle cos
      float AF = 1.0f / (1.0f + constant1_FON * r);  // FON $A$ coeff.
      float EF = exact ? E_FON_exact(mu_i, r):       // FON $w_i$ albedo (exact)
                         E_FON_approx(mu_i, r);      // FON $w_i$ albedo (approx)
      float avgEF = AF * (1.0f + constant2_FON * r); // average albedo
      vec3 rho_ms = (rho * rho) * avgEF / (vec3(1.0f) - rho * (1.0f - avgEF));
      return rho * EF + rho_ms * (1.0f - EF);
  }

////////////////////////////////////////////////////////////////////////////////
// EON importance sampling
////////////////////////////////////////////////////////////////////////////////

void ltc_terms(float mu, float r,
               out float a, out float b, out float c, out float d)
{
    a = 1.0 + r*(0.303392f + (-0.518982f + 0.111709f*mu)*mu + (-0.276266f + 0.335918f*mu)*r);
    b = r*(-1.16407f + 1.15859f*mu + (0.150815f - 0.150105f*mu)*r)/(mu*mu*mu - 1.43545f);
    c = 1.0f + (0.20013f + (-0.506373f + 0.261777f*mu)*mu)*r;
    d = ((0.540852f + (-1.01625f + 0.475392f*mu)*mu)*r)/(-1.0743f + mu*(0.0725628f + mu));
}

vec4 cltc_sample(in vec3 wo_local, float r, float u1, float u2)
{
    float a, b, c, d; ltc_terms(wo_local.z, r, a, b, c, d);    // coeffs of LTC $M$
    float R = sqrt(u1); float phi = 2.0f * PI * u2;            // CLTC sampling
    float x = R * cos(phi); float y = R * sin(phi);            // CLTC sampling
    float vz = 1.0f / sqrt(d*d + 1.0f);                        // CLTC sampling factors
    float s = 0.5f * (1.0f + vz);                              // CLTC sampling factors
    x = -mix(sqrt(1.0f - y*y), x, s);                          // CLTC sampling
    vec3 wh = vec3(x, y, sqrt(max(1.0f - (x*x + y*y), 0.0f))); // $w_h$ sample via CLTC
    float pdf_wh = wh.z / (PI * s);                            // PDF of $w_h$ sample
    vec3 wi = vec3(a*wh.x + b*wh.z, c*wh.y, d*wh.x + wh.z);    // $M w_h$ (unnormalized)
    float len = length(wi);                                    // $|M w_h| = 1/|M^{-1} w_h|$
    float detM = c*(a - b*d);                                  // $|M|$
    float pdf_wi = pdf_wh * len*len*len / detM;                // $w_i$ sample PDF
    mat3 fromLTC = orthonormal_basis_ltc(wo_local);            // transform $w_i$ to world space
    wi = normalize(fromLTC * wi);                              // transform $w_i$ to world space
    return vec4(wi, pdf_wi);
}

float cltc_pdf(in vec3 wo_local, in vec3 wi_local, float r)
{
    mat3 toLTC = transpose(orthonormal_basis_ltc(wo_local));                 // transform $w_i$ to LTC space
    vec3 wi = toLTC * wi_local;                                              // transform $w_i$ to LTC space
    float a, b, c, d; ltc_terms(wo_local.z, r, a, b, c, d);                  // coeffs of LTC $M$
    float detM = c*(a - b*d);                                                // $|M|$
    vec3 wh = vec3(c*(wi.x - b*wi.z), (a - b*d)*wi.y, -c*(d*wi.x - a*wi.z)); // $\mathrm{adj}(M) wi$
    float lensq = dot(wh, wh);                                               // $|M| |M^{-1} wi|$
    float vz = 1.0f / sqrt(d*d + 1.0f);                                      // CLTC sampling factors
    float s = 0.5f * (1.0f + vz);                                            // CLTC sampling factors
    float pdf = sqr(detM / lensq) * max(wh.z, 0.0f) / (PI * s);              // $w_i$ sample PDF
    return pdf;
}

vec3 uniform_lobe_sample(float u1, float u2)
{
    float sinTheta = sqrt(1.0f - u1*u1);
    float phi = 2.0f * PI * u2;
    return vec3(sinTheta * cos(phi), sinTheta * sin(phi), u1);
}

vec4 sample_EON(in vec3 wo_local, float r, float u1, float u2)
{
    float mu = wo_local.z;
    float P_u = pow(r, 0.1f) * (0.162925f + mu*(-0.372058f + (0.538233f - 0.290822f*mu)*mu));
    float P_c = 1.0f - P_u;
    vec4 wi; float pdf_c;
    if (u1 <= P_u) {
        u1 = u1 / P_u;
        wi.xyz = uniform_lobe_sample(u1, u2);
        pdf_c = cltc_pdf(wo_local, wi.xyz, r); }
    else {
        u1 = (u1 - P_u) / P_c;
        wi = cltc_sample(wo_local, r, u1, u2);
        pdf_c = wi.w; }
    const float pdf_u = 1.0f / (2.0f * PI);
    wi.w = P_u*pdf_u + P_c*pdf_c;
    return wi;
}

float pdf_EON(in vec3 wo_local, in vec3 wi_local, float r)
{
    float mu = wo_local.z;
    float P_u = pow(r, 0.1f) * (0.162925f + mu*(-0.372058f + (0.538233f - 0.290822f*mu)*mu));
    float P_c = 1.0 - P_u;
    float pdf_c = cltc_pdf(wo_local, wi_local, r);
    const float pdf_u = 1.0f / (2.0f * PI);
    return P_u*pdf_u + P_c*pdf_c;
}


////////////////////////////////////////////////////////////////////////////////////
// d'Eon Lambertian Microsphere BRDF
////////////////////////////////////////////////////////////////////////////////////

#define SQRT_PI_OVER_2  ( sqrt(3.14159265359)/2. )

float safeacos(float x) {
    return acos(clamp(x, -1.0, 1.0));
}

float erf_function(float x) {                        // very good approx https://en.wikipedia.org/wiki/Error_function
    float e = exp(-x*x);                    // ( Bürmann series )
    return sign(x)/SQRT_PI_OVER_2 * sqrt( 1. - e ) * ( SQRT_PI_OVER_2 + 31./200.*e - 341./8000. *e*e );
}

float Coth(float x)
{
    return (exp(-x) + exp(x))/(-exp(-x) + exp(x));
}

float Sinh(float x)
{
    return -0.5*1.0/exp(x) + exp(x)/2.;
}


// cross section for the Beckmann NDF with roughness m and direction cosine u
float sigmaBeckmannExpanded(float u, float m)
{
    if(0.0 == m)
        return (u + abs(u))/2.;

    float m2 = m * m;

    if(1.0 == u)
        return 1.0 - 0.5 * m2;

    float expansionTerm = -0.25 * m2 * (u + abs(u)); // accurate approximation for m < 0.25 that avoids numerical issues

    float u2 = u * u;
    return ((exp(u2/(m2*(-1.0 + u2)))*m*sqrt(1.0 - u2))/sqrt(PI) +
     u*(1.0 + erf_function(u/(m*sqrt(1.0 - u2)))))/2. + expansionTerm;
}

// vmf sigma (cross section)
float sigmaVMF(float u, float m)
{
    if(m < 0.25)
        return sigmaBeckmannExpanded(u, m);

    float m2 = m * m;
    float m4 = m2 * m2;
    float m8 = m4 * m4;

    float u2 = u * u;
    float u4 = u2 * u2;
    float u6 = u2 * u4;
    float u8 = u4 * u4;
    float u10 = u6 * u4;
    float u12 = u6 * u6;

    float coth2m2 = Coth(2./m2);
    float sinh2m2 = Sinh(2./m2);

    if(m > 0.9)
        return 0.25 - 0.25*u*(m2 - 2.*coth2m2) + 0.0390625*(-1. + 3.*u2)*(4. + 3.*m4 - 6.*m2*coth2m2);

    return 0.25 - 0.25*u*(m2 - 2.*coth2m2) + 0.0390625*(-1. + 3.*u2)*(4. + 3.*m4 -
      6.*m2*coth2m2) - 0.000732421875*(3. - 30.*u2 + 35.*u4)*(16. + 180.*m4 + 105.*m8 -
      10.*m2*(8. + 21.*m4)*coth2m2) + 0.000049591064453125*(-5. + 105.*u2 - 315.*u4 + 231.*u6)*
      (64. + 105.*m4*(32. + 180.*m4 + 99.*m8) - 42.*m2*(16. + 240.*m4 + 495.*m8)*coth2m2) +
      (1.0132789611816406e-6*(35. - 1260.*u2 + 6930.*u4 - 12012.*u6 + 6435.*u8)*(1. + coth2m2)*
      (-256. - 315.*m4*(128. + 33.*m4*(80. + 364.*m4 + 195.*m8)) + 18.*m2*(256. + 385.*m4*
      (32. + 312.*m4 + 585.*m8))*coth2m2)*sinh2m2)/exp(2./m2) - (9.12696123123169e-8*(-63. + 3465.*u2
      - 30030.*u4 + 90090.*u6 - 109395.*u8 + 46189.*u10)*(1. + coth2m2)*(-1024. -
      495.*m4*(768. + 91.*m4*(448. + 15.*m4*(448. + 1836.*m4 + 969.*m8))) + 110.*m2*(256. + 117.*m4*
      (256. + 21.*m4*(336. + 85.*m4*(32. + 57.*m4))))*coth2m2)*sinh2m2)/exp(2./m2)
      + (4.3655745685100555e-9*(231. - 18018.*u2 + 225225.*u4 - 1.02102e6*u6 + 2.078505e6*u8
      - 1.939938e6*u10 + 676039.*u12)*(1. + coth2m2)*(-4096. - 3003.*m4*(1024. +
      45.*m4*(2560. + 51.*m4*(1792. + 285.*m4*(80. + 308.*m4 + 161.*m8)))) + 78.*m2*(2048. + 385.*m4*
      (1280. + 153.*m4*(512. + 57.*m4*(192. + 35.*m4*(40. + 69.*m4)))))*coth2m2)*sinh2m2)/exp(2./m2);
}

vec3 Erf_function(vec3 c)
{
    return vec3(erf_function(c.x), erf_function(c.y), erf_function(c.z));
}

vec3 nonNegative(vec3 c)
{
    return vec3(max(0.0, c.x), max(0.0, c.y), max(0.0, c.z));
}

vec3 fm(float ui, float uo, float r, vec3 c)
{
    vec3 C = sqrt(1.0 - c);
    vec3 Ck = (1.0 - 0.5441615108674713*C - 0.45302863761693374*(1.0 - c))/(1.0 + 1.4293127703064865*C);
    vec3 Ca = c/pow(1.0075 + 1.16942*C,atan((0.0225272 + (-0.264641 + r)*r)*Erf_function(C)));
    return nonNegative(0.384016*(-0.341969 + Ca)*Ca*Ck*(-0.0578978/(0.287663 + ui*uo) + abs(-0.0898863 + tanh(r))));
}


vec3 vMFdiffuseBRDF(float ui, float uo, float phi, float r, vec3 c)
{
    if (0.0 == r) return c / PI;

    float m = -log(1.0-sqrt(r));
    float sigmai = sigmaVMF(ui,m);
    float sigmao = sigmaVMF(uo,m);
    float sigmano = sigmaVMF(-uo,m);
    float sigio = sigmai * sigmao;
    float sigdenom = uo * sigmai + ui * sigmano;

    float r2 = r * r;
    float r25 = r2 * sqrt(r);
    float r3 = r * r2;
    float r4 = r2 * r2;
    float r45 = r4 * sqrt(r);
    float r5 = r3 * r2;

    float ui2 = ui * ui;
    float uo2 = uo * uo;
    float sqrtuiuo = sqrt((1.0 - ui2) * (1.0 - uo2));

    float C100 = 1.0 + (-0.1 * r + 0.84 * r4) / (1.0 + 9.0 * r3);
    float C101 = (0.0173 * r + 20.4 * r2 - 9.47 * r3)/(1.0 + 7.46 * r);
    float C102 = (-0.927 * r + 2.37 * r2)/(1.24 + r2);
    float C103 = (-0.11 * r - 1.54 * r2)/(1.0 - 1.05 * r + 7.1 * r2);
    float f10 =  ((C100 + C101 * ui * uo + C102 * ui2 * uo2 + C103 * (ui2 + uo2)) * sigio) / sigdenom;

    float C110 = (0.54*r - 0.182*r3)/(1. + 1.32*r2);
    float C111 = (-0.097*r + 0.62*r2 - 0.375*r3)/(1. + 0.4*r3);
    float C112 = 0.283 + 0.862*r - 0.681*r2;
    float f11 = (sqrtuiuo * (C110 + C111 * ui * uo)) * pow(sigio, C112) / sigdenom;

    float C120 = (2.25*r + 5.1*r2)/(1.0 + 9.8*r + 32.4*r2);
    float C121 = (-4.32*r + 6.0*r3)/(1.0 + 9.7*r + 287.0*r3);
    float f12 = ((1.0 - ui2) * (1.0 - uo2) * (C120 + C121 * uo) * (C120 + C121 * ui))/(ui + uo);

    float C200 = (0.00056*r + 0.226*r2)/(1.0 + 7.07*r2);
    float C201 = (-0.268*r + 4.57*r2 - 12.04*r3)/(1.0 + 36.7*r3);
    float C202 = (0.418*r + 2.52*r2 - 0.97*r3)/(1.0 + 10.0*r2);
    float C203 = (0.068*r - 2.25*r2 + 2.65*r3)/(1.0 + 21.4*r3);
    float C204 = (0.05*r - 4.22*r3)/(1.0 + 17.6*r2 + 43.1*r3);
    float f20 = (C200 + C201 * ui * uo + C203*ui2*uo2 + C202*(ui + uo) + C204*(ui2 + uo2))/(ui + uo);

    float C210 = (-0.049*r - 0.027*r3)/(1.0 + 3.36*r2);
    float C211 = (2.77*r2 - 8.332*r25 + 6.073*r3)/(1.0 + 50.0*r4);
    float C212 = (-0.431*r2 - 0.295*r3)/(1.0 + 23.9*r3);
    float f21 = (sqrtuiuo * (C210 + C211*ui*uo + C212*(ui + uo)))/(ui + uo);

    float C300 = (-0.083*r3 + 0.262*r4)/(1.0 - 1.9*r2 + 38.6*r4);
    float C301 = (-0.627*r2 + 4.95*r25 - 2.44*r3)/(1.0 + 31.5*r4);
    float C302 = (0.33*r2 + 0.31*r25 + 1.4*r3)/(1.0 + 20.0*r3);
    float C303 = (-0.74*r2 + 1.77*r25 - 4.06*r3)/(1.0 + 215.0*r5);
    float C304 = (-1.026*r3)/(1.0 + 5.81*r2 + 13.2*r3);
    float f30 = (C300 + C301*ui*uo + C303*ui2*uo2 + C302*(ui + uo) + C304*(ui2 + uo2))/(ui + uo);

    float C310 = (0.028*r2 - 0.0132*r3)/(1.0 + 7.46*r2 - 3.315*r4);
    float C311 = (-0.134*r2 + 0.162*r25 + 0.302*r3)/(1.0 + 57.5*r45);
    float C312 = (-0.119*r2 + 0.5*r25 - 0.207*r3)/(1.0 + 18.7*r3);
    float f31 =  (sqrtuiuo * (C310 + C311*ui*uo + C312*(ui + uo)))/(ui + uo);

    return (1.0/PI) * (
        c *         max(0.0, f10 + f11 * cos(phi) * 2. + f12 * cos(2.0 * phi) * 2.) +
        c * c *     max(0.0, f20 + f21 * cos(phi) * 2.) +
        c * c * c * max(0.0, f30 + f31 * cos(phi) * 2.)
        ) + fm(ui, uo, r, c);
}

vec3 vMFDiffuseAlbedoMapping(vec3 kd, float roughness)
{
    float roughness2 = roughness * roughness;
    float s = 0.64985f + 0.631112f * roughness + 1.38922f * roughness2;
    return (-1.f + kd + sqrt(1.f - 2. * kd + kd * kd + 4.f * s * s * kd * kd)) / (2.f * s * kd) * sqrt(roughness) + (1.f - sqrt(roughness)) * kd;
}


// set this to 1 to enable the diffuse color mapping
#define USE_VMF_DIFFUSE_ALBEDO_MAPPING 0

vec3 vmf_diffuse_eval(in vec3 winputL, in vec3 woutputL)
{
    vec3 V = winputL;
    vec3 L = woutputL;
    vec3 Albedo = base_weight * base_color;
    float NdotL = max(FLT_EPSILON, abs(L.z));
    float NdotV = max(FLT_EPSILON, abs(V.z));

    // VMF Diffuse BRDF (EGSR 2024)
    float uo = NdotL;
    float ui = NdotV;
    float cosThetaI = winputL.z, sinThetaI = sqrt(1.0 - cosThetaI * cosThetaI);
    float cosThetaO = woutputL.z, sinThetaO = sqrt(1.0 - cosThetaO * cosThetaO);

    float cosPhiDiff = 0.0;
    if (sinThetaI > 0.0 && sinThetaO > 0.0)
    {
        /* Compute cos(phiO-phiI) using the half-angle formulae */
        float sinPhiI = clamp(winputL.y / sinThetaI, -1.0, 1.0),
        cosPhiI = clamp(winputL.x / sinThetaI, -1.0, 1.0),
        sinPhiO = clamp(woutputL.y / sinThetaO, -1.0, 1.0),
        cosPhiO = clamp(woutputL.x / sinThetaO, -1.0, 1.0);
        cosPhiDiff = cosPhiI * cosPhiO + sinPhiI * sinPhiO;
    }
    float phi = safeacos(cosPhiDiff);

    float r = clamp(base_roughness, 0.0, .9999);
    vec3 c = (1 == USE_VMF_DIFFUSE_ALBEDO_MAPPING) ? vMFDiffuseAlbedoMapping(Albedo, r) : Albedo;

    return vMFdiffuseBRDF(ui, uo, phi, r, c); // higher-order bounces
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// diffuse BRDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0f);
    switch (diffuse_mode)
    {
        case 0: // EON
        {
            pdf_woutputL = pdf_EON(winputL, woutputL, base_roughness);
            return f_EON(base_weight * base_color, base_roughness, winputL, woutputL, true);
        }
        case 1: // d'Eon sphere
        {
            pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);
            return vmf_diffuse_eval(winputL, woutputL);
        }
    }
}

vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0f);
    switch (diffuse_mode)
    {
        case 0: // EON
        {
            float u1 = rand(rndSeed); float u2 = rand(rndSeed);
            vec4 wiP = sample_EON(winputL, base_roughness, u1, u2);
            woutputL     = wiP.xyz;
            pdf_woutputL = wiP.w;
            return f_EON(base_weight * base_color, base_roughness, winputL, woutputL, true);
        }

        case 1: // d'Eon sphere
        {
            woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
            return vmf_diffuse_eval(winputL, woutputL);
        }
    }
}

vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0f);

    switch (diffuse_mode)
    {
        case 0: // EON
        {
            return E_EON(base_weight * base_color, base_roughness, winputL, true);
        }
        case 1: // d'Eon sphere
        {
            return base_weight * base_color;
        }
    }
}
