
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "diffuse" - Oren-Nayar BRDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 oren_nayar_eval(in vec3 woutputL, in vec3 winputL)
{
    float sigma = base_roughness * PI;
    float sigma2 = sqr(sigma);
    float A = 1.0 - (sigma2 / (2.0 * (sigma2 + 0.33)));
    float B = 0.45 * sigma2 / (sigma2 + 0.09);
    float sinThetaI = sinTheta(winputL);
    float sinThetaO = sinTheta(woutputL);
    float maxCos = 0.0;
    if (sinThetaI > 1e-4 && sinThetaO > 1e-4)
    {
        float sinPhiI = sinPhi(winputL);  float cosPhiI = cosPhi(winputL);
        float sinPhiO = sinPhi(woutputL); float cosPhiO = cosPhi(woutputL);
        float dCos = cosPhiI * cosPhiO + sinPhiI * sinPhiO;
        maxCos = max(0.0, dCos);
    }
    float sinAlpha, tanBeta;
    if (abs(cosTheta(winputL)) > abs(cosTheta(woutputL)))
    {
        sinAlpha = sinThetaO;
        tanBeta = sinThetaI / abs(cosTheta(winputL));
    }
    else
    {
        sinAlpha = sinThetaI;
        tanBeta = sinThetaO / abs(cosTheta(woutputL));
    }
    return base_weight * base_color / PI * (A + B * maxCos * sinAlpha * tanBeta);
}


vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);
    pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);
    return oren_nayar_eval(winputL, woutputL);
}


vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    return oren_nayar_eval(winputL, woutputL);
}


vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    return base_weight * base_color;
}
