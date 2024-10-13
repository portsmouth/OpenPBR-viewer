precision highp isampler2D;
precision highp usampler2D;
precision highp int;

//////////////////////////////////////////////////////
// varying
//////////////////////////////////////////////////////

varying vec3 vViewPosition;
varying vec3 vWorldPosition;


/*
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;
*/

//////////////////////////////////////////////////////
// camera uniforms
//////////////////////////////////////////////////////

uniform mat4 cameraWorldMatrix;
uniform mat4 invProjectionMatrix;
uniform mat4 invModelMatrix;
uniform vec2 resolution;


//////////////////////////////////////////////////////
// material uniforms
//////////////////////////////////////////////////////

uniform float base_weight;
uniform vec3  base_color;
uniform float base_roughness;
uniform float base_metalness;

uniform float specular_weight;
uniform vec3  specular_color;
uniform float specular_roughness;
uniform float specular_anisotropy;
uniform float specular_rotation;
uniform float specular_ior;

uniform float transmission_weight;
uniform vec3  transmission_color;
uniform float transmission_depth;
uniform vec3  transmission_scatter;
uniform float transmission_scatter_anisotropy;
uniform float transmission_dispersion_abbe_number;
uniform float transmission_dispersion_scale;

uniform float subsurface_weight;
uniform vec3  subsurface_color;
uniform float subsurface_radius;
uniform vec3  subsurface_radius_scale;
uniform float subsurface_anisotropy;
uniform int   subsurface_mode; // FOR TESTING

uniform float coat_weight;
uniform vec3  coat_color;
uniform float coat_roughness;
uniform float coat_anisotropy;
uniform float coat_rotation;
uniform float coat_ior;
uniform float coat_darkening;

uniform float fuzz_weight;
uniform vec3  fuzz_color;
uniform float fuzz_roughness;

uniform float thin_film_weight;
uniform float thin_film_thickness;
uniform float thin_film_ior;

uniform float emission_luminance;
uniform vec3  emission_color;

uniform float geometry_opacity;
uniform bool geometry_thin_walled;

//////////////////////////////////////////////////////
// lighting uniforms
//////////////////////////////////////////////////////

uniform float skyPower;
uniform vec3 skyColor;

uniform vec3 sunDir; // in world space
uniform float sunPower;
uniform float sunAngularSize;
uniform vec3 sunColor;
varying vec3 vSunDir;


//////////////////////////////////////////////////////
// useful constants
//////////////////////////////////////////////////////

const float PI                    = 3.141592653589793;

// tolerances
const float DENOM_TOLERANCE       = 1.0e-10;
const float PDF_EPSILON           = 1.0e-6;
const float FLT_EPSILON           = 1.1920929e-7;

struct OpenPBRMaterial
{
    float base_weight;
    vec3  base_color;
    float base_roughness;
    float base_metalness;
    float specular_weight;
    vec3  specular_color;
    float specular_roughness;
    float specular_anisotropy;
    float specular_rotation;
    float specular_ior;
    float transmission_weight;
    vec3  transmission_color;
    float transmission_depth;
    vec3  transmission_scatter;
    float transmission_scatter_anisotropy;
    float transmission_dispersion_abbe_number;
    float transmission_dispersion_scale;
    float subsurface_weight;
    vec3  subsurface_color;
    float subsurface_radius;
    vec3  subsurface_radius_scale;
    float subsurface_anisotropy;
    float coat_weight;
    vec3  coat_color;
    float coat_roughness;
    float coat_anisotropy;
    float coat_rotation;
    float coat_ior;
    float coat_darkening;
    float fuzz_weight;
    vec3  fuzz_color;
    float fuzz_roughness;
    float thin_film_weight;
    float thin_film_thickness;
    float thin_film_ior;
    float emission_luminance;
    vec3  emission_color;
    float geometry_opacity;
    bool geometry_thin_walled;
};

