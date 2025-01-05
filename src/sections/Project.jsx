import { myProjects } from "../constants/index.js";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loading";
import { Suspense } from "react";
import Laptop from "../components/Laptop";

const projectCount = myProjects.length;

const Project = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentProjectIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }
    });
  };

  const currentProject = myProjects[currentProjectIndex];
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full">
      <div className="mt-40 c-space col-span-3 xl:row-span-2">
      <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-2 ">
        <p className="grid-headtext">
          Outside of school, I Strive to Create and Learn through Projects.
        </p>
        <div className="grid lg:grid-cols-5 gap-5 w-full h-full mt-5">
          <div className="col-span-3 xl:row-span-2 h-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 h-full w-full justify-between">
              <div className="absolute top-0 right-0">
                <img
                  src={currentProject.spotlight}
                  alt="spolight"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div
                className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg mt-5"
                style={currentProject.logoStyle}
              >
                <img
                  src={currentProject.logo}
                  alt="logo"
                  className="w-10 h-10 shadow-sm"
                />
              </div>
              {/* Project Text */}
              <div className="flex flex-col gap-5 text-white-600 my-5">
                <p className="text-white text-2xl font-semibold">
                  {currentProject.title}
                </p>
                <p className="grid-subtext">{currentProject.desc}</p>
                <p className="grid-subtext">{currentProject.subdesc}</p>
              </div>
              {/* Project list of caracteristic */}
              <div className="w-full flex justify-center items-center px-10">
                <div className="grid grid-cols-2 gap-5 w-full grid-subtext">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technos</h3>
                    <ul className="list-disc list-inside">
                      {currentProject.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Abord Concept
                    </h3>
                    <ul className="list-disc list-inside">
                      {currentProject.concepts.map((concept, index) => (
                        <li key={index}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="flex justify-end w-full gap-5">
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Check Live Site</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="w-3 h-3"
                  />
                </a>
              </div>

              {/* Project Navigation */}
              <div className="flex justify-end w-full">
                <div className="flex justify-between items-center mt-5 w-full">
                  <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("previous")}
                  >
                    <img
                      src="/assets/left-arrow.png"
                      alt="left"
                      className="w-4 h-4"
                    />
                  </button>
                  <button
                    className="arrow-btn"
                    onClick={() => handleNavigation("next")}
                  >
                    <img
                      src="/assets/right-arrow.png"
                      alt="right"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="border col-span-2 xl:row-span-2 border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={3} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[0.8, -2.3, 0.5]}
                    rotation={[0.1, -1, 0]}
                  >
                    <Laptop texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} maxDistance={10} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Project;
