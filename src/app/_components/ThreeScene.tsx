/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const setupInitalSceneControls = (containerRef: React.RefObject<HTMLDivElement>) => {
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
        camera.zoom = 100;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    return { scene, camera, renderer, onWindowResize }
}

// const loadSixLight = () => {
//     const loader = new GLTFLoader();
//     let model: THREE.Group<THREE.Object3DEventMap> | undefined
//     loader.loadAsync(
//         // resource URL
//         '/models/gltf/light.gltf',
//         // called when the resource is loaded
//         function (progress) {
//             // setLogoRef(gltf)
//             console.log(progress)
//         }).then((gltf) => {
//             model = gltf.scene
//         }).catch((err) => console.log(err))

//     return model;
// }

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { scene, camera, renderer, onWindowResize } = setupInitalSceneControls(containerRef)

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            const loader = new GLTFLoader();

            const group = new THREE.Group();
            let light: THREE.Group<THREE.Object3DEventMap>;
            let logo: THREE.Group<THREE.Object3DEventMap>;

            loader.load(
                // resource URL
                '/models/gltf/6ixLogoF.gltf',
                // called when the resource is loaded
                function (gltf) {
                    // setLogoRef(gltf)
                    logo = gltf.scene
                    group.add(logo)
                    logo.position.set(0, -1.1, 0)
                    group.position.set(0,1,0)
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
                    console.log('An error happened', error);

                })

            loader.load(
                // resource URL
                '/models/gltf/light.gltf',
                // called when the resource is loaded
                function (gltf) {
                    // setLogoRef(gltf)
                    light = gltf.scene
                    scene.add(light)
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
                    console.log('An error happened', error);

                })

            scene.add(cube);
            scene.add(group)

            renderer.render(scene, camera);
            // Add this function inside the useEffect hook
            const renderScene = () => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.position.x += 1;
                if (!!logo) {
                    group.rotation.z += 0.1;
                }
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };

            // Call the renderScene function to start the animation loop
            renderScene();
            onWindowResize();
        }
    }, []);

    return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeScene;
