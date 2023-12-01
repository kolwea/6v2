/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'
import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/Addons.js';

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [logoRef, setLogoRef] = useState<GLTF>();

    const setupInitalSceneControls = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -20000, 20000);


        // camera.position.set(1, 1, 1);
        camera.quaternion.setFromEuler(new THREE.Euler(-1.57, 0, 0));

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);
        // camera.position.z = 1;

        function onWindowResize() {
            camera.left = window.innerWidth / - 2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / - 2;
            camera.zoom = 150;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize);

        return { scene, camera, renderer, onWindowResize }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { scene, camera, renderer, onWindowResize } = setupInitalSceneControls()

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            const loader = new GLTFLoader();

            loader.load(
                // resource URL
                '/models/gltf/sixEncolsedLogo.gltf',
                // called when the resource is loaded
                function (gltf) {
                    setLogoRef(gltf)
                    scene.add(gltf.scene)
                    console.log(gltf.cameras)
                    gltf.animations; // Array<THREE.AnimationClip>
                    gltf.scene; // THREE.Group
                    gltf.scenes; // Array<THREE.Group>
                    gltf.cameras; // Array<THREE.Camera>
                    gltf.asset
                },
                // called while loading is progressing
                function (xhr) {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                // called when loading has errors
                function (error) {
                    console.log('An error happened');

                })

            // scene.add(cube);

            if (logoRef) {
                scene.add(logoRef.scene);
                logoRef.animations; // Array<THREE.AnimationClip>
                logoRef.scene; // THREE.Group
                logoRef.scenes; // Array<THREE.Group>
                logoRef.cameras; // Array<THREE.Camera>
                logoRef.asset; // Object
            }

            renderer.render(scene, camera);
            // Add this function inside the useEffect hook
            const renderScene = () => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.position.x += 1;
                // console.log(cube.position.x)
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };

            // Call the renderScene function to start the animation loop
            renderScene();
            onWindowResize();

            return () => {
                window.removeEventListener('resize', onWindowResize);
            };
        }
    }, []);

    return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
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
