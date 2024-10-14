
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Fuzz"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#ifdef FUZZ_ENABLED

// Gaussian fit to directional albedo table.
float zeltner_sheen_dir_albedo(float x, float y)
{
    float s = y*(0.0206607 + 1.58491*y)/(0.0379424 + y*(1.32227 + y));
    float m = y*(-0.193854 + y*(-1.14885 + y*(1.7932 - 0.95943*y*y)))/(0.046391 + y);
    float o = y*(0.000654023 + (-0.0207818 + 0.119681*y)*y)/(1.26264 + y*(-1.92021 + y));
    return exp(-0.5*sqr((x - m)/s))/(s*sqrt(2.0*PI)) + o;
}

// Rational fits to LTC matrix coefficients.
float zeltner_sheen_ltc_aInv(float x, float y)
{
    return (2.58126*x + 0.813703*y)*y/(1.0 + 0.310327*x*x + 2.60994*x*y);
}
float zeltner_sheen_ltc_bInv(float x, float y)
{
    return sqrt(1.0 - x)*(y - 1.0)*y*y*y/(0.0000254053 + 1.71228*x - 1.71506*x*y + 1.34174*y*y);
}

#endif // FUZZ_ENABLED

vec3 fuzz_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                        inout float pdf_woutputL)
{
#ifdef FUZZ_ENABLED
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);

    float NdotV = min(winputL.z, 1.0);
    float roughness = clamp(fuzz_roughness, 0.01, 1.0); // Clamp to the range of the original impl.
    mat3 toLTC = transpose(orthonormal_basis_ltc(winputL));
    vec3 w = toLTC * woutputL;

    // Transform w to original configuration (clamped cosine).
    //                 |aInv    0 bInv|
    // wo = M^-1 . w = |   0 aInv    0| . w
    //                 |   0    0    1|
    float aInv = zeltner_sheen_ltc_aInv(NdotV, roughness);
    float bInv = zeltner_sheen_ltc_bInv(NdotV, roughness);
    vec3 wo = vec3(aInv*w.x + bInv*w.z, aInv * w.y, w.z);
    float lenSqr = dot(wo, wo);

    // D(w) = Do(M^-1.w / ||M^-1.w||) . |M^-1| / ||M^-1.w||^3
    //      = Do(M^-1.w) . |M^-1| / ||M^-1.w||^4
    //      = Do(wo) . |M^-1| / dot(wo, wo)^2
    //      = Do(wo) . aInv^2 / dot(wo, wo)^2
    //      = Do(wo) . (aInv / dot(wo, wo))^2
    float jacobian = sqr(aInv / lenSqr);
    pdf_woutputL = max(wo.z, 0.0) * RECIPROCAL_PI * jacobian;
    float albedo = zeltner_sheen_dir_albedo(NdotV, roughness);
    float NdotL = max(abs(woutputL.z), FLT_EPSILON);
    return fuzz_color * albedo * pdf_woutputL / NdotL;
#else
    return vec3(0.0);
#endif // FUZZ_ENABLED
}

vec3 fuzz_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                      out vec3 woutputL, out float pdf_woutputL)
{
#ifdef FUZZ_ENABLED
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    float NdotV = min(winputL.z, 1.0);
    float roughness = clamp(fuzz_roughness, 0.01, 1.0); // Clamp to the range of the original impl.
    float pdf_unused;
    vec3 wo = sampleHemisphereCosineWeighted(rndSeed, pdf_unused);

    // Transform wo from original configuration (clamped cosine).
    //              |1/aInv      0 -bInv/aInv|
    // w = M . wo = |     0 1/aInv          0| . wo
    //              |     0      0          1|
    float aInv = zeltner_sheen_ltc_aInv(NdotV, roughness);
    float bInv = zeltner_sheen_ltc_bInv(NdotV, roughness);
    vec3 w = vec3(wo.x/aInv - wo.z*bInv/aInv, wo.y / aInv, wo.z);
    float lenSqr = dot(w, w);
    w *= inversesqrt(lenSqr);

    // D(w) = Do(wo) . ||M.wo||^3 / |M|
    //      = Do(wo / ||M.wo||) . ||M.wo||^4 / |M|
    //      = Do(w) . ||M.wo||^4 / |M| (possible because M doesn't change z component)
    //      = Do(w) . dot(w, w)^2 * aInv^2
    //      = Do(w) . (aInv * dot(w, w))^2
    float jacobian = sqr(aInv * lenSqr);
    pdf_woutputL = max(w.z, 0.0) * RECIPROCAL_PI * jacobian;
    mat3 fromLTC = orthonormal_basis_ltc(winputL);
    woutputL = fromLTC * w;
    float albedo = zeltner_sheen_dir_albedo(NdotV, roughness);
    return fuzz_color * albedo * RECIPROCAL_PI * jacobian; // NdotL cancelled.
#else
    return vec3(0.0);
#endif // FUZZ_ENABLED
}

vec3 fuzz_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
#ifdef FUZZ_ENABLED
    return vec3(zeltner_sheen_dir_albedo(winputL.z, fuzz_roughness));
#else
    return vec3(0.0);
#endif // FUZZ_ENABLED
}
