// Thin-walled transmission lobe: no refraction, just straight-through transmission with absorption
vec3 thin_walled_transmission_evaluate(in vec3 winputL, in vec3 woutputL, inout float pdf_woutputL)
{
    // Only allow transmission (opposite hemispheres)
    if (winputL.z * woutputL.z > 0.0) {
        pdf_woutputL = 0.0;
        return vec3(0.0);
    }
    // Transmission is straight through, modulated by transmission_color
    pdf_woutputL = 1.0; // Dirac delta in direction
    return transmission_color;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Specular" dielectric microfacet BTDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                            inout float pdf_woutputL)
{
    if (geometry_thin_walled) {
        return thin_walled_transmission_evaluate(winputL, woutputL, pdf_woutputL);
    }
#ifdef TRANSMISSION_ENABLED
    // ...existing code for thick-walled case...
    bool reflected = woutputL.z * winputL.z > 0.0;
    if (reflected)
    {
        pdf_woutputL = 1.0;
        return vec3(0.0);
    }
    // ...existing code...
#endif // TRANSMISSION_ENABLED
}

#ifdef TRANSMISSION_ENABLED

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

#endif // TRANSMISSION_ENABLED

vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                          out vec3 woutputL, out float pdf_woutputL)
{
    if (geometry_thin_walled)
    {
        // Thin-walled mode: straight-through transmission (no refraction)
        woutputL = -winputL;
        pdf_woutputL = 1.0; // delta function
        return transmission_color;
    }


#ifdef TRANSMISSION_ENABLED
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:
    vec3 beamOutgoingL = winputL;
    bool external_transmission = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)
    float eta_ie = eta_s(); // n_interior / n_exterior
    float eta_ti_photon = external_transmission ? 1.0/eta_ie : eta_ie;
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)
    {
        // degenerate case of index-matched interface, BTDF is a delta-function
        woutputL = -winputL;
        pdf_woutputL = 1.0 / PDF_EPSILON;
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));
    }


    // Compute the NDF roughnesses
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // NDF sampling roughness (may differ from core when haze is active)
    float samp_ax = alpha_x, samp_ay = alpha_y;
#ifdef HAZE_ENABLED
    float alpha_hx = alpha_x, alpha_hy = alpha_y;
    if (specular_haze > 0.0)
    {
        specular_haze_ndf_roughnesses(alpha_hx, alpha_hy);
        if (rand(rndSeed) < specular_haze)
        {
            samp_ax = alpha_hx;
            samp_ay = alpha_hy;
        }
    }
#endif

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR;
    if (winputL.z > 0.0)
        mR = ggx_ndf_sample(winputL, samp_ax, samp_ay, rndSeed);
    else
    {
        vec3 winputL_reflected = winputL;
        winputL_reflected.z *= -1.0;
        mR = ggx_ndf_sample(winputL_reflected, samp_ax, samp_ay, rndSeed);
        mR.z *= -1.0;
    }

    // Compute the direction of the ray refracted through the microfacet, woutputL
    vec3 beamOutgoingR = winputL;
    vec3 beamIncidentR; // the incident photon direction, to be determined (where woutputL = -beamIncidentR)
    if (!refraction_given_transmitted_beam(mR, eta_ti_photon, beamOutgoingR, beamIncidentR))
    {
        // The case of a TIR configuration, in which case no transmission occurs
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0);
    }
    woutputL = -safe_normalize(beamIncidentR); // refracted ray direction

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputL, alpha_x, alpha_y) * abs(dot(winputL, mR)) / max(DENOM_TOLERANCE, abs(winputL.z));

    // Compute Jacobian of the half-direction mapping
    float im = dot(-beamIncidentR, mR);
    float dwh_dwo;
    {
        float om = dot(beamOutgoingR, mR);
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);
    }

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputL, woutputL, alpha_x, alpha_y);
    float DG2 = D * G2;

    // PR #254: blend core and haze lobes
#ifdef HAZE_ENABLED
    if (specular_haze > 0.0)
    {
        float D_h = ggx_ndf_eval(mR, alpha_hx, alpha_hy);
        float DV_h = D_h * ggx_G1(winputL, alpha_hx, alpha_hy) * abs(dot(winputL, mR)) / max(DENOM_TOLERANCE, abs(winputL.z));
        DV = mix(DV, DV_h, specular_haze);
        float G2_h = ggx_G2(winputL, woutputL, alpha_hx, alpha_hy);
        DG2 = mix(DG2, D_h * G2_h, specular_haze);
    }
#endif

    // Thus compute PDF of woutputL sample
    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)
    float eta_ti_refl = 1.0 / eta_ti_photon;
    float T = clamp(1.0 - FresnelDielectricReflectanceModulated(abs(dot(winputL, mR)), eta_ti_refl), 0.0, 1.0);

    // Thus evaluate BTDF.
    float f = T * abs(dot(winputL, mR)) * dwh_dwo * DG2 / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);

    // Apply non-physical tint in zero transmission_depth case
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);
    return f * tint;
#else
    return vec3(0.0);
#endif // TRANSMISSION_ENABLED
}


vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
#ifdef TRANSMISSION_ENABLED
    // Estimate of the BTDF albedo, used to compute the discrete probability of selecting this lobe
    vec3 beamOutgoingL = winputL;
    bool external_transmission = (beamOutgoingL.z > 0.0);
    float eta_ie = eta_s(); // n_interior / n_exterior
    float eta_ti_photon = external_transmission ? 1.0/eta_ie : eta_ie;
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)
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
#else
    return vec3(0.0);
#endif // TRANSMISSION_ENABLED
}
