
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "Metal" conductor microfacet BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vec3 metal_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
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

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputL, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
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

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputL, woutputL, alpha_x, alpha_y);

    // Thus evaluate BRDF
    return min(vec3(1.0), specular_weight*F) * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
}


vec3 metal_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
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

    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"
    vec3 mR = ggx_ndf_sample(winputL, alpha_x, alpha_y, rndSeed);

    // Compute woutputL by reflecting winputL about mR
    woutputL = -winputL + 2.0*dot(winputL, mR)*mR;
    if (winputL.z * woutputL.z < FLT_EPSILON)
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)

    // Compute NDF, and "distribution of visible normals" DV
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);
    float DV = D * ggx_G1(winputL, alpha_x, alpha_y) * max(0.0, dot(winputL, mR)) / max(DENOM_TOLERANCE, winputL.z);

    // Thus compute PDF of woutputL sample
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputL, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping
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

    // Compute shadowing-masking term
    float G2 = ggx_G2(winputL, woutputL, alpha_x, alpha_y);

    // Thus evaluate BRDF
    return min(vec3(1.0), specular_weight*F) * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);
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