void init_openpbr_material(inout OpenPBRMaterial material)
{
    material.base_weight                         = base_weight;
    material.base_color                          = base_color;
    material.base_roughness                      = base_roughness;
    material.base_metalness                      = base_metalness;
    material.specular_weight                     = specular_weight;
    material.specular_color                      = specular_color;
    material.specular_roughness                  = specular_roughness;
    material.specular_anisotropy                 = specular_anisotropy;
    material.specular_rotation                   = specular_rotation;
    material.specular_ior                        = specular_ior;
    material.transmission_weight                 = transmission_weight;
    material.transmission_color                  = transmission_color;
    material.transmission_depth                  = transmission_depth;
    material.transmission_scatter                = transmission_scatter;
    material.transmission_scatter_anisotropy     = transmission_scatter_anisotropy;
    material.transmission_dispersion_abbe_number = transmission_dispersion_abbe_number;
    material.transmission_dispersion_scale       = transmission_dispersion_scale;
    material.subsurface_weight                   = subsurface_weight;
    material.subsurface_color                    = subsurface_color;
    material.subsurface_radius                   = subsurface_radius;
    material.subsurface_radius_scale             = subsurface_radius_scale;
    material.subsurface_anisotropy               = subsurface_anisotropy;
    material.coat_weight                         = coat_weight;
    material.coat_color                          = coat_color;
    material.coat_roughness                      = coat_roughness;
    material.coat_anisotropy                     = coat_anisotropy;
    material.coat_rotation                       = coat_rotation;
    material.coat_ior                            = coat_ior;
    material.coat_darkening                      = coat_darkening;
    material.fuzz_weight                         = fuzz_weight;
    material.fuzz_color                          = fuzz_color;
    material.fuzz_roughness                      = fuzz_roughness;
    material.thin_film_weight                    = thin_film_weight;
    material.thin_film_thickness                 = thin_film_thickness;
    material.thin_film_ior                       = thin_film_ior;
    material.emission_luminance                  = emission_luminance;
    material.emission_color                      = emission_color;
    material.geometry_opacity                    = geometry_opacity;
    material.geometry_thin_walled                = geometry_thin_walled;
}


struct Basis
{
    // right-handed coordinate system
    vec3 nW; // aligned with the z-axis in local space
    vec3 tW; // aligned with the x-axis in local space
    vec3 bW; // aligned with the y-axis in local space
};

vec3 safe_normalize(in vec3 N)
{
    float l = length(N);
    return N/max(l, DENOM_TOLERANCE);
}

vec3 normalToTangent(in vec3 N)
{
    vec3 T;
    if (abs(N.z) < abs(N.x))
        T = vec3(N.z, 0.0, -N.x);
    else
        T = vec3(0.0, N.z, -N.y);
    T = safe_normalize(T);
    return T;
}

Basis makeBasis(in vec3 nW)
{
    Basis basis;
    basis.nW = safe_normalize(nW);
    basis.tW = normalToTangent(nW);
    basis.bW = cross(basis.nW, basis.tW);
    return basis;
}

vec3 worldToLocal(in vec3 vWorld, in Basis basis)
{
    return vec3( dot(vWorld, basis.tW),
                 dot(vWorld, basis.bW),
                 dot(vWorld, basis.nW) );
}


uint pcg(uint v)
{
	uint state = v * 747796405u + 2891336453u;
	uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
	return (word >> 22u) ^ word;
}

float rand(inout uint seed)
{
    seed = pcg(seed);
    const float uint_range = 1.0 / float(0xFFFFFFFFU);
    return float(seed - 1U) * uint_range;
}

// Do cosine-weighted sampling of hemisphere
vec3 sampleHemisphereCosineWeighted(inout uint rndSeed, inout float pdf)
{
    float r = sqrt(rand(rndSeed));
    float theta = 2.0 * PI * rand(rndSeed);
    float x = r * cos(theta);
    float y = r * sin(theta);
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));
    pdf = max(PDF_EPSILON, abs(z) / PI);
    return vec3(x, y, z);
}

vec3 Schlick(vec3 F0, float mu)
{
    return F0 + pow(1.0 - mu, 5.0)*(vec3(1.0) - F0);
}

