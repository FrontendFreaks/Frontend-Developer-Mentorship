import React from "react";
import ReactPlayer from "react-player";
const Introduction = () => {
  return (
    <div>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>Build Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div className="flex flex-row items-start justify-between space-x-6 p-1">
          <div className="md:1/2">
            <ReactPlayer url="https://youtu.be/F6WT-EwTBt4" controls />
          </div>
          <div className="md:1/2">
            <h1 className="text-left font-bold text-4xl   ">
              Batch Highlights
            </h1>
            <ol className="flex flex-col items-start justify-between space-y-2 mt-3">
              <li className="text-xl text-[#767676] ">
                <span className="text-3xl text-[#6557fd] main-heading font-bold ">
                  1.{" "}
                </span>
                Second batch: ReactJS, Redux, Tailwind, NextJS. Builds
                real-world projects, advances frontend skills.
              </li>
              <li className="text-xl text-[#767676]">
                <span className="text-3xl text-[#6557fd] main-heading font-bold ">
                  2.{" "}
                </span>{" "}
                For those with HTML, CSS, and JavaScript basics. Elevate skills
                and create with guidance.
              </li>
              <li className="text-xl text-[#767676] ">
                <span className="text-3xl text-[#6557fd] main-heading font-bold ">
                  3.{" "}
                </span>{" "}
                Level up in frontend development: ReactJS, Redux, Tailwind,
                NextJS projects in second batch.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
