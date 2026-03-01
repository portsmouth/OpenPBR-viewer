
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Specular" dielectric microfacet BRDF
//    - NB, the specular_color tint is applied in the uber-shader, since the albedo should not involve the tint
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void specular_ndf_roughnesses(out float alpha_x, out float alpha_y)
{
    float rsqr = sqr(specular_roughness);
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - specular_anisotropy)));
    alpha_y = (1.0 - specular_anisotropy) * alpha_x;
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)
    const float min_alpha = 1.0e-4;
    alpha_x = max(min_alpha, alpha_x);
    alpha_y = max(min_alpha, alpha_y);
}

// PR #254 (https://github.com/AcademySoftwareFoundation/OpenPBR/pull/254): specular haze (dual-lobe NDF)
#ifdef HAZE_ENABLED
void specular_haze_ndf_roughnesses(out float alpha_x, out float alpha_y)
{
    float r_haze = mix(specular_roughness, 1.0, specular_haze_spread);
    float rsqr = sqr(r_haze);
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - specular_anisotropy)));
    alpha_y = (1.0 - specular_anisotropy) * alpha_x;
    const float min_alpha = 1.0e-4;
    alpha_x = max(min_alpha, alpha_x);
    alpha_y = max(min_alpha, alpha_y);
}
#endif

// Ratio of dielectric IOR to external IOR (approximate as a stochastic blend if coat partially present)
float eta_s()
{
#ifdef TRANSMISSION_ENABLED
    float n_s = specular_ior_dispersive();
#else
    float n_s = specular_ior;
#endif
    // Flip spec/coat IOR ratio if needed to keep it > 1, to correct for lack of refraction in coat]
    float eta_sc = n_s/coat_ior;
    if (eta_sc < 1.0)
        eta_sc = 1.0 / eta_sc;
    const float ambient_ior = 1.0;
    return mix(specular_ior/ambient_ior, eta_sc, coat_weight);
}

vec3 specular_brdf_evaluate_impl(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                                 inout float pdf_woutputL)
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
    float eta_ie = eta_s(); // n_interior / n_exterior
    float eta_ti_refl = external_reflection ? eta_ie : 1.0/eta_ie;
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero
        return vec3(0.0);

   // Compute the NDF roughnesses
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the micronormal mR in the local frame, from the reflection half-vector
    vec3 mR = normalize(woutputL + winputL);

    // Discard backfacing microfacets
    if (dot(mR, winputL) * winputL.z < 0.0 || dot(mR, woutputL) * woutputL.z < 0.0)
        return vec3(0.0);

    // Compute NDF
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputL, alpha_x, alpha_y) * max(0.0, dot(winputL, mR)) / max(DENOM_TOLERANCE, winputL.z);

    // Jacobian of the half-direction mapping
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputL, mR)), DENOM_TOLERANCE);

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputL, woutputL, alpha_x, alpha_y);
    float DG2 = D * G2;

    // PR #254: blend core and haze lobes
#ifdef HAZE_ENABLED
    if (specular_haze > 0.0)
    {
        float alpha_hx, alpha_hy;
        specular_haze_ndf_roughnesses(alpha_hx, alpha_hy);
        float D_h = ggx_ndf_eval(mR, alpha_hx, alpha_hy);
        float DV_h = D_h * ggx_G1(winputL, alpha_hx, alpha_hy) * max(0.0, dot(winputL, mR)) / max(DENOM_TOLERANCE, winputL.z);
        DV = mix(DV, DV_h, specular_haze);
        float G2_h = ggx_G2(winputL, woutputL, alpha_hx, alpha_hy);
        DG2 = mix(DG2, D_h * G2_h, specular_haze);
    }
#endif

    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the dielectric reflection
    // PR #247 (https://github.com/AcademySoftwareFoundation/OpenPBR/pull/247): decoupled IOR via FresnelDielectricReflectanceModulated
    float F;
#ifdef THIN_FILM_ENABLED
    if (thin_film_weight > 0.0)
    {
        float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);
        float F_film = FresnelThinFilmOverDielectric(abs(dot(winputL, mR)), eta_fe).x;
        float F_nofilm = FresnelDielectricReflectanceModulated(abs(dot(winputL, mR)), eta_ti_refl);
        F = mix(F_nofilm, F_film, thin_film_weight);
    }
    else
#endif // THIN_FILM_ENABLED
        F = FresnelDielectricReflectanceModulated(abs(dot(winputL, mR)), eta_ti_refl);

    // Thus evaluate BRDF.
    float f = F * DG2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);
    return vec3(f);
}