vec3 FresnelConductorF82(float mu, vec3 F0, vec3 F82)
{
    const float mu_bar = 1.0/7.0;
    const float denom = mu_bar * pow(1.0 - mu_bar, 6.0);
    vec3 Fschlick_bar = Schlick(F0, mu_bar);
    vec3 Fschlick     = Schlick(F0, mu);
    return Fschlick - mu * pow(1.0 - mu, 6.0) * (vec3(1.0) - F82) * Fschlick_bar / denom;
}

float sqr(float x)              { return x*x; }

float ggx_ndf_eval(in vec3 m, in float alpha_x, in float alpha_y)
{
    // Evaluate the anisotropic GGX NDF
    float ax = max(alpha_x, DENOM_TOLERANCE);
    float ay = max(alpha_y, DENOM_TOLERANCE);
    float Ddenom = PI * ax * ay * sqr(sqr(m.x/ax) + sqr(m.y/ay) + sqr(m.z));
    return 1.0 / max(Ddenom, DENOM_TOLERANCE);
}

// GGX NDF sampling routine, as described in
//  "Sampling Visible GGX Normals with Spherical Caps", Dupuy et al., HPG 2023.
// NB, this assumes V is in the +z hemisphere, and returns a sampled micronormal in that hemisphere.
vec3 ggx_ndf_sample(in vec3 V, float alpha_x, float alpha_y, inout uint rndSeed)
{
    vec2 Xi = vec2(rand(rndSeed), rand(rndSeed));
    vec2 alpha = vec2(alpha_x, alpha_y);

    // Transform the view direction to the hemisphere configuration.
    V = normalize(vec3(V.xy * alpha, V.z));

    // Sample a spherical cap in (-V.z, 1].
    float phi = 2.0 * PI * Xi.x;
    float z = (1.0 - Xi.y) * (1.0 + V.z) - V.z;
    float sinTheta = sqrt(clamp(1.0 - z * z, 0.0, 1.0));
    float x = sinTheta * cos(phi);
    float y = sinTheta * sin(phi);
    vec3 c = vec3(x, y, z);

    // Compute the microfacet normal.
    vec3 H = c + V;

    // Transform the microfacet normal back to the ellipsoid configuration.
    H = normalize(vec3(H.xy * alpha, H.z));

    return H;
}

float ggx_lambda(in vec3 V, float alpha_x, float alpha_y)
{
    return (-1.0 + sqrt(1.0 + (sqr(alpha_x*V.x) + sqr(alpha_y*V.y))/sqr(V.z))) / 2.0;
}

float ggx_G1(in vec3 V, float alpha_x, float alpha_y)
{
    if (abs(V.z) < FLT_EPSILON) return 0.0;
    return 1.0 / (1.0 + ggx_lambda(V, alpha_x, alpha_y));
}

// Height-correlated form of GGX shadowing-masking function
float ggx_G2(in vec3 V, in vec3 L, float alpha_x, float alpha_y)
{
    if (abs(V.z) < FLT_EPSILON || abs(L.z) < FLT_EPSILON) return 0.0;
    return 1.0 / (1.0 + ggx_lambda(V, alpha_x, alpha_y) + ggx_lambda(L,  alpha_x, alpha_y));
}



///////////////////////////////////////////////////////////////////////
// Fuzz BRDF
///////////////////////////////////////////////////////////////////////

vec3 fuzz_brdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}

vec3 fuzz_brdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}


///////////////////////////////////////////////////////////////////////
// Coat BRDF
///////////////////////////////////////////////////////////////////////

vec3 coat_brdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}

vec3 coat_brdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}

///////////////////////////////////////////////////////////////////////
// Metal BRDF
///////////////////////////////////////////////////////////////////////

void specular_ndf_roughnesses(out float alpha_x, out float alpha_y, const in OpenPBRMaterial pbr)
{
    float rsqr = sqr(pbr.specular_roughness);
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - pbr.specular_anisotropy)));
    alpha_y = (1.0 - pbr.specular_anisotropy) * alpha_x;
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)
    const float min_alpha = 1.0e-4;
    alpha_x = max(min_alpha, alpha_x);
    alpha_y = max(min_alpha, alpha_y);
}

