'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            renderer.render(scene, camera);
        }
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScene;

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';

// // camera
// const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
// camera.position.set(-0.33, 151.42, 0.21);
// camera.quaternion.setFromEuler(new THREE.Euler(-1.57, 0, 0));

// // scene
// const scene = new THREE.Scene();

// // spline scene
// const loader = new SplineLoader();
// loader.load(
//   'https://prod.spline.design/ly1fI3HPiUyHcpvY/scene.splinecode',
//   (splineScene) => {
//     scene.add(splineScene);
//   }
// );

// // renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// // scene settings
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// scene.background = new THREE.Color('#e1e1e1');
// renderer.setClearAlpha(1);

// // orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.125;

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera.left = window.innerWidth / - 2;
//   camera.right = window.innerWidth / 2;
//   camera.top = window.innerHeight / 2;
//   camera.bottom = window.innerHeight / - 2;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate(time) {
//   controls.update();
//   renderer.render(scene, camera);
// }
