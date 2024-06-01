
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Fuzz"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

float square(float x)
{
    return x * x;
}

// Gaussian fit to directional albedo table.
float zeltner_sheen_dir_albedo(float x, float y)
{
    float s = y*(0.0206607 + 1.58491*y)/(0.0379424 + y*(1.32227 + y));
    float m = y*(-0.193854 + y*(-1.14885 + y*(1.7932 - 0.95943*y*y)))/(0.046391 + y);
    float o = y*(0.000654023 + (-0.0207818 + 0.119681*y)*y)/(1.26264 + y*(-1.92021 + y));
    return exp(-0.5*square((x - m)/s))/(s*sqrt(2.0*PI)) + o;
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

// V is assumed to be in local (+Z) space.
mat3 orthonormal_basis_ltc(vec3 V)
{
    float lenSqr = dot(V.xy, V.xy);
    vec3 X = lenSqr > 0.0 ? vec3(V.x, V.y, 0.0) * inversesqrt(lenSqr) : vec3(1, 0, 0);
    vec3 Y = vec3(-X.y, X.x, 0.0); // cross(N, X)
    return mat3(X, Y, vec3(0, 0, 1));
}

vec3 fuzz_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                        inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);

    float NdotV = min(winputL.z, 1.0);
    float roughness = clamp(fuzz_roughness, 0.01, 1.0); // Clamp to the range of the original impl.

    mat3 toLTC = transpose(orthonormal_basis_ltc(winputL));
    vec3 wo = toLTC * woutputL;

    float aInv = zeltner_sheen_ltc_aInv(NdotV, roughness);
    float bInv = zeltner_sheen_ltc_bInv(NdotV, roughness);

    vec3 woOrig = vec3(aInv*wo.x + bInv*wo.z, aInv * wo.y, wo.z);
    float lenSqr = dot(woOrig, woOrig);

    float det = aInv * aInv;
    float jacobian = det / square(lenSqr);
    pdf_woutputL = jacobian * max(woOrig.z, 0.0) * RECIPROCAL_PI;

    float albedo = zeltner_sheen_dir_albedo(NdotV, roughness);

    float NdotL = max(abs(woutputL.z), FLT_EPSILON);
    return fuzz_color * albedo * pdf_woutputL / NdotL;
}

vec3 fuzz_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                      out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);

    float NdotV = min(winputL.z, 1.0);
    float roughness = clamp(fuzz_roughness, 0.01, 1.0); // Clamp to the range of the original impl.

    float pdf_unused;
    vec3 woOrig = sampleHemisphereCosineWeighted(rndSeed, pdf_unused);

    float aInv = zeltner_sheen_ltc_aInv(NdotV, roughness);
    float bInv = zeltner_sheen_ltc_bInv(NdotV, roughness);

    vec3 wo = vec3(woOrig.x/aInv - woOrig.z*bInv/aInv, woOrig.y / aInv, woOrig.z);

    mat3 fromLTC = orthonormal_basis_ltc(winputL);
    woutputL = fromLTC * wo;

    float lenSqr = dot(woutputL, woutputL);
    woutputL *= inversesqrt(lenSqr);

    float det = aInv * aInv;
    float jacobian = det * square(lenSqr);
    pdf_woutputL = jacobian * max(woutputL.z, 0.0) * RECIPROCAL_PI;

    float albedo = zeltner_sheen_dir_albedo(NdotV, roughness);

    return fuzz_color * albedo * jacobian * RECIPROCAL_PI; // NdotL cancelled.
}

vec3 fuzz_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    return vec3(zeltner_sheen_dir_albedo(winputL.z, fuzz_roughness));
}
