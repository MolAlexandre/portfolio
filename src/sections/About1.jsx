import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import Brain from "../components/Brain.jsx";
import AcademicBackground from "../components/AcademicBackground.jsx";

const About1 = () => {
  return (
    <div className="c-space grid grid-rows-3 w-full ">
      {/* Eager to learn */}
      <div className="col-span-3 xl:row-span-1 ">
        <div className="w-full border border-black-400 bg-black-200 rounded-lg flex flex-line gap-8 h-full">
          <div className="w-3/4 pl-8">
            <Canvas>
              <Suspense fallback={CanvasLoader}>
                <Brain scale={4.6} />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
          <div className="flex flex-col gap-8 mb-40 mt-20 py-5">
            <p className="grid-headtext ">
              Always growing, always curious—learning is my priority.
            </p>
            <p className="grid-subtext ml-2 text-justify pr-10">
              For me, learning isn’t just a process—it’s a mindset. Whether
              it’s mastering cutting-edge technologies or tackling complex
              challenges, my passion lies in constant growth and
              self-improvement. Staying curious fuels my creativity and drives
              me to achieve more.
            </p>
          </div>
        </div>
      </div>
      {/* AcademicBackground */}
      <div className="col-span-3 row-span-2 mt-5 w-full border border-black-400 bg-black-200 rounded-lg">
        <AcademicBackground />
      </div>
    </div>
  );
};

export default About1;