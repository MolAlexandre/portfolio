import React, {useState} from "react";
import BallCanvas from "../components/BallCanvas";
import { workExperiences } from "../constants/index.js";

const Tech = () => {
    const [path, setPath] = useState([]);
  
    const handleHover = (index) => {
      const paths = [
        [[0], [0,1, 3], [1], [0]], // Path for first hover
        [[1], [1, 2], [0, 1, 2, 3], [1]], // Path for second hover
        [[2], [2, 3], [1,2,3], [1]], // Path for third hover
      ];
      setPath(paths[index]);
    };
  return (
    <section className="c-space my-20 py-20" id="tech">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12 text-white-600">
        <div className="col-span-2 h-[800px] rounded-lg bg-black-200 border border-black-300">
          <BallCanvas path ={path}/>
        </div>

        <div className="col-span-1 h-[800px] rounded-lg bg-black-200 border border-black-300">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                className="work-content_container group"
                onMouseEnter={() => handleHover(index)}
              >
                <div className="h-full flex flex-col justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src={item.icon} alt="logo" />
                  </div>
                  <div className="work-content_bar" />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{item.name}</p>
                  <p className="text-sm mb-5">
                    {item.pos} -- <span>{item.duration}</span>
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
    </section>
  );
};

export default Tech;
