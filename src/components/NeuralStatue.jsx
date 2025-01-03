/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: yanix (https://sketchfab.com/yanix)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/neural-network-statue-48047d376e664ed18595395a6e60f100
Title: Neural Network Statue
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

const NeuralStatue = (props) => {
  const { nodes, materials } = useGLTF('/neural_statue/scene.gltf')
  const goldTexture = useLoader(THREE.TextureLoader, '/textures/gold12.jpg');
  return (
    <group {...props} dispose={null}>
      <mesh
        name="neural_network_statue_plastic_object_neural_network_statue_plastic_mat_0"
        castShadow
        receiveShadow
        geometry={
          nodes.neural_network_statue_plastic_object_neural_network_statue_plastic_mat_0.geometry
        }
        material={materials.neural_network_statue_plastic_mat}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      />
      <mesh
        name="neural_network_statue_gold_object_neural_network_statue_gold_mat_0"
        castShadow
        receiveShadow
        geometry={nodes.neural_network_statue_gold_object_neural_network_statue_gold_mat_0.geometry}
        material={materials.neural_network_statue_gold_mat}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      >
        <meshStandardMaterial map={goldTexture} />
        </mesh>  
      <mesh
        name="neural_network_statue_glass_object_neural_network_statue_glass_mat_0"
        castShadow
        receiveShadow
        geometry={
          nodes.neural_network_statue_glass_object_neural_network_statue_glass_mat_0.geometry
        }
        material={materials.neural_network_statue_glass_mat}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      />
    </group>
  )
}

useGLTF.preload('/neural_statue/scene.gltf')
export default NeuralStatue;
