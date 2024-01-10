
/////////////////////////////////////////////////////////////////////////
// Raytracing routines
/////////////////////////////////////////////////////////////////////////

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

#if SURFACE_IS_SHADERCUBE
vec2 boxIntersection( in vec3 ro, in vec3 rd, vec3 boxSize, out vec3 outNormal )
{
    vec3 m = 1.0/rd; // can precompute if traversing a set of aligned boxes
    vec3 n = m*ro;   // can precompute if traversing a set of aligned boxes
    vec3 k = abs(m)*boxSize;
    vec3 t1 = -n - k;
    vec3 t2 = -n + k;
    float tN = max( max( t1.x, t1.y ), t1.z );
    float tF = min( min( t2.x, t2.y ), t2.z );
    if( tN>tF || tF<0.0) return vec2(-1.0); // no intersection
    outNormal = (tN>0.0) ? step(vec3(tN),t1) : // ro ouside the box
                           step(t2,vec3(tF));  // ro inside the box
    outNormal *= -sign(rd);
    return vec2( tN, tF );
}
bool intersect_shadercube(in vec3 rayOrigin, in vec3 rayDir, inout vec3 normal, inout float dist)
{
    vec2 X = boxIntersection(rayOrigin-vec3(0.0, 4.0, 0.0), rayDir, vec3(3.5, 3.5, 3.5), normal);
    if (X.x < 0.0 && X.y < 0.0)
        return false;
    if (X.x < 0.0)
        dist = X.y;
    else
        dist = X.x;
    return true;
}
#endif

bool trace(in vec3 rayOrigin, in vec3 rayDir,
            out vec3 P, out vec3 Ns, out vec3 Ng, out vec3 Ts, out vec3 baryCoord, out int material)
{
    // hit results
    uvec4 faceIndices_surface = uvec4( 0u );
    vec3   faceNormal_surface = vec3( 0.0, 0.0, 1.0 );
    vec3    barycoord_surface = vec3( 0.0 );
    float        side_surface = 1.0;
    float        dist_surface = HUGE_DIST;

#if SURFACE_IS_SHADERCUBE
    bool hit_surface = intersect_shadercube(rayOrigin, rayDir, faceNormal_surface, dist_surface);
#else
    bool hit_surface = bvhIntersectFirstHit( bvh_surface, rayOrigin, rayDir,
                                             faceIndices_surface, faceNormal_surface, barycoord_surface, side_surface, dist_surface );
#endif

    uvec4 faceIndices_props = uvec4( 0u );
    vec3   faceNormal_props = vec3( 0.0, 0.0, 1.0 );
    vec3    barycoord_props = vec3( 0.0 );
    float        side_props = 1.0;
    float        dist_props = HUGE_DIST;
    bool hit_props = bvhIntersectFirstHit( bvh_props, rayOrigin, rayDir,
                                           faceIndices_props, faceNormal_props, barycoord_props, side_props, dist_props );

    bool hit = hit_surface || hit_props;
    if (!hit)
        return false;

    if (hit_surface && (!hit_props || (dist_surface <= dist_props)))
    {
        P = rayOrigin + dist_surface*rayDir;
        material = MATERIAL_OPENPBR;
        baryCoord = barycoord_surface;
        Ng = safe_normalize(faceNormal_surface);
#if SURFACE_IS_SHADERCUBE
        Ns = Ng;
        Ts = normalToTangent(Ns);
#else
        if (has_normals_surface)
        {
            Ns = textureSampleBarycoord(normalAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;
            const bool flip_normals = false;
            if (flip_normals)
                Ns *= -1.0;
            if (dot(Ns, Ng) < 0.0) Ns *= -1.0; // align geometric normal into same hemisphere as shading normal, if supplied
        }
        else
            Ns = Ng;
        //if (has_tangents_surface) Ts = textureSampleBarycoord(tangentAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;
        //else
            Ts = normalToTangent(Ns);
#endif
    }

    else if (hit_props)
    {
        P = rayOrigin + dist_props*rayDir;
        material = MATERIAL_PROPS;
        baryCoord = barycoord_props;
        Ng = safe_normalize(faceNormal_props);
#if SURFACE_IS_SHADERCUBE
        Ns = Ng;
        Ts = normalToTangent(Ns);
#else
        if (has_normals_props)
        {
            const bool flip_normals = false;
            if (flip_normals)
                Ns *= -1.0;
            Ns = textureSampleBarycoord(normalAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;
            if (dot(Ns, Ng) < 0.0) Ns *= -1.0; // align geometric normal into same hemisphere as shading normal, if supplied
        }
        else
            Ns = Ng;
        //if (has_tangents_scene) Ts = textureSampleBarycoord(tangentAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;
        //else
            Ts = normalToTangent(Ns);
#endif
    }                
    return true;
}

float TraceShadow(in vec3 rayOrigin, in vec3 rayDir)
{
    int material;
    vec3 pW, nsW, ngW, TsW, baryCoord;
    bool hit = trace(rayOrigin, rayDir,
                     pW, nsW, ngW, TsW, baryCoord, material);
    return hit ? 0.0 : 1.0;
}


////////////////////////////////////////////////
// "Neutral" color Lambertian BRDF for props
////////////////////////////////////////////////

vec3 neutral_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,
                        inout float pdf_woutputL)
{
    pdf_woutputL = pdfHemisphereCosineWeighted(winputL);
    if (winputL.z < 0.0 || woutputL.z < 0.0) return vec3(0.0);
    if (wireframe && minComponent(basis.baryCoord) < 0.01) return vec3(0.0);
    return neutral_color/PI;
}

vec3 neutral_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout int rndSeed,
                        out vec3 woutputL, out float pdf_woutputL)
{
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    if (winputL.z < 0.0) return vec3(0.0);
    if (wireframe && minComponent(basis.baryCoord) < 0.01) return vec3(0.0);
    return neutral_color/PI;
}

