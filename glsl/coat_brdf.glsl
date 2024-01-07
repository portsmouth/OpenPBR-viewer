
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Coat" dielectric microfacet BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


void coat_ndf_roughnesses(out float alpha_x, out float alpha_y)
{
    float rsqr = sqr(coat_roughness);
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - coat_anisotropy)));
    alpha_y = (1.0 - coat_anisotropy) * alpha_x;
    const float min_alpha = 1.0e-4;
    alpha_x = max(min_alpha, alpha_x);
    alpha_y = max(min_alpha, alpha_y);
}

vec3 coat_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                        inout int rndSeed)
{
    bool transmitted = woutputL.z * winputL.z < 0.0;
    if (transmitted)
        return vec3(0.0);

    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the reflection is internal or external to the dielectric:
    vec3 beamOutgoingL = winputL;
    bool external_reflection = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)
    float n_exterior = 1.0;
    float n_interior = coat_ior;
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BRDF goes to zero
        return vec3(0.0);
    }

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    coat_ndf_roughnesses(alpha_x, alpha_y);

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector
    vec3 mR = normalize(woutputR + winputR);
    
    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);

    // Compute Fresnel factor for the dielectric reflection
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);

    // Thus evaluate BRDF
    return vec3(F) * D * ggx_G2(winputR, woutputR, alpha_x, alpha_y) / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}

vec3 coat_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL,
                      out vec3 woutputL, out float pdf_woutputL, inout int rndSeed)
{
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the reflection is internal or external to the dielectric:
    vec3 beamOutgoingL = winputL;
    bool external_reflection = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)
    float n_exterior = 1.0;
    float n_interior = coat_ior;
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)
    {
        // degenerate limit case of index-matched interface, BRDF goes to zero
        pdf_woutputL = 1.0;
        return vec3(0.0);
    }

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    coat_ndf_roughnesses(alpha_x, alpha_y);

    // Construct basis such that x, y are aligned with the T, B in the rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);
    vec3 winputR = localToRotated(winputL, rotation);

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);

    // Compute woutputR (and thus woutputL) by reflecting winputR about mR
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;
    if (woutputR.z * woutputR.z < 0.0)
        woutputR *= -1.0; // flip if reflected ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)

    // Rotate woutputR back to local space
    woutputL = rotatedToLocal(woutputR, rotation);

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) * D / max(DENOM_TOLERANCE, winputR.z);

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the dielectric reflection
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);

    // Thus evaluate BRDF
    vec3 f = vec3(F) * D * ggx_G2(winputR, woutputR, alpha_x, alpha_y) / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
    return f;
}

float coat_brdf_pdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    bool transmitted = woutputL.z * winputL.z < 0.0;
    if (transmitted)
        return PDF_EPSILON;

    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior:
    vec3 beamOutgoingL = winputL;
    bool external_reflection = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)
    float n_exterior = 1.0;
    float n_interior = coat_ior;
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)
    {
        // degenerate limit case of index-matched interface, BRDF goes to zero
        return 1.0;
    }

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * coat_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    coat_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the local micronormal from the reflection half-vector
    vec3 mR = normalize(winputR + woutputR);

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) * D / winputR.z;

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
    float pdf_woutputL = DV * dwh_dwo;
    return pdf_woutputL;
}

vec3 coat_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL,
                          inout int rndSeed)
{
    float n_exterior = 1.0;
    float n_interior = coat_ior;
    float eta = n_interior/n_exterior;
    if (abs(eta - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BRDF goes to zero
        return vec3(0.0);
    }

    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 4;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = coat_brdf_sample(pW, basis, winputL, woutputL, pdf_woutputL, rndSeed);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}
