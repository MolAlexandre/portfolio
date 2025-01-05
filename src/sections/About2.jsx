import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import Robot from "../components/Robot.jsx";
import { Leva, useControls } from "leva";

const About2 = ({ handleCopy, hasCopied }) => {
  const { robotX, robotY, robotZ, robotIntensity } = useControls({
    robotX: { value: -0.6, min: -20, max: 20 },
    robotY: { value: 7.4, min: -20, max: 20 },
    robotZ: { value: 4.0, min: -20, max: 20 },
    robotIntensity: { value: 1, min: -20, max: 20 },
  });

  return (
    <div className="c-space my-40 grid grid-cols-3 grid-rows-2 gap-5 h-full w-full">
      {/* Why This Curiosity for AI */}
      <div className="xl:col-span-3 xl:row-span-1">
        <div className="grid-container">
          <div className="pl-5 py-5 flex flex-col gap-8 h-full">
            <div className="flex flex-line gap-5 ">
              <Leva hidden />
              <Canvas>
                <Suspense fallback={CanvasLoader}>
                  <directionalLight
                    position={[robotX, robotY, robotZ]}
                    intensity={robotIntensity}
                  />
                  <hemisphereLight intensity={1} />
                  <Robot scale={9.5} />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
              <div className="flex flex-col gap-8 ">
                <p className="grid-headtext !mb-0 ">
                  Why This Curiosity for AI ?
                </p>
                <div className="flex grid-subtext flex-col gap-6 pl-4">
                  <div className="flex flex-col gap-2">
                    <p className=" text-white-700 text-2xl font-semibold">
                      AI as a Revolution
                    </p>
                    <p>
                      I’m motivated by the desire to understand complex systems
                      and contribute to their evolution. From automating tasks
                      to creating entirely new possibilities, AI opens doors to
                      innovation across every field. The fact that it seamlessly
                      integrates into so many domains makes it even more
                      fascinating to explore.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" text-white-700 text-2xl font-semibold">
                      Curiosity and Responsibility
                    </p>
                    <p>
                      I’m deeply curious about the mathematical foundations and
                      model architectures that power AI. Understanding the "why"
                      behind these technologies excites me, especially in areas
                      like generative AI and diffusion models. At the same time,
                      I’m committed to ensuring progress aligns with ethical
                      principles, addressing issues like data privacy, security,
                      and the societal impact of its use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why should we work together ? */}
      <div className="col-span-2 xl:row-span-1">
        <div className="grid-container">
          <p className="grid-headtext"> Why should we work together ?</p>
        </div>
      </div>

      {/* Contact me */}
      <div className="xl:col-span-1 xl:row-span-1">
        <div className="grid-container">
          <img
            src="assets/grid4.png"
            alt="grid-4"
            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
          />
          <div className="space-y-2">
            <p className="grid-subtext text-center">Contact me</p>
            <div className="copy-container" onClick={handleCopy}>
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
              />
              <p className="lg:text-xl md:text-m font-medium text-gray_gradient text-white">
                alexandre.molohio@etu.emse.fr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;