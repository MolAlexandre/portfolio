import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Computers from "../components/Computers.jsx";
import CanvasLoader from "../components/Loading";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import React, { Suspense } from "react";
import { Leva, useControls } from "leva";
import { PerspectiveCamera } from "@react-three/drei";
import Bulp from "../components/Bulp.jsx";
import Brain from "../components/Brain.jsx";
import Button from "../components/Button.jsx";
import Typed from "typed.js";
import Computer3 from "../components/Computer3.jsx";
import NeuralStatue from "../components/NeuralStatue.jsx";

const Hero = () => {
  const isSmallPhone = useMediaQuery({ maxWidth: 480 });
  const isPhone = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1441 });

  const screenHeight = window.innerHeight;
  const sizes = calculateSizes(
    isSmallPhone,
    isPhone,
    isLaptop,
    isDesktop,
    isLargeDesktop,
    screenHeight
  );

  const {
    cameraX,
    cameraY,
    cameraZ,
    positionX,
    positionY,
    positionZ,
    lightIntensity,
    brainX,
    brainY,
    brainZ,
    neuralX,
    neuralY,
    neuralZ,
    bulpX,
    bulpY,
    bulpZ,
  } = useControls({
    cameraX: { value: 4.8, min: -10, max: 20 },
    cameraY: { value: 0.05, min: -10, max: 20 },
    cameraZ: { value: 0, min: -20, max: 20 },
    positionX: { value: -7.0, min: -20, max: 20 },
    positionY: { value: -4.3, min: -20, max: 20 },
    positionZ: { value: -0.3, min: -20, max: 20 },
    lightIntensity: { value: 150, min: 0, max: 300 },
    brainX: { value: -7.8, min: -20, max: 20 },
    brainY: { value: 1.2, min: -20, max: 20 },
    brainZ: { value: -4.1, min: -20, max: 20 },
    neuralX: { value: -6.4, min: -20, max: 20 },
    neuralY: { value:-1.7, min: -20, max: 20 },
    neuralZ: { value: 2.2, min: -20, max: 20 },
    bulpX: { value:-4.8, min: -20, max: 20 },
    bulpY: { value:1.3, min: -20, max: 20 },
    bulpZ: { value: 3, min: -20, max: 20 },

  });

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Artificial Intelligence.",
        "Machine Learning.",
        "Data Science.",
      ],
      typeSpeed: 50,
      loop: true,
      backDelay: 2000, // Délai avant de commencer à supprimer
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full flex flex-col sm:mt-32 mt-18 c-space gap-3">
        <p className="sm:text-5xl text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Alexandre
        </p>
        <div className="line mx-auto">
          <p className="sm:text-2xl text-lg text-gray-400 text-center">
            Student in <span ref={el} className="text-animated" />
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 px-1 my-auto z-10">
        <Leva hidden/>
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              fov={25}
              position={[cameraX, cameraY, cameraZ]}
            />
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI /1.5}// 90 degrees
              minPolarAngle={Math.PI / 3} // 20 degrees upwards
              minAzimuthAngle={Math.PI /3} // 60 degrees to the left
              maxAzimuthAngle={Math.PI / 1.5} // 60 degrees to the right
              enablePan={false}
            />
            <Computer3 position={[positionX, positionY, positionZ]} />
            <Bulp position={[bulpX, bulpY, bulpZ]} scale={0.3} />
            <Brain position={[brainX, brainY, brainZ]} />
            <NeuralStatue position={[neuralX,neuralY, neuralZ]} rotation={[0,-Math.PI/3, 0]}/>
            <pointLight intensity={2} position={[bulpX, bulpY, bulpZ]} />
            <spotLight position={[bulpX, 1.5, 3]} angle={28} intensity={lightIntensity} distance={20} decay={2.8} penumbra={0.5555}/>
              </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
