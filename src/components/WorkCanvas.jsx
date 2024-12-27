import React, { useState, useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "./Loading";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Frame from "./Frame";

const Node = ({ position, color }) => {
  const goldTexture = useLoader(THREE.TextureLoader, "/textures/gold10.jpg");

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color || "white"} map={goldTexture} />
    </mesh>
  );
};
const Connection = ({ start, end, color }) => {
  const goldTexture = useLoader(
    THREE.TextureLoader,
    "/textures/neuroneTexture.jpg"
  );

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
      ]),
    [start, end]
  );
  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 20, 0.03, 8, false),
    [curve]
  );
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} normalMap={goldTexture} />
    </mesh>
  );
};

const Pole = ({ position, height }) => {
  const goldTexture = useLoader(THREE.TextureLoader, "/textures/gold.jpg");
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.07, 0.07, height, 32]} />
      <meshStandardMaterial map={goldTexture} />
    </mesh>
  );
};

const Square = ({ position, size, color }) => {
  const goldTexture = useLoader(THREE.TextureLoader, "/textures/gold.jpg");
  return (
    <mesh position={position}>
      <boxGeometry args={[6, 0.5, 2.5]} />
      <meshStandardMaterial color={color} map={goldTexture} />
    </mesh>
  );
};

const generateConnections = (positions) => {
  const connections = [];
  for (let layer = 0; layer < positions.length - 1; layer++) {
    for (let i = 0; i < positions[layer].length; i++) {
      for (let j = 0; j < positions[layer + 1].length; j++) {
        connections.push([positions[layer][i], positions[layer + 1][j]]);
      }
    }
  }
  return connections;
};

const WorkCanvas = ({ path }) => {
  const [nodeColors, setNodeColors] = useState({});
  const [connectionColors, setConnectionColors] = useState([]);

  const positions = useMemo(
    () => [
      [
        [-2, 1, 0],
        [-2, 0, 0],
        [-2, -1, 0],
      ], // Layer 1: 3 neurons
      [
        [-0.5, 1.5, 0.15],
        [-0.5, 0.5, -0.15],
        [-0.5, -0.5, 0.15],
        [-0.5, -1.5, -0.15],
      ], // Layer 2: 4 neurons
      [
        [1, 1.5, -0.15],
        [1, 0.5, 0.15],
        [1, -0.5, -0.15],
        [1, -1.5, 0.15],
      ], // Layer 3: 4 neurons
      [
        [2.5, 0.5, 0],
        [2.5, -0.5, 0],
      ], // Layer 4: 2 neurons
    ],
    []
  );

  const connections = useMemo(
    () => generateConnections(positions),
    [positions]
  );

  useEffect(() => {
    let timeoutIds = [];

    const resetColors = () => {
      setNodeColors({});
      setConnectionColors(connections.map(() => "#fceec0"));
    };

    const changeNodeColorsInLayer = (layerIndex) => {
      if (layerIndex >= path.length) return;

      path[layerIndex].forEach((nodeIndex) => {
        const coord = positions[layerIndex][nodeIndex];
        setNodeColors((prevColors) => ({
          ...prevColors,
          [JSON.stringify(coord)]: "#01f0f5",
        }));
      });

      const timeoutId = setTimeout(
        () => changeConnectionColorsBetweenLayers(layerIndex),
        1000
      );
      timeoutIds.push(timeoutId);
    };

    const changeConnectionColorsBetweenLayers = (layerIndex) => {
      if (layerIndex >= path.length - 1) return;

      path[layerIndex].forEach((startIndex) => {
        path[layerIndex + 1].forEach((endIndex) => {
          const startCoord = positions[layerIndex][startIndex];
          const endCoord = positions[layerIndex + 1][endIndex];
          const connectionIndex = connections.findIndex(
            ([start, end]) =>
              JSON.stringify(start) === JSON.stringify(startCoord) &&
              JSON.stringify(end) === JSON.stringify(endCoord)
          );
          if (connectionIndex !== -1) {
            setConnectionColors((prevColors) => {
              const newColors = [...prevColors];
              newColors[connectionIndex] = "#01f0f5";
              return newColors;
            });
          }
        });
      });

      const timeoutId = setTimeout(
        () => changeNodeColorsInLayer(layerIndex + 1),
        10
      );
      timeoutIds.push(timeoutId);
    };

    resetColors();
    changeNodeColorsInLayer(0);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [path, positions, connections]);

  return (
    <Canvas >
      <Suspense fallback={CanvasLoader}>
        <PerspectiveCamera
          makeDefault
          fov={100}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={100}
          position={[0, 0.1, 3]}
        />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {positions.flat().map((pos, index) => (
          <Node
            key={index}
            position={pos}
            color={nodeColors[JSON.stringify(pos)]}
          />
        ))}
        {connections.map(([start, end], index) => (
          <Connection
            key={index}
            start={start}
            end={end}
            color={connectionColors[index]}
          />
        ))}
        <Pole position={[-2, -0.5, 0]} height={3} /> {/* Pole in layer 1 */}
        <Pole position={[2.5, -0.7, 0]} height={2.75} /> {/* Pole in layer 4 */}
        <Square position={[0.1, -2.5, 0]} />
        <Frame position={[0, 6, -6]} scale={13} />
        <OrbitControls maxDistance={10}/>
      </Suspense>
    </Canvas>
  );
};

export default WorkCanvas;
