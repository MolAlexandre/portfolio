/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Modenese Gastone Interiors (https://sketchfab.com/modeneseinteriors)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/traditional-marble-top-coffee-table-by-modenese-cdf822d10bda4dc09e429a85ed70dd50
Title: Traditional marble top coffee table by Modenese
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

const Furniture = (props) =>{
  const { nodes, materials } = useGLTF('/furniture/scene.gltf')
      const goldTexture = useLoader(THREE.TextureLoader, '/textures/marron1.jpg');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.wire_006135006}
          >
        <meshStandardMaterial map={goldTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.wire_006135006}
          >
        <meshStandardMaterial map={goldTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.wire_006135006}
          >
        <meshStandardMaterial map={goldTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.wire_006135006}
          >
        <meshStandardMaterial map={goldTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.wire_006135006}
          >
        <meshStandardMaterial map={goldTexture} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/furniture/scene.gltf')
export default Furniture
