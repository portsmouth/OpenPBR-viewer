
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenPBR BSDF
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const int ID_FUZZ_BRDF = 0;
const int ID_COAT_BRDF = 1;
const int ID_META_BRDF = 2;
const int ID_SPEC_BRDF = 3;
const int ID_SPEC_BTDF = 4;
const int ID_DIFF_BRDF = 5;
const int ID_SSSC_BTDF = 6;
const int NUM_LOBES    = 7;

// Weight multipliers of individual BSDF lobes
struct LobeWeights
{
    vec3 m[7];
};

// Albedos of individual BDSF lobes
struct LobeAlbedos
{
    vec3 m[7];
};

// Probabilities of individual BDSF lobes
struct LobeProbs
{
    float m[7];
};

struct LobePDFs
{
    float m[7];
};

// Precomputed lobe weights, albedos, and discrete probabilities, per vertex
LobeWeights lobe_weights;
LobeAlbedos lobe_albedos;
LobeProbs   lobe_probs;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenPBR BSDF: preparation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Construct weights of individual BSDF lobes, according to OpenPBR surface model (in the non-reciprocal albedo-scaling approximation).
// Also compute the albedos of the (non-zero weight) lobes.
void openpbr_lobe_weights(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                          inout LobeWeights weights, inout LobeAlbedos albedos)
{
    float F = fuzz_weight;
    float C = coat_weight;
    float M = base_metalness;
    float T = transmission_weight;
    float S = subsurface_weight;

    ///////////////////////////// Compute albedos /////////////////////////////

    bool fuzzed             = (F > 0.0);
    bool coated             = (C > 0.0);
    bool metallic           = (M > 0.0);
    bool fully_metallic     = (M == 1.0);
    bool transmissive       = (T > 0.0);
    bool fully_transmissive = (T == 1.0);
    bool subsurfaced        = (S > 0.0);
    bool fully_subsurfaced  = (S == 1.0);

    albedos.m[ID_FUZZ_BRDF] = fuzzed                                                       ? fuzz_brdf_albedo(pW, basis, winputL, rndSeed)     : vec3(0.0);
    albedos.m[ID_COAT_BRDF] = coated                                                       ? coat_brdf_albedo(pW, basis, winputL, rndSeed)     : vec3(0.0);
    albedos.m[ID_META_BRDF] = metallic                                                     ? metal_brdf_albedo(pW, basis, winputL, rndSeed)    : vec3(0.0);
    albedos.m[ID_SPEC_BRDF] = !fully_metallic                                              ? specular_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);
    albedos.m[ID_SPEC_BTDF] = !fully_metallic && transmissive                              ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);
    albedos.m[ID_SSSC_BTDF] = !fully_metallic && !fully_transmissive && subsurfaced        ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);
    albedos.m[ID_DIFF_BRDF] = !fully_metallic && !fully_transmissive && !fully_subsurfaced ? diffuse_brdf_albedo(pW, basis, winputL, rndSeed)  : vec3(0.0);

    ///////////////////////////// Construct lobe weights /////////////////////////////

    // Fuzz BRDF
    weights.m[ID_FUZZ_BRDF] = vec3(F);

    // Coated base //////////////////////
    vec3 w_coated_base = mix(vec3(1.0), vec3(1.0) - albedos.m[ID_FUZZ_BRDF], F);

    // Coat BRDF
    weights.m[ID_COAT_BRDF] = w_coated_base * C;

    // Base substrate //////////////////////

    // Compute base darkening factor due to presence of coat:
    vec3 w_base_substrate;
#ifdef COAT_ENABLED
    if (coated)
    {
        vec3 base_darkening = vec3(1.0);
        if (coat_darkening > 0.0)
        {
            float Kr = 1.0 - (1.0 - average_dielectric_fresnel(coat_ior))/sqr(coat_ior);
            float Ks = FresnelDielectricReflectance(abs(winputL.z), coat_ior);
            float Fr = clamp(specular_weight * fresnel_refl_normal_incidence(), 0.0, 1.0);
            float rd = mix(1.0, specular_roughness, Fr); // estimate of roughness of dielectric base
            float rm = specular_roughness;               // estimate of roughness of metallic base
            float rb = mix(rd, rm, M);  // thus estimated roughness of entire base
            float K = mix(Ks, Kr, rb);  // thus estimated internal diffuse reflection coeff.
            vec3 E_dielectric_base = mix(mix(albedos.m[ID_DIFF_BRDF], albedos.m[ID_SSSC_BTDF], S),
                                            albedos.m[ID_SPEC_BTDF], T);     // dielectric base albedo
            vec3 E_base = mix(E_dielectric_base, albedos.m[ID_META_BRDF], M); // entire base albedo
            vec3 Delta = (1.0 - K) / vec3(1.0 - E_base*K);                    // full darkening factor
            base_darkening = mix(vec3(1.0), Delta, C * coat_darkening);       // modulated darkening factor
        }
        w_base_substrate = w_coated_base * mix(vec3(1.0), base_darkening * coat_color * (vec3(1.0) - albedos.m[ID_COAT_BRDF]), C);
    }
