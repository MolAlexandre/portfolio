/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Cybertron B-127 (https://sketchfab.com/robo-reboot)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/computer-d1b532d54a4e4a34b780777ced24f24c
Title: Computer
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { useLoader } from '@react-three/fiber'

const Screens = (props) => {
  const { nodes, materials } = useGLTF('/screens/scene.gltf')
  const texture1 = useLoader(THREE.TextureLoader, '/textures/Scrum2.png');
  const texture2 = useLoader(THREE.TextureLoader, '/textures/Scrum.jpg');

  useEffect(() => {
    if (texture1) {
      texture1.flipY = false;
    }
    if (texture2) {
      texture2.flipY = false;
    }
  }, [texture1, texture2]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material}
        position={[0.1102, -0.1864, 0.3356]}
        scale={[0.3846, 0.2154, 0.0009]}
      >
        <meshBasicMaterial map={texture1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.material_1}
        position={[-0.313, 0.1587, 0.2757]}
        scale={[0.4522, 0.3011, 0.0009]}
      >
        <meshBasicMaterial map={texture2} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.material_2}
        position={[0.3668, 0.142, 0.3069]}
        scale={[0.5792, 0.363, 0.0009]}
      >
        <meshBasicMaterial map={texture1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.material_3}
        position={[0.3786, -0.1679, 0.3169]}
        scale={[0.5277, 0.2955, 0.0009]}
      >
        <meshBasicMaterial map={texture2} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.material_4}
        position={[-0.3269, -0.1491, 0.3047]}
        scale={[0.5965, 0.3354, 0.0009]}
      >
        <meshBasicMaterial map={texture1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.material_5}
        position={[-0.0456, 0.0227, 0.3241]}
        scale={[0.4955, 0.2775, 0.0009]}
      >
        <meshBasicMaterial map={texture2} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/screens/scene.gltf')
export default Screens;