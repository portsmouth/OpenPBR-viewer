

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// diffuse BTDF:
//    - EON lobe flipped into negative hemisphere, for thin-walled SSS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 diffuse_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    bool reflected = woutputL.z * winputL.z > 0.0;
    if (reflected)
    {
        pdf_woutputL = 1.0;
        return vec3(0.0);
    }
    woutputL.z *= -1.f;
    pdf_woutputL = pdf_EON(winputL, woutputL, base_diffuse_roughness);
    return f_EON(vec3(1.f), base_diffuse_roughness, winputL, woutputL, true);
}

vec3 diffuse_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL)
{
    float u1 = rand(rndSeed); float u2 = rand(rndSeed);
    vec4 wiP = sample_EON(winputL, base_diffuse_roughness, u1, u2);
    woutputL     = wiP.xyz;
    pdf_woutputL = wiP.w;
    vec3 f = f_EON(vec3(1.f), base_diffuse_roughness, winputL, woutputL, true);
    woutputL.z *= -1.f;
    return f;
}

vec3 diffuse_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    return E_EON(vec3(1.f), base_diffuse_roughness, winputL, true);
}