//////////////////////////////////////
// BSDF dispatch
//////////////////////////////////////

vec3 evaluateBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material, 
                  inout float pdf_woutputL)
{
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);
    else                              return neutral_brdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);
}

vec3 sampleBsdf(in vec3 pW, in Basis basis, in vec3 winputL, inout int rndSeed, in int material,
                out vec3 woutputL, out float pdfOut, out Volume internal_medium)
{
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_sample(pW, basis, winputL, rndSeed, woutputL, pdfOut, internal_medium);
    else                              return neutral_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdfOut);
}


/////////////////////////////////////////////////////////////////////////
// lighting 
/////////////////////////////////////////////////////////////////////////

vec3 environmentRadiance(in vec3 dir)
{
    float value = (dir.y + 0.5)/1.5;
    vec3 skyColor = mix(sky_color_down, sky_color_up, value);
    return skyColor;
}

vec3 sampleSkyAtSurface(in Basis basis, 
                        out vec3 woutputL, out vec3 woutputW, out float pdfDir,
                        inout int rndSeed)
{
    const float skyPower = 1.0;
    if (skyPower<RADIANCE_EPSILON)
        return vec3(0.0);
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdfDir);
    woutputW = localToWorld(woutputL, basis);
    return environmentRadiance(woutputW);
}

// Estimate direct radiance at the given surface vertex
vec3 directSurfaceLighting(in vec3 pW, in Basis basis, in vec3 winputW, in int material,
                            out float skyPdf, inout int rndSeed)
{
    vec3 winputL = worldToLocal(winputW, basis);
    vec3 Ldirect = vec3(0.0);
    vec3 woutputL, woutputW;
    vec3 Li = sampleSkyAtSurface(basis, woutputL, woutputW, skyPdf, rndSeed);
    if (maxComponent(Li) > RADIANCE_EPSILON)
    {
        Li *= TraceShadow(pW, woutputW);
        if (maxComponent(Li) > RADIANCE_EPSILON)
        {
            // Apply MIS weight with the BSDF pdf for the sampled direction
            float bsdfPdf;
            vec3 f = evaluateBsdf(pW, basis, winputL, woutputL, material, bsdfPdf);
            float misWeight = balanceHeuristic(skyPdf, bsdfPdf);
            Ldirect += f * Li / max(PDF_EPSILON, skyPdf) * abs(dot(woutputW, basis.nW)) * misWeight;
        }
    }
    return Ldirect;
}


/////////////////////////////////////////////////////////////////////////
// pathtracer 
/////////////////////////////////////////////////////////////////////////

