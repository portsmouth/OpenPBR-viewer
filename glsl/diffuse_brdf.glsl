
////////////////////////////////////////////////////////////////////////////////////
// The original Oren-Nayar model, full and "qualitative" version
////////////////////////////////////////////////////////////////////////////////////

float safeacos(const float x)
{
    return acos(clamp(x, -1.0, 1.0));
}

vec3 ON_full(in vec3 Albedo, float sigma,
             in vec3 V, in vec3 L)
{
    // Full model
    float cosThetaI = V.z, sinThetaI = sqrt(1.0 - cosThetaI * cosThetaI);
    float cosThetaO = L.z, sinThetaO = sqrt(1.0 - cosThetaO * cosThetaO);
    float cosPhiDiff = 0.0;
    if (sinThetaI > 0.0 && sinThetaO > 0.0)
    {
        /* Compute cos(phiO-phiI) using the half-angle formulae */
        vec3 wi = V;
        vec3 wo = L;
        float sinPhiI = clamp(wi.y / sinThetaI, -1.0, 1.0),
              cosPhiI = clamp(wi.x / sinThetaI, -1.0, 1.0),
              sinPhiO = clamp(wo.y / sinThetaO, -1.0, 1.0),
              cosPhiO = clamp(wo.x / sinThetaO, -1.0, 1.0);
        cosPhiDiff = cosPhiI * cosPhiO + sinPhiI * sinPhiO;
    }

    float thetaI = safeacos(V.z),
          thetaO = safeacos(L.z),
          alpha = max(thetaI, thetaO),
          beta  = min(thetaI, thetaO);

    float sinAlpha, sinBeta, tanBeta;
    if (V.z > L.z)
    {
        sinAlpha = sinThetaO;
        sinBeta = sinThetaI;
        tanBeta = sinThetaI / max(1.0e-7, cosThetaI);
    }
    else
    {
        sinAlpha = sinThetaI;
        sinBeta = sinThetaO;
        tanBeta = sinThetaO / max(1.0e-7, cosThetaO);
    }

    float sigma2 = sqr(sigma);
    float tmp = sigma2 / (sigma2 + 0.09f),
          tmp2 = (4.0 / (PI * PI)) * alpha * beta,
          tmp3 = 2.0 * beta / PI;

    float C1 = 1.0f - 0.5f * sigma2 / (sigma2 + 0.33f),
          C2 = 0.45f * tmp,
          C3 = 0.125f * tmp * tmp2 * tmp2,
          C4 = 0.17f * sigma2 / (sigma2 + 0.13f);

    if (cosPhiDiff > 0.0)
        C2 *= sinAlpha;
    else
        C2 *= sinAlpha - tmp3*tmp3*tmp3;

    /* Compute tan(0.5 * (alpha+beta)) using the half-angle formulae */
    float tanHalf = (sinAlpha + sinBeta) / (sqrt(1.0f - sinAlpha * sinAlpha) + sqrt(1.0f - sinBeta  * sinBeta));
    vec3 rho = Albedo;
    vec3 snglScat = rho * (C1 + cosPhiDiff * C2 * tanBeta + (1.0f - abs(cosPhiDiff)) * C3 * tanHalf);
    vec3 dblScat  = rho * rho * (C4 * (1.0f - cosPhiDiff*tmp3*tmp3));
    return (snglScat + dblScat) * (cosThetaO / PI);
}

// QON BRDF
vec3 f_QON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo)
{
    float muI = wi.z;                                    // input angle cos
    float muO = wo.z;                                    // output angle cos
    float s = dot(wi, wo) - muI * muO;                   // QON s term
    float stinv = s > 0.0 ? s / max(muI, muO) : 0.0;     // OON model stinv
    float sigma2 = sqr(sigma);
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));   // QON model A coefficient
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);          // QON model B coefficient
    vec3 f_ss = (rho / PI) * (AQ + BQ*stinv);            // single-scatt. BRDF
    return f_ss;
}

