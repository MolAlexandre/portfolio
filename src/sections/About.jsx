import React, { Suspense, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/Loading.jsx";
import { Center } from "@react-three/drei";
import Brain from "../components/Brain.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 py-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-10 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-2 xl:row-span-3">
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
              <p className="text-3xl font-medium text-gray-300 ">
                My Objectives
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
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 justify-center">
            <Canvas>
              <Suspense fallback={CanvasLoader}>
                <Brain scale={3.5} />
              </Suspense>
            </Canvas>
            <div className="flex flex-col justify-center">
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
            <div>
              <Button name="View Resume" isBeam containerClass="w-full" />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={450}
                width={450}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 43.529742,
                    lng: 5.447427,
                    text: "Aix-en-Provence, France",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Aix-en-Provence, France and open to work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">My Technical Skills</p>
              <p className="grid-subtext mb-5">
                Artificial Intelligence and Machine Learning
                Proficient in designing, developing, and deploying machine
                learning and deep learning models. Skilled in modern libraries
                such as TensorFlow, PyTorch, and Hugging Face. Passionate about
                solving complex problems in AI with a focus on innovation and
                efficiency. 
                </p>
                <p className="grid-subtext mb-5">
                Web and Mobile Development Expertise in modern
                frameworks like React, React Native, and Node.js for building
                high-performance, interactive, and responsive applications.
                Adept at transforming ideas into practical solutions through
                intuitive user interfaces and robust architectures. 
                </p>
                <p className="grid-subtext mb-5">          
                Data Science
                Extensive experience in data collection, processing, and
                analysis. Skilled in data manipulation, visualization, and
                storytelling using tools like Python, Pandas, and Matplotlib.
                Capable of deriving actionable insights from complex datasets.
                Infrastructure and Deployment Strong capabilities in continuous
                integration, cloud deployment, and containerization with Docker
                and Kubernetes. Experienced in deploying AI and web applications
                on scalable and high-performance environments. Additional Key
                Skills Interactive 3D Visualization: Creating immersive renders
                with React Three Fiber. Collaboration and Communication:
                Flexible in working with international teams, both remotely and
                on-site.
              </p>
            </div>
            <div>
              <Button name="View Projects" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
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
