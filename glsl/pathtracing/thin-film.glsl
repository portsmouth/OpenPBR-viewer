#ifdef THIN_FILM_ENABLED

/*
    Simplified implementation of thin-film Fresnel, based on:

        "A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence", Belcour & Barla, SIGGRAPH 2017

    Here we ignore the true spectral dependence of the RGB channels,
    and just do a monochromatic computation for each channel assuming a fixed wavelength.
    This doesn't match the ground truth, but is a plausible, fast approximation.
*/

vec2 complex(float a, float b)           { return vec2(a, b); }
vec2 complex_mul(in vec2 z1, in vec2 z2) { return vec2(z1.x*z2.x - z1.y*z2.y, z1.x*z2.y + z1.y*z2.x); }
vec2 complex_conj(in vec2 z)             { return complex(z.x, -z.y); }
float complex_mag2(vec2 z)               { return sqr(z.x) + sqr(z.y); }
vec2 complex_inv(in vec2 z)              { return complex_conj(z) / complex_mag2(z); }
vec2 complex_add(float a, in vec2 z)     { return vec2(a + z.x,  z.y); }
vec2 complex_sub(float a, in vec2 z)     { return vec2(a - z.x, -z.y); }


// From "Artist Friendly Metallic Fresnel" by Ole Gulbrandsen, JCGT 2014
//  - given F0 and edge-tint, returns vec3 n, k (i.e. metal IOR and absorption)
void GulbrandsenMapping(in vec3 F0, in vec3 edgetint,
                        inout vec3 n, inout vec3 k)
{
   vec3 r = clamp(F0, 0.0f, 0.99f);
   vec3 g = edgetint;
   vec3 r_sqrt = sqrt(r);
   vec3 n_min = (vec3(1.0) -      r) / (vec3(1.0) +      r);
   vec3 n_max = (vec3(1.0) + r_sqrt) / (vec3(1.0) - r_sqrt);
   n = mix(n_max, n_min, g);
   vec3 k2 = (sqr(n + vec3(1.0)) * r - sqr(n - vec3(1.0))) / (vec3(1.0) - r);
   k2 = max(vec3(0), k2);
   k = sqrt(k2);
}

// - mui is incident angle cosine to film from exterior
// - eta_fe is ratio of the film IOR to the external IOR
// - dielectric or metallic base
vec3 FresnelThinFilm(float mui, float eta_fe, bool dielectric)
{
    // Compute Fresnel factors at top of thin-film, where it meets coat or ambient exterior
    float sin2_t = (1.0 - sqr(mui))/sqr(eta_fe);
    if (sin2_t > 1.0)
        return vec3(1.0);
    float mut = sqrt(1.0 - sin2_t); // angle-cosine of ray in thin-film

    // reflection coefficient of external reflection at top of film for both S and P polarizations
    // (NB, real coefficients suffice as phase shift is either 0 or 180)
    vec2 r12 = FresnelDielectricReflectionPolarizations(mui, eta_fe);
    vec2 t12 = FresnelDielectricTransmissionPolarizations(mui, eta_fe);

    // reflection coefficient of internal reflection at top of film for both S and P polarizations
    // (NB, real coefficients suffice as phase shift is either 0 or 180)
    vec2 r21 = -r12;                      // due to reflection coeff. relations
    vec2 t21 = t12 * eta_fe * mut / mui;  // due to transmission coeff. relations

    // compute phase shift dphi due to optical path difference in film, assuming a fixed wavelength per channel
    vec3 lambda_p = vec3(700.0, 546.1, 435.8);
    float OPD = 2.0 * thin_film_ior * thin_film_thickness * mut;
    vec3 dphi = 2.0 * PI * OPD / lambda_p;

    // reflection coefficient at base of film (either dielectric or metal), for both S and P polarizations, for each color channel
    vec2 r23_s[3];  // complex s-polarization reflection coefficient at base, per color-channel
    vec2 r23_p[3];  // complex p-polarization reflection coefficient at base, per color-channel
    if (dielectric)
    {
        // here we ignore any wavelength dependence of dielectric IOR
        float eta_bf = specular_ior / thin_film_ior;
        vec2 r_sp = FresnelDielectricReflectionPolarizations(mut, eta_bf);
        for (int c=0; c<=2; ++c)
        {
            r23_s[c] = vec2(r_sp[0], 0.0);
            r23_p[c] = vec2(r_sp[1], 0.0);
        }
    }
    else
    {
        // Use Gulbrandsen to obtain IOR and k of metal:
        vec3 eta_c, k_c;
        GulbrandsenMapping(base_weight * base_color, specular_weight * specular_color, eta_c, k_c);
        for (int c=0; c<=2; ++c)
        {
            vec2 r_s, r_p;
            FresnelConductorReflectionPolarizations(mut, thin_film_ior, eta_c[c], k_c[c], r_s, r_p);
            r23_s[c] = r_s;
            r23_p[c] = r_p;
        }
    }

    // Thus compute final Fresnel reflection, accounting for all bounces in the thin-film
    vec3 F = vec3(0.0);
    for (int c=0; c<=2; ++c)
    {
        // complex phase shift due to optical path difference:
        vec2 expidphi = complex(cos(dphi[c]), sin(dphi[c]));

        // Implements formula (3) of Belcour & Barla, using complex arithmetic
        int p = 0; // add s-polarization
        F[c] += complex_mag2(complex_add(r12[p], t12[p] * t21[p] *
                             complex_mul(r23_s[c], complex_mul(expidphi,
                             complex_inv(complex_sub(1.0, r21[p] * complex_mul(r23_s[c], expidphi)))))));

        p = 1; // add p-polarization
        F[c] += complex_mag2(complex_add(r12[p], t12[p] * t21[p] *
                             complex_mul(r23_p[c], complex_mul(expidphi,
                             complex_inv(complex_sub(1.0, r21[p] * complex_mul(r23_p[c], expidphi)))))));
    }
    F *= 0.5; // average the two polarizations (i.e. assume the incident radiation was unpolarized)
    return F;
}

vec3 FresnelThinFilmOverDielectric(float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, true); }
vec3 FresnelThinFilmOverConductor( float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, false); }

#endif // THIN_FILM_ENABLED