// Energy-compensated QON BRDF (EQON)
float E_QON_approx(float mu, float sigma)
{
    #define c0_QON ( 0.509943)
    #define c1_QON (-0.468933)
    #define c2_QON (-0.221914)
    #define c3_QON (-0.23749 )
    #define Gcoeffs_QON mat2(c0_QON, c2_QON, c1_QON, c3_QON)
    #define GoverPI_QON dot((Gcoeffs_QON*vec2(1,mu))*vec2(1,mu*mu), vec2(1,1))
    float sigma2 = sqr(sigma);
    float AQ = 1.0f - 0.5f  * sigma2/(sigma2 + 0.33f);
    float BQ =        0.45f * sigma2/(sigma2 + 0.09f);
    return AQ + BQ*GoverPI_QON;
}
float E_QON_analyt(float mu, float sigma)
{
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))
    float sigma2 = sqr(sigma);
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);
    float Si = max(0.0, sqrt(1.0 - mu * mu));
    float G = Si * (safe_acos(mu) - Si*mu) + (Si/max(1e-7,mu))*(1.0 - pow(Si, 3.0))*2.0/3.0;
    float E = AQ + (BQ/PI)*G;
    return E;
}
#define constant2_QON (2.0/3.0 - 64.0/(45.0*PI))
vec3 f_EQON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo, bool exact)
{
    float muI = wi.z;                                    // input angle cos
    float muO = wo.z;                                    // output angle cos
    float s = dot(wi, wo) - muI * muO;                   // QON s term
    float stinv = s > 0.0 ? s / max(muI, muO) : 0.0;     // OON model stinv
    float sigma2 = sqr(sigma);
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));   // QON model A coefficient
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);          // QON model B coefficient
    vec3 f_ss = (rho / PI) * (AQ + BQ*stinv);            // single-scatt. BRDF
    float EFo = exact ? E_QON_analyt(muO, sigma) :       // EFo at rho=1 (analytic)
                        E_QON_approx(muO, sigma);        // EFo at rho=1 (approx)
    float EFi = exact ? E_QON_analyt(muI, sigma) :       // EFi at rho=1 (analytic)
                        E_QON_approx(muI, sigma);        // EFi at rho=1 (approx)
    float avgEF = AQ + constant2_QON*BQ;                 // avg. albedo
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));
    vec3 f_ms = (rho_ms / PI) * max(1e-7, 1.0 - EFo) *   // multi-scatter lobe
                                max(1e-7, 1.0 - EFi) /
                                max(1e-7, 1.0 - avgEF);
    return f_ss + f_ms;
}


////////////////////////////////////////////////////////////////////////////////////
// Fujii models
////////////////////////////////////////////////////////////////////////////////////

// FON BRDF
#define constant1_FON (0.5 - 2.0/(3.0*PI))
#define constant2_FON (2.0/3.0 - 28.0/(15.0*PI))

vec3 f_FON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo)
{
    float muI = wi.z;                                    // input angle cos
    float muO = wo.z;                                    // output angle cos
    float s = dot(wi, wo) - muI * muO;                   // QON s term
    float stinv = s > 0.0 ? s / max(muI, muO) : s;       // Fujii model stinv
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // Fujii model A coefficient
    vec3 f_ss = (rho / PI) * AF * (1.0 + sigma*stinv);   // single-scatt. BRDF
    return f_ss;
}

vec3 fujii_materialx(in vec3 Albedo, float roughness, in vec3 V, in vec3 L)
{
    // https://github.com/AcademySoftwareFoundation/MaterialX/blob/main/libraries/pbrlib/genglsl/lib/mx_microfacet_diffuse.glsl#endif
    // similar to Fujii qualitative but using different A/B and using sigma=r*PI
    // Has the dark ring artifact and loses energy as roughness->1.0
    float NdotV = V.z;
    float NdotL = L.z;
    float s = dot(L, V) - NdotV * NdotL;
    float stinv = (s > 0.0f) ? s / max(NdotL, NdotV) : 0.0;
    float sigma = roughness;
    float sigma2 = sqr(sigma);
    float A = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));
    float B = 0.45 * sigma2 / (sigma2 + 0.09);
    return Albedo * NdotL / PI * (A + B * stinv);
}