vec3 metal_brdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    if (L.z < DENOM_TOLERANCE || V.z < DENOM_TOLERANCE) return vec3(0.0);

    // Micronormal
    vec3 H = normalize(V + L);

    // Discard backfacing microfacets
    if (dot(H, V) < 0.0 || dot(H, L) < 0.0)
        return vec3(0.0);

    // Conductor Fresnel
    vec3 F0  = pbr.base_weight * pbr.base_color;
    vec3 F82 = pbr.specular_color;
    vec3 F = FresnelConductorF82(abs(dot(V, H)), F0, F82);

    // NDF
    // Compute the NDF roughnesses in the tangent frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y, pbr);
    float D = ggx_ndf_eval(H, alpha_x, alpha_y);

    // Shadowing-masking term
    float G2 = ggx_G2(V, L, alpha_x, alpha_y);

    // Jacobian
    float J = 1.0 / max(4.0 * abs(V.z) * abs(L.z), DENOM_TOLERANCE);

    vec3 f = min(vec3(1.0), pbr.specular_weight*F) * D * G2 * J;
    return f;
}

vec3 metal_brdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    // Approximate albedo via (deterministic) Monte-Carlo sampling:
    if (V.z <= 0.0) return vec3(0.0);
    uint rndSeed = 0u;
    const int num_samples = 256;
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y, pbr);
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 L = ggx_ndf_sample(V, alpha_x, alpha_y, rndSeed);
        vec3 H = normalize(V + L);
        float D = ggx_ndf_eval(H, alpha_x, alpha_y);
        float DV = D * ggx_G1(V, alpha_x, alpha_y) * abs(dot(V, H)) / max(DENOM_TOLERANCE, abs(V.z));
        float dwh_dwo = 1.0 / max(abs(4.0*dot(V, H)), DENOM_TOLERANCE);
        float pdfL = DV * dwh_dwo;
        float NdotL = L.z;
        vec3 f = metal_brdf_evaluate(V, L, pbr);
        albedo += f * abs(NdotL) / max(pdfL, PDF_EPSILON);
    }
    albedo /= float(num_samples);
    return clamp(albedo, vec3(0.0), vec3(1.0));
}

///////////////////////////////////////////////////////////////////////
// Specular BRDF
///////////////////////////////////////////////////////////////////////

// mui     = magnitude of the cosine of the incident ray angle to the micronormal
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)
// Outputs vec2(rs, rp), the amplitudes of the S, P polarized reflection (where squared amplitudes give reflectance).
vec2 FresnelDielectricPolarizations(float mui, float eta_ti)
{
    float mut2 = sqr(eta_ti) - (1.0 - sqr(mui));
    if (mut2 <= 0.0) return vec2(1.0, 1.0); // (total internal reflection)
    float mut = sqrt(mut2) / eta_ti;
    float rs = (mui - eta_ti*mut) / (mui + eta_ti*mut);
    float rp = (mut - eta_ti*mui) / (mut + eta_ti*mui);
    return vec2(rs, rp);
}

// mui     = magnitude of the cosine of the incident ray angle to the micronormal
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)
float FresnelDielectricReflectance(in float mui, in float eta_ti)
{
    // assuming unpolarized incident light
    vec2 r = FresnelDielectricPolarizations(mui, eta_ti);
    return 0.5*dot(r, r);
}

