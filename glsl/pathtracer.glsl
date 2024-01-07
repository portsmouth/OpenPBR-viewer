
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


vec2 sphIntersect( in vec3 ro, in vec3 rd, in vec3 ce, float ra )
{
    vec3 oc = ro - ce;
    float b = dot( oc, rd );
    float c = dot( oc, oc ) - ra*ra;
    float h = b*b - c;
    if( h<0.0 ) return vec2(-1.0); // no intersection
    h = sqrt( h );
    return vec2( -b-h, -b+h );
}


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


bool intersect_primitive(in vec3 rayOrigin, in vec3 rayDir, inout vec3 normal, inout float dist)
{
    vec3 C = vec3(0,4.5,0);
    float R = 6.0;

    //vec2 X = sphIntersect(rayOrigin, rayDir, C, R);
    //if (X.x < 0.0)
    //    return false;
    //dist = X.x;
    //vec3 P = rayOrigin + dist*rayDir;
    //normal = normalize(P - C);

    vec2 X = boxIntersection(rayOrigin, rayDir, vec3(5.0, 4.0, 3.0), normal);
    if (X.x < 0.0)
        return false;
    dist = X.x;
    return true;
}

bool trace(in vec3 rayOrigin, in vec3 rayDir,
            out vec3 P, out vec3 Ns, out vec3 Ng, out vec3 Ts, out vec3 baryCoord, out int material)
{
    // hit results
    uvec4 faceIndices_shell = uvec4( 0u );
    vec3   faceNormal_shell = vec3( 0.0, 0.0, 1.0 );
    vec3    barycoord_shell = vec3( 0.0 );
    float        side_shell = 1.0;
    float        dist_shell = HUGE_DIST;
    bool hit_shell = bvhIntersectFirstHit( bvh_shell, rayOrigin, rayDir, 
                                           faceIndices_shell, faceNormal_shell, barycoord_shell, side_shell, dist_shell );
    //bool hit_shell = intersect_primitive(rayOrigin, rayDir, faceNormal_shell, dist_shell);
    
    uvec4 faceIndices_scene = uvec4( 0u );
    vec3   faceNormal_scene = vec3( 0.0, 0.0, 1.0 );
    vec3    barycoord_scene = vec3( 0.0 );
    float        side_scene = 1.0;
    float        dist_scene = HUGE_DIST;
    bool hit_scene = bvhIntersectFirstHit( bvh_scene, rayOrigin, rayDir, 
                                            faceIndices_scene, faceNormal_scene, barycoord_scene, side_scene, dist_scene );

    bool hit = hit_shell || hit_scene;
    if (!hit)
        return false;

    if (hit_shell && (!hit_scene || (dist_shell <= dist_scene)))
    {
        P = rayOrigin + dist_shell*rayDir;
        material = SHELL_MATERIAL;
        baryCoord = barycoord_shell;
        Ng = safe_normalize(faceNormal_shell);
    if (has_normals_shell)
        {
            Ns = textureSampleBarycoord(normalAttribute_shell, barycoord_shell, faceIndices_shell.xyz).xyz;
            const bool flip_normals = false;
            if (flip_normals)
                Ns *= -1.0;
            if (dot(Ns, Ng) < 0.0) Ns *= -1.0; // align geometric normal into same hemisphere as shading normal, if supplied
        }
        else
            Ns = Ng;
        if (has_tangents_shell) Ts = textureSampleBarycoord(tangentAttribute_shell, barycoord_shell, faceIndices_shell.xyz).xyz;
        else                    Ts = normalToTangent(Ns);
    }
    else if (hit_scene)
    {
        P = rayOrigin + dist_scene*rayDir;
        material = SCENE_MATERIAL;
        baryCoord = barycoord_scene;
        Ng = safe_normalize(faceNormal_scene);
        if (has_normals_scene)
        {
            const bool flip_normals = false;
            if (flip_normals)
                Ns *= -1.0;
            Ns = textureSampleBarycoord(normalAttribute_scene, barycoord_scene, faceIndices_scene.xyz).xyz;
            if (dot(Ns, Ng) < 0.0) Ns *= -1.0; // align geometric normal into same hemisphere as shading normal, if supplied
        }
        else
            Ns = Ng;
        if (has_tangents_scene) Ts = textureSampleBarycoord(tangentAttribute_scene, barycoord_scene, faceIndices_scene.xyz).xyz;
        else                    Ts = normalToTangent(Ns);
    }                
    return true;
}

