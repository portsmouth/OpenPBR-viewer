
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Specular" dielectric microfacet BTDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                            inout int rndSeed)
{
    if (winputL.z == 0.0 || woutputL.z == 0.0)
        return vec3(0.0);

    bool reflected = woutputL.z * winputL.z > 0.0;
    if (reflected)
        return vec3(0.0);

    // Apply non-physical tint in zero transmission_depth case
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // We assume here that the local frame is setup so that the z direction points from the dielectric interior to the exterior:
    vec3 beamIncidentR = -woutputR;
    bool beam_entering = (beamIncidentR.z < 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    vec3 beamOutgoingR = winputR;
    float n_exterior = 1.0;
    float n_interior = specular_ior;
    float eta_ti = beam_entering ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti - 1.0) < 1.0e-4)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        return tint / (PDF_EPSILON * abs(woutputL.z));
    }

    // Compute the micronormal mR in the local (rotated) frame, that refracts -woutputR to winputR
    vec3 mR = beamIncidentR - eta_ti*beamOutgoingR;
    if (dot(mR, mR) == 0.0)
        return vec3(0.0);
    mR = safe_normalize(mR);
    if (mR.z <= 0.0) mR *= -1.0; // orient the micronormal into the positive hemisphere

   // Discard backfacing microfacets
    if (dot(mR, winputR) * winputR.z < 0.0 || dot(mR, woutputR) * woutputR.z < 0.0)
        return vec3(0.0);

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti) * abs(om) / max(sqr(im + eta_ti*om), DENOM_TOLERANCE);
    }

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute NDF
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);

    // Compute masking-shadowing term G2
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Thus evaluate BRDF.
    // Note that the (transmission) Fresnel factor is omitted, as it is accounted for (approximately)
    // according to the mixture model formulas described in the OpenPBR spec.
    float f = abs(im) * dwh_dwo * G2 * D / max(abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
    return f * tint;
}

// Given the direction (wt) of a light beam transmitted through a plane dielectric interface
// with the given normal (n) in any orientation, and the ratio eta_ti = nt/ni of the transmitted IOR (nt) and incident IOR (ni),
// compute the direction of the incident light beam (wi). Returns false if no such beam exists, due to total internal reflection.
bool refraction_given_transmitted_direction(in vec3 n, in float eta_ti, in vec3 wt, inout vec3 wi)
{
    float wtn = dot(wt, n);
    float disciminant = 1.0 - sqr(eta_ti)*(1.0 - sqr(wtn));
    if (disciminant < 0.0)
        return false;
    wi = eta_ti*wt - n*sign(wtn)*(eta_ti*abs(wtn) - sqrt(disciminant));
    return true;
}

vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL,
                          out vec3 woutputL, out float pdf_woutputL, inout int rndSeed)
{
    // Construct basis such that x, y are aligned with the T, B in the rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);
    vec3 winputR = localToRotated(winputL, rotation);

    // Apply non-physical tint in zero transmission_depth case
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);

    // We assume here that the local frame is setup so that the z direction points from the dielectric interior to the exterior:
    vec3 beamOutgoingR = winputR;
    bool beam_entering = (beamOutgoingR.z < 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    float n_exterior = 1.0;
    float n_interior = specular_ior;
    float eta_ti = beam_entering ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti - 1.0) < 1.0e-4)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        woutputL = -winputL;
        pdf_woutputL = 1.0 / PDF_EPSILON;
        return tint / (PDF_EPSILON * abs(woutputL.z));
    }

    // Compute the direction of the refracted ray, woutputL
    vec3 beamIncidentR; // the incident photon direction, to be determined (where woutputR = -beamIncidentR)
    if (!refraction_given_transmitted_direction(mR, eta_ti, beamOutgoingR, beamIncidentR))
    {
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0); // (no transmission, in a TIR configuration)
    }

    vec3 woutputR = -safe_normalize(beamIncidentR);
    woutputL = rotatedToLocal(woutputR, rotation); // refracted ray direction

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti) * abs(om) / max(sqr(im + eta_ti*om), DENOM_TOLERANCE);
    }

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float G1 = ggx_G1(winputR, alpha_x, alpha_y);
    float DV = D * G1 * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));

    // Thus compute PDF of woutputL sample
    pdf_woutputL = DV * dwh_dwo;

    // Compute masking-shadowing term G2
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);

    // Thus evaluate BRDF.
    // Note that the (transmission) Fresnel factor is omitted, as it is accounted for (approximately)
    // according to the mixture model formulas described in the OpenPBR spec.
    float f = abs(im) * dwh_dwo * G2 * D / max(abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
    return f * tint;

}

float specular_btdf_pdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    if (winputL.z == 0.0 || woutputL.z == 0.0)
        return 0.0;

    bool reflected = woutputL.z * winputL.z > 0.0;
    if (reflected)
        return PDF_EPSILON;

    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);
    vec3 winputR  = localToRotated(winputL,  rotation);
    vec3 woutputR = localToRotated(woutputL, rotation);

    // Compute IOR ratio at interface:
    //  eta_ti = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    vec3 beamIncidentR = -woutputR;
    vec3 beamOutgoingR = winputR;
    bool beam_entering = (beamIncidentR.z < 0.0);
    float n_exterior = 1.0;
    float n_interior = specular_ior;
    float eta_ti = beam_entering ? n_interior/n_exterior : n_exterior/n_interior;
    if (abs(eta_ti - 1.0) < 1.0e-4)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        return 1.0/PDF_EPSILON;
    }

    // Compute the micronormal mR in the local (rotated) frame, that refracts -woutputR to winputR
    vec3 mR = beamIncidentR - eta_ti*beamOutgoingR;
    if (dot(mR, mR) == 0.0)
        return 0.0;
    mR = safe_normalize(mR);
    if (mR.z <= 0.0) mR *= -1.0; // orient the half-vector in the positive hemisphere

   // Discard backfacing microfacets
    if (dot(mR, winputR) * winputR.z < 0.0 || dot(mR, woutputR) * woutputR.z < 0.0)
        return 0.0;

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti) * abs(om) / max(sqr(im + eta_ti*om), DENOM_TOLERANCE);
    }

    // Compute the NDF roughnesses in the rotated frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float G1 = ggx_G1(winputR, alpha_x, alpha_y);
    float DV = D * G1 * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));

    // Thus compute PDF of woutputL sample
    float pdf_woutputL = DV * dwh_dwo;
    return pdf_woutputL;
}

vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL,
                          inout int rndSeed)
{
    float n_exterior = 1.0;
    float n_interior = specular_ior;
    float eta_ie = n_interior/n_exterior;
    if (abs(eta_ie - 1.0) < 1.0e-4)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        return vec3(1.0);
    }

    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 4;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = specular_btdf_sample(pW, basis, winputL, woutputL, pdf_woutputL, rndSeed);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}