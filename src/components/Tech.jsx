import React, { useState } from "react";
import { areaOfExpertise } from "../constants/index.js";
import AnimatedArrowButton from "./AnimatedArrowButton.jsx";
import BallCanvas from "./BallCanvas.jsx";

const Tech = () => {
  const [path, setPath] = useState([]);

  const handleHover = (index) => {
    const paths = [
      [[0], [0, 1, 3], [1], [0], [0]], // Path for first hover
      [[1], [1, 2], [0, 1, 2, 3], [1], [0]], // Path for second hover
      [[2], [2, 3], [1, 2, 3], [1], [0]], // Path for third hover
    ];
    setPath(paths[index]);
  };

  return (
    <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-5 w-full h-full">
      {/* Expertise */}
      <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container flex flex-col justify-between h-full">
          <p className="grid-headtext">Passions and Areas of Expertise</p>
          <ul className="about-list flex flex-between flex-col pt-5 gap-12 ">
            {areaOfExpertise.map((item, index) => (
              <li
                key={index}
                className="pt-5 px-5 rounded-1xl hover:bg-black-300 transition-colors duration-500"
                onMouseEnter={() => handleHover(index)}
              >
                <p className="font-alex-brush text-5xl text-white">
                  {item.title}
                </p>
                <p className="grid-subtext">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex justify-end">
            <div className="w-3/5 flex justify-end">
              <div className="w-full p-2 py-4 rounded-xl hover:bg-black-300 transition-colors duration-500">
                <AnimatedArrowButton  name={"View my Project"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 xl:row-span-2">
        <div className="w-full h-full border border-black-400 bg-black-200 rounded-lg sm:p-7 pt-4 flex flex-col gap-2 justify-center">
          <BallCanvas path={path} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