void ltc_coeffs(in vec3 wo, float r, inout float a, inout float b)
{
    float sinO = sqrt(1.0 - wo.z*wo.z);  // for LTC elements
    a = r*pow(sinO, 50.0)*0.5 + 1.0;     // LTC M element a
    b = r*pow(sinO, 4.0)*sqrt(wo.z);     // LTC M element b
}

vec3 ltc_space(in vec3 wo, in vec3 w, bool to)
{
    // transform w to/from space where wo is in x-z plane
    float s = to ? -1.0: 1.0;
    const float eps = 1e-6;
    float phi = (abs(wo.x) > eps) ? s*atan(wo.y, wo.x) : s*sign(wo.y)*0.5*PI;
    float C = cos(phi); float S = sin(phi);
    return vec3(mat2(C, S, -S, C)*w.xy, w.z);
}

// Inputs:
//     wo = fixed direction of input ray (i.e. output photon direction)
//     wi = sampled output ray direction (i.e. input photon direction reversed)
//      r = roughness
float pdf_EON(in vec3 wo, in vec3 wi, float r)
{
    vec3 wl = ltc_space(wo, wi, true);              // transform wi -> wl
    float a, b; ltc_coeffs(wo, r, a, b);            // coeffs of LTC M
    float aI = 1.0/a; float bI = -b*aI;             // coeffs of LTC M^-1
    vec3 wh = vec3(aI*wl.x+bI*wl.z, aI*wl.y, wl.z); // wh = M^-1 wl
    float l_MIwl = length(wh);                      // |M^-1 wl|
    wh /= l_MIwl;                                   // normalize wh
    float J = aI*aI / (l_MIwl*l_MIwl*l_MIwl);       // |M^-1| / |M^-1 wl|^3
    float pdf_h = wh.z / PI;                        // wh sample PDF
    return max(PDF_EPSILON, pdf_h * J);             // wi sample PDF
}

vec4 sample_cosine_lobe(inout uint rndSeed)
{
    float rh = sqrt(rand(rndSeed));
    float phi_h = 2.0 * PI * rand(rndSeed);
    float x = rh * cos(phi_h); float y = rh * sin(phi_h);
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));
    return vec4(x, y, z, z/PI);
}

// wo = fixed direction of input ray (i.e. output photon direction)
// Returns vec4(wi, pdf_i) where:
//  - wi is sampled output ray direction (i.e. input photon direction reversed),
//  - pdf_i is the PDF of the wi sample
vec4 sample_EON(in vec3 wo, float r, inout uint rndSeed)
{
    vec4 whP = sample_cosine_lobe(rndSeed);      // wh sample
    vec3 wh = whP.xyz; float pdf_h = whP.w;      // wh sample
    float a, b; ltc_coeffs(wo, r, a, b);         // coeffs of LTC M
    vec3 wl = vec3(a*wh.x+b*wh.z, a*wh.y, wh.z); // M wh
    float l_Mwh = length(wl);                    // |M wh| = 1/|M^-1 wl|
    wl /= l_Mwh;                                 // normalize wl
    float J = (l_Mwh*l_Mwh*l_Mwh) / (a*a);       // |M^-1| / |M^-1 wl|^3
    float pdf_i = max(PDF_EPSILON, pdf_h * J);   // wi sample PDF
    vec3 wi = ltc_space(wo, wl, false);          // transform wi -> wl
    return vec4(wi, pdf_i);
}


// FON directional albedo (analytic)

float E_FON_analyt(float mu, float sigma)
{
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))
    float AF = 1.0 / (1.0 + constant1_FON*sigma); // FON model A coefficient
    float BF = sigma * AF;                        // FON model B coefficient
    float Si = max(0.0, sqrt(1.0 - mu * mu));
    float G = Si * (safe_acos(mu) - Si*mu) + 2.0*((Si/mu)*(1.0 - pow(Si, 3.0)) - Si)/3.0;
    float E = AF + (BF/PI)*G;
    return E;
}

// FON directional albedo (approx.)
float E_FON_approx(float mu, float sigma)
{
    #define Gcoeffs_FON mat2(0.287021, -0.17486, -0.306961, 0.193945)
    #define GoverPI_FON dot((Gcoeffs_FON * vec2(1,mu)) * vec2(1,mu*mu), vec2(1,1))
    return (1.0 + GoverPI_FON) / (1.0 + constant1_FON*sigma);
}

