import React from "react";
import { workExperiences } from "../constants/index.js";

const AcademicBackground = () => {
  return (
    <div className="h-full rounded-lg bg-black-200 border border-black-300 sm:p-7 flex flex-col gap-5 px-4">
      <p className="grid-headtext text-center">My Work Experience</p>
      <div className="sm:py-10 py-5 sm:px-5 px-3.5 w-full">
        {workExperiences.map((item, index) => (
          <div
            key={index}
            className="work-content_container flex flex-col items-center "
          >
            <div className="h-full flex flex-col justify-start items-center py-2 ">
              <div className="work-content_logo">
                <img className="w-full h-full" src={item.icon} alt="logo" />
              </div>
              <div className="work-content_bar" />
              
              
            </div>
            <div className="sm:p-5 px-2.5 py-5 grid-subtext">
              <p className="font-bold text-white-800">{item.pos}</p>
              <p className="text-sm mb-5">
                {item.name} -- <span>{item.duration}</span>
              </p>
              <p className="group-hover:text-white transition-all ease-in-out duration-500 ">
                {item.title}
              </p>
              {item.technologies && item.concepts && (
                <div className="w-full flex justify-center items-center px-10 mb-14 mt-7">
                  <div className="grid grid-cols-2 w-full grid-subtext">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Technos</h3>
                      <ul className="list-disc list-inside">
                        {item.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Abord Concept
                      </h3>
                      <ul className="list-disc list-inside">
                        {item.concepts.map((concept, i) => (
                          <li key={i}>{concept}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
