/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { nodes, materials } = useSpline('https://prod.spline.design/ly1fI3HPiUyHcpvY/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#f1f1f1']} />
      <group {...props} dispose={null}>
        <scene name="Scene" >
          <pointLight
            name="Point Light"
            castShadow
            intensity={4.28}
            decay={2}
            distance={8066}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#4682e3"
            position={[0, 80.51, 0]}
          />
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={2.79}
            far={100000}
            near={-100000}
            up={[0, 1, 0]}
            position={[-0.33, 151.42, 0.21]}
            rotation={[-1.57, 0, 0]}
          />
          <group name="Stand" position={[0, 20.28, 0]} scale={0.2}>
            <group name="6ix" position={[0, 98.15, 0]} rotation={[0, 0, Math.PI]}>
              <group name="6ix1" position={[-9.96, -7.21, 32.47]} rotation={[Math.PI / 2, 0, 0]} scale={0.26}>
                <group name="6ixWhite" position={[-320.99, 212.19, -55.49]}>
                  <mesh
                    name="Shape 0"
                    geometry={nodes['Shape 0'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[105.02, -97.72, 0]}
                  />
                  <mesh
                    name="Shape 1"
                    geometry={nodes['Shape 1'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[82.53, -179.46, 0.01]}
                  />
                  <mesh
                    name="Shape 2"
                    geometry={nodes['Shape 2'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[0.4, -463.81, 0.02]}
                  />
                  <mesh
                    name="Shape 3"
                    geometry={nodes['Shape 3'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[103.78, -463.81, 0.03]}
                  />
                  <mesh
                    name="Shape 4"
                    geometry={nodes['Shape 4'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[0, -97.05, 0.04]}
                  />
                  <mesh
                    name="Shape 5"
                    geometry={nodes['Shape 5'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[103.78, -97.06, 0.05]}
                  />
                  <mesh
                    name="Shape 6"
                    geometry={nodes['Shape 6'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[1.27, -169.17, 0.06]}
                  />
                  <mesh
                    name="Shape 7"
                    geometry={nodes['Shape 7'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[150.39, -169.17, 0.07]}
                  />
                  <mesh
                    name="Shape 8"
                    geometry={nodes['Shape 8'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[1.54, -367.85, 0.08]}
                  />
                  <mesh
                    name="Shape 9"
                    geometry={nodes['Shape 9'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[573.72, -393.06, 0.09]}
                  />
                  <mesh
                    name="Shape 10"
                    geometry={nodes['Shape 10'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[546.35, -427.4, 0.1]}
                  />
                  <mesh
                    name="Shape 11"
                    geometry={nodes['Shape 11'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[474.33, -462.84, 0.11]}
                  />
                  <mesh
                    name="Shape 12"
                    geometry={nodes['Shape 12'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[577.71, -462.84, 0.12]}
                  />
                  <mesh
                    name="Shape 13"
                    geometry={nodes['Shape 13'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[473.92, -96.08, 0.13]}
                  />
                  <mesh
                    name="Shape 14"
                    geometry={nodes['Shape 14'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[577.71, -96.09, 0.14]}
                  />
                  <mesh
                    name="Shape 15"
                    geometry={nodes['Shape 15'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[475.21, -168.19, 0.15]}
                  />
                  <mesh
                    name="Shape 16"
                    geometry={nodes['Shape 16'].geometry}
                    material={materials['']}
                    castShadow
                    receiveShadow
                    position={[624.32, -168.2, 0.16]}
                  />
                  <mesh
                    name="Shape 17"
                    geometry={nodes['Shape 17'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[475.47, -366.88, 0.17]}
                  />
                  <mesh
                    name="Shape 18"
                    geometry={nodes['Shape 18'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[341.62, -3.98, 0.18]}
                  />
                  <mesh
                    name="Shape 19"
                    geometry={nodes['Shape 19'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[300.25, -64.33, 0.19]}
                  />
                  <mesh
                    name="Shape 20"
                    geometry={nodes['Shape 20'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[341.64, -517.89, 0.2]}
                  />
                  <mesh
                    name="Shape 21"
                    geometry={nodes['Shape 21'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[309.36, -452.94, 0.21]}
                  />
                  <mesh
                    name="Shape 22"
                    geometry={nodes['Shape 22'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[341.67, 0, 0.22]}
                  />
                  <mesh
                    name="Shape 23"
                    geometry={nodes['Shape 23'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[192.08, 0, 0.23]}
                  />
                  <mesh
                    name="Shape 24"
                    geometry={nodes['Shape 24'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[341.67, -533.77, 0.24]}
                  />
                  <mesh
                    name="Shape 25"
                    geometry={nodes['Shape 25'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[191.34, -533.79, 0.25]}
                  />
                  <mesh
                    name="Shape 26"
                    geometry={nodes['Shape 26'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[193.05, -106.88, 0.26]}
                  />
                  <mesh
                    name="Shape 27"
                    geometry={nodes['Shape 27'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[193.16, -397.93, 0.27]}
                  />
                  <mesh
                    name="Shape 28"
                    geometry={nodes['Shape 28'].geometry}
                    material={materials['glass lenses']}
                    castShadow
                    receiveShadow
                    position={[403.57, -107.27, 0.28]}
                  />
                </group>
              </group>
            </group>
            <mesh
              name="Glass-Elipse"
              geometry={nodes['Glass-Elipse'].geometry}
              material={materials['glass lenses']}
              castShadow
              receiveShadow
              position={[0, 39.72, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group name="The floor" position={[54, 75, 89]} rotation={[0, 0, 0]} scale={[1, 0.54, 1]}>
            <directionalLight
              name="Directional Light"
              intensity={0.7}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-1500}
              shadow-camera-right={1500}
              shadow-camera-top={1500}
              shadow-camera-bottom={-1500}
              position={[-157.21, 150, 300]}
            />
            <mesh
              name="Floor"
              geometry={nodes.Floor.geometry}
              material={materials['Floor Material']}
              castShadow
              receiveShadow
              position={[0, -150, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
