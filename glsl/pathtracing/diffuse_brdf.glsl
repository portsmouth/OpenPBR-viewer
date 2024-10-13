
////////////////////////////////////////////////////////////////////////////////////
// EON model
////////////////////////////////////////////////////////////////////////////////////

#define constant1_FON (0.5 - 2.0/(3.0*PI))
#define constant2_FON (2.0/3.0 - 28.0/(15.0*PI))

void ltc_coeffs(in vec3 wo, float r, inout float a, inout float b)
{
    float sinO = sqrt(max(0.0, 1.0 - wo.z*wo.z));  // for LTC elements
    a = r*pow(sinO, 50.0)*0.5 + 1.0;               // LTC M element a
    b = r*pow(sinO, 4.0)*sqrt(max(0.0, wo.z));     // LTC M element b
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
    return pdf_h * J;                               // wi sample PDF
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
    float pdf_i = pdf_h * J;                     // wi sample PDF
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// diffuse BRDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);
    pdf_woutputL = pdf_EON(winputL, woutputL, base_roughness);
    return f_EFON(base_weight * base_color, base_roughness, winputL, woutputL, false);
}

vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    vec4 woP = sample_EON(winputL, base_roughness, rndSeed);
    woutputL     = woP.xyz;
    pdf_woutputL = woP.w;
    return f_EFON(base_weight * base_color, base_roughness, winputL, woutputL, false);
}

vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    return base_weight * base_color;
}
