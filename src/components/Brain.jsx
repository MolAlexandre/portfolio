import { useGLTF, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Brain = (props) => {
  const { nodes, materials } = useGLTF("/brain/scene.gltf");
  const group = useRef();

  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Ajustez la vitesse de rotation ici
    }
  });


  return (
    <Float floatIntensity={1}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="07e8ba9162674e488df6dd56fc54b2e3fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.012}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Icosphere001"
                    rotation={[-Math.PI / 2, 0, -2.7341]}
                    scale={100}
                  >
                    <mesh
                      name="Icosphere001_Particle_2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_2_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_2_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0.geometry}
                      material={materials.Particle_1}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0_1.geometry}
                      material={materials.Particle_1}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0_2.geometry}
                      material={materials.Particle_1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/brain/scene.gltf");
export default Brain;