#else
    w_base_substrate = w_coated_base;
#endif // COAT_ENABLED

    // Metal BRDF
    weights.m[ID_META_BRDF] = w_base_substrate * M;

    // Dielectric base //////////////////////
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - M));

    // Specular BRDF
    weights.m[ID_SPEC_BRDF] = w_dielectric_base;

    // Specular BTDF
    weights.m[ID_SPEC_BTDF] = w_dielectric_base * T;

    // Opaque dielectric base //////////////////////
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - T);

    // Subsurface BSSRDF
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium
    weights.m[ID_SSSC_BTDF] = w_opaque_dielectric_base * S;

    // Diffuse BRDF
    weights.m[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - S) * (vec3(1.0) - albedos.m[ID_SPEC_BRDF]);

}

void openpbr_lobe_probabilities(in LobeWeights weights, in LobeAlbedos albedos,
                                inout LobeProbs probs)
{
    // Compute probability of sampling each lobe, according to its albedo
    float W_total = 0.0;
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
    {
        probs.m[lobe_id] = length(weights.m[lobe_id] * albedos.m[lobe_id]);
        W_total += probs.m[lobe_id];
    }
    W_total = max(DENOM_TOLERANCE, W_total);
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
        probs.m[lobe_id] /= W_total;
}

void openpbr_prepare(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)
{
    // Compute the mixture weights and albedos for each lobe
    openpbr_lobe_weights(pW, basis, winputL, rndSeed, lobe_weights, lobe_albedos);

    // Thus compute the discrete sampling probability for each lobe
    openpbr_lobe_probabilities(lobe_weights, lobe_albedos, lobe_probs);
}

bool openpbr_is_opaque()
{
    if (transmission_weight > 0.0) return false;
    if (subsurface_weight > 0.0) return false;
    if (geometry_opacity < 1.0) return false;
    return true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenPBR BSDF: evaluation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vec3 openpbr_bsdf_evaluate_lobes(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                                 in int skip_lobe_id, inout LobePDFs pdfs)
{
    vec3 f = vec3(0.0);
    if (skip_lobe_id != ID_FUZZ_BRDF && lobe_probs.m[ID_FUZZ_BRDF] > 0.0) f += lobe_weights.m[ID_FUZZ_BRDF] *     fuzz_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_FUZZ_BRDF]);
    if (skip_lobe_id != ID_COAT_BRDF && lobe_probs.m[ID_COAT_BRDF] > 0.0) f += lobe_weights.m[ID_COAT_BRDF] *     coat_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_COAT_BRDF]);
    if (skip_lobe_id != ID_META_BRDF && lobe_probs.m[ID_META_BRDF] > 0.0) f += lobe_weights.m[ID_META_BRDF] *    metal_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_META_BRDF]);
    if (skip_lobe_id != ID_SPEC_BRDF && lobe_probs.m[ID_SPEC_BRDF] > 0.0) f += lobe_weights.m[ID_SPEC_BRDF] * specular_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BRDF]);
    if (skip_lobe_id != ID_DIFF_BRDF && lobe_probs.m[ID_DIFF_BRDF] > 0.0) f += lobe_weights.m[ID_DIFF_BRDF] *  diffuse_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_DIFF_BRDF]);

    bool eval_spec_btdf = (skip_lobe_id != ID_SPEC_BTDF && lobe_probs.m[ID_SPEC_BTDF] > 0.0);
    bool eval_sssc_btdf = (skip_lobe_id != ID_SSSC_BTDF && lobe_probs.m[ID_SSSC_BTDF] > 0.0);
    bool eval_transmission = eval_spec_btdf || eval_sssc_btdf;
    if (eval_transmission)
    {
        vec3 f_spec_btdf = specular_btdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BTDF]);
        if (eval_spec_btdf) f += lobe_weights.m[ID_SPEC_BTDF] * f_spec_btdf;
        if (eval_sssc_btdf) f += lobe_weights.m[ID_SSSC_BTDF] * f_spec_btdf;
    }
    return f;
 }