vec3 specular_brdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    if (L.z < DENOM_TOLERANCE || V.z < DENOM_TOLERANCE) return vec3(0.0);

    // Micronormal
    vec3 H = normalize(V + L);

    // Discard backfacing microfacets
    if (dot(H, V) < 0.0 || dot(H, L) < 0.0)
        return vec3(0.0);

    // Dielectric Fresnel
    // (adjust for adjacent coat, and modulate via specular_weight)
    const float ambient_ior = 1.0;
    float eta_s = mix(pbr.specular_ior/ambient_ior, pbr.specular_ior/pbr.coat_ior, pbr.coat_weight);
    float F_s = sqr((eta_s - 1.0)/(eta_s + 1.0));
    float xi_s = clamp(pbr.specular_weight, 0.0, 1.0/max(F_s, DENOM_TOLERANCE));
    float eps = sign(eta_s - 1.0) * sqrt(xi_s * F_s);
    float eta_ti = (1.0 + eps) / max(1.0 - eps, DENOM_TOLERANCE);
    float F = FresnelDielectricReflectance(abs(dot(V, H)), eta_ti);

    // Compute the NDF roughnesses in the tangent frame
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y, pbr);
    float D = ggx_ndf_eval(H, alpha_x, alpha_y);

    // Shadowing-masking term
    float G2 = ggx_G2(V, L, alpha_x, alpha_y);

    // Jacobian
    float J = 1.0 / max(4.0 * abs(V.z) * abs(L.z), DENOM_TOLERANCE);

    vec3 f = pbr.specular_color * F * D * G2 * J;
    return f;
}

vec3 specular_brdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    // Approximate albedo via (deterministic) Monte-Carlo sampling:
    if (V.z <= 0.0) return vec3(0.0);
    uint rndSeed = 0u;
    const int num_samples = 256;
    float alpha_x, alpha_y;
    specular_ndf_roughnesses(alpha_x, alpha_y, pbr);
    vec3 albedo = vec3(0.0);
    for (int n=0; n<num_samples; ++n)
    {
        vec3 L = ggx_ndf_sample(V, alpha_x, alpha_y, rndSeed);
        vec3 H = normalize(V + L);
        float D = ggx_ndf_eval(H, alpha_x, alpha_y);
        float DV = D * ggx_G1(V, alpha_x, alpha_y) * abs(dot(V, H)) / max(DENOM_TOLERANCE, abs(V.z));
        float dwh_dwo = 1.0 / max(abs(4.0*dot(V, H)), DENOM_TOLERANCE);
        float pdfL = DV * dwh_dwo;
        float NdotL = L.z;
        vec3 f = specular_brdf_evaluate(V, L, pbr);
        albedo += f * abs(NdotL) / max(pdfL, PDF_EPSILON);
    }
    albedo /= float(num_samples);
    return clamp(albedo, vec3(0.0), vec3(1.0));
}

///////////////////////////////////////////////////////////////////////
// Specular BTDF
///////////////////////////////////////////////////////////////////////

vec3 specular_btdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}

vec3 specular_btdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    return vec3(0.0);
}

///////////////////////////////////////////////////////////////////////
// Diffuse BRDF
///////////////////////////////////////////////////////////////////////

vec3 diffuse_brdf_evaluate(in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    return pbr.base_weight * pbr.base_color / PI;
}

vec3 diffuse_brdf_albedo(in vec3 V, const in OpenPBRMaterial pbr)
{
    return pbr.base_weight * pbr.base_color;
}


///////////////////////////////////////////////////////////////////////
// OpenPBR BSDF
///////////////////////////////////////////////////////////////////////

const int ID_FUZZ_BRDF = 0;
const int ID_COAT_BRDF = 1;
const int ID_META_BRDF = 2;
const int ID_SPEC_BRDF = 3;
const int ID_SPEC_BTDF = 4;
const int ID_DIFF_BRDF = 5;
const int ID_SSSC_BTDF = 6;
const int NUM_LOBES    = 7;

struct LobeWeights
{
    // Weight multipliers of individual BSDF lobes
    vec3 w[7];
};

