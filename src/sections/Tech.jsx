import React from "react";
import BallCanvas from "../components/BallCanvas.jsx";
import { technologies } from "../constants/index.js";

const Tech = () => {
  return (
    <section className="c-space my-20 py-20" id="tech">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