// EON directional albedo (approx)
vec3 E_EFON(in vec3 rho, float sigma, in vec3 wi, bool exact)
{
    float muI = wi.z;                                    // input angle cos
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // FON model A coefficient
    float EF = exact ? E_FON_analyt(muI, sigma) :        // EFi at rho=1 (analytic)
                       E_FON_approx(muI, sigma);         // EFi at rho=1 (approx)
    float avgEF = AF * (1.0 + constant2_FON*sigma);      // average albedo
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));
    return rho*EF + rho_ms*(1.0 - EF);
}

// EFON BRDF
vec3 f_EFON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo, bool exact)
{
    float muI = wi.z;                                    // input angle cos
    float muO = wo.z;                                    // output angle cos
    float s = dot(wi, wo) - muI * muO;                   // QON s term
    float stinv = s > 0.0 ? s / max(muI, muO) : s;       // Fujii model stinv
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // Fujii model A coefficient
    vec3 f_ss = (rho / PI) * AF * (1.0 + sigma*stinv);   // single-scatt. BRDF
    float EFo = exact ? E_FON_analyt(muO, sigma) :       // EFo at rho=1 (analytic)
                        E_FON_approx(muO, sigma);        // EFo at rho=1 (approx)
    float EFi = exact ? E_FON_analyt(muI, sigma) :       // EFi at rho=1 (analytic)
                        E_FON_approx(muI, sigma);        // EFi at rho=1 (approx)
    float avgEF = AF * (1.0 + constant2_FON*sigma);      // avg. albedo
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));
    vec3 f_ms = (rho_ms / PI) * max(1e-7, 1.0 - EFo) *   // multi-scatter lobe
                                max(1e-7, 1.0 - EFi) /
                                max(1e-7, 1.0 - avgEF);
    return f_ss + f_ms;
}

////////////////////////////////////////////////////////////////////////////////////
// d'Eon Lambertian Microsphere BRDF
////////////////////////////////////////////////////////////////////////////////////

// Copied from: https://www.shadertoy.com/view/ftlXWl
float phase(float u) {
    return (2.0*(sqrt(1.0 - u*u) - u*acos(u)))/(3.0*PI*PI);
}

vec3 deon_lambertian_sphere(vec3 kd, vec3 wi, vec3 wo)
{
    vec3 N = vec3(0.0, 0.0, 1.0);
    float ui = dot(wi, N);
    float uo = dot(wo, N);
    if (ui <= 0.0 || uo <= 0.0) return vec3(0.0);

    float ui2 = ui*ui;
    float uo2 = uo*uo;
    float S = sqrt((1.0-ui2)*(1.0-uo2));
    float cp = -((-dot(wi, wo) + ui*uo)/S);
    float phi = safeacos(cp);
    float iodot = dot(wi, wo);

    vec3 c = (1.0 - pow(1.0 - kd, vec3(2.73556))) / (1.0 - 0.184096*pow(1.0 - kd, vec3(2.48423)));

    // Single-Scattering component, corresponds to "f_1" in the paper.
    vec3 SS = c*(phase(-iodot) / (ui + uo));

    // These next two blocks are identical. The first block is a copy of the implementation from
    // https://github.com/eugenedeon/mitsuba/blob/master/src/bsdfs/lambert_sphere_fast.cpp
    // The second block is a literal coding of Equation 48 from the paper.
#if 1
    float p = ui * uo;
    return uo * max(
        vec3(0.0),
        0.995917*SS+(0.0684744*(((phi+sqrt(p))*(-0.249978+c)/(4.50996*((safeacos(S)/S)+0.113706)))+pow(max(1.94208*kd,0.0),vec3(1.85432))))
    );
#else
    vec3 fr = max(
        vec3(0.0),
        SS + 0.234459*pow(kd, vec3(1.85432)) \
           + (0.0151829*(c-0.24998)*(abs(phi)+sqrt(ui*uo))) / (0.113706 + (safeacos(S)/S))
    );
    return uo * fr;
#endif
}

////////////////////////////////////////////////////////////////////////////////////
// Chan Diffuse (Unreal)
////////////////////////////////////////////////////////////////////////////////////