void compute_lobe_weights(in vec3 V, const in OpenPBRMaterial pbr,
                          inout LobeWeights weights)
{
    float F = pbr.fuzz_weight;
    float C = pbr.coat_weight;
    float M = pbr.base_metalness;
    float T = pbr.transmission_weight;
    float S = pbr.subsurface_weight;

    bool fuzzed             = (F > 0.0);
    bool coated             = (C > 0.0);
    bool metallic           = (M > 0.0);
    bool fully_metallic     = (M == 1.0);
    bool transmissive       = (T > 0.0);
    bool fully_transmissive = (T == 1.0);
    bool subsurfaced        = (S > 0.0);
    bool fully_subsurfaced  = (S == 1.0);

    // Fuzz BRDF
    weights.w[ID_FUZZ_BRDF] = vec3(F);

    // Coated base //////////////////////
    vec3 fuzz_albedo = fuzzed  ? fuzz_brdf_albedo(V, pbr) : vec3(0.0);
    vec3 w_coated_base = mix(vec3(1.0), vec3(1.0) - fuzz_albedo, F);

    // Coat BRDF
    weights.w[ID_COAT_BRDF] = w_coated_base * C;

    // Base substrate //////////////////////
    vec3 base_darkening = vec3(1.0); // TODO
    vec3 coat_albedo = coated ? coat_brdf_albedo(V, pbr) : vec3(0.0);
    vec3 w_base_substrate = w_coated_base * mix(vec3(1.0), base_darkening * pbr.coat_color * (vec3(1.0) - coat_albedo), C);

    // Metal BRDF
    weights.w[ID_META_BRDF] = w_base_substrate * M;

    // Dielectric base //////////////////////
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - M));

    // Specular BRDF
    weights.w[ID_SPEC_BRDF] = w_dielectric_base;

    // Specular BTDF
    weights.w[ID_SPEC_BTDF] = w_dielectric_base * T;

    // Opaque dielectric base //////////////////////
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - T);

    // Subsurface BSSRDF
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium
    weights.w[ID_SSSC_BTDF] = w_opaque_dielectric_base * S;

    // Diffuse BRDF
    weights.w[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - S) * (vec3(1.0) - specular_brdf_albedo(V, pbr));
}

vec3 lobe_eval(int lobe_id, in vec3 V, in vec3 L, const in OpenPBRMaterial pbr)
{
    switch (lobe_id)
    {
        case ID_FUZZ_BRDF: return     fuzz_brdf_evaluate(V, L, pbr);
        case ID_COAT_BRDF: return     coat_brdf_evaluate(V, L, pbr);
        case ID_META_BRDF: return    metal_brdf_evaluate(V, L, pbr);
        case ID_SPEC_BRDF: return specular_brdf_evaluate(V, L, pbr);
        case ID_DIFF_BRDF: return  diffuse_brdf_evaluate(V, L, pbr);
        case ID_SPEC_BTDF:
        case ID_SSSC_BTDF: return specular_btdf_evaluate(V, L, pbr);
    }
}

vec3 openpbr_bsdf(const in vec3 V, const in vec3 L,
                  const in LobeWeights weights, const in OpenPBRMaterial pbr)
{
    vec3 f = vec3(0.0);
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
    {
        vec3 w = weights.w[lobe_id];
        if (any(greaterThan(w, vec3(0.f))))
            f += w * lobe_eval(lobe_id, V, L, pbr);
    }
    return f;
}

vec3 albedo_eval(int lobe_id, in vec3 V, const in OpenPBRMaterial pbr)
{
    switch (lobe_id)
    {
        case ID_FUZZ_BRDF: return     fuzz_brdf_albedo(V, pbr);
        case ID_COAT_BRDF: return     coat_brdf_albedo(V, pbr);
        case ID_META_BRDF: return    metal_brdf_albedo(V, pbr);
        case ID_SPEC_BRDF: return specular_brdf_albedo(V, pbr);
        case ID_DIFF_BRDF: return  diffuse_brdf_albedo(V, pbr);
        case ID_SPEC_BTDF:
        case ID_SSSC_BTDF: return specular_btdf_albedo(V, pbr);
    }
    return vec3(0.0);
}

vec3 openpbr_bsdf_albedo(const in vec3 V,
                         const in LobeWeights weights, const in OpenPBRMaterial pbr)
{
    // Assume in local space where z is along normal
    vec3 albedo = vec3(0.0);
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)
    {
        vec3 w = weights.w[lobe_id];
        if (any(greaterThan(w, vec3(0.f))))
            albedo += w * albedo_eval(lobe_id, V, pbr);
    }
    return albedo;
}

