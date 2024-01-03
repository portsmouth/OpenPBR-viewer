
uniform mat4 cameraWorldMatrix;
uniform mat4 invProjectionMatrix;
uniform mat4 invModelMatrix;
uniform vec2 resolution;

uniform sampler2D normalAttribute_shell;
uniform sampler2D normalAttribute_scene;
uniform sampler2D tangentAttribute_shell;
uniform sampler2D tangentAttribute_scene;
uniform bool has_normals_shell;
uniform bool has_tangents_shell;
uniform bool has_normals_scene;
uniform bool has_tangents_scene;

uniform BVH bvh_shell;
uniform BVH bvh_scene;

uniform float accumulation_weight;
uniform float seed;

varying vec2 vUv;

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
// useful constants
//////////////////////////////////////////////////////

const float PI                    = 3.141592653589793;
const float PI2                   = 6.283185307179586;
const float PI_HALF               = 1.5707963267948966;
const float RECIPROCAL_PI         = 0.3183098861837907;
const float RECIPROCAL_PI2        = 0.15915494309189535;

// tolerances
const float HUGE_DIST             = 1.0e20;
const float RAY_OFFSET            = 1.0e-3;
const float DENOM_TOLERANCE       = 5.0e-7;
const float RADIANCE_EPSILON      = 1.0e-6;
const float TRANSMITTANCE_EPSILON = 1.0e-3;
const float PDF_EPSILON           = 1.0e-6;
const float FLT_EPSILON           = 1.2e-7;

// material indices
const int SCENE_MATERIAL = 0;
const int SHELL_MATERIAL = 1;

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

float sqr(float x)              { return x*x; }

float cosTheta2(in vec3 nLocal) { return nLocal.z*nLocal.z; }
float cosTheta(in vec3 nLocal)  { return nLocal.z; }
float sinTheta2(in vec3 nLocal) { return 1.0 - cosTheta2(nLocal); }
float sinTheta(in vec3 nLocal)  { return sqrt(max(0.0, sinTheta2(nLocal))); }
float tanTheta2(in vec3 nLocal) { float ct2 = cosTheta2(nLocal); return max(0.0, 1.0 - ct2) / max(ct2, DENOM_TOLERANCE); }
float tanTheta(in vec3 nLocal)  { return sqrt(max(0.0, tanTheta2(nLocal))); }

float cosPhi2(in vec3 nLocal)   { return nLocal.x / max(sinTheta(nLocal), DENOM_TOLERANCE); }
float sinPhi2(in vec3 nLocal)   { return nLocal.y / max(sinTheta(nLocal), DENOM_TOLERANCE); }


/////////////////////////////////////////////////////////////////////////
// RNG
/////////////////////////////////////////////////////////////////////////

int xorshift(in int value) 
{
    // https://en.wikipedia.org/wiki/Xorshift
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;
    return value;
}

float rand(inout int seed)
{
    // https://www.shadertoy.com/view/tsf3Dn
    seed = xorshift(seed);
    return abs(fract(float(seed) / 3141.592653));
}

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

Basis makeBasis(in vec3 nW, in vec3 baryCoord)
{
    Basis basis;
    basis.nW = normalize(nW);
    if (abs(nW.z) < abs(nW.x))
    {
        basis.tW.x =  basis.nW.z;
        basis.tW.y =  0.0;
        basis.tW.z = -basis.nW.x;
    }
    else
    {
        basis.tW.x =  0.0;
        basis.tW.y = basis.nW.z;
        basis.tW.z = -basis.nW.y;
    }
    basis.tW = safe_normalize(basis.tW);
    basis.bW = cross(nW, basis.tW);
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

// pdf for cosine-weighted sampling of hemisphere
float pdfHemisphereCosineWeighted(in vec3 wiL)
{
    if (wiL.z < 0.0) return 0.0;
    return wiL.z / PI;
}

// Do cosine-weighted sampling of hemisphere
vec3 sampleHemisphereCosineWeighted(inout int rndSeed, inout float pdf)
{
    float r = sqrt(rand(rndSeed));
    float theta = 2.0 * PI * rand(rndSeed);
    float x = r * cos(theta);
    float y = r * sin(theta);
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));
    vec3 wiL = vec3(x, y, z);
    pdf = pdfHemisphereCosineWeighted(wiL);
    return wiL;
}

float balanceHeuristic(const float a, const float b)
{
    return a / (a + b);
}

float sample_triangle_filter(float xi)
{
    // sample from triangle filter, returning result in [-1, 1]
    return xi < 0.5 ? sqrt(2.0*xi) - 1.0 : 1.0 - sqrt(2.0 - 2.0*xi);
}


/////////////////////////////////////////////////////////////////////////
// material calculations 
/////////////////////////////////////////////////////////////////////////

bool cutout(in int material, inout int rndSeed)
{
    if (material != SHELL_MATERIAL)
        return false;
    if (!geometry_thin_walled || geometry_opacity==1.0)
        return false;
    float X = rand(rndSeed);
    if (X < 1.0 - geometry_opacity) return true;
    return false;
}

// cosi    = magnitude of the cosine of the incident ray angle to the normal
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

/*
vec3 ggx_ndf_sample(in vec3 wiL, float alpha_x, float alpha_y, inout int rndSeed)
{
    vec3 Vh = normalize(vec3(alpha_x*wiL.x, alpha_y*wiL.y, wiL.z));
    float lensq = Vh.x*Vh.x + Vh.y*Vh.y;
    vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) * 1.0/max(DENOM_TOLERANCE, sqrt(lensq)) : vec3(1.0, 0.0, 0.0);
    vec3 T2 = cross(Vh, T1);
    float r = sqrt(rand(rndSeed));
    float phi = 2.0 * PI * rand(rndSeed);
    float t1 = r * cos(phi);
    float t2 = r * sin(phi);
    float s = 0.5 * (1.0 + Vh.z);
    t2 = (1.0 - s)*sqrt(1.0 - t1*t1) + s*t2;
    vec3 Nh = t1*T1 + t2*T2 + sqrt(max(0.0, 1.0 - t1*t1 - t2*t2))*Vh;
    vec3 Ne = normalize(vec3(alpha_x*Nh.x, alpha_y*Nh.y, max(0.0, Nh.z)));
    return Ne;
}
*/

vec3 ggx_ndf_sample(in vec3 wiL, float alpha_x, float alpha_y, inout int rndSeed)
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
    if (w.z < FLT_EPSILON) return 0.0;
    return (-1.0 + sqrt(1.0 + (sqr(alpha_x*w.x) + sqr(alpha_y*w.y))/sqr(w.z))) / 2.0;
}

// Shadow-masking function
// Approximation from Walter et al (v = arbitrary direction, m = microfacet normal)
float ggx_G1(in vec3 w, float alpha_x, float alpha_y)
{
    return 1.0 / (1.0 + ggx_lambda(w, alpha_x, alpha_y));
}

float ggx_G2(in vec3 woL, in vec3 wiL, float alpha_x, float alpha_y)
{
    return 1.0 / (1.0 + ggx_lambda(woL, alpha_x, alpha_y) + ggx_lambda(wiL,  alpha_x, alpha_y));
}