vec3 chan_unreal_diffuse(in vec3 Albedo, float Roughness, in vec3 V, in vec3 L)
{
    // https://advances.realtimerendering.com/s2018/MaterialAdvancesInWWII-course_notes.pdf
    float NdotV = V.z;
    float NdotL = L.z;
    vec3 H = normalize(L + V);
    float NoV = clamp(NdotV, 0.0, 1.0);
    float NoL = clamp(NdotL, 0.0, 1.0);
    float VoH = clamp(dot(V, H), 0.0, 1.0);
    float NoH = clamp(H.z, 0.0, 1.0);
    float a2 = pow(Roughness, 4.0);
    float g = clamp((1.0 / 18.0) * log2( 2.0 / a2 - 1.0 ), 0.0, 1.0);
    float F0 = VoH + pow(1.0 - VoH, 5.0);
    float FdV = 1.0 - 0.75 * pow(1.0 - NoV, 5.0);
    float FdL = 1.0 - 0.75 * pow(1.0 - NoL, 5.0);
    float Fd = mix( F0, FdV * FdL, clamp(2.2 * g - 0.5, 0.0, 1.0) );
    float Fb = ( (34.5 * g - 59.0 ) * g + 24.5 ) * VoH * exp2( -max( 73.2 * g - 21.2, 8.9 ) * sqrt(NoH));
    return Albedo * ((NdotL / PI) * ( Fd + Fb ));

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// diffuse BRDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* A selection of possible diffuse models,
   based on https://www.shadertoy.com/view/X3BSDD
   by Chris Kulla
*/

vec3 diffuse_brdf_eval_implementations(in vec3 woutputL, in vec3 winputL)
{
    vec3 Albedo = base_weight * base_color;
    vec3 V = winputL;
    vec3 L = woutputL;
    float NdotL = max(FLT_EPSILON, abs(L.z));
    switch (diffuse_mode)
    {
        case 0: return Albedo / PI; // Lambert
        case 1: // ON Full (Mitsuba)
        case 2: // QON (Mitsuba)
        case 3: // ON Qualitative - Energy Conserving (EQON exact)
        case 4: // ON Qualitative - Energy Conserving (EQON approx)
        {
            float sigma = PI/2.0 * base_roughness;
            if      (diffuse_mode == 1) return ON_full(Albedo, sigma, V, L) / NdotL;
            else if (diffuse_mode == 2) return f_QON(Albedo, sigma, V, L);
            else if (diffuse_mode == 3) return f_EQON(Albedo, sigma, V, L, true);
            else                        return f_EQON(Albedo, sigma, V, L, false);
        }
        case 5: // FON
        case 6: // EFON exact
        case 7: // EFON approx
        case 8: // EFON exact (LTC sampling)
        case 9: // EFON approx (LTC sampling)
        {
            float sigma = base_roughness;
            if      (diffuse_mode == 5) return f_FON(Albedo, sigma, V, L);
            else if (diffuse_mode == 6) return f_EFON(Albedo, sigma, V, L, true);
            else if (diffuse_mode == 8) return f_EFON(Albedo, sigma, V, L, true);
            else                        return f_EFON(Albedo, sigma, V, L, false);
        }
        case 10: return fujii_materialx        (Albedo, base_roughness, V, L) / NdotL;
        case 11: return chan_unreal_diffuse    (Albedo, base_roughness, V, L) / NdotL;
        case 12: return deon_lambertian_sphere(Albedo,                 V, L) / NdotL;
    }
}

vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);

    switch (diffuse_mode)
    {
        case 8:
        case 9:
        {
            pdf_woutputL = pdf_EON(winputL, woutputL, base_roughness);
            break;
        };
        default:
            pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);
    }
    return diffuse_brdf_eval_implementations(winputL, woutputL);
}

vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    switch (diffuse_mode)
    {
        case 8:
        case 9:
        {
            vec4 woP = sample_EON(winputL, base_roughness, rndSeed);
            woutputL     = woP.xyz;
            pdf_woutputL = woP.w;
            break;
        };
        default:
            woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    }

    return diffuse_brdf_eval_implementations(winputL, woutputL);
}

vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    return base_weight * base_color;
}
