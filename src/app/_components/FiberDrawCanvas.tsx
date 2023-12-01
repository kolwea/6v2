'use client'
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Scene from "../zen/zenBackground";
// import Box from "./Box";
// import { Polygon } from "./Abstergo";


export default function DrawCanvas() {
    // const poly = 
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <Scene />
                {/* <Polygon position={[1.2, 0, 0]}/> */}
            </Canvas>
        </div>
    )
}