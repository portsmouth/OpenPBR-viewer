

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "diffuse" - Lambertian BRDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    return base_weight * base_color / PI;
}

vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL,
                            out vec3 woutputL, out float pdf_woutputL, inout int rndSeed)
{
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    return base_weight * base_color / PI;
}

float diffuse_brdf_pdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    return pdfHemisphereCosineWeighted(woutputL);
}

vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL,
                         inout int rndSeed)
{
    return base_weight * base_color;
}

/*
vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL,
                        inout int rndSeed)
{
    // Approximate albedo via Monte-Carlo sampling:
    const int num_samples = 4;
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 woutputL;
        float pdf_woutputL;
        vec3 f = diffuse_brdf_sample(pW, basis, winputL, woutputL, pdf_woutputL, rndSeed);
        if (length(f) > RADIANCE_EPSILON)
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);
    }
    albedo /= float(num_samples);
    return albedo;
}
*/