float TraceShadow(in vec3 rayOrigin, in vec3 rayDir)
{
    float Transmittance = 1.0;
    //while (Transmittance > TRANSMITTANCE_EPSILON)
    {
        int hitMaterial;
        int material;
        vec3 pW_hit, nsW_hit, ngW_hit, TsW_hit, baryCoord;
        bool hit = trace(rayOrigin, rayDir, 
                            pW_hit, nsW_hit, ngW_hit, TsW_hit, baryCoord, material);
        if (hit)
        {
            return 0.0;
            /*
            float opacity;
            if (geometry_thin_walled) opacity = geometry_opacity;
            else                      opacity = 1.0;
            if (material == SHELL_MATERIAL) Transmittance *= 1.0 - opacity;
            else                            Transmittance = 0.0;
            if (Transmittance > TRANSMITTANCE_EPSILON)
                rayOrigin = pW_hit + ngW_hit * sign(dot(rayDir, ngW_hit)) * RAY_OFFSET;
            */
        }
        else
            return Transmittance;
    }
    return Transmittance;
}


//////////////////////////////////////
// Grey Lambertian scene BRDF
//////////////////////////////////////

vec3 grey_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    if (winputL.z < 0.0 || woutputL.z < 0.0) return vec3(0.0);
    if (minComponent(basis.baryCoord) < 0.01)
        return vec3(0.0);
    return vec3(0.5)/PI;
}

vec3 grey_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL,
                        out vec3 woutputL, out float pdf_woutputL, inout int rndSeed)
{
    if (winputL.z < 0.0) return vec3(0.0);
    vec3 diffuseAlbedo;
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);
    if (minComponent(basis.baryCoord) < 0.01)
        return vec3(0.0);
    return vec3(0.5)/PI;
}

float grey_brdf_pdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL)
{
    if (winputL.z < 0.0 || woutputL.z < 0.0) return 0.0;
    return pdfHemisphereCosineWeighted(winputL);
}

//////////////////////////////////////
// BSDF dispatch
//////////////////////////////////////

vec3 evaluateBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material, 
                    inout int rndSeed)
{
    if (material == SHELL_MATERIAL) return openpbr_bsdf_evaluate(pW, basis, winputL, woutputL, rndSeed);
    else                            return    grey_brdf_evaluate(pW, basis, winputL, woutputL);
}

vec3 sampleBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in int material,
                out vec3 woutputL, out float pdfOut, inout int rndSeed)
{
    if (material == SHELL_MATERIAL) return openpbr_bsdf_sample(pW, basis, winputL, woutputL, pdfOut, rndSeed);
    else                            return    grey_brdf_sample(pW, basis, winputL, woutputL, pdfOut, rndSeed);
}

float pdfBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material,
                inout int rndSeed)
{
    if (material == SHELL_MATERIAL) return openpbr_bsdf_pdf(pW, basis, winputL, woutputL, rndSeed);
    else                            return    grey_brdf_pdf(pW, basis, winputL, woutputL);
}


/////////////////////////////////////////////////////////////////////////
// lighting 
/////////////////////////////////////////////////////////////////////////

