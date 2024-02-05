
//////////////////////////////////////////////////////
// camera uniforms
//////////////////////////////////////////////////////

uniform mat4 cameraWorldMatrix;
uniform mat4 invProjectionMatrix;
uniform mat4 invModelMatrix;
uniform vec2 resolution;

//////////////////////////////////////////////////////
// geometry uniforms
//////////////////////////////////////////////////////

uniform BVH bvh_surface;
uniform BVH bvh_props;

uniform sampler2D normalAttribute_surface;
uniform sampler2D normalAttribute_props;
uniform sampler2D tangentAttribute_surface;
uniform sampler2D tangentAttribute_props;
uniform bool has_normals_surface;
uniform bool has_tangents_surface;
uniform bool has_normals_props;
uniform bool has_tangents_props;

//////////////////////////////////////////////////////
// renderer uniforms
//////////////////////////////////////////////////////

uniform float accumulation_weight;
uniform float samples;
uniform bool wireframe;
uniform vec3 neutral_color;
uniform bool smooth_normals;

//////////////////////////////////////////////////////
// material uniforms
//////////////////////////////////////////////////////

uniform float base_weight;
uniform vec3 base_color;
uniform float base_roughness;
uniform float base_metalness;

uniform float specular_weight;
uniform vec3  specular_color;
uniform float specular_roughness;
uniform float specular_anisotropy;
uniform float specular_rotation;
uniform float specular_ior;
uniform float specular_ior_level;

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

uniform float coat_weight;
uniform vec3  coat_color;
uniform float coat_roughness;
uniform float coat_anisotropy;
uniform float coat_rotation;
uniform float coat_ior;
uniform float coat_ior_level;

uniform float fuzz_weight;
uniform vec3  fuzz_color;
uniform float fuzz_roughness;

uniform float geometry_opacity;
uniform bool geometry_thin_walled;

//////////////////////////////////////////////////////
// lighting uniforms
//////////////////////////////////////////////////////

uniform float skyPower;
uniform vec3 skyColor;

uniform float sunPower;
uniform float sunAngularSize;
uniform vec3 sunColor;
uniform vec3 sunDir;

//////////////////////////////////////////////////////
// UVs
//////////////////////////////////////////////////////
varying vec2 vUv;

//////////////////////////////////////////////////////
// useful constants
//////////////////////////////////////////////////////

const float PI                    = 3.141592653589793;
const float PI2                   = 6.283185307179586;
const float PI_HALF               = 1.5707963267948966;
const float RECIPROCAL_PI         = 0.3183098861837907;
const float RECIPROCAL_PI2        = 0.15915494309189535;

// tolerances
const float HUGE_DIST             = 1.0e20;
const float RAY_OFFSET            = 1.0e-4;
const float DENOM_TOLERANCE       = 1.0e-12;
const float RADIANCE_EPSILON      = 1.0e-12;
const float TRANSMITTANCE_EPSILON = 1.0e-4;
const float THROUGHPUT_EPSILON    = 1.0e-6;
const float PDF_EPSILON           = 1.0e-6;
const float IOR_EPSILON           = 1.0e-5;
const float FLT_EPSILON           = 1.1920929e-7;

// material indices
const int MATERIAL_PROPS   = 0;
const int MATERIAL_OPENPBR = 1;

//////////////////////////////////////////////////////
// utils
//////////////////////////////////////////////////////

vec3 safe_normalize(in vec3 N)
{
    float l = length(N);
    return N/max(l, DENOM_TOLERANCE);
}

float maxComponent(in vec3 v)
{
    return max(v.x, max(v.y, v.z));
}

float minComponent(in vec3 v)
{
    return min(v.x, min(v.y, v.z));
}

#define sqr(x) ((x)*(x))

float cosTheta2( in vec3 w)  { return w.z*w.z; }
float cosTheta(  in vec3 w)  { return w.z; }
float sinTheta2( in vec3 w)  { return 1.0 - cosTheta2(w); }
float sinTheta(  in vec3 w)  { return sqrt(max(0.0, sinTheta2(w))); }
float tanTheta2(in vec3 nLocal) { float ct2 = cosTheta2(nLocal); return max(0.0, 1.0 - ct2) / max(ct2, DENOM_TOLERANCE); }
float tanTheta(in vec3 nLocal)  { return sqrt(max(0.0, tanTheta2(nLocal))); }
float cosPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.x / S, -1.0, 1.0); }
float sinPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.y / S, -1.0, 1.0); }

/////////////////////////////////////////////////////////////////////////
// Transform to/from local space basis (i.e. tangent space frame)
/////////////////////////////////////////////////////////////////////////

struct Basis
{
    // right-handed coordinate system
    vec3 nW; // aligned with the z-axis in local space
    vec3 tW; // aligned with the x-axis in local space
    vec3 bW; // aligned with the y-axis in local space
    vec3 baryCoord;
};

