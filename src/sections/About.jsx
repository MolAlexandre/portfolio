import React, { Suspense, useState } from "react";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import Brain from "../components/Brain.jsx";
import { education } from "../constants/index.js";
import AnimatedArrowButton from "../components/AnimatedArrowButton.jsx";
import Robot from "../components/Robot.jsx";
import { Leva, useControls } from "leva";
import Project from "./Project";
import Tech from "../components/Tech.jsx";
import Tech1 from "../components/AcademicBackground.jsx";
import About1 from "./About1";

const About = () => {

  return (
    <section className="c-space my-20 py-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full w-full">
        {/* Qui je suis ?*/}
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full border border-black-400 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-8 h-full">
            <div className="flex flex-line gap-8 w-full h-4/5">
              <img
                src="cv_asset/pp1.png"
                alt="grid-1"
                className="w-2/5  object-cover rounded-lg"
              />
              <div className="w-3/5  flex flex-col">
                <p className="text-8xl font-semibold font-oswald mb-2 text-white ">
                  Alexandre
                </p>
                <p className="text-5xl font-bold font-oswald text-gray-300 ">
                  Molohio
                </p>
                <p className="grid-subtext mt-10 mb-5">
                  A passionate engineering student at Mines de Saint-Étienne,
                  driven by curiosity and innovation. I specialize in artificial
                  intelligence, problem-solving, and crafting impactful
                  solutions. With a strong foundation in both theory and
                  practice, I thrive on turning challenges into opportunities.
                  Ready to explore, learn, and create in the ever-evolving world
                  of AI.
                </p>
                <p className=" text-white-700 text-2xl font-semibold mt-10 mb-5">
                  Looking Ahead
                </p>
                <p className="grid-subtext ">
                  I aspire to pursue a PhD in AI, driven by a passion for
                  innovation and ethical responsibility. Fascinated by
                  generative AI and model architectures, I aim to explore
                  groundbreaking research while addressing the societal and
                  ethical challenges of this transformative field.
                </p>
              </div>
            </div>
            <div>
              <p className="text-white-700 text-2xl font-semibold mb-10 text-center">
                My links and social networks:
              </p>
              <div className="flex justify-center gap-10 px-20">
                <Button name="My Resume" isBeam containerClass="w-full" />
                <Button name="Linkdin" isBeam containerClass="w-full" />
                <Button name="Github" isBeam containerClass="w-full" />
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

        {/* Expertise */}
        <div className="col-span-3 xl:row-span-2">
          <Tech />
        </div>

      </div>
    </section>
  );
};

export default About;
