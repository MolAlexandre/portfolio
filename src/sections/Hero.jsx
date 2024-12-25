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
  } = useControls({
    cameraX: { value: 21, min: 0, max: 50 },
    cameraY: { value: -3, min: -10, max: 10 },
    cameraZ: { value: 4.5, min: 0, max: 50 },
    positionX: { value: 1.6, min: -20, max: 50 },
    positionY: { value: 1.6, min: -20, max: 50 },
    positionZ: { value: 7.2, min: -20, max: 50 },
    lightIntensity: { value: 150, min: 0, max: 300 },
    brainX: { value: 2.4, min: -20, max: 20 },
    brainY: { value: 1.2, min: -20, max: 20 },
    brainZ: { value: -4, min: -20, max: 20 },
  });

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Artificial Intelligence.", "Machine Learning.", "Data Science."],
      typeSpeed: 50,
      loop: true,
      backDelay: 3000, // Délai avant de commencer à supprimer
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-5xl text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Alexandre
        </p>
        <div className="line mx-auto">
          <p className="sm:text-2xl text-lg text-gray-400 text-center">
            Student in {" "}
            <span ref={el} className="text-animated" />
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 px-1 my-auto">
        <Leva />
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
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers sizes={sizes} />
            <Bulp position={[1.6, 1.6, 7.2]} />
            <Brain position={[brainX, brainY, brainZ]} />
            <pointLight
              intensity={lightIntensity}
              position={[positionX, positionY, positionZ]}
            />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
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
