import React, { Suspense, useState } from "react";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import Brain from "../components/Brain.jsx";
import { education } from "../constants/index.js";
import { myProjects } from "../constants/index.js";
import { projectIa } from "../constants/index.js";
import AnimatedArrowButton from "../components/AnimatedArrowButton.jsx";
import NeuralStatue from "../components/NeuralStatue.jsx";
import Robot from "../components/Robot.jsx";
import { Leva, useControls } from "leva";

const About = () => {
  const { robotX, robotY, robotZ, robotIntensity } = useControls({
    robotX: { value: -0.6, min: -20, max: 20 },
    robotY: { value: 7.4, min: -20, max: 20 },
    robotZ: { value: 4.0, min: -20, max: 20 },
    robotIntensity: { value: 1, min: -20, max: 20 },
  });

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("alexandre.molohio@etu.emse.fr");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 py-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-8 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Qui je suis ?*/}
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 p-4 flex gap-8">
            <img
              src="cv_asset/pp1.png"
              alt="grid-1"
              className="w-2/5 h-4/5 object-cover rounded-lg"
            />
            <div className="w-3/5 flex flex-col">
              <p className="text-8xl font-semibold font-oswald mb-2 text-white ">
                Alexandre
              </p>
              <p className="text-5xl font-bold font-oswald text-gray-300 ">
                Molohio
              </p>
              <p className="grid-subtext mt-10 mb-5">
                A passionate engineering student at Mines de Saint-Étienne,
                driven by curiosity and innovation. I specialize in artificial
                intelligence, problem-solving, and crafting impactful solutions.
                With a strong foundation in both theory and practice, I thrive
                on turning challenges into opportunities. Ready to explore,
                learn, and create in the ever-evolving world of AI.
              </p>
              <p className=" text-white-700 text-2xl font-semibold mt-10 mb-5">
                Looking Ahead
              </p>
              <p className="grid-subtext ">
              I aspire to pursue a PhD in AI, driven by a passion for innovation and ethical responsibility. Fascinated by generative AI and model architectures, I aim to explore groundbreaking research while addressing the societal and ethical challenges of this transformative field.
              </p>
              <div>
                <Button
                  name="View my Education"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education*/}
        <div className="col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 flex flex-col gap-5">
            <p className="grid-headtext">My Academic Background</p>
            <div className="flex flex-col gap-10 sm:py-1 sm:px-5 text-white-600 h-full my-5 justify-center">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="items-start rounded-lg"
                  onMouseEnter={() => handleHover(index)}
                >
                  <div className="flex flex-col h-full ">
                    <img
                      className="w-full rounded-xl object-cover mb-5"
                      src={item.icon}
                      alt="logo"
                    />
                    <div className="justify-between flex flex-line">
                      <p className="font-bold text-white-800 justify-between">
                        {item.name}{" "}
                      </p>
                      <p className="text-white-800 ">{item.duration}</p>
                    </div>
                    <p className="">{item.pos}</p>

                    <div className="mt-5 flex justify-end">
                      <div className="w-3/5 flex justify-end">
                        <div className="w-full p-2 py-4 rounded-xl hover:bg-black-300 transition-colors duration-500">
                          <AnimatedArrowButton
                            name={"View education"}
                            className="justify-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col">
            <p className="grid-headtext">Passions and Areas of Expertise</p>
            {/*<p className="grid-subtext ">
              From my academic journey to my personal projects, I have specialized in 3 majors fields where i learned notion and technos .
              </p>*/}
            {/* border-l-4 border-l-black-200 border-b-white-600 border-b-2*/}
            <ul className="about-list flex flex-between flex-col pt-5 gap-6">
              <li className=" pt-5 px-5 rounded-2xl">
                <p className="font-alex-brush text-5xl text-white">
                  Machine Learning
                </p>
                <p className="grid-subtext">
                  Exploring and creating innovative AI solutions with a focus on
                  deep learning and advanced research.
                </p>
                <div className="pt-4 flex justify-end">
                  <div className="w-3/5 flex justify-end">
                    <div className="w-full p-2 py-4 rounded-xl hover:bg-black-300 transition-colors duration-500">
                      <AnimatedArrowButton name={"View my Projects"} />
                    </div>
                  </div>
                </div>
                <hr className="border-b-1 border-b-white-600 mt-4 mx-auto" />
              </li>
              <li className="pt-5 px-5 rounded-2xl">
                <p className="font-alex-brush text-5xl text-white">
                  Web Development
                </p>
                <p className="grid-subtext">
                  Designing modern applications, integrating front-end and
                  back-end technologies for seamless user experiences.
                </p>
                <div className="pt-4 flex justify-end">
                  <div className="w-3/5 flex justify-end">
                    <div className="w-full p-2 py-4 rounded-xl hover:bg-black-300 transition-colors duration-500">
                      <AnimatedArrowButton name={"View my Projects"} />
                    </div>
                  </div>
                </div>
                <hr className="border-b-1 border-b-white-600 mt-4 mx-auto" />
              </li>
              <li className="pt-5 px-5 rounded-2xl">
                <p className="font-alex-brush text-5xl text-white">
                  Data Science
                </p>
                <p className="grid-subtext">
                  Mastering tools and methodologies to extract valuable insights
                  from complex datasets.
                </p>
                <div className="pt-4 flex justify-end">
                  <div className="w-3/5 flex justify-end">
                    <div className="w-full p-2 py-4 rounded-xl hover:bg-black-300 transition-colors duration-500">
                      <AnimatedArrowButton name={"View my Projects"} />
                    </div>
                  </div>
                </div>
                <hr className="border-b-1 border-b-white-600 mt-4 mx-auto" />
              </li>
            </ul>
          </div>
        </div>

        {/* Eager to learn*/}
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 pt-4 flex flex-col gap-2 justify-center">
            <Canvas>
              <Suspense fallback={CanvasLoader}>
                <Brain scale={3.2} />
              </Suspense>
            </Canvas>
            <div className="flex flex-col items-start mb-4">
              <p className="grid-headtext ">
                Always growing, always curious—learning is my priority.
              </p>
              <p className="grid-subtext">
                For me, learning isn’t just a process—it’s a mindset. Whether
                it’s mastering cutting-edge technologies or tackling complex
                challenges, my passion lies in constant growth and
                self-improvement. Staying curious fuels my creativity and drives
                me to achieve more.
              </p>
            </div>
          </div>
        </div>

        {/* Projets*/}
        <div className="col-span-3 xl:row-span-2">
          <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-2 ">
            <p className="grid-headtext pb-8 ">
              Outside of school, I Strive to Create and Learn through Projects.
            </p>
            <div className="">
              <p className="text-[#afb0b6] text-2xl font-semibold pl-5 ">
                Machine Learning
              </p>
              <div className="w-full h-full p-10 flex flex-nowrap gap-10 justify-evenly ">
                {projectIa.map((item, index) => (
                  <div key={index} className="w-1/6 px-2">
                    <img
                      src={item.animated_icon}
                      alt="project"
                      className="w-full object-contain rounded-lg"
                    />
                    <p className="grid-subtext text-center p-3 ">{item.etat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#afb0b6] text-2xl font-semibold pl-5">
                Web & Mobile Development
              </p>
              <div className="w-full h-full p-10 flex flex-wrap gap-10">
                {projectIa.map((item, index) => (
                  <div key={index} className="w-1/6 px-2">
                    <img
                      src={item.animated_icon}
                      alt="project"
                      className="w-full object-contain rounded-lg"
                      onClick={() => {}}
                    />
                    <p className="grid-subtext text-center p-2">{item.etat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why This Curiosity for AI*/}
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
                        I’m motivated by the desire to understand complex
                        systems and contribute to their evolution. From
                        automating tasks to creating entirely new possibilities,
                        AI opens doors to innovation across every field. The
                        fact that it seamlessly integrates into so many domains
                        makes it even more fascinating to explore.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className=" text-white-700 text-2xl font-semibold">
                        Curiosity and Responsibility
                      </p>
                      <p>
                        I’m deeply curious about the mathematical foundations
                        and model architectures that power AI. Understanding the
                        "why" behind these technologies excites me, especially
                        in areas like generative AI and diffusion models. At the
                        same time, I’m committed to ensuring progress aligns
                        with ethical principles, addressing issues like data
                        privacy, security, and the societal impact of its use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why should we work together ?*/}
        <div className="col-span-2 xl:row-span-1">
          <div className="grid-container">
            <p className="grid-headtext"> Why should we work together ?</p>
          </div>
        </div>

        {/* Contact me*/}
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
    </section>
  );
};

export default About;
