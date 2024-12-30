import React, { Suspense, useState } from "react";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/Loading.jsx";
import Brain from "../components/Brain.jsx";
import { education } from "../constants/index.js";
import { myProjects } from "../constants/index.js";

const About = () => {
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
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex gap-8">
            <img
              src="cv_asset/pp1.png"
              alt="grid-1"
              className="w-2/5 h-full object-cover rounded-lg"
            />
            <div className="w-3/5 flex flex-col">
              <p className="text-8xl font-semibold font-oswald mb-2 text-white ">
                Alexandre
              </p>
              <p className="text-5xl font-medium font-alex-brush text-gray-300 ">
                Molohio
              </p>
              <p className="grid-subtext mt-5 mb-5">
                A passionate engineering student at Mines de Saint-Étienne,
                driven by curiosity and innovation. I specialize in artificial
                intelligence, problem-solving, and crafting impactful solutions.
                With a strong foundation in both theory and practice, I thrive
                on turning challenges into opportunities. Ready to explore,
                learn, and create in the ever-evolving world of AI.
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
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 flex flex-col gap-5">
            <p className="grid-headtext">My Academic Background</p>
            <div className="sm:py-1 py-2.5 sm:px-5 text-white-600">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg "
                  onMouseEnter={() => handleHover(index)}
                >
                  <div className="py-5">
                    <img
                      className="w-full rounded-xl object-cover mb-5"
                      src={item.icon}
                      alt="logo"
                    />
                    <p className="mb-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      {item.pos}
                      <br />
                      <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expersise*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col justify-between">
            <p className="grid-headtext">Passions and Areas of Expertise</p>
            <ul className="about-list mt-10 mb-10">
              <li className="mb-10">
                <p className="font-alex-brush text-4xl text-white">
                  Machine Learning:
                </p>
                <p className="grid-subtext">
                  Exploring and creating innovative AI solutions with a focus on
                  deep learning and advanced research.
                </p>
              </li>
              <li className="mb-10">
                <p className="font-alex-brush text-4xl text-white">
                  Web and Mobile Development:
                </p>
                <p className="grid-subtext">
                  Designing modern applications, integrating front-end and
                  back-end technologies for seamless user experiences.
                </p>
              </li>
              <li>
                <p className="font-alex-brush text-4xl text-white">
                  Data Science and Analytics:
                </p>
                <p className="grid-subtext">
                  Mastering tools and methodologies to extract valuable insights
                  from complex datasets.
                </p>
              </li>
            </ul>
            <div>
              <Button name="View skills" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Eager to learn*/}
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 pt-4 flex flex-col gap-2 justify-center">
            <Canvas>
              <Suspense fallback={CanvasLoader}>
                <Brain scale={3.2} />
              </Suspense>
            </Canvas>
            <div className="flex flex-col items-start">
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
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 ">
            <p className="grid-headtext">
              Outside of school, I Strive to Create and Learn through Projects.{" "}
            </p>
            <div className="w-full h-full p-10 flex flex-wrap gap-10 justify-center items-center">
              {myProjects.map((item, index) => (
                <div key={index} className="w-1/6 px-2">
                  <img
                    src={item.animated_icon}
                    alt="project"
                    className="w-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My vision for the futur*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">
              My vision for the futur / what i stand for
            </p>
            <p className="grid-subtext text-justify">
              What I Stand For I strive to
              collaborate on meaningful projects and create practical tools that
              solve real-world problems. My academic journey has fueled my
              passion for research, and I aim to pursue a Ph.D. in a niche field
              of AI that challenges me to innovate, automate complex tasks, and
              make difficult processes more efficient. While I am open to
              diverse projects, my main focus remains on leveraging AI to drive
              automation, problem-solving, and innovation. I am deeply committed
              to staying updated in this rapidly evolving field by constantly
              learning through documentation, videos, and hands-on exploration.
              
            </p>
          </div>
        </div>

        <div className="col-span-2 xl:row-span-1">
          <div className="grid-container">
            <p className="grid-headtext"> Why should we work together ?</p>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-1">
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
