import React, { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "./Loading";
import { Suspense } from "react";
import { technologies } from "../constants"; // Import technologies
import { Center } from "@react-three/drei";

const Ball = ({ imgUrl, position, color }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={1.5} position={position}>
      <ambientLight intensity={0.01} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.2} />
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color || "#d3d3d3"}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1.5}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const Connection = ({ start, end, color }) => {
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
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const generateConnections = (positions) => {
  const connections = [];
  for (let i = 0; i < positions.length - 1; i++) {
    for (let j = 0; j < positions[i].length; j++) {
      for (let k = 0; k < positions[i + 1].length; k++) {
        connections.push([positions[i][j], positions[i + 1][k]]);
      }
    }
  }
  return connections;
};
const tableau = [
  [
    [-10, 5, 0],
    [-10, 0, 0],
    [-10, -5, 0],
  ], // Layer 1: 3 positions
  [
    [-2.5, 7.5, 0.75],
    [-2.5, 2.5, -0.75],
    [-2.5, -2.5, 0.75],
    [-2.5, -7.5, -0.75],
  ], // Layer 2: 4 positions
  [
    [5, 7.5, -0.75],
    [5, 2.5, 0.75],
    [5, -2.5, -0.75],
    [5, -7.5, 0.75],
  ], // Layer 3: 4 positions
  [
    [12.5, 5, 0],
    [12.5, 0, 0],
    [12.5, -5, 0],
  ], // Layer 4: 2 positions
  [[20, 0, 0],]
];

const BallCanvas = ({ path }) => {
  const [nodeColors, setNodeColors] = useState({});
  const [connectionColors, setConnectionColors] = useState([]);

  const positions = useMemo(() => tableau, []);
  const connections = useMemo(() => generateConnections(tableau), [tableau]);

  useEffect(() => {
    let timeoutIds = [];

    const resetColors = () => {
      setNodeColors({});
      setConnectionColors(connections.map(() => "#d3d3d3"));
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
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Center>
          <OrbitControls minDistance={10} maxDistance={35} />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
          {positions.flat().map((pos, index) => (
            <Ball
              key={index}
              imgUrl={technologies[index % technologies.length].icon}
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
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
