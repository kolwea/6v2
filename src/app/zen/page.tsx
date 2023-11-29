/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'
import { useEffect } from 'react';
import Scene from './zenBackground';
import { Canvas } from '@react-three/fiber'
import { Kolker_Brush } from 'next/font/google';
// import { animate } from './zenBackground';

export default function Dashboard() {
  // useEffect(() => {
  //   const keyDownHandler = (e: any) => {
  //     console.log(`You pressed ${e.code}.`)
  //   };
  //   document.addEventListener("keydown", keyDownHandler);

  //   // clean up
  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas >
        <Scene />
      </Canvas>
    </div>

  )
}