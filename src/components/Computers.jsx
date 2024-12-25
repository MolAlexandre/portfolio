import React from "react";
import {useGLTF } from "@react-three/drei";

const Computers = ({ sizes }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position= {[-20, 50, 10]}
        angle={0.8}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1}/>
      <primitive
        object={computer.scene}
        scale={sizes.deskScale}
        position={sizes.deskPosition}
        rotation={sizes.rotation}
      />
    </mesh>
  );
};


export default Computers;