vec3 diffuse_albedo(const in vec3 V,
                    const in LobeWeights weights, const in OpenPBRMaterial pbr)
{
    vec3 albedo = vec3(0.0);
    albedo += weights.w[ID_DIFF_BRDF] * diffuse_brdf_albedo(V, pbr);
    albedo += weights.w[ID_FUZZ_BRDF] * fuzz_brdf_albedo(V, pbr);
    return albedo;
}

vec3 specular_albedo(const in vec3 V,
                     const in LobeWeights weights, const in OpenPBRMaterial pbr)
{
    vec3 albedo = vec3(0.0);
    albedo += weights.w[ID_SPEC_BRDF] * specular_brdf_albedo(V, pbr);
    albedo += weights.w[ID_META_BRDF] * metal_brdf_albedo(V, pbr);
    albedo += weights.w[ID_COAT_BRDF] * coat_brdf_albedo(V, pbr);
    return albedo;
}



///////////////////////////////////////////////////////////////////////
// Fragment shader main
///////////////////////////////////////////////////////////////////////

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <envmap_common_pars_fragment>
#include <shadowmap_pars_fragment>

void main()
{
    #include <map_fragment>
	#include <color_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

    // Set up vertex frame
    vec3 Nworld = normalize(inverseTransformDirection(normal, viewMatrix));
    Basis basis = makeBasis(Nworld);

    vec3 Vworld = normalize(cameraPosition - vWorldPosition);
    vec3 Vlocal = worldToLocal(Vworld, basis);

    // Initialize material
    OpenPBRMaterial pbr;
    init_openpbr_material(pbr);
    pbr.specular_roughness = max(0.05, pbr.specular_roughness);

    LobeWeights lobe_weights;
    compute_lobe_weights(Vlocal, pbr, lobe_weights);

    // Compute direct lighting
    vec3 radiance = vec3(0.0);
    {
        // Sun contribution
        {
            // Query shadow map for sun visibility
            vec3 sun_visibility = vec3(1.0);
            #if ( NUM_DIR_LIGHTS > 0 )
            #pragma unroll_loop_start
                for (int i = 0; i < NUM_DIR_LIGHTS; i++)
                {
                    DirectionalLight directionalLight = directionalLights[i];
                    IncidentLight directLight;
                    getDirectionalLightInfo( directionalLight, directLight );
                    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
                    DirectionalLightShadow directionalLightShadow = directionalLightShadows[ i ];
                    sun_visibility *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[i],
                                                                                            directionalLightShadow.shadowMapSize,
                                                                                            directionalLightShadow.shadowBias,
                                                                                            directionalLightShadow.shadowRadius,
                                                                                            vDirectionalShadowCoord[i] ) : 1.0;
                    #endif
                }
            #pragma unroll_loop_end
            #endif

            vec3 Lworld = normalize(sunDir);
            float NdotL = max(0.0, dot(Nworld, Lworld));
            sun_visibility *= NdotL > 0.0 ? 1.0 : 0.0;
            if (length(sun_visibility) > 0.0)
            {
                vec3 Llocal = worldToLocal(Lworld, basis);
                vec3 f = openpbr_bsdf(Vlocal, Llocal, lobe_weights, pbr);
                radiance += sun_visibility * f * NdotL * sunColor * sunPower;
            }
        }

        // Sky contribution
        {
            vec3 Lworld = normalize(-Vworld + 2.0*dot(Nworld, Vworld)*Nworld); // query env map at direction reflect(V, N)

            // diffuse contribution
            {
                vec4 diff_env = textureLod(envMap, vec3(Lworld.x, Lworld.yz), 100.0);
                radiance += skyColor * skyPower * diff_env.rgb * diffuse_albedo(Vlocal, lobe_weights, pbr);
            }

            // specular contribution
            {
                float lod = 30.0 * specular_roughness;
                vec4 spec_env = textureLod(envMap, vec3(Lworld.x, Lworld.yz), lod);
                radiance += skyColor * skyPower * spec_env.rgb * specular_albedo(Vlocal, lobe_weights, pbr);
            }
        }
    }

    gl_FragColor.rgb = radiance;
    gl_FragColor.a = 1.0;

}
