/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LagzDesign (https://sketchfab.com/LagzDesign)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-setup-low-poly-caffb0d42a594ac2b67970af07d10a5f
Title: Gaming Setup (low-poly)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Computer2 = (props) => {
  const { nodes, materials } = useGLTF("/pc_2/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.01, 0.03, -0.3]} scale={1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.0028735, 2.6711335, -2.5268021]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.5063949}
          >
            <mesh>
              <hemisphereLight intensity={1} groundColor="black" />
              <spotLight
                position={[-20, 50, 10]}
                angle={0.5}
                penumbra={1}
                intensity={2}
                castShadow
                shadow-mapSize={1024}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[-0.7655064, 2.5865622, -0.9923231]}
            rotation={[Math.PI / 2, 0, 0.152902]}
            scale={1.5522434}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.screen}
            />
          </group>
          <group
            position={[-0.5670418, 2.5865622, 1.4365054]}
            rotation={[Math.PI / 2, 0, -0.3236207]}
            scale={1.5522434}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.screen}
            />
          </group>
          <group
            position={[2.3872471, 0, -0.3642128]}
            rotation={[Math.PI / 2, 1e-7, 2.2696831]}
            scale={0.8198352}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.002"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials["Material.006"]}
            position={[-0.7655064, 2.5865622, -0.9923231]}
            rotation={[Math.PI / 2, 0, 0.152902]}
            scale={1.5522434}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials["Material.006"]}
            position={[-0.5670418, 2.5865622, 1.4365054]}
            rotation={[Math.PI / 2, 0, -0.3236207]}
            scale={1.5522434}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials["Material.007"]}
            position={[0.5278141, 2.5994668, 0.4134168]}
            rotation={[Math.PI / 2, -2e-7, -1.6066667]}
            scale={0.7823793}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials["Material.008"]}
            position={[0.5274086, 2.6090839, -1.0630208]}
            rotation={[Math.PI / 2, -2e-7, -1.4053492]}
            scale={0.1872779}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Material}
            position={[0.4572213, 2.5952101, 0]}
            scale={[0.5821715, 1, 1.8321241]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/pc_2/scene.gltf");
export default Computer2;