void main()
{
    vec2 frag = gl_FragCoord.xy;

    // Initialize RNG
    int rndSeed = int(seed) + int(frag.x) + int(frag.y)*int(resolution.x);

    // Apply FIS to obtain pixel jitter about center in pixel units
    const float filterRadius = 1.0;
    float jx = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));
    float jy = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));
    vec2 pixel = frag + vec2(jx, jy);

    // Get [-1, 1] normalized device coordinates,
    vec2 ndc = -1.0 + 2.0*(pixel/resolution.xy);

    // Compute primary camera ray
    vec3 pW, rayDir;
    ndcToCameraRay(ndc, invModelMatrix * cameraWorldMatrix, invProjectionMatrix,
                    pW, rayDir);
    rayDir = normalize(rayDir);

    // Perform uni-directional pathtrace starting from the (pinhole) camera lens to estimate the primary ray radiance, L
    vec3 L = vec3(0.0);
    vec3 throughput = vec3(1.0);
    float misWeightSky = 1.0; // For MIS book-keeping

    // Initialize volumetric medium of camera ray
    // (NB, camera inside the interior is not handled properly here)
    Volume exterior_medium;
    exterior_medium.extinction = vec3(0.0);
    exterior_medium.albedo     = vec3(0.0);
    Volume current_medium = exterior_medium;

    bool in_dielectric = false;

    for (int vertex=0; vertex < BOUNCES; vertex++)
    {
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)
            break;

        // Generate next surface hit, given current vertex pW and current propagation direction rayDir
        int material_next;
        vec3 pW_next;
        vec3 NsW_next;
        vec3 NgW_next;
        vec3 TsW_next;
        vec3 baryCoord_next;

        bool inside_volume            = maxComponent(current_medium.extinction) > FLT_EPSILON;
        bool inside_scattering_volume = maxComponent(current_medium.albedo) > FLT_EPSILON && inside_volume;
        if (!inside_scattering_volume)
        {
            // Raycast along current propagation direction rayDir, from current vertex pW
            bool hit = trace(pW, rayDir,
                             pW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);
            if (!hit)
            {
                // Add contribution from distant lights
                if (misWeightSky > 0.0)
                {
                    // Camera ray missed all geometry; add contribution from distant lights and terminate path
                    L += throughput * misWeightSky * environmentRadiance(rayDir);
                    //L += throughput * environmentRadiance(rayDir);
                }
                // Ray escapes to infinity
                break;
            }

            // Apply Beer-Lambert law for absorption
            if (inside_volume)
            {
                float ray_length = length(pW_next - pW);
                throughput *= exp(-ray_length * current_medium.extinction);
            }
        }

        // Case of propagation through a scattering volume
        /*
        else
        {
            // Do analogue "random-walk" in the scattering medium
            // hitting the boundary surface again (presumably, if the surface is closed)
            // or terminating due to low throughput
            // TODO.
        }
        */

        // Update to the next surface vertex.
        // First, compute the normal and thus the local vertex basis:
        pW             = pW_next;
        vec3 NsW       = NsW_next;
        vec3 NgW       = NgW_next;
        vec3 TsW       = TsW_next;
        vec3 baryCoord = baryCoord_next;
        int material   = material_next;

        // Construct local shading frame
        Basis basis;

        // TODO: orient local basis so that N points from the surface interior to the exterior

        #if SMOOTH_NORMALS
            // If the surface is opaque, but the incident ray lies below the hemisphere of the normal,
            // which can occur due to shading normals, apply the "Flipping hack" to prevent artifacts
            // (see Schüßler, "Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing")
            if (dot(NsW, rayDir) > 0.0)
                NsW = 2.0*NgW*dot(NgW, NsW) - NsW;
            basis = makeBasis(NsW, baryCoord);
        #else
            basis = makeBasis(NgW, baryCoord);
        #endif
        vec3 winputW = -rayDir; // winputW, points *towards* the incident direction (parallel to photon)
        vec3 winputL = worldToLocal(winputW, basis);

        // Prepare OpenPBR if that material is used at the current vertex
        if (material == MATERIAL_OPENPBR)
            openpbr_prepare(pW, basis, winputL, rndSeed);

        // Sample BSDF for the next ray direction
        vec3 woutputL; // points *towards* the outgoing ray direction (opposite to photon)
        float bsdfPdf;
        Volume internal_medium;
        vec3 f = sampleBsdf(pW, basis, winputL, rndSeed, material, woutputL, bsdfPdf, internal_medium);
        vec3 woutputW = localToWorld(woutputL, basis);

        // Add emission from the surface point, if present
        //L += throughput * evaluateEdf(pW, basis, winputL);

        // Update ray direction to the BSDF-sampled direction
        rayDir = woutputW;

        // Prepare for tracing the direct lighting and continuation rays
        pW += NgW * sign(dot(rayDir, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray

        // Add direct lighting term at the current surface vertex
        float skyPdf = 0.0;
        if (!in_dielectric)
        {
            L += throughput * directSurfaceLighting(pW, basis, winputW, material, skyPdf, rndSeed);
        }

        // Update path continuation throughput
        throughput *= f / max(PDF_EPSILON, bsdfPdf) * abs(dot(woutputW, basis.nW));

        // Check if a transmission has occurred, and update the current_medium accordingly.
        bool transmitted = (material == MATERIAL_OPENPBR) && (dot(winputW, NgW) * dot(woutputW, NgW) < 0.0);
        if (transmitted)
        {
            in_dielectric = !in_dielectric;
            if (in_dielectric)
                current_medium = internal_medium;
            else
                current_medium = exterior_medium;
            /*
            bool transmitted_inside = dot(woutputW, NgW) < 0.0;
            if (transmitted_inside)
            {
                in_dielectric = true;
                current_medium = internal_medium;
            }
            else
            {
                in_dielectric = false;
                current_medium = exterior_medium;
            }
            */
        }

        // compute MIS weights for bounce ray
        misWeightSky = balanceHeuristic(bsdfPdf, skyPdf);

        // TODO: Russian roulette

    }

    gl_FragColor.rgb = L;
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending
}
