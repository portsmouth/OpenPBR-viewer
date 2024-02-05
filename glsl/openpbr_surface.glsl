
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

LobeWeights lobe_weights;
LobeAlbedos lobe_albedos;
LobeProbs   lobe_probs;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenPBR BSDF: preparation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Construct weights of individual BSDF lobes, according to OpenPBR surface model (in the non-reciprocal albedo-scaling approximation).
// Note that this requires computing the albedos of some of the lobes.
void openpbr_lobe_weights(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                          inout LobeWeights weights, inout LobeAlbedos albedos)
{
    // Surface //////////////////////

    // Fuzz BRDF
    weights.m[ID_FUZZ_BRDF] = vec3(0.0); // fuzz_weight;
    if (maxComponent(weights.m[ID_FUZZ_BRDF]) > 0.0) albedos.m[ID_FUZZ_BRDF] = vec3(0.0); //fuzz_brdf_albedo(pW, basis, winputL, rndSeed);
    else                                             albedos.m[ID_FUZZ_BRDF] = vec3(0.0);

    // Coated base //////////////////////
    vec3 w_coated_base = vec3(1.0); //mix(vec3(1.0), vec3(1.0) - albedos.m[ID_FUZZ_BRDF], fuzz_weight);

    // Coat BRDF
    weights.m[ID_COAT_BRDF] = w_coated_base * coat_weight;
    albedos.m[ID_COAT_BRDF] = (maxComponent(weights.m[ID_COAT_BRDF]) > 0.0) ? coat_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);

    // Base substrate //////////////////////
    vec3 w_base_substrate = w_coated_base * mix(vec3(1.0), coat_color*(vec3(1.0) - albedos.m[ID_COAT_BRDF]), coat_weight);

    // Metal BRDF
    weights.m[ID_META_BRDF] = w_base_substrate * base_metalness;
    albedos.m[ID_META_BRDF] = (maxComponent(weights.m[ID_META_BRDF]) > 0.0) ? metal_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);

    // Dielectric base //////////////////////
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - base_metalness));

    // Specular BRDF
    weights.m[ID_SPEC_BRDF] = w_dielectric_base;
    albedos.m[ID_SPEC_BRDF] = (maxComponent(weights.m[ID_SPEC_BRDF]) > 0.0) ? specular_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);

    // Specular BTDF
    weights.m[ID_SPEC_BTDF] = w_dielectric_base * transmission_weight;
    albedos.m[ID_SPEC_BTDF] = (maxComponent(weights.m[ID_SPEC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);

    // Opaque dielectric base //////////////////////
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - transmission_weight);

    // Subsurface BSSRDF
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium
    weights.m[ID_SSSC_BTDF] = w_opaque_dielectric_base * subsurface_weight;
    albedos.m[ID_SSSC_BTDF] = (maxComponent(weights.m[ID_SSSC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);

    // Diffuse BRDF
    weights.m[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - subsurface_weight) * (vec3(1.0) - albedos.m[ID_SPEC_BRDF]);
    albedos.m[ID_DIFF_BRDF] = (maxComponent(weights.m[ID_DIFF_BRDF]) > 0.0) ? diffuse_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);
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
    if (skip_lobe_id != ID_FUZZ_BRDF && lobe_probs.m[ID_FUZZ_BRDF] > 0.0) f += vec3(0.0);
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


vec3 openpbr_bsdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,
                         out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)
{
    // Sample a lobe according to these probabilities.
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
            if      (lobe_id==ID_FUZZ_BRDF) {}
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

            // But if the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,
            // we also populate the associated volumetric bulk medium
            if (lobe_id==ID_SPEC_BTDF)
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

            // Set up the volumetric medium according to the "Subsurface" section of the OpenPBR spec
            else if (lobe_id==ID_SSSC_BTDF)
            {
                float g = clamp(subsurface_anisotropy, -0.95, 0.95);           // scattering anisotropy
                vec3 A = subsurface_color;                                     // multi-scatter albedo
                vec3 r = subsurface_radius * subsurface_radius_scale;          // diffusion radius
                vec3 A2 = A*A;
                vec3 A3 = A*A2;
                vec3 A4 = A2*A2;
                vec3 S = 4.012 - 15.21*A + 32.34*A2 - 34.68*A3 + 13.91*A4;     // Hyperion fit for scale factor S = L / diffusion_lengths
                vec3 s2 = exp(-11.43*A + 15.38*A2 - 13.91*A3);                 // Hyperion fit for one minus single scatter albedo
                vec3 L = S * r;                                                // MFPs according to Hyperion paper
                vec3 alpha = (1.0 - s2);                                       // Hyperion fit for single scatter albedo
                //vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), L);              // OpenPBR extinction remapping
                vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), r);                // (v2)
                internal_medium.albedo     = alpha / (1.0 - g*s2);             // remapped single-scattering albedo
                internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);  // remapped extinction
                internal_medium.anisotropy = g;
            }

            // Specify also the Abbe number of the bulk dielectric, for dispersion effects
            internal_medium.abbe_number = transmission_dispersion_abbe_number / max(DENOM_TOLERANCE, transmission_dispersion_scale);

            return f;
        }
    }
    pdf_woutputL = 1.0;
    return vec3(0.0);
}


