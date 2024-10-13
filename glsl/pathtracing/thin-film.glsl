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

// - mui is incident angle cosine to film from exterior
// - eta_fe is ratio of the film IOR to the external IOR
// - dielectric or metallic base
vec3 FresnelThinFilm(float mui, float eta_fe, bool dielectric)
{
    // Compute Fresnel factors at top of thin-film, where it meets coat or ambient exterior
    float sin2_t = (1.0 - sqr(mui))/sqr(eta_fe);
    if (sin2_t > 1.0)
        return vec3(1.0);
    float mut = sqrt(1.0 - sin2_t);

    // reflection coefficient of external reflection at top of film for both S and P polarizations
    // (NB, real coefficients suffice as phase shift is either 0 or 180)
    vec2 r1 = FresnelDielectricPolarizations(mui, eta_fe);
    vec2 t1 = vec2(1.0) - r1;

    // reflection coefficient of internal reflection at top of film for both S and P polarizations
    // (NB, real coefficients suffice as phase shift is either 0 or 180)
    vec2 ri = FresnelDielectricPolarizations(mut, 1.0/eta_fe);
    vec2 ti = vec2(1.0) - ri;

    // compute phase shift dphi due to optical path difference in film, assuming a fixed wavelength per channel
    vec3 lambda_p = vec3(700.0, 546.1, 435.8);
    float OPD = 2.0 * thin_film_ior * thin_film_thickness * mut;
    vec3 dphi = 2.0 * PI * OPD / lambda_p;

    // reflection coefficient at base of film (either dielectric or metal), for both S and P polarizations, for each color channel
    // (NB, real coefficients suffice as phase shift is either 0 or 180)
    vec2 rb[3];
    if (dielectric)
    {
        // here we ignore any wavelength dependence of dielectric IOR
        float eta_bf = specular_ior / thin_film_ior;
        rb[0] = FresnelDielectricPolarizations(mut, eta_bf);
        rb[1] = rb[0];
        rb[2] = rb[0];
    }
    else
    {
        // we assume metal has high absorption, thus both S/P phase shifts amount to a sign flip
        vec3 Fb = FresnelF82Tint(mut, base_weight * base_color, specular_weight * specular_color);
        vec3 Rb = sqrt(Fb);
        rb[0] = vec2(-Rb[0]);
        rb[1] = vec2(-Rb[1]);
        rb[2] = vec2(-Rb[2]);
    }

    // Thus compute final Fresnel reflection, accounting for all bounces in the thin-film
    vec3 F = vec3(0.0);
    for (int c=0; c<=2; ++c)
    {
        // complex phase shift due to optical path difference:
        vec2 expidphi = complex(cos(dphi[c]), sin(dphi[c]));
        for (int p=0; p<=1; ++p)
        {
            // Implements formula (3) of Belcour & Barla, using complex arithmetic
            F[c] += complex_mag2(complex_add(r1[p],
                                             t1[p] * rb[c][p] * ti[p] * complex_mul(expidphi,
                                                                                    complex_inv(complex_sub(1.0, ri[p] * rb[c][p] * expidphi)))));
        }
    }
    F *= 0.5; // average the two polarizations (i.e. assume the incident radiation was unpolarized)
    return F;
}

vec3 FresnelThinFilmOverDielectric(float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, true); }
vec3 FresnelThinFilmOverConductor( float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, false); }

#endif // THIN_FILM_ENABLED