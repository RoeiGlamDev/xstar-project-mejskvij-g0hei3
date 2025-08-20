import * as THREE from 'three'; // Importing Three.js library

export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0x000000); // Set background color to black
    return scene;
};

export const createCamera = (fov: number, aspect: number, near: number, far: number) => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // Create a camera
    camera.position.set(0, 0, 5); // Set camera position
    return camera;
};

export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set renderer size
    renderer.setClearColor(0x000000, 1); // Set clear color to black
    return renderer;
};

export const addLight = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Create ambient light
    scene.add(ambientLight); // Add ambient light to the scene

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Create directional light
    directionalLight.position.set(5, 5, 5); // Set light position
    scene.add(directionalLight); // Add directional light to the scene
};

export const createBox = (width: number, height: number, depth: number) => {
    const geometry = new THREE.BoxGeometry(width, height, depth); // Create box geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Create material in pink color
    const cube = new THREE.Mesh(geometry, material); // Create mesh
    return cube;
};

export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const render = () => {
        requestAnimationFrame(render); // Request next frame
        renderer.render(scene, camera); // Render the scene
    };
    render(); // Start rendering
};

export default { createScene, createCamera, createRenderer, addLight, createBox, animate }; // Default export