
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
        tanBeta = sinThetaI / cosThetaI;
    }
    else
    {
        sinAlpha = sinThetaI;
        sinBeta = sinThetaO;
        tanBeta = sinThetaO / cosThetaO;
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

vec3 ON_qualitative(in vec3 Albedo, float sigma,
                    in vec3 V, in vec3 L)
{
    float NdotV = V.z;
    float NdotL = L.z;
    float s = dot(L, V) - NdotV * NdotL;
    float stinv = (s > 0.0f) ? s / max(NdotL, NdotV) : 0.0;
    float sigma2 = sqr(sigma);
    float A = 1.0f - 0.5f * (sigma2 / (sigma2 + 0.33f));
    float B = 0.45f * sigma2 / (sigma2 + 0.09f);
    return Albedo * NdotL / PI * (A + B * stinv);
}


////////////////////////////////////////////////////////////////////////////////////
// Fujii models
////////////////////////////////////////////////////////////////////////////////////

vec3 fujii_brdf(in vec3 Albedo, float sigma, float stinv)
{
    // Recommended A,B are different from Oren-Nayar's
    float A = 1.0 / (1.0 + (0.5 - 2.0/(3.0*PI)) * sigma);
    float B = sigma * A;
    return Albedo / PI * max(A + B * stinv, 0.0);
}

vec3 fujii_qualitative(in vec3 Albedo, float roughness, in vec3 V, in vec3 L)
{
    // No more dark ring, but loses a bit of energy as roughness->1.0
    float NdotV = V.z;
    float NdotL = L.z;
    float s = dot(L, V) - NdotV * NdotL;
    float stinv = s > 0.0 ? s / max(NdotV, NdotL) : s;
    float sigma = roughness;
    return NdotL * fujii_brdf(Albedo, sigma, stinv);
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

float QON_albedo_fast_approx(float mu, float sigma)
{
    #define c0_QON ( 0.509943)
    #define c1_QON (-0.468933)
    #define c2_QON (-0.221914)
    #define c3_QON (-0.23749 )
    #define Gcoeffs_QON mat2(c0_QON, c2_QON, c1_QON, c3_QON)
    #define GoverPI_QON dot((Gcoeffs_QON*vec2(1,mu))*vec2(1,mu*mu), vec2(1,1))
    float sigma2 = sqr(sigma);
    float A = 1.0f - 0.5f  * sigma2/(sigma2 + 0.33f);
    float B =        0.45f * sigma2/(sigma2 + 0.09f);
    return A + B*GoverPI_QON;
}

#define constant1_FON (0.5 - 2.0/(3.0*PI))
#define constant2_FON (2.0/3.0 - 28.0/(15.0*PI))

// FON directional albedo (analytic)
float E_FON_analyt(float mu, float sigma)
{
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))
    float AF = 1.0 / (1.0 + constant1_FON*sigma); // Fujii model A coefficient
    float BF = sigma * AF;                        // Fujii model B coefficient
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
vec3 E_EON(in vec3 rho, float sigma, in vec3 wi, bool exact)
{
    float muI = wi.z;                                    // input angle cos
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // Fujii model A coefficient
    float EF = exact ? E_FON_analyt(muI, sigma) :        // EFi at rho=1 (analytic)
                       E_FON_approx(muI, sigma);         // EFi at rho=1 (approx)
    float avgEF = AF * (1.0 + constant2_FON*sigma);      // average albedo
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));
    return rho*EF + rho_ms*(1.0 - EF);
}

// EON BRDF
vec3 f_EON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo, bool exact)
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
   copied from https://www.shadertoy.com/view/X3BSDD
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
        case 1: // ON Qualitative (Mitsuba)
        case 2: // ON Full (Mitsuba)
        {
            float sigma = PI/2.0 * base_roughness;
            if (diffuse_mode == 1) return ON_qualitative(Albedo, sigma, V, L) / NdotL;
            else                   return ON_full(       Albedo, sigma, V, L) / NdotL;
        }
        case 3: return deon_lambertian_sphere (Albedo,                 V, L) / NdotL;
        case 4: return fujii_qualitative      (Albedo, base_roughness, V, L) / NdotL;
        case 5: return fujii_materialx        (Albedo, base_roughness, V, L) / NdotL;
        case 6: return chan_unreal_diffuse    (Albedo, base_roughness, V, L) / NdotL;
        case 7: return f_EON                  (Albedo, base_roughness, V, L, true);
        case 8: return f_EON                  (Albedo, base_roughness, V, L, false);
    }
}

vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);
    pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);
    return diffuse_brdf_eval_implementations(winputL, woutputL);
}


vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    return diffuse_brdf_eval_implementations(winputL, woutputL);
}


vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    return base_weight * base_color;
}
