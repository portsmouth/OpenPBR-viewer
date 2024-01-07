
import { Vector2, Vector3, Matrix4, Box3,
         Mesh, MeshBasicMaterial, ShaderMaterial, Scene, PerspectiveCamera,
         sRGBEncoding, RGBAFormat, FloatType,
         WebGLRenderer, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Stats from 'stats.js';

import {
	MeshBVH, MeshBVHUniformStruct, FloatVertexAttributeTexture,
	shaderStructs, shaderIntersectFunction, SAH, StaticGeometryGenerator
} from 'three-mesh-bvh';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import glsl_main            from './glsl/main.glsl?raw'
import glsl_coat_brdf       from './glsl/coat_brdf.glsl?raw'
import glsl_metal_brdf      from './glsl/metal_brdf.glsl?raw'
import glsl_specular_brdf   from './glsl/specular_brdf.glsl?raw'
import glsl_specular_btdf   from './glsl/specular_btdf.glsl?raw'
import glsl_diffuse_brdf    from './glsl/diffuse_brdf.glsl?raw'
import glsl_openpbr_surface from './glsl/openpbr_surface.glsl?raw'
import glsl_pathtracer      from './glsl/pathtracer.glsl?raw'

class MeshLoader
{
    constructor()
    {
        this.result = null;
        this.loader = new GLTFLoader();
    }

    reset()
    {
        this.result = null;
    }

	async load(path) 
    {
        if (this.result) Promise.resolve(this.result);

        let gltf = await this.loader.loadAsync(path);
        let S = Array.isArray( gltf.scene ) ? gltf.scene : [ gltf.scene ];
        const meshes = [];
        for ( let i = 0, l = S.length; i < l; i ++ ) 
        {
            S[i].traverseVisible( c => 
                {
                    if (c.isMesh) 
                    {
                        const generator = new StaticGeometryGenerator( c );
                        generator.attributes = [ 'position', 'color', 'normal', 'tangent', 'uv', 'uv2' ];
                        generator.applyWorldTransforms = false;
                        const bvhOptions = { strategy: SAH, maxLeafTris: 1 };
                        let bvh = new MeshBVH( generator.generate(), bvhOptions );
                        let mesh = new Mesh(generator.generate(), c.material);
                        this.result = {scene:gltf.scene, bvh:bvh, mesh:c};
                        console.log("==> loaded mesh ", path);
                        return this.result;
                    }
                }
            )
        }
        return this.result;
    }
}

const params = 
{
	smoothNormals: true,
    bounces: 8,

    sky_color_up:                        [1.0, 1.0, 1.0],
    sky_color_down:                      [0.5, 0.5, 0.5],

    //////////////////////////////////////////////////////
    // OpenPBR surface params
    //////////////////////////////////////////////////////

    base_weight:                         1.0,
    base_color:                          [0.8, 0.8, 0.8],
    base_roughness:                      0.0,
    base_metalness:                      0.0,
                 
    specular_weight:                     1.0,
    specular_color:                      [1.0, 1.0, 1.0],
    specular_roughness:                  0.3,
    specular_anisotropy:                 0.0,
    specular_rotation:                   0.0,
    specular_ior:                        1.5,
    specular_ior_level:                  0.5,
               
    transmission_weight:                 0.0,
    transmission_color:                  [1.0, 1.0, 1.0],
    transmission_depth:                  0.0,
    transmission_scatter:                [0.0, 0.0, 0.0],
    transmission_scatter_anisotropy:     0.0,
    transmission_dispersion_abbe_number: 20.0,
    transmission_dispersion_scale:       0.0,
 
    subsurface_weight:                   0.0,
    subsurface_color:                    [0.8, 0.8, 0.8],
    subsurface_radius:                   1.0,
    subsurface_radius_scale:             [1.0, 0.5, 0.25],
    subsurface_anisotropy:               0.0,

    coat_weight:                         0.0,
    coat_color:                          [1.0, 1.0, 1.0],
    coat_roughness:                      0.0,
    coat_anisotropy:                     0.0,
    coat_rotation:                       0.0,
    coat_ior:                            1.6,
    coat_ior_level:                      0.5,
               
    fuzz_weight:                         0.0,
    fuzz_color:                          [1.0, 1.0, 1.0],
    fuzz_roughness:                      0.5,

    geometry_opacity:                    1.0,
    geometry_thin_walled:                false

};

let renderer, camera, scene, gui, stats;
let rtQuad, finalQuad, renderTarget;
let samples = 0;
let outputContainer;

let MESH_SURFACE;
let MESH_PROPS;

let BVH_SURFACE;
let BVH_PROPS;

let LOADED;

init();
render();

function init() 
{
    console.log('init');

    LOADED = false;
    MESH_SURFACE = null;
    MESH_PROPS = null;

    BVH_SURFACE = null;
    BVH_PROPS = null;

	// renderer setup
	renderer = new WebGLRenderer( { antialias: false } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0x09141a );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = sRGBEncoding;
	document.body.appendChild( renderer.domElement );

    outputContainer = document.getElementById( 'output' );

	// scene setup
	scene = new Scene();

	// camera setup
	camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
	camera.position.set( 4, 4, 4 );
	camera.far = 100;
	camera.updateProjectionMatrix();

    // stats setup
	stats = new Stats();
	document.body.appendChild( stats.dom );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // OpenPBR surface params
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const rtMaterial = new ShaderMaterial( {
        
        defines: 
        {
            SMOOTH_NORMALS: 1,
            SURFACE_IS_SHADERCUBE: 0,
            BOUNCES: params.bounces,
        },

        uniforms: 
        {
            bvh_surface:             { value: new MeshBVHUniformStruct() },
            normalAttribute_surface: { value: new FloatVertexAttributeTexture() },
            tangentAttribute_surface:{ value: new FloatVertexAttributeTexture() },
            has_normals_surface:     { value: 1 },
            has_tangents_surface:    { value: 0 },

            bvh_props:             { value: new MeshBVHUniformStruct() },
            normalAttribute_props: { value: new FloatVertexAttributeTexture() },
            tangentAttribute_props:{ value: new FloatVertexAttributeTexture() },
            has_normals_props:     { value: 1 },
            has_tangents_props:    { value: 0 },

            cameraWorldMatrix:     { value: new Matrix4() },
            invProjectionMatrix:   { value: new Matrix4() },
            invModelMatrix:        { value: new Matrix4() },
            resolution:            { value: new Vector2() },

			seed:                  { value: 0 },
			accumulation_weight:   { value: 1 },

            //////////////////////////////////////////////////////
            // lighting
            //////////////////////////////////////////////////////

            sky_color_up:                        { value: params.sky_color_up, },
            sky_color_down:                      { value: params.sky_color_down, },

            //////////////////////////////////////////////////////
            // material
            //////////////////////////////////////////////////////

            base_weight:                         { value: params.base_weight },
            base_color:                          { value: new Vector3(0.8, 0.8, 0.8) },
            base_roughness:                      { value: params.base_roughness },
            base_metalness:                      { value: params.base_metalness },
              
            specular_weight:                     { value: params.specular_weight, },
            specular_color:                      { value: new Vector3(1.0, 1.0, 1.0) },
            specular_roughness:                  { value: params.specular_roughness },
            specular_anisotropy:                 { value: 0.0 },
            specular_rotation:                   { value: 0.0 },
            specular_ior:                        { value: params.specular_ior  },
            specular_ior_level:                  { value: 0.5  },

            transmission_weight:                 { value: params.transmission_weight, },
            transmission_color:                  { value: new Vector3(1.0, 1.0, 1.0) },
            transmission_depth:                  { value: 0.0 },
            transmission_scatter:                { value: new Vector3(0.0, 0.0, 0.0) },
            transmission_scatter_anisotropy:     { value: 0.0 },
            transmission_dispersion_abbe_number: { value: 20.0 },
            transmission_dispersion_scale:       { value: 0.0 },
         
            subsurface_weight:                   { value: 0.0 },
            subsurface_color:                    { value: new Vector3(0.8, 0.8, 0.8) },
            subsurface_radius:                   { value: 1.0 },
            subsurface_radius_scale:             { value: new Vector3(1.0, 0.5, 0.25) },
            subsurface_anisotropy:               { value: 0.0 },

            coat_weight:                         { value: 0.0 },
            coat_color:                          { value: new Vector3(1.0, 1.0, 1.0) },
            coat_roughness:                      { value: 0.0 },
            coat_anisotropy:                     { value: 0.0 },
            coat_rotation:                       { value: 0.0 },
            coat_ior:                            { value: 1.6  },
            coat_ior_level:                      { value: 0.5  },
              
            fuzz_weight:                         { value: 0.0 },
            fuzz_color:                          { value: new Vector3(1.0, 1.0, 1.0) },
            fuzz_roughness:                      { value: 0.5 },

            geometry_opacity:                    { value: 1.0 },
            geometry_thin_walled:                { value: false }
        },

        vertexShader: `
            varying vec2 vUv;
            void main() 
            {
                vec4 mvPosition = vec4( position, 1.0 );
                mvPosition = modelViewMatrix * mvPosition;
                gl_Position = projectionMatrix * mvPosition;
                vUv = uv;
            }
        `,

        fragmentShader: `precision highp isampler2D;
                         precision highp usampler2D;
                         ${ shaderStructs }
                         ${ shaderIntersectFunction }
                        ` 
                        + glsl_main   
                        + glsl_coat_brdf      
                        + glsl_specular_brdf
                        + glsl_specular_btdf
                        + glsl_metal_brdf 
                        + glsl_diffuse_brdf   
                        + glsl_openpbr_surface
                        + glsl_pathtracer

    } );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // initialize the scene and update the material properties with the bvh, materials, etc
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const loader = new MeshLoader();
    loader.load('standard-shader-ball/core_base_floor.gltf').then( () => {

        scene.add(loader.result.scene);
        MESH_PROPS = loader.result.mesh;
        BVH_PROPS  = loader.result.bvh;
        rtMaterial.uniforms.bvh_props.value.updateFrom( BVH_PROPS );
        rtMaterial.uniforms.has_normals_props.value = false;
        rtMaterial.uniforms.has_tangents_props.value = false;
        if (MESH_PROPS.geometry.attributes.normal)
        {
            rtMaterial.uniforms.normalAttribute_props.value.updateFrom( MESH_PROPS.geometry.attributes.normal );
            rtMaterial.uniforms.has_normals_props.value = true;
        }
        if (MESH_PROPS.geometry.attributes.tangent)
        {
            rtMaterial.uniforms.tangentAttribute_props.value.updateFrom( MESH_PROPS.geometry.attributes.tangent );
            rtMaterial.uniforms.has_tangents_props.value = true;
        }
        console.log("  has_normals_scene:  ", rtMaterial.uniforms.has_normals_props);
        console.log("  has_tangents_scene: ", rtMaterial.uniforms.has_tangents_props);

        loader.reset();
        loader.load('standard-shader-ball/shell.gltf').then( () => {

            scene.add(loader.result.scene);
            MESH_SURFACE = loader.result.mesh;
            BVH_SURFACE  = loader.result.bvh;
            rtMaterial.uniforms.bvh_surface.value.updateFrom( BVH_SURFACE );
            rtMaterial.uniforms.has_normals_surface.value = false;
            rtMaterial.uniforms.has_tangents_surface.value = false;
            if (MESH_SURFACE.geometry.attributes.normal)
            {
                rtMaterial.uniforms.normalAttribute_surface.value.updateFrom( MESH_SURFACE.geometry.attributes.normal );
                rtMaterial.uniforms.has_normals_surface.value = true;
            }
            if (MESH_SURFACE.geometry.attributes.tangent)
            {
                rtMaterial.uniforms.tangentAttribute_surface.value.updateFrom( MESH_SURFACE.geometry.attributes.tangent );
                rtMaterial.uniforms.has_tangents_surface.value = true;
            }
            console.log("  has_normals_surface:  ", rtMaterial.uniforms.has_normals_surface);
            console.log("  has_tangents_surface: ", rtMaterial.uniforms.has_tangents_surface);

            setup(rtMaterial);
            console.log("===> LOADED");
            LOADED = true;
        } )

    } )

}

function setup(rtMaterial)
{
    //////////////////////////////////////////////////////////
    // Setup camera
    //////////////////////////////////////////////////////////

    let orbitControls = new OrbitControls( camera, renderer.domElement );
	orbitControls.addEventListener( 'change', () => { resetSamples(); } );


    let bounds = new Box3()
    bounds.setFromObject(MESH_SURFACE);
    let boundsMin = bounds.min;
    let boundsMax = bounds.max;
    let scale = Math.max(boundsMax.x-boundsMin.x,
                            boundsMax.y-boundsMin.y,
                            boundsMax.z-boundsMin.z);
    let o = [boundsMin.x, boundsMin.y, boundsMin.z];
    let e = [boundsMax.x-boundsMin.x, boundsMax.y-boundsMin.y, boundsMax.z-boundsMin.z];
    let center = new Vector3(o[0] + 0.5*e[0], o[1] + 0.5*e[1], o[2] + 0.5*e[2]);
    let corner = new Vector3(o[0] +    e[0],  o[1] +     e[1], o[2] +     e[2]);
    let d = center.clone(); d.sub(corner);
    d.normalize();
    let pnew = center.clone();
    pnew.addScaledVector(d, -2.0*scale);
    camera.position.copy(pnew);
    orbitControls.target.copy(center);
    orbitControls.update();

    //////////////////////////////////////////////////////////
    // Setup framebuffers
    //////////////////////////////////////////////////////////

    rtQuad = new FullScreenQuad( rtMaterial );

	rtMaterial.transparent = true;
	rtMaterial.depthWrite = false;

	renderTarget = new WebGLRenderTarget(1, 1, {format: RGBAFormat, type: FloatType});
	finalQuad = new FullScreenQuad( new MeshBasicMaterial({map: renderTarget.texture}) );

    //////////////////////////////////////////////////////////
    // Setup GUI
    //////////////////////////////////////////////////////////    
        
    gui = new GUI();

    const material_folder = gui.addFolder('Material');

    const base_folder = material_folder.addFolder('Base');
    base_folder.add(params,          'base_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.addColor(params,     'base_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.add(params,          'base_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.add(params,          'base_metalness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
                      
    const specular_folder = material_folder.addFolder('Specular');
    specular_folder.add(params,      'specular_weight', 0.0, 1.0).onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.addColor(params, 'specular_color').onChange(                                      v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_roughness', 0.0, 1.0).onChange(                        v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_ior', 1.0, 5.0).onChange(                              v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_ior_level', 0.0, 1.0).onChange(                        v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_anisotropy', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_rotation', 0.0, 1.0).onChange(                         v => { rtMaterial.needsUpdate = true; resetSamples(); });
    
    const transmission_folder = material_folder.addFolder('Transmission');
    transmission_folder.add(params,      'transmission_weight', 0.0, 1.0).onChange(                   v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.addColor(params, 'transmission_color').onChange(                              v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_depth', 0.0, 1.0).onChange(                    v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.addColor(params, 'transmission_scatter').onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_scatter_anisotropy', -1.0, 1.0).onChange(      v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_dispersion_abbe_number', 9.0, 91.0).onChange(  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_dispersion_scale', 0.0, 1.0).onChange(         v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.close();

    const subsurface_folder = material_folder.addFolder('Subsurface');
    subsurface_folder.add(params,      'subsurface_weight', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.addColor(params, 'subsurface_color').onChange(                                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.add(params,      'subsurface_radius', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.addColor(params, 'subsurface_radius_scale').onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.add(params,      'subsurface_anisotropy', -1.0, 1.0).onChange(                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.close();

    const coat_folder = material_folder.addFolder('Coat');
    coat_folder.add(params,          'coat_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.addColor(params,     'coat_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_ior', 1.0, 3.0).onChange(                                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_ior_level', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_anisotropy', 0.0, 1.0).onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_rotation', 0.0, 1.0).onChange(                             v => { rtMaterial.needsUpdate = true; resetSamples(); });

    const fuzz_folder = material_folder.addFolder('Fuzz');
    fuzz_folder.add(params,          'fuzz_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.addColor(params,     'fuzz_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.add(params,          'fuzz_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.close();                             

    const geometry_folder = material_folder.addFolder('Geometry');
    geometry_folder.add(params,      'geometry_opacity', 0.0, 1.0).onChange(                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    geometry_folder.add(params,      'geometry_thin_walled').onChange(                                v => { rtMaterial.needsUpdate = true; resetSamples(); });
    geometry_folder.close();

    const lighting_folder = gui.addFolder('Lighting');
    lighting_folder.addColor(params, 'sky_color_up').onChange(                                        v => { rtMaterial.needsUpdate = true; resetSamples(); });
    lighting_folder.addColor(params, 'sky_color_down').onChange(                                      v => { rtMaterial.needsUpdate = true; resetSamples(); });
    lighting_folder.close();

    const renderer_folder = gui.addFolder('Renderer');
    renderer_folder.add( params, 'smoothNormals' ).onChange( v => {
        rtQuad.material.defines.SMOOTH_NORMALS = Number( v );
        rtQuad.material.needsUpdate = true;
        resetSamples();
    });
    renderer_folder.add( params, 'bounces', 1, 16, 1 ).onChange( v => {
        rtMaterial.defines.BOUNCES = parseInt( v );
        rtMaterial.needsUpdate = true;
        resetSamples();
    });
    renderer_folder.close();

    gui.open(); 

    //////////////////////////////////////////////////////////
    // Setup window
    //////////////////////////////////////////////////////////   

    window.addEventListener( 'resize', resize, false );
    resize();
}


function resetSamples() 
{
    samples = 0;
}

function resize() 
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	const w = window.innerWidth;
	const h = window.innerHeight;
	renderer.setSize( w, h );
	renderer.setPixelRatio(1.0);

    renderTarget.setSize(w, h);
    resetSamples();
}

function get_vector3(array3)
{
    return new Vector3(array3[0], array3[1], array3[2]);
}

function render() 
{
    if (!LOADED)
    {
        console.log('not LOADED')
        requestAnimationFrame( render );
        return;
    }

    console.log('render')
    stats.update();
    requestAnimationFrame( render );

    renderer.domElement.style.imageRendering = 'auto';

    const MAX_SAMPLES = 512;
    if (samples >= MAX_SAMPLES)
        return;

    let enableRaytracing = true;
    if (enableRaytracing)
    {
		camera.updateMatrixWorld();

        //////////////////////////////////////////////////////
        // sync shader uniforms
        //////////////////////////////////////////////////////

		const uniforms = rtQuad.material.uniforms;

        const w = window.innerWidth;
        const h = window.innerHeight;

		const seed = samples*w*h % 31415926;
		uniforms.seed.value = seed;
        uniforms.accumulation_weight.value = 1.0 / (samples + 1.0); // implements Monte-Carlo accumulation

		uniforms.cameraWorldMatrix.value.copy( camera.matrixWorld );
		uniforms.invProjectionMatrix.value.copy( camera.projectionMatrixInverse );
		uniforms.invModelMatrix.value.copy( scene.matrixWorld ).invert();

        let resolution = new Vector2(w, h);
        uniforms.resolution.value.copy(resolution);

        // sync material params
        uniforms.base_weight.value                            = params.base_weight;
        uniforms.base_color.value.copy(get_vector3(             params.base_color));
        uniforms.base_roughness.value                         = params.base_roughness;
        uniforms.base_metalness.value                         = params.base_metalness;
    
        uniforms.specular_weight.value                        = params.specular_weight;
        uniforms.specular_color.value.copy(get_vector3(         params.specular_color));
        uniforms.specular_roughness.value                     = params.specular_roughness;
        uniforms.specular_anisotropy.value                    = params.specular_anisotropy;
        uniforms.specular_rotation.value                      = params.specular_rotation;
        uniforms.specular_ior.value                           = params.specular_ior;
        uniforms.specular_ior_level.value                     = params.specular_ior_level;
    
        uniforms.transmission_weight.value                    = params.transmission_weight;
        uniforms.transmission_color.value.copy(get_vector3(     params.transmission_color));
        uniforms.transmission_depth.value                     = params.transmission_depth;
        uniforms.transmission_scatter.value.copy(get_vector3(   params.transmission_scatter));
        uniforms.transmission_scatter_anisotropy.value        = params.transmission_scatter_anisotropy;
        uniforms.transmission_dispersion_abbe_number.value    = params.transmission_dispersion_abbe_number;
        uniforms.transmission_dispersion_scale.value          = params.transmission_dispersion_scale;
 
        uniforms.subsurface_weight.value                      = params.subsurface_weight;
        uniforms.subsurface_color.value.copy(get_vector3(       params.subsurface_color));
        uniforms.subsurface_radius.value                      = params.subsurface_radius;
        uniforms.subsurface_radius_scale.value.copy(get_vector3(params.subsurface_radius_scale));
        uniforms.subsurface_anisotropy.value                  = params.subsurface_anisotropy;

        uniforms.coat_weight.value                            = params.coat_weight;
        uniforms.coat_color.value.copy(get_vector3(             params.coat_color));
        uniforms.coat_roughness.value                         = params.coat_roughness;
        uniforms.coat_anisotropy.value                        = params.coat_anisotropy;
        uniforms.coat_rotation.value                          = params.coat_rotation;
        uniforms.coat_ior.value                               = params.coat_ior;
        uniforms.coat_ior_level.value                         = params.coat_ior_level;

        uniforms.fuzz_weight.value                            = params.fuzz_weight;
        uniforms.fuzz_color.value.copy(get_vector3(             params.fuzz_color));
        uniforms.fuzz_roughness.value                         = params.fuzz_roughness;

        uniforms.geometry_opacity.value                       = params.geometry_opacity;
        uniforms.geometry_thin_walled.value                   = params.geometry_thin_walled;

        // sync lighting params
        uniforms.sky_color_up.value                           = params.sky_color_up;
        uniforms.sky_color_down.value                         = params.sky_color_down;

        //////////////////////////////////////////////////////
        // render framebuffer
        //////////////////////////////////////////////////////

		// render float target
        renderer.autoClear = (samples === 0);
		renderer.setRenderTarget( renderTarget );
		rtQuad.render( renderer );

        // render to screen
		renderer.setRenderTarget( null );
		finalQuad.render( renderer );

		renderer.autoClear = true;
        samples++;
    }
    else
    {
		resetSamples();
		camera.clearViewOffset();
        renderer.render( scene, camera );
    }
        
    outputContainer.innerText = `samples: ${ samples }`;
}
