
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Metal" conductor microfacet BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vec3 metal_brdf_evaluate_impl(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                              inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE)
    {
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0);
    }
    // Compute the NDF roughnesses
    // (Note that the metal shares the same NDF as the dielectric/specular base)
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y);

    // Compute the micronormal mR in the local frame, from the reflection half-vector
    vec3 mR = normalize(woutputL + winputL);

    // Compute NDF, and "distribution of visible normals" DV
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

    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);

    // Compute Fresnel factor for the conductor reflection
    vec3 F;
    vec3 F_nofilm = FresnelF82Tint(abs(dot(winputL, mR)), base_weight * base_color, specular_color);
#ifdef THIN_FILM_ENABLED
    if (thin_film_weight > 0.0)
    {
        float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);
        vec3 F_film = FresnelThinFilmOverConductor(abs(dot(winputL, mR)), eta_fe);
        F = mix(F_nofilm, F_film, thin_film_weight);
    }
    else
#endif // THIN_FILM_ENABLED
        F = F_nofilm;

    // Thus evaluate BRDF
    return min(vec3(1.0), specular_weight*F) * DG2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}


vec3 metal_brdf_sample_impl(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                            out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE)
    {
        pdf_woutputL = PDF_EPSILON;
        return vec3(0.0);
    }

    // Compute the NDF roughnesses in the rotated frame
    // (Note that the metal shares the same NDF as the dielectric/specular base)
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
    vec3 mR = ggx_ndf_sample(winputL, samp_ax, samp_ay, rndSeed);

    // Compute woutputL by reflecting winputL about mR
    woutputL = -winputL + 2.0*dot(winputL, mR)*mR;
    if (winputL.z * woutputL.z < FLT_EPSILON)
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)

    // Compute NDF, and "distribution of visible normals" DV
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
        float D_h = ggx_ndf_eval(mR, alpha_hx, alpha_hy);
        float DV_h = D_h * ggx_G1(winputL, alpha_hx, alpha_hy) * max(0.0, dot(winputL, mR)) / max(DENOM_TOLERANCE, winputL.z);
        DV = mix(DV, DV_h, specular_haze);
        float G2_h = ggx_G2(winputL, woutputL, alpha_hx, alpha_hy);
        DG2 = mix(DG2, D_h * G2_h, specular_haze);
    }
#endif

    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);

    // Compute Fresnel factor for the conductor reflection
    vec3 F;
    vec3 F_nofilm = FresnelF82Tint(abs(dot(winputL, mR)), base_weight * base_color, specular_color);
#ifdef THIN_FILM_ENABLED
    float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);
    vec3 F_film = FresnelThinFilmOverConductor(abs(dot(winputL, mR)), eta_fe);
    F = mix(F_nofilm, F_film, thin_film_weight);
#else
    F = F_nofilm;
#endif // THIN_FILM_ENABLED

    // Thus evaluate BRDF
    return min(vec3(1.0), specular_weight*F) * DG2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}


// PR #255 (https://github.com/AcademySoftwareFoundation/OpenPBR/pull/255): specular retroreflectivity
vec3 metal_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                         inout float pdf_woutputL)
{
    vec3 f = metal_brdf_evaluate_impl(pW, basis, winputL, woutputL, pdf_woutputL);
#ifdef RETRO_ENABLED
    if (specular_retroreflectivity > 0.0)
    {
        vec3 wi_retro = vec3(-winputL.x, -winputL.y, winputL.z);
        float pdf_retro;
        vec3 f_retro = metal_brdf_evaluate_impl(pW, basis, wi_retro, woutputL, pdf_retro);
        f = mix(f, f_retro, specular_retroreflectivity);
        pdf_woutputL = mix(pdf_woutputL, pdf_retro, specular_retroreflectivity);
    }
#endif
    return f;
}

vec3 metal_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                       out vec3 woutputL, out float pdf_woutputL)
{
#ifdef RETRO_ENABLED
    if (specular_retroreflectivity > 0.0)
    {
        vec3 wi_retro = vec3(-winputL.x, -winputL.y, winputL.z);
        if (rand(rndSeed) < specular_retroreflectivity)
        {
            // Sample the retro lobe, evaluate the standard lobe
            vec3 f_retro = metal_brdf_sample_impl(pW, basis, wi_retro, rndSeed, woutputL, pdf_woutputL);
            float pdf_std;
            vec3 f_std = metal_brdf_evaluate_impl(pW, basis, winputL, woutputL, pdf_std);
            pdf_woutputL = mix(pdf_std, pdf_woutputL, specular_retroreflectivity);
            return mix(f_std, f_retro, specular_retroreflectivity);
        }
        else
        {
            // Sample the standard lobe, evaluate the retro lobe
            vec3 f_std = metal_brdf_sample_impl(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
            float pdf_retro;
            vec3 f_retro = metal_brdf_evaluate_impl(pW, basis, wi_retro, woutputL, pdf_retro);
            pdf_woutputL = mix(pdf_woutputL, pdf_retro, specular_retroreflectivity);
            return mix(f_std, f_retro, specular_retroreflectivity);
        }
    }
#endif
    return metal_brdf_sample_impl(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);
}


vec3 metal_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
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