vec3 environmentRadiance(in vec3 dir)
{
    float value = ( dir.y + 0.5 ) / 1.5;
    vec3 skyColor = mix(vec3(1.0), vec3(0.25, 0.5, 1.0), value );
    //vec3 skyColor = vec3(1.0);
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
            float bsdfPdf = max(PDF_EPSILON, pdfBsdf(pW, basis, winputL, woutputL, material, rndSeed));
            vec3 f = evaluateBsdf(pW, basis, winputL, woutputL, material, rndSeed);
            float misWeight = balanceHeuristic(skyPdf, bsdfPdf);
            Ldirect += f * Li/max(PDF_EPSILON, skyPdf) * abs(dot(woutputW, basis.nW)) * misWeight;
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

    bool inDielectric = false;

    // Perform uni-directional pathtrace starting from the (pinhole) camera lens to estimate the primary ray radiance, L
    vec3 L = vec3(0.0);
    vec3 throughput = vec3(1.0);
    float misWeightSky = 1.0; // For MIS book-keeping

    for (int vertex=0; vertex < BOUNCES; vertex++)
    {
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)
            break;

        // Raycast along current propagation direction rayDir, from current vertex pW
        int material;
        vec3 pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord_hit;
        bool hit = trace(pW, rayDir,
                         pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord_hit, material);
        /*
        if (cutout(material, rndSeed))
        {
            pW = pW_hit + rayDir*RAY_OFFSET;
            hit = trace(pW, rayDir,
                        pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord, material);
            if (!hit)
            {
                // This ray missed all geometry; add contribution from distant lights and terminate path
                L += throughput * environmentRadiance(rayDir);
                break;
            }
            continue;
        }
        */

        if (!hit)
        {
            // Add contribution from distant lights
            if (misWeightSky > 0.0)
            {
                // Camera ray missed all geometry; add contribution from distant lights and terminate path
                L += throughput * misWeightSky * environmentRadiance(rayDir);
            }

            // Ray escapes to infinity
            break;
        }

        // If the current ray lies inside a dielectric, apply Beer's law for absorption
        if (inDielectric)
        {
            //throughput *= exp(-rayLength*absorption);
        }

        // Deal with the surface interaction at the current vertex.
        // First, compute the normal and thus the local vertex basis:
        pW             = pW_hit;
        vec3 NsW       = NsW_hit;
        vec3 NgW       = NgW_hit;
        vec3 TsW       = TsW_hit;
        vec3 baryCoord = baryCoord_hit;

        // Construct shading frame
        Basis basis;
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

        // Sample BSDF for the next bounce direction
        vec3 winputW = -rayDir; // winputW, points *towards* the incident direction (parallel to photon)
        vec3 winputL = worldToLocal(winputW, basis);
        vec3 woutputL; // woutputL, points *towards* the outgoing ray direction (opposite to photon)
        float bsdfPdf;
        vec3 f = sampleBsdf(pW, basis, winputL, material, woutputL, bsdfPdf, rndSeed);
        vec3 woutputW = localToWorld(woutputL, basis);

        bool transmitted = (dot(winputW, NgW) * dot(woutputW, NgW) < 0.0);
        if (transmitted)
            inDielectric = !inDielectric; // (assuming for simplicity that the dielectric objects are closed and non-intersecting)

        // Add volumetric emission at the surface point, if present (treating it as an isotropic radiance field)
        //L += throughput * evaluateEdf(pW, basis, winputL);

        // Update ray direction to the BSDF-sampled direction
        rayDir = woutputW;

        // Prepare for tracing the direct lighting and continuation rays
        pW += NgW * sign(dot(rayDir, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray

        // Add direct lighting term at the current surface vertex
        float skyPdf = 0.0;
        //if (!inDielectric)
        //    L += throughput * directSurfaceLighting(pW, basis, winputW, material, skyPdf, rndSeed);

        // Update path continuation throughput
        throughput *= f / max(PDF_EPSILON, bsdfPdf) * abs(dot(woutputW, basis.nW));

        //misWeightSky = balanceHeuristic(bsdfPdf, skyPdf); // compute sky MIS weight for bounce ray

        // TODO: Russian roulette

    }

    gl_FragColor.rgb = L;
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending
}
