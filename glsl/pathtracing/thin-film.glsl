#ifdef THIN_FILM_ENABLED

//////////////////////////////////////////////////////////////////////////////
// Thin-film iridescence via Airy summation
//
// Reference: Kutz & Portsmouth, "Thin-Film Iridescence via Complex Arithmetic"
//
// Implements the 6-step Airy summation procedure using complex arithmetic
// throughout. The unified approach handles dielectric and conductor
// substrates identically, and naturally handles TIR via complex cosines.
//
// In the pathtracer: evaluates at a stochastically sampled hero wavelength.
//////////////////////////////////////////////////////////////////////////////

// Complex arithmetic (complex numbers as vec2(real, imag))
vec2 cx(float r, float i)              { return vec2(r, i); }
vec2 cx_mul(in vec2 a, in vec2 b)      { return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
vec2 cx_conj(in vec2 z)                { return vec2(z.x, -z.y); }
float cx_abs2(in vec2 z)               { return z.x*z.x + z.y*z.y; }
vec2 cx_div(in vec2 a, in vec2 b)      { return cx_mul(a, cx_conj(b)) / max(cx_abs2(b), 1e-30); }
vec2 cx_exp(in vec2 z)                 { return exp(z.x) * vec2(cos(z.y), sin(z.y)); }

vec2 cx_sqrt(in vec2 z)
{
    float r = length(z);
    if (r < 1e-30) return vec2(0.0);
    float half_angle = 0.5 * atan(z.y, z.x);
    return sqrt(r) * vec2(cos(half_angle), sin(half_angle));
}


// From "Artist Friendly Metallic Fresnel" by Ole Gulbrandsen, JCGT 2014
void GulbrandsenMapping(in vec3 F0, in vec3 edgetint,
                        inout vec3 n, inout vec3 k)
{
   vec3 r = clamp(F0, 0.0, 0.99);
   vec3 g = edgetint;
   vec3 r_sqrt = sqrt(r);
   vec3 n_min = (vec3(1.0) -      r) / (vec3(1.0) +      r);
   vec3 n_max = (vec3(1.0) + r_sqrt) / (vec3(1.0) - r_sqrt);
   n = mix(n_max, n_min, g);
   vec3 k2 = (sqr(n + vec3(1.0)) * r - sqr(n - vec3(1.0))) / (vec3(1.0) - r);
   k2 = max(vec3(0), k2);
   k = sqrt(k2);
}


// Interpolate per-channel conductor IOR (n, k) to a single complex IOR at
// the hero wavelength, using CIE color matching functions for the weights.
vec2 conductor_ior_at_wavelength(in vec3 n_rgb, in vec3 k_rgb, float lambda)
{
    vec3 w = max(vec3(0.0), xyzToRgb(xyzFit_1931(lambda)));
    float ws = w.r + w.g + w.b;
    if (ws < 1e-10) return vec2(n_rgb.g, k_rgb.g); // fallback to green channel
    w /= ws;
    return vec2(dot(n_rgb, w), dot(k_rgb, w));
}


//////////////////////////////////////////////////////////////////////////////
// 6-step Airy summation (following the paper)
//////////////////////////////////////////////////////////////////////////////

// Step 1: Snell's law via complex arithmetic.
// Computes cos(theta_t) given cos(theta_i) and the IORs of both media.
// Branch selection: Im(n_t * cos_t) >= 0, ensuring correct decay in absorbing media.
vec2 cos_refracted(in vec2 cos_i, in vec2 n_i, in vec2 n_t)
{
    vec2 sin_i_sq = cx(1.0, 0.0) - cx_mul(cos_i, cos_i);
    vec2 ratio = cx_div(n_i, n_t);
    vec2 sin_t_sq = cx_mul(cx_mul(ratio, ratio), sin_i_sq);
    vec2 cos_t = cx_sqrt(cx(1.0, 0.0) - sin_t_sq);
    if (cx_mul(n_t, cos_t).y < 0.0) cos_t = -cos_t;
    return cos_t;
}

// Step 2: Complex Fresnel amplitude coefficients at an interface.
// Works identically for dielectric-dielectric and dielectric-conductor interfaces.
void fresnel_coeffs(in vec2 cos_i, in vec2 cos_t, in vec2 n_i, in vec2 n_t,
                    out vec2 r_s, out vec2 r_p, out vec2 t_s, out vec2 t_p)
{
    vec2 ni_ci = cx_mul(n_i, cos_i);
    vec2 nt_ct = cx_mul(n_t, cos_t);
    vec2 ni_ct = cx_mul(n_i, cos_t);
    vec2 nt_ci = cx_mul(n_t, cos_i);

    r_s = cx_div(ni_ci - nt_ct, ni_ci + nt_ct);
    t_s = cx_div(2.0 * ni_ci,   ni_ci + nt_ct);
    r_p = cx_div(nt_ci - ni_ct, nt_ci + ni_ct);
    t_p = cx_div(2.0 * ni_ci,   nt_ci + ni_ct);
}


// Thin-film power reflectance via the 6-step Airy summation.
//
// Parameters:
//   cos_1:  cos(theta_1), real, in (0, 1]
//   n_1:    IOR of ambient medium (real)
//   n_2:    IOR of thin film (real)
//   n_3:    IOR of substrate (complex: vec2(n, k))
//   d:      film thickness (nm)
//   lambda: vacuum wavelength (nm)
//
// Returns: unpolarized power reflectance R = (R_s + R_p) / 2
float thin_film_R(float cos_1, float n_1, float n_2, in vec2 n_3, float d, float lambda)
{
    vec2 cn1 = cx(n_1, 0.0);
    vec2 cn2 = cx(n_2, 0.0);

    // Step 1: Snell's law at both interfaces
    vec2 cos_2 = cos_refracted(cx(cos_1, 0.0), cn1, cn2);
    vec2 cos_3 = cos_refracted(cos_2, cn2, n_3);

    // Step 2: Fresnel coefficients at 1→2 and 2→3 interfaces
    vec2 r12_s, r12_p, t12_s, t12_p;
    fresnel_coeffs(cx(cos_1, 0.0), cos_2, cn1, cn2, r12_s, r12_p, t12_s, t12_p);

    vec2 r23_s, r23_p, t23_s, t23_p;
    fresnel_coeffs(cos_2, cos_3, cn2, n_3, r23_s, r23_p, t23_s, t23_p);

    // Step 3: Reciprocity for 2→1
    vec2 r21_s = -r12_s;
    vec2 r21_p = -r12_p;
    vec2 ratio = cx_div(cx_mul(cn2, cos_2), cx_mul(cn1, cx(cos_1, 0.0)));
    vec2 t21_s = cx_mul(t12_s, ratio);
    vec2 t21_p = cx_mul(t12_p, ratio);

    // Step 4: Round-trip phase shift inside the film
    //   delta = 4*pi * n_2 * d * cos_2 / lambda  (complex, since cos_2 may be complex)
    vec2 delta = (4.0 * PI * n_2 * d / lambda) * cos_2;
    vec2 phi = cx_exp(cx(-delta.y, delta.x));  // exp(i * delta)

    // Step 5: Airy summation
    //   r_tot = r12 + t12 * r23 * t21 * phi / (1 - r21 * r23 * phi)
    vec2 denom_s = cx(1.0, 0.0) - cx_mul(r21_s, cx_mul(r23_s, phi));
    vec2 numer_s = cx_mul(t12_s, cx_mul(r23_s, cx_mul(t21_s, phi)));
    vec2 r_s = r12_s + cx_div(numer_s, denom_s);

    vec2 denom_p = cx(1.0, 0.0) - cx_mul(r21_p, cx_mul(r23_p, phi));
    vec2 numer_p = cx_mul(t12_p, cx_mul(r23_p, cx_mul(t21_p, phi)));
    vec2 r_p = r12_p + cx_div(numer_p, denom_p);

    // Step 6: Power reflectance (unpolarized)
    float R = 0.5 * (cx_abs2(r_s) + cx_abs2(r_p));
    return clamp(R, 0.0, 1.0);
}


//////////////////////////////////////////////////////////////////////////////
// Wrappers for the OpenPBR material model
//////////////////////////////////////////////////////////////////////////////

vec3 FresnelThinFilmOverDielectric(float mui, float eta_fe)
{
    float n_external = thin_film_ior / eta_fe;
#ifdef TRANSMISSION_ENABLED
    float n_substrate = specular_ior_dispersive();
#else
    float n_substrate = specular_ior;
#endif
    float R = thin_film_R(mui, n_external, thin_film_ior,
                          cx(n_substrate, 0.0),
                          thin_film_thickness, wavelength_nm);
    return vec3(R);
}

vec3 FresnelThinFilmOverConductor(float mui, float eta_fe)
{
    float n_external = thin_film_ior / eta_fe;
    vec3 n_rgb, k_rgb;
    GulbrandsenMapping(base_weight * base_color, specular_color, n_rgb, k_rgb);
    vec2 nk = conductor_ior_at_wavelength(n_rgb, k_rgb, wavelength_nm);
    float R = thin_film_R(mui, n_external, thin_film_ior,
                          cx(nk.x, nk.y),
                          thin_film_thickness, wavelength_nm);
    return vec3(R);
}

#endif // THIN_FILM_ENABLED
