
import * as THREE from 'three';
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
                        let mesh = new THREE.Mesh(generator.generate(), c.material);
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
    bounces: 2,

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
let clock;
let samples = 0;
let outputContainer;

let MESH_SHELL;
let MESH_SCENE;

let BVH_SHELL;
let BVH_SCENE;

let LOADED;

init();
render();

function init() 
{
    console.log('init');

    LOADED = false;
    MESH_SHELL = null;
    MESH_SCENE = null;

    BVH_SHELL = null;
    BVH_SCENE = null;

	// renderer setup
	renderer = new THREE.WebGLRenderer( { antialias: false } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0x09141a );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;
	document.body.appendChild( renderer.domElement );

    outputContainer = document.getElementById( 'output' );

	// scene setup
	scene = new THREE.Scene();

	const light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 );
	scene.add( light );
	scene.add( new THREE.AmbientLight( 0xb0bec5, 0.5 ) );

	// camera setup
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
	camera.position.set( 4, 4, 4 );
	camera.far = 100;
	camera.updateProjectionMatrix();

    // stats setup
	stats = new Stats();
	document.body.appendChild( stats.dom );

    // Timer
    clock = new THREE.Clock();

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // OpenPBR surface params
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const rtMaterial = new THREE.ShaderMaterial( {
        
        defines: 
        {
            SMOOTH_NORMALS: 1,
            BOUNCES: 2,
        },

        uniforms: 
        {
            bvh_shell:             { value: new MeshBVHUniformStruct() },
            normalAttribute_shell: { value: new FloatVertexAttributeTexture() },
            tangentAttribute_shell:{ value: new FloatVertexAttributeTexture() },
            has_normals_shell:     { value: 1 },
            has_tangents_shell:    { value: 0 },

            bvh_scene:             { value: new MeshBVHUniformStruct() },
            normalAttribute_scene: { value: new FloatVertexAttributeTexture() },
            tangentAttribute_scene:{ value: new FloatVertexAttributeTexture() },
            has_normals_scene:     { value: 1 },
            has_tangents_scene:    { value: 0 },

            cameraWorldMatrix:     { value: new THREE.Matrix4() },
            invProjectionMatrix:   { value: new THREE.Matrix4() },
            invModelMatrix:        { value: new THREE.Matrix4() },
            resolution:            { value: new THREE.Vector2() },

			seed:                  { value: 0 },
			accumulation_weight:   { value: 1 },

            //////////////////////////////////////////////////////
            // material
            //////////////////////////////////////////////////////

            base_weight:                         { value: 1.0 },
            base_color:                          { value: new THREE.Vector3(0.8, 0.8, 0.8) },
            base_roughness:                      { value: 0.0, },
            base_metalness:                      { value: 0.0, },
              
            specular_weight:                     { value: 1.0, },
            specular_color:                      { value: new THREE.Vector3(1.0, 1.0, 1.0) },
            specular_roughness:                  { value: 0.3, },
            specular_anisotropy:                 { value: 0.0, },
            specular_rotation:                   { value: 0.0, },
            specular_ior:                        { value: 1.5  },
            specular_ior_level:                  { value: 0.5  },

            transmission_weight:                 { value: 0.0, },
            transmission_color:                  { value: new THREE.Vector3(1.0, 1.0, 1.0) },
            transmission_depth:                  { value: 0.0, },
            transmission_scatter:                { value: new THREE.Vector3(0.0, 0.0, 0.0) },
            transmission_scatter_anisotropy:     { value: 0.0, },
            transmission_dispersion_abbe_number: { value: 20.0, },
            transmission_dispersion_scale:       { value: 0.0, },
         
            subsurface_weight:                   { value: 0.0, },
            subsurface_color:                    { value: new THREE.Vector3(0.8, 0.8, 0.8) },
            subsurface_radius:                   { value: 1.0, },
            subsurface_radius_scale:             { value: new THREE.Vector3(1.0, 0.5, 0.25) },
            subsurface_anisotropy:               { value: 0.0, },

            coat_weight:                         { value: 0.0, },
            coat_color:                          { value: new THREE.Vector3(1.0, 1.0, 1.0) },
            coat_roughness:                      { value: 0.0, },
            coat_anisotropy:                     { value: 0.0, },
            coat_rotation:                       { value: 0.0, },
            coat_ior:                            { value: 1.6  },
            coat_ior_level:                      { value: 0.5  },
              
            fuzz_weight:                         { value: 0.0, },
            fuzz_color:                          { value: new THREE.Vector3(1.0, 1.0, 1.0) },
            fuzz_roughness:                      { value: 0.5, },

            geometry_opacity:                    { value: 1.0, },
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
        MESH_SCENE = loader.result.mesh;
        BVH_SCENE  = loader.result.bvh;
        rtMaterial.uniforms.bvh_scene.value.updateFrom( BVH_SCENE );
        rtMaterial.uniforms.has_normals_scene.value = false;
        rtMaterial.uniforms.has_tangents_scene.value = false;
        if (MESH_SCENE.geometry.attributes.normal)
        {
            rtMaterial.uniforms.normalAttribute_scene.value.updateFrom( MESH_SCENE.geometry.attributes.normal );
            rtMaterial.uniforms.has_normals_scene.value = true;
        }
        if (MESH_SCENE.geometry.attributes.tangent)
        {
            rtMaterial.uniforms.tangentAttribute_scene.value.updateFrom( MESH_SCENE.geometry.attributes.tangent );
            rtMaterial.uniforms.has_tangents_scene.value = true;
        }
        console.log("  has_normals_scene:  ", rtMaterial.uniforms.has_normals_scene);
        console.log("  has_tangents_scene: ", rtMaterial.uniforms.has_tangents_scene);

        loader.reset();
        loader.load('standard-shader-ball/shell.gltf').then( () => {

            scene.add(loader.result.scene);
            MESH_SHELL = loader.result.mesh;
            BVH_SHELL  = loader.result.bvh;
            rtMaterial.uniforms.bvh_shell.value.updateFrom( BVH_SHELL );
            rtMaterial.uniforms.has_normals_shell.value = false;
            rtMaterial.uniforms.has_tangents_shell.value = false;
            if (MESH_SHELL.geometry.attributes.normal)
            {
                rtMaterial.uniforms.normalAttribute_shell.value.updateFrom( MESH_SHELL.geometry.attributes.normal );
                rtMaterial.uniforms.has_normals_shell.value = true;
            }
            if (MESH_SHELL.geometry.attributes.tangent)
            {
                rtMaterial.uniforms.tangentAttribute_shell.value.updateFrom( MESH_SHELL.geometry.attributes.tangent );
                rtMaterial.uniforms.has_tangents_shell.value = true;
            }
            console.log("  has_normals_shell:  ", rtMaterial.uniforms.has_normals_shell);
            console.log("  has_tangents_shell: ", rtMaterial.uniforms.has_tangents_shell);

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


    let bounds = new THREE.Box3()
    bounds.setFromObject(MESH_SHELL);
    let boundsMin = bounds.min;
    let boundsMax = bounds.max;
    let scale = Math.max(boundsMax.x-boundsMin.x,
                            boundsMax.y-boundsMin.y,
                            boundsMax.z-boundsMin.z);
    let o = [boundsMin.x, boundsMin.y, boundsMin.z];
    let e = [boundsMax.x-boundsMin.x, boundsMax.y-boundsMin.y, boundsMax.z-boundsMin.z];
    let center = new THREE.Vector3(o[0] + 0.5*e[0], o[1] + 0.5*e[1], o[2] + 0.5*e[2]);
    let corner = new THREE.Vector3(o[0] +    e[0],  o[1] +     e[1], o[2] +     e[2]);
    let d = center.clone(); d.sub(corner);
    d.normalize();
    let pnew = center.clone();
    pnew.addScaledVector(d, -1.0*scale);
    camera.position.copy(pnew);
    orbitControls.target.copy(center);
    orbitControls.update();

    //////////////////////////////////////////////////////////
    // Setup framebuffers
    //////////////////////////////////////////////////////////

    rtQuad = new FullScreenQuad( rtMaterial );

	rtMaterial.transparent = true;
	rtMaterial.depthWrite = false;

	renderTarget = new THREE.WebGLRenderTarget(1, 1, {format: THREE.RGBAFormat, type: THREE.FloatType});

	finalQuad = new FullScreenQuad( new THREE.MeshBasicMaterial({map: renderTarget.texture}) );

    

    //////////////////////////////////////////////////////////
    // Setup GUI
    //////////////////////////////////////////////////////////    
        
    gui = new GUI();

    gui.add( params, 'smoothNormals' ).onChange( v => {
                                                        rtQuad.material.defines.SMOOTH_NORMALS = Number( v );
                                                        rtQuad.material.needsUpdate = true;
                                                        resetSamples();
                                                      });

	gui.add( params, 'bounces', 1, 10, 1 ).onChange( v => {
                                                             rtMaterial.defines.BOUNCES = parseInt( v );
                                                             rtMaterial.needsUpdate = true;
                                                             resetSamples();
                                                          });

    const base_folder = gui.addFolder('Base');
    base_folder.add(params,          'base_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.addColor(params,     'base_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.add(params,          'base_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    base_folder.add(params,          'base_metalness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
                      
    const specular_folder = gui.addFolder('Specular');                      
    specular_folder.add(params,      'specular_weight', 0.0, 1.0).onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.addColor(params, 'specular_color').onChange(                                      v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_roughness', 0.0, 1.0).onChange(                        v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_ior', 1.0, 3.0).onChange(                              v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_ior_level', 0.0, 1.0).onChange(                        v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_anisotropy', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    specular_folder.add(params,      'specular_rotation', 0.0, 1.0).onChange(                         v => { rtMaterial.needsUpdate = true; resetSamples(); });
    
    const transmission_folder = gui.addFolder('Transmission');
    transmission_folder.add(params,      'transmission_weight', 0.0, 1.0).onChange(                   v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.addColor(params, 'transmission_color').onChange(                              v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_depth', 0.0, 1.0).onChange(                    v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.addColor(params, 'transmission_scatter').onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_scatter_anisotropy', -1.0, 1.0).onChange(      v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_dispersion_abbe_number', 9.0, 91.0).onChange(  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.add(params,      'transmission_dispersion_scale', 0.0, 1.0).onChange(         v => { rtMaterial.needsUpdate = true; resetSamples(); });
    transmission_folder.close();

    const subsurface_folder = gui.addFolder('Subsurface');
    subsurface_folder.add(params,      'subsurface_weight', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.addColor(params, 'subsurface_color').onChange(                                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.add(params,      'subsurface_radius', 0.0, 1.0).onChange(                       v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.addColor(params, 'subsurface_radius_scale').onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.add(params,      'subsurface_anisotropy', -1.0, 1.0).onChange(                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    subsurface_folder.close();

    const coat_folder = gui.addFolder('Coat');
    coat_folder.add(params,          'coat_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.addColor(params,     'coat_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_ior', 1.0, 3.0).onChange(                                  v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_ior_level', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_anisotropy', 0.0, 1.0).onChange(                           v => { rtMaterial.needsUpdate = true; resetSamples(); });
    coat_folder.add(params,          'coat_rotation', 0.0, 1.0).onChange(                             v => { rtMaterial.needsUpdate = true; resetSamples(); });

    const fuzz_folder = gui.addFolder('Fuzz');
    fuzz_folder.add(params,          'fuzz_weight', 0.0, 1.0).onChange(                               v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.addColor(params,     'fuzz_color').onChange(                                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.add(params,          'fuzz_roughness', 0.0, 1.0).onChange(                            v => { rtMaterial.needsUpdate = true; resetSamples(); });
    fuzz_folder.close();                             

    const geometry_folder = gui.addFolder('Geometry');
    geometry_folder.add(params,      'geometry_opacity', 0.0, 1.0).onChange(                          v => { rtMaterial.needsUpdate = true; resetSamples(); });
    geometry_folder.add(params,      'geometry_thin_walled').onChange(                                v => { rtMaterial.needsUpdate = true; resetSamples(); });

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
    return new THREE.Vector3(array3[0], array3[1], array3[2]);
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

    const MAX_SAMPLES = 2048;
    if (samples >= MAX_SAMPLES)
        return;

    let enableRaytracing = true;
    if (enableRaytracing)
    {
		camera.updateMatrixWorld();

		// sync material
		const uniforms = rtQuad.material.uniforms;

        const w = window.innerWidth;
        const h = window.innerHeight;

		const seed = samples*w*h % 31415926;
		uniforms.seed.value = seed;
        uniforms.accumulation_weight.value = 1.0 / (samples + 1.0); // implements Monte-Carlo accumulation

		uniforms.cameraWorldMatrix.value.copy( camera.matrixWorld );
		uniforms.invProjectionMatrix.value.copy( camera.projectionMatrixInverse );
		uniforms.invModelMatrix.value.copy( scene.matrixWorld ).invert();

        let resolution = new THREE.Vector2(w, h);
        uniforms.resolution.value.copy(resolution);

        //////////////////////////////////////////////////////
        // sync material params
        //////////////////////////////////////////////////////

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
    
        uniforms.transmission_weight                          = params.transmission_weight;        
        uniforms.transmission_color.value.copy(get_vector3(     params.transmission_color));  
        uniforms.transmission_depth                           = params.transmission_depth;        
        uniforms.transmission_scatter.value.copy(get_vector3(   params.transmission_scatter));     
        uniforms.transmission_scatter_anisotropy              = params.transmission_scatter_anisotropy;        
        uniforms.transmission_dispersion_abbe_number          = params.transmission_dispersion_abbe_number;        
        uniforms.transmission_dispersion_scale                = params.transmission_dispersion_scale;        
 
        uniforms.subsurface_weight                            = params.subsurface_weight;    
        uniforms.subsurface_color.value.copy(get_vector3(       params.subsurface_color));  
        uniforms.subsurface_radius                            = params.subsurface_radius; 
        uniforms.subsurface_radius_scale.value.copy(get_vector3(params.subsurface_radius_scale));  
        uniforms.subsurface_anisotropy                        = params.subsurface_anisotropy;    

        uniforms.coat_weight.value                            = params.coat_weight;
        uniforms.coat_color.value.copy(get_vector3(             params.coat_color));
        uniforms.coat_roughness.value                         = params.coat_roughness;
        uniforms.coat_anisotropy.value                        = params.coat_anisotropy;
        uniforms.coat_rotation.value                          = params.coat_rotation;
        uniforms.coat_ior.value                               = params.coat_ior;
        uniforms.coat_ior_level.value                         = params.coat_ior_level;

        uniforms.fuzz_weight                                  = params.fuzz_weight;
        uniforms.fuzz_color.value.copy(get_vector3(             params.fuzz_color));  
        uniforms.fuzz_roughness                               = params.fuzz_roughness;

        uniforms.geometry_opacity.value                       = params.geometry_opacity;
        uniforms.geometry_thin_walled.value                   = params.geometry_thin_walled;

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
