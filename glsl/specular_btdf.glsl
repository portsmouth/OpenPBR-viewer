
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Specular" dielectric microfacet BTDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                            inout float pdf_woutputL)
{
    bool reflected = woutputL.z * winputL.z > 0.0;
    if (reflected)
    {
        pdf_woutputL = 1.0;
        return vec3(0.0);
    }

    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:
    vec3 beamOutgoingL = winputL;
    bool external_transmission = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    float n_exterior = 1.0;
    float n_interior = specular_ior_dispersive();
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
        pdf_woutputL = 1.0/PDF_EPSILON;
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));
    }

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute the micronormal mR in the local (rotated) frame, such that -woutputR is refracted to winputR
    vec3 beamIncidentR = -woutputR;
    vec3 beamOutgoingR = winputR;
    vec3 mR = beamIncidentR - eta_ti_photon*beamOutgoingR;
    if (dot(mR, mR) == 0.0)
        return vec3(0.0);
    mR = safe_normalize(mR);
    if (mR.z <= 0.0) mR *= -1.0; // orient the micronormal into the positive hemisphere

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);
    }

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);
    float roughness = specular_roughness;

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));

    // Thus compute PDF of woutputL sample
    pdf_woutputL = DV * dwh_dwo;

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)
    float eta_ti_refl = 1.0 / eta_ti_photon;
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));

    // Thus evaluate BTDF.
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);

    // Apply non-physical tint in zero transmission_depth case
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
    return f * tint;
}


// Given the direction (wt) of a light beam transmitted through a plane dielectric interface
// with the given normal (n) in any orientation, and the ratio eta_ti_photon = nt/ni of the transmitted IOR (nt) and incident IOR (ni),
// compute the direction of the incident light beam (wi). Returns false if no such beam exists, due to total internal reflection.
bool refraction_given_transmitted_beam(in vec3 n, in float eta_ti_photon, in vec3 wt, inout vec3 wi)
{
    float wtn = dot(wt, n);
    float disciminant = 1.0 - sqr(eta_ti_photon)*(1.0 - sqr(wtn));
    if (disciminant < 0.0) return false;
    wi = eta_ti_photon*wt - n*sign(wtn)*(eta_ti_photon*abs(wtn) - sqrt(disciminant));
    return true;
}


vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                          out vec3 woutputL, out float pdf_woutputL)
{
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:
    vec3 beamOutgoingL = winputL;
    bool external_transmission = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    float n_exterior = 1.0;
    float n_interior = specular_ior_dispersive();
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        woutputL = -winputL;
        pdf_woutputL = 1.0 / PDF_EPSILON;
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));
    }

    // Construct basis such that x, y are aligned with the T, B in the rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);
    vec3 winputR = localToRotated(winputL, rotation);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR;
    if (winputR.z > 0.0)
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);
    else
    {
        vec3 winputR_reflected = winputR;
        winputR_reflected.z *= -1.0;
        mR = ggx_ndf_sample(winputR_reflected, alpha_x, alpha_y, rndSeed);
        mR.z *= -1.0;
    }

    // Compute the direction of the ray refracted through the microfacet, woutputL
    vec3 beamOutgoingR = winputR;
    vec3 beamIncidentR; // the incident photon direction, to be determined (where woutputR = -beamIncidentR)
    if (!refraction_given_transmitted_beam(mR, eta_ti_photon, beamOutgoingR, beamIncidentR))
    {
        // The case of a TIR configuration, in which case no transmission occurs
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0);
    }
    vec3 woutputR = -safe_normalize(beamIncidentR);
    woutputL = rotatedToLocal(woutputR, rotation); // refracted ray direction

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);
    }

    // Thus compute PDF of woutputL sample
    pdf_woutputL = DV * dwh_dwo;

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)
    float eta_ti_refl = 1.0 / eta_ti_photon;
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));

    // Thus evaluate BTDF.
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);

    // Apply non-physical tint in zero transmission_depth case
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
    return f * tint;
}


vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BTDF albedo, used to compute the discrete probability of selecting this lobe
    float n_exterior = 1.0;
    float n_interior = specular_ior_dispersive();
    float eta = n_interior/n_exterior;
    if (abs(eta - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
        return tint;
    }

    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 1;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}