vec3 specular_brdf_sample_impl(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                               out vec3 woutputL, out float pdf_woutputL)
{
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.
    // Thus we can determine if the reflection is internal or external to the dielectric:
    vec3 beamOutgoingL = winputL;
    bool external_reflection = (beamOutgoingL.z > 0.0);

    // Compute IOR ratio at interface:
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)
    float eta_ie = eta_s(); // n_interior / n_exterior
    float eta_ti_refl = external_reflection ? eta_ie : 1.0/eta_ie;
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero
        return vec3(0.0);

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
        // GGX sampling in negative hemisphere
        vec3 winputL_reflected = winputL;
        winputL_reflected.z *= -1.0;
        mR = ggx_ndf_sample(winputL_reflected, samp_ax, samp_ay, rndSeed);
        mR.z *= -1.0;
    }

    // Compute woutputL by reflecting winputL about mR
    woutputL = -winputL + 2.0*dot(winputL, mR)*mR;
    if (winputL.z * woutputL.z < 0.0)
    {
        pdf_woutputL = 1.0;
        return vec3(0.0);
    }

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputL, alpha_x, alpha_y) * abs(dot(winputL, mR)) / max(DENOM_TOLERANCE, abs(winputL.z));

    // Jacobian of the half-direction mapping
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputL, mR)), DENOM_TOLERANCE);

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

    pdf_woutputL = DV * dwh_dwo;

    // Compute Fresnel factor for the dielectric reflection
    float F;
#ifdef THIN_FILM_ENABLED
    if (thin_film_weight > 0.0)
    {
        float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);
        float F_film = FresnelThinFilmOverDielectric(abs(dot(winputL, mR)), eta_fe).x;
        float F_nofilm = FresnelDielectricReflectanceModulated(abs(dot(winputL, mR)), eta_ti_refl);
        F = mix(F_nofilm, F_film, thin_film_weight);
    }
    else
#endif // THIN_FILM_ENABLED
        F = FresnelDielectricReflectanceModulated(abs(dot(winputL, mR)), eta_ti_refl);

    // Thus evaluate BRDF.
    float f = F * DG2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);
    return vec3(f);
}


// PR #255 (https://github.com/AcademySoftwareFoundation/OpenPBR/pull/255): specular retroreflectivity
vec3 specular_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                            inout float pdf_woutputL)
{
    vec3 f = specular_brdf_evaluate_impl(pW, basis, winputL, woutputL, pdf_woutputL);
#ifdef RETRO_ENABLED
    if (specular_retroreflectivity > 0.0)
    {
        vec3 wi_retro = vec3(-winputL.x, -winputL.y, winputL.z);
        float pdf_retro;
        vec3 f_retro = specular_brdf_evaluate_impl(pW, basis, wi_retro, woutputL, pdf_retro);
        f = mix(f, f_retro, specular_retroreflectivity);
        pdf_woutputL = mix(pdf_woutputL, pdf_retro, specular_retroreflectivity);
    }
#endif
    return f;
}

vec3 specular_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                          out vec3 woutputL, out float pdf_woutputL)
{
#ifdef RETRO_ENABLED
    if (specular_retroreflectivity > 0.0)
    {
        vec3 wi_retro = vec3(-winputL.x, -winputL.y, winputL.z);
        if (rand(rndSeed) < specular_retroreflectivity)
        {
            // Sample the retro lobe, evaluate the standard lobe
            vec3 f_retro = specular_brdf_sample_impl(pW, basis, wi_retro, rndSeed, woutputL, pdf_woutputL);
            float pdf_std;
            vec3 f_std = specular_brdf_evaluate_impl(pW, basis, winputL, woutputL, pdf_std);
            pdf_woutputL = mix(pdf_std, pdf_woutputL, specular_retroreflectivity);
            return mix(f_std, f_retro, specular_retroreflectivity);
        }
        else
        {
            // Sample the standard lobe, evaluate the retro lobe
            vec3 f_std = specular_brdf_sample_impl(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
            float pdf_retro;
            vec3 f_retro = specular_brdf_evaluate_impl(pW, basis, wi_retro, woutputL, pdf_retro);
            pdf_woutputL = mix(pdf_woutputL, pdf_retro, specular_retroreflectivity);
            return mix(f_std, f_retro, specular_retroreflectivity);
        }
    }
#endif
    return specular_brdf_sample_impl(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
}


vec3 specular_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
    float eta_ie = eta_s(); // n_interior / n_exterior
    if (abs(eta_ie - 1.0) < IOR_EPSILON)
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
        vec3 f = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}
