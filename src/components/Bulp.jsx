import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Bulp = (props) => {
  const { nodes, materials } = useGLTF("/bulp/scene.gltf");
  const goldTexture = useLoader(THREE.TextureLoader, "/textures/gold8.jpg");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.952, -0.335, -0.885]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials["13___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials["13___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials["20___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials["15___Default"]}
          />

<mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials["19___Default"]}
          >
            <meshStandardMaterial map={goldTexture} color="yellow" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials["19___Default"]}
          >
            <meshStandardMaterial map={goldTexture} color="yellow" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials["15___Default"]}
/>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials["14___Default"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/bulp/scene.gltf");
export default Bulp;
