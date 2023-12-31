
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Specular" dielectric microfacet BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void specular_ndf_roughnesses(out float alpha_x, out float alpha_y)
{
    float rsqr = sqr(specular_roughness);
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - specular_anisotropy)));
    alpha_y = (1.0 - specular_anisotropy) * alpha_x;
}

vec3 specular_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                            inout int rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector
    vec3 mR = normalize(woutputR + winputR);
    
    // Compute NDF, and "distribution of visible normals" DV
    float D = microfacetEval(mR, alpha_x, alpha_y);
    float DV = G1(winputR, mR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) * D / max(DENOM_TOLERANCE, winputR.z);

    // Thus compute PDF of woutputL sample
    float pdf_woutputL = DV / (4.0 * max(DENOM_TOLERANCE, dot(winputR, mR)));

    // Fresnel factor for the dielectric reflection
    vec3 F = specular_weight * specular_color * FresnelDielectricReflectance(abs(winputR.z), specular_ior);

    // Thus compute the corresponding contribution "weight" (i.e. BRDF / PDF)
    vec3 W = F * G2(winputR, woutputR, mR, alpha_x, alpha_y) / max(DENOM_TOLERANCE, G1(winputR, mR, alpha_x, alpha_y)); // weight from Heitz
    W /= max(DENOM_TOLERANCE, woutputR.z); // (since the weight from Heitz is defined to include this cosine factor also, but we want the BRDF only here)
    return W * pdf_woutputL;
}

vec3 specular_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL,
                          out vec3 woutputL, out float pdf_woutputL, inout int rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);

    // Construct basis such that x, y are aligned with the T, B in the rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);
    vec3 winputR = localToRotated(winputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Sample local microfacet normal mL, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR = sampleGGXVNDF(winputR, alpha_x, alpha_y, rndSeed);

    // Compute woutputR (and thus woutputL) by reflecting winputR about mR
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;
    if (woutputR.z < DENOM_TOLERANCE) return vec3(0.0);
    woutputL = rotatedToLocal(woutputR, rotation);

    // Compute NDF, and "distribution of visible normals" DV
    float D = microfacetEval(mR, alpha_x, alpha_y);
    float DV = G1(winputR, mR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) * D / max(DENOM_TOLERANCE, winputR.z);

    // Thus compute PDF of woutputL sample
    pdf_woutputL = DV / (4.0 * max(DENOM_TOLERANCE, dot(winputR, mR)));

    // Fresnel factor for the dielectric reflection
    vec3 F = specular_weight * specular_color * FresnelDielectricReflectance(abs(winputR.z), specular_ior);

    // Thus compute corresponding contribution "weight" (i.e. BRDF / PDF)
    vec3 W = F * G2(winputR, woutputR, mR, alpha_x, alpha_y) / max(DENOM_TOLERANCE, G1(winputR, mR, alpha_x, alpha_y)); // weight from Heitz
    W /= max(DENOM_TOLERANCE, woutputR.z); // (since the weight from Heitz is defined to include this cosine factor also, but we want the BRDF only here)
    return W * pdf_woutputL;
}

float specular_brdf_pdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return 1.0;

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the local micronormal from the reflection half-vector
    vec3 mR = normalize(winputR + woutputR);

    // Compute NDF, and "distribution of visible normals" DV
    float D = microfacetEval(mR, alpha_x, alpha_y);
    float DV = G1(winputR, mR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) * D / winputR.z;

    // Thus compute PDF of sample
    return DV / (4.0 * max(DENOM_TOLERANCE, dot(winputR, mR)));
}

vec3 specular_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL,
                          inout int rndSeed)
{
    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 4;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = specular_brdf_sample(pW, basis, winputL, woutputL, pdf_woutputL, rndSeed);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}