
/////////////////////////////////////////////////////////////////////////
// trace 
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
        if (has_normals_shell)  Ns = textureSampleBarycoord(normalAttribute_shell, barycoord_shell, faceIndices_shell.xyz).xyz;
        else                    Ns = Ng;
        if (has_tangents_shell) Ts = textureSampleBarycoord(tangentAttribute_shell, barycoord_shell, faceIndices_shell.xyz).xyz;
        else                    Ts = normalToTangent(Ns);
    }
    else if (hit_scene)
    {
        P = rayOrigin + dist_scene*rayDir;
        material = SCENE_MATERIAL;
        baryCoord = barycoord_scene;
        Ng = safe_normalize(faceNormal_scene);
        if (has_normals_scene)  Ns = textureSampleBarycoord(normalAttribute_scene, barycoord_scene, faceIndices_scene.xyz).xyz;
        else                    Ns = Ng;
        if (has_tangents_scene) Ts = textureSampleBarycoord(tangentAttribute_scene, barycoord_scene, faceIndices_scene.xyz).xyz;
        else                    Ts = normalToTangent(Ns);
    }                
    return true;
}

float TraceShadow(in vec3 rayOrigin, in vec3 rayDir)
{
    float Transmittance = 1.0;
    while (Transmittance > TRANSMITTANCE_EPSILON)
    {
        int hitMaterial;
        int material;
        vec3 pW_hit, nsW_hit, ngW_hit, TsW_hit, baryCoord;
        bool hit = trace(rayOrigin, rayDir, 
                            pW_hit, nsW_hit, ngW_hit, TsW_hit, baryCoord, material);
        if (hit)
        {
            float opacity;
            if (geometry_thin_walled) opacity = geometry_opacity;
            else                      opacity = 1.0;
            if (material == SHELL_MATERIAL) Transmittance *= 1.0 - opacity;
            else                            Transmittance = 0.0;
            if (Transmittance > TRANSMITTANCE_EPSILON)
                rayOrigin = pW_hit + ngW_hit * sign(dot(rayDir, ngW_hit)) * RAY_OFFSET;
        }
        else
            return 1.0; //Transmittance;
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
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);
    if (material == SHELL_MATERIAL) return openpbr_bsdf_evaluate(pW, basis, winputL, woutputL, rndSeed);
    //if (material == SHELL_MATERIAL) return diffuse_brdf_evaluate(pW, basis, winputL, woutputL, rndSeed);
    else                            return    grey_brdf_evaluate(pW, basis, winputL, woutputL);
}

vec3 sampleBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in int material,
                out vec3 woutputL, out float pdfOut, inout int rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);
    if (material == SHELL_MATERIAL) return openpbr_bsdf_sample(pW, basis, winputL, woutputL, pdfOut, rndSeed);
    //if (material == SHELL_MATERIAL) return diffuse_brdf_sample(pW, basis, winputL, woutputL, pdfOut, rndSeed);
    else                            return    grey_brdf_sample(pW, basis, winputL, woutputL, pdfOut, rndSeed);
}

float pdfBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material,
                inout int rndSeed)
{
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return 0.0;
    if (material == SHELL_MATERIAL) return openpbr_bsdf_pdf(pW, basis, winputL, woutputL, rndSeed);
    //if (material == SHELL_MATERIAL) return diffuse_brdf_pdf(pW, basis, winputL, woutputL);
    else                            return    grey_brdf_pdf(pW, basis, winputL, woutputL);
}


/////////////////////////////////////////////////////////////////////////
// lighting 
/////////////////////////////////////////////////////////////////////////

vec3 environmentRadiance(in vec3 dir)
{
    float value = ( dir.y + 0.5 ) / 1.5;
    vec3 skyColor = mix( vec3( 1.0 ), vec3( 0.65, 0.75, 1.0 ), value );
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
            float misWeight = powerHeuristic(skyPdf, bsdfPdf);
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

    // Perform uni-directional pathtrace starting from the (pinhole) camera lens to estimate the primary ray radiance, L
    vec3 L = vec3(0.0);
    vec3 throughput = vec3(1.0);
    float misWeightSky = 1.0; // For MIS book-keeping

    // Cast camera ray
    int material;
    vec3 pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord;
    bool hit = trace(pW, rayDir, 
                        pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord, material);
    if (!hit)
    {
        // Camera ray missed all geometry; add contribution from distant lights and terminate path
        L += throughput * environmentRadiance(rayDir);
    }
    else
    {
        for (int vertex=0; vertex < BOUNCES; vertex++)
        {    
            // Pass-through surface due to cutout transparency, if enabled
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
        
            // Deal with the surface interaction at the current vertex.
            // First, compute the normal and thus the local vertex basis:
            pW       = pW_hit;
            vec3 NsW = NsW_hit;
            vec3 NgW = NgW_hit;
            vec3 TsW = TsW_hit;

            #if SMOOTH_NORMALS
                // If the surface is opaque, but the incident ray lies below the hemisphere of the normal,
                // which can occur due to shading normals, apply the "Flipping hack" to prevent artifacts
                // (see Schüßler, "Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing")
                if (dot(NsW, rayDir) > 0.0)
                    NsW = 2.0*NgW*dot(NgW, NsW) - NsW;
            #else
                NsW = NgW;
            #endif

            // Construct shading frame
            Basis basis = makeBasis(NsW, TsW, baryCoord);
            vec3 winputW = -rayDir; // winputW, points *towards* the incident ray direction (parallel to photon)

            // Sample BSDF for the next bounce direction
            vec3 winputL = worldToLocal(winputW, basis);
            vec3 woutputL; // woutputL, points *towards* the outgoing ray direction (opposite photon)
            float bsdfPdf;
            vec3 f = sampleBsdf(pW, basis, winputL, material, woutputL, bsdfPdf, rndSeed);
            vec3 woutputW = localToWorld(woutputL, basis);

            // Update ray direction to the BSDF-sampled direction
            rayDir = woutputW;

            // Prepare for tracing the direct lighting and continuation rays
            pW += NgW * sign(dot(rayDir, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray

            // Add direct lighting term at the current surface vertex
            float skyPdf = 0.0;
            L += throughput * directSurfaceLighting(pW, basis, winputW, material, skyPdf, rndSeed);

            // Update path continuation throughput
            throughput *= abs(dot(woutputW, NsW)) * f / max(PDF_EPSILON, bsdfPdf);

            // TODO: Russian roulette
            
            // Raycast to next hit
            hit = trace(pW, rayDir, 
                        pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord, material);

            // If ray misses, add contribution of environment light and terminate pathtrace
            if (!hit)
            {
                // This ray missed all geometry; add contribution from distant lights and terminate path
                misWeightSky = powerHeuristic(bsdfPdf, skyPdf);
                L += throughput * misWeightSky * environmentRadiance(rayDir);
                break;
            }
        }
    }

    gl_FragColor.rgb = L;
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending
}
