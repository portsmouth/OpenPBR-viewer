
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Metal" conductor microfacet BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vec3 FresnelSchlick(vec3 F0, float mu)
{
    return F0 + pow(1.0 - mu, 5.0)*(vec3(1.0) - F0);
}


vec3 FresnelF82Tint(float mu, in vec3 F0, in vec3 F82tint)
{
    const float mu_bar = 1.0/7.0;
    const float denom = mu_bar * pow(1.0 - mu_bar, 6.0);
    vec3 Fschlick_bar = FresnelSchlick(F0, mu_bar);
    vec3 Fschlick     = FresnelSchlick(F0, mu);
    return Fschlick - mu * pow(1.0 - mu, 6.0) * (vec3(1.0) - F82tint) * Fschlick_bar / denom;
}


vec3 metal_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                         inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE)
    {
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0);
    }

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    // (Note that the metal shares the same NDF as the dielectric/specular base)
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector
    vec3 mR = normalize(woutputR + winputR);

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the conductor reflection
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Thus evaluate BRDF
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}


vec3 metal_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout int rndSeed,
                       out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);

    // Compute the NDF roughnesses in the rotated frame
    // (Note that the metal shares the same NDF as the dielectric/specular base)
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Construct basis such that x, y are aligned with the T, B in the rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);
    vec3 winputR = localToRotated(winputL, rotation);

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);

    // Compute woutputR (and thus woutputL) by reflecting winputR about mR
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;
    if (woutputR.z < DENOM_TOLERANCE) return vec3(0.0);
    woutputL = rotatedToLocal(woutputR, rotation);

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the conductor reflection
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Thus evaluate BRDF
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}          


vec3 metal_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout int rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);

    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 4;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}