void setFrame(in vec3 nW, inout Basis basis)
{
    basis.nW = safe_normalize(nW);
    if (abs(nW.z) < abs(nW.x))
    {
        basis.tW.x =  nW.z;
        basis.tW.y =  0.0;
        basis.tW.z = -nW.x;
    }
    else
    {
        basis.tW.x =  0.0;
        basis.tW.y =  nW.z;
        basis.tW.z = -nW.y;
    }
    basis.tW = safe_normalize(basis.tW);
    basis.bW = cross(basis.nW, basis.tW);
}

Basis makeBasis(in vec3 nW)
{
    Basis basis;
    setFrame(nW, basis);
    return basis;
}

Basis makeBasis(in vec3 nW, in vec3 baryCoord)
{
    Basis basis;
    setFrame(nW, basis);
    basis.baryCoord = baryCoord;
    return basis;
}

/*
Basis makeBasis(in vec3 nW, in vec3 tW, in vec3 baryCoord)
{
    Basis basis;
    basis.nW = safe_normalize(nW);
    basis.tW = safe_normalize(tW);
    basis.bW = cross(basis.nW, basis.tW);
    basis.baryCoord = baryCoord;
    return basis;
}
*/

vec3 worldToLocal(in vec3 vWorld, in Basis basis)
{
    return vec3( dot(vWorld, basis.tW),
                 dot(vWorld, basis.bW),
                 dot(vWorld, basis.nW) );
}

vec3 localToWorld(in vec3 vLocal, in Basis basis)
{
    return basis.tW*vLocal.x + basis.bW*vLocal.y + basis.nW*vLocal.z;
}


/////////////////////////////////////////////////////////////////////////
// Transform to/from rotated basis, for anisotropy calculations
/////////////////////////////////////////////////////////////////////////

struct LocalFrameRotation
{
    mat2 M;
    mat2 Minv;
};

LocalFrameRotation getLocalFrameRotation(in float angle)
{
    LocalFrameRotation rotation;
    if (angle==0.0 || angle==PI2)
    {
        mat2 identity = mat2(1.0, 0.0, 0.0, 1.0);
        rotation.M    = identity;
        rotation.Minv = identity;
    }
    else
    {
        float cos_rot = cos(angle);
        float sin_rot = sin(angle);
        rotation.M    = mat2(cos_rot,  sin_rot, -sin_rot, cos_rot);
        rotation.Minv = mat2(cos_rot, -sin_rot,  sin_rot, cos_rot);
    }
    return rotation;
}

vec3 localToRotated(in vec3 vLocal, in LocalFrameRotation rotation)
{
    vec2 xy_rot = rotation.M * vLocal.xy;
    return vec3(xy_rot.x, xy_rot.y, vLocal.z);
}

vec3 rotatedToLocal(in vec3 vRotated, in LocalFrameRotation rotation)
{
    vec2 xy_local = rotation.Minv * vRotated.xy;
    return vec3(xy_local.x, xy_local.y, vRotated.z);
}


/////////////////////////////////////////////////////////////////////////
// Sampling formulae
/////////////////////////////////////////////////////////////////////////

// https://www.pcg-random.org/
uint pcg(uint v)
{
	uint state = v * 747796405u + 2891336453u;
	uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
	return (word >> 22u) ^ word;
}

void xorshift(inout uint seed)
{
    // https://en.wikipedia.org/wiki/Xorshift
    seed ^= seed << 13u;
    seed ^= seed >> 17u;
    seed ^= seed << 5u;
}

float rand(inout uint seed)
{
    seed = pcg(seed);
    const float uint_range = 1.0 / float(0xFFFFFFFFU);
    return float(seed - 1U) * uint_range;
}

// PDF for cosine-weighted sampling of hemisphere
float pdfHemisphereCosineWeighted(in vec3 wiL)
{
    if (wiL.z <= PDF_EPSILON) return PDF_EPSILON / PI;
    return wiL.z / PI;
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

float powerHeuristic(const float a, const float b)
{
    return sqr(a) / max(DENOM_TOLERANCE, sqr(a) + sqr(b));
}

float sample_triangle_filter(float xi)
{
    // sample from triangle filter, returning result in [-1, 1]
    return xi < 0.5 ? sqrt(2.0*xi) - 1.0 : 1.0 - sqrt(2.0 - 2.0*xi);
}


/////////////////////////////////////////////////////////////////////////
// material calculations
/////////////////////////////////////////////////////////////////////////

bool cutout(in int material, inout uint rndSeed)
{
    if (material != MATERIAL_OPENPBR)
        return false;
    if (!geometry_thin_walled || geometry_opacity==1.0)
        return false;
    float X = rand(rndSeed);
    if (X < 1.0 - geometry_opacity) return true;
    return false;
}

// cosi    = magnitude of the cosine of the incident ray angle to the micronormal
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)
float FresnelDielectricReflectance(in float cosi, in float eta_ti)
{
    float c = cosi;
    float g = eta_ti*eta_ti - 1.0 + c*c;
    if (g > 0.0)
    {
        g = sqrt(g);
        float A = (g-c) / (g+c);
        float B = (c*(g+c) - 1.0) / (c*(g-c) + 1.0);
        return 0.5*A*A*(1.0 + B*B);
    }
    return 1.0; // total internal reflection
}


