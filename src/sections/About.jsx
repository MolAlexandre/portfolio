import React, { Suspense, useState } from "react";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/Loading.jsx";
import Brain from "../components/Brain.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" alexandre.molohio@etu.emse.fr");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 py-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-8 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex gap-8">
            <img
              src="cv_asset/pp1.png"
              alt="grid-1"
              className="w-2/5 h-full object-cover rounded-lg"
            />
            <div className="w-3/5 flex flex-col">
              <p className="text-5xl font-semibold mb-2 text-white ">
                Alexandre
              </p>
              <p className="text-3xl font-medium text-gray-300 ">Molohio</p>
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
        <div className="col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <p className="grid-headtext">My education / diplome</p>
            <p className="grid-subtext">logo d'ecole diplome etc</p>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">
              Artificial Intelligence and Machine Learning /Web and Mobile
              Development / Expertise in modern /Data Science
            </p>
            <div>
              <Button
                name="View skills"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        {/* Projet*/}
        <div className="col-span-2 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 pt-4 flex flex-col gap-2 justify-center">
            <Canvas>
              <Suspense fallback={CanvasLoader}>
                <Brain scale={3.6} />
              </Suspense>
            </Canvas>
            <div className="flex flex-col ">
              <p className="grid-headtext">
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
        <div className="col-span-3 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 ">
            <p className="grid-headtext">
              Passionnate / Présentation de projets personnels avec un bouton
              vers la section "Projets".{" "}
            </p>
          </div>
        </div>
        {/* My vision for the futur*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">
              My vision for the futur / what i stand for
            </p>
            <div>
              <Button
                name="View Projects"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
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