float openpbr_bsdf_total_pdf(in LobePDFs pdfs)
{
    // Compute total PDF of sampled output direction (according to 1-sample MIS)
    float pdf_woutputL = 0.0;
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
        pdf_woutputL += lobe_probs.m[lobe_id] * pdfs.m[lobe_id];
    return pdf_woutputL;
}

vec3 openpbr_bsdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                           inout float pdf_woutputL)
{
    LobePDFs pdfs;
    vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, -1, pdfs);
    pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);
    return f;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenPBR BSDF: sampling
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#ifdef VOLUME_ENABLED

void fill_transmission_medium(inout Volume internal_medium)
{
    // Set up the volumetric medium according to the "Translucent Base" section of the OpenPBR spec
    if (transmission_depth > 0.0)
    {
        vec3 mu_t = -log(transmission_color) / transmission_depth;
        vec3 mu_s = transmission_scatter / transmission_depth;
        vec3 mu_a = mu_t - mu_s;
        if (minComponent(mu_a) < 0.0)
            mu_a = mu_a - vec3(minComponent(mu_a));
        internal_medium.extinction = mu_a + mu_s;
        internal_medium.albedo = mu_s / (mu_a + mu_s);
        internal_medium.anisotropy = transmission_scatter_anisotropy;
    }
    else
        internal_medium.extinction = vec3(0.0);
}

void fill_subsurface_medium(inout Volume internal_medium)
{
    float g = clamp(subsurface_anisotropy, -0.95, 0.95);                                              // scattering anisotropy
    vec3 A = subsurface_color; vec3 A2 = A*A; vec3 A3 = A*A2; vec3 A4 = A2*A2;                        // multi-scatter albedo and powers
    vec3 r = subsurface_radius * subsurface_radius_scale;                                             // diffusion radius
    vec3 s2 = exp(-11.43*A + 15.38*A2 - 13.91*A3);                                                    // Hyperion fit for one minus single scatter albedo
    vec3 mfp_epsilon = vec3(3.0*RAY_OFFSET);
    internal_medium.extinction = 1.0 / max(vec3(3.0*RAY_OFFSET), r);
    internal_medium.albedo     = (1.0 - s2) / (1.0 - g*s2); // single-scattering albedo accounting for anisotropy
    internal_medium.anisotropy = g;
}

#endif // VOLUME_ENABLED

vec3 openpbr_bsdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)
{
    // Sample a lobe according to the precomputed lobe_probs.
    // Also compute PDF of all other lobes in the sampled direction.
    float X = rand(rndSeed);
    float CDF = 0.0;

    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
    {
        CDF += lobe_probs.m[lobe_id];
        if (X < CDF)
        {
            // Sample this lobe for the output direction woutputL, and corresponding (f_lobe, pdf_lobe)
            float pdf_lobe;
            vec3 f_lobe;
            if      (lobe_id==ID_FUZZ_BRDF) { f_lobe =     fuzz_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else if (lobe_id==ID_COAT_BRDF) { f_lobe =     coat_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else if (lobe_id==ID_META_BRDF) { f_lobe =    metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else if (lobe_id==ID_SPEC_BRDF) { f_lobe = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else if (lobe_id==ID_SPEC_BTDF ||
                     lobe_id==ID_SSSC_BTDF) { f_lobe = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else if (lobe_id==ID_DIFF_BRDF) { f_lobe =  diffuse_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }
            else { break; }

            // Evaluate the value and PDF of all other lobes at the sampled woutputL
            LobePDFs pdfs;
            int skip_lobe_id = lobe_id;
            vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, skip_lobe_id, pdfs);
            f += lobe_weights.m[lobe_id] * f_lobe;
            pdfs.m[lobe_id] = pdf_lobe;

            // Thus compute the value and PDF of the total BRDF, according to 1-sample MIS:
            pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);

            // If the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,
            // we also populate the associated volumetric bulk medium
            bool transmitted = woutputL.z * winputL.z < 0.0;
            bool transmitted_inside = transmitted && woutputL.z < 0.0;
            if (!transmitted_inside)
                return f;

#ifdef VOLUME_ENABLED
            // But if the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,
            // we also populate the associated volumetric bulk medium
            if (lobe_id==ID_SPEC_BTDF)
                fill_transmission_medium(internal_medium);
            else if (lobe_id==ID_SSSC_BTDF)
                fill_subsurface_medium(internal_medium);
#endif

            return f;
        }
    }

    pdf_woutputL = 1.0;
    return vec3(0.0);
}