/////////////////////////////////////////////////////////////////////////
// GGX Microfacet formulae
/////////////////////////////////////////////////////////////////////////

// m = the microfacet normal (in the local space where z = the macrosurface normal)
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
// NB, this assumes wiL is in the +z hemisphere, and returns a sampled micronormal in that hemisphere.
vec3 ggx_ndf_sample(in vec3 wiL, float alpha_x, float alpha_y, inout uint rndSeed)
{
    vec2 Xi = vec2(rand(rndSeed), rand(rndSeed));
    vec3 V = wiL;
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

float ggx_lambda(in vec3 w, float alpha_x, float alpha_y)
{
    if (abs(w.z) < FLT_EPSILON) return 0.0;
    return (-1.0 + sqrt(1.0 + (sqr(alpha_x*w.x) + sqr(alpha_y*w.y))/sqr(w.z))) / 2.0;
}

float ggx_G1(in vec3 w, float alpha_x, float alpha_y)
{
    return 1.0 / (1.0 + ggx_lambda(w, alpha_x, alpha_y));
}

// Height-correlated form of GGX shadowing-masking function
float ggx_G2(in vec3 woL, in vec3 wiL, float alpha_x, float alpha_y)
{
    return 1.0 / (1.0 + ggx_lambda(woL, alpha_x, alpha_y) + ggx_lambda(wiL,  alpha_x, alpha_y));
}


/////////////////////////////////////////////////////////////////////////
// Volumetrics
/////////////////////////////////////////////////////////////////////////

// Describes the internal volume of bulk transmissive media
struct Volume
{
    vec3 extinction;    // units of inverse length
    vec3 albedo;        // dimensional, single-scattering albedo
    float anisotropy;   // phase function anisotropy in [-1, 1]
};

// Sample Henyey-Greenstein phase function
vec3 samplePhaseFunction(in vec3 dW, float anisotropy, inout uint rndSeed)
{
    float U = rand(rndSeed);
    float V = rand(rndSeed);
    float g = anisotropy;
    float costheta;
    if (abs(g) < 1.0e-3)
        costheta = 1.0 - 2.0*U;
    else
        costheta = 1.0/(2.0*g) * (1.0 + g*g - ((1.0-g*g)*(1.0-g+2.0*g*U)));
    float sintheta = sqrt(max(0.0, 1.0-costheta*costheta));
    float phi = 2.0*PI*V;
    Basis basis = makeBasis(dW);
    return costheta*dW + sintheta*(cos(phi)*basis.tW + sin(phi)*basis.bW);
}

float wavelength_nm;

// Wavelength-dependent IOR according to Cauchy formula
float specular_ior_dispersive()
{
    const float lambda_C = 656.3;
    const float lambda_d = 587.6;
    const float lambda_F = 486.1;
    const float lambda_FC2 = 1.0 / (1.0/(lambda_F*lambda_F) - 1.0/(lambda_C*lambda_C));
    float Vd = transmission_dispersion_abbe_number / max(DENOM_TOLERANCE, transmission_dispersion_scale);
    float nd = specular_ior;
    float B = (nd - 1.0) * lambda_FC2 / max(DENOM_TOLERANCE, Vd);
    float A = nd - B/sqr(lambda_d);
    return A + B/sqr(wavelength_nm);
}


/////////////////////////////////////////////////////////////////////////
// Color utils
/////////////////////////////////////////////////////////////////////////

// Spectrum to XYZ approx function from Sloan: http://jcgt.org/published/0002/02/01/paper.pdf
// Inputs:  Wavelength in nanometers
float xFit_1931(float w)
{
    float t1 = (w-442.0)*((w<442.0)?0.0624:0.0374),
          t2 = (w-599.8)*((w<599.8)?0.0264:0.0323),
          t3 = (w-501.1)*((w<501.1)?0.0490:0.0382);
    return 0.362*exp(-0.5*t1*t1) + 1.056*exp(-0.5*t2*t2)- 0.065*exp(-0.5*t3*t3);
}
float yFit_1931(float w)
{
    float t1 = (w-568.8)*((w<568.8)?0.0213:0.0247),
          t2 = (w-530.9)*((w<530.9)?0.0613:0.0322);
    return 0.821*exp(-0.5*t1*t1) + 0.286*exp(-0.5*t2*t2);
}
float zFit_1931(float w)
{
    float t1 = (w-437.0)*((w<437.0)?0.0845:0.0278),
          t2 = (w-459.0)*((w<459.0)?0.0385:0.0725);
    return 1.217*exp(-0.5*t1*t1) + 0.681*exp(-0.5*t2*t2);
}

#define xyzFit_1931(w) vec3(xFit_1931(w), yFit_1931(w), zFit_1931(w))

vec3 xyzToRgb(vec3 XYZ)
{
	return XYZ * mat3( 3.240479, -1.537150, -0.498535,
	                  -0.969256 , 1.875991,  0.041556,
	                   0.055648, -0.204043,  1.057311);
}
