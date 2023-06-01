import React from "react";
import { GoStar } from "react-icons/go";
import ReactPlayer from "react-player";
const Introduction = () => {
  return (
    <>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>Learn Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div className="space-y-4 flex flex-col md:flex-row items-start justify-between space-x-3 md:space-y-0">
          <div className="w-full ">
            <ReactPlayer
              url="https://youtu.be/tI7R7YG4jEY"
              width="100%"
              controls
            />
          </div>

          <div className="md:1/2  ">
            <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
              <h1> Batch Highlights</h1>
              <div className="w-28 h-2 bg-[white] rounded"></div>
            </div>
            <ol className="flex flex-col items-start justify-between space-y-2 mt-3">
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={70} className="-mt-4" />

                <p>
                  Beginner-friendly web development curriculum: Covers HTML,
                  CSS, JavaScript, Git, and GitHub from scratch.
                </p>
              </li>
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={70} className="-mt-4" />

                <p>
                  Comprehensive learning materials: Includes resources,
                  assignments, cheat sheets, and over 100 questions for practice
                  and testing.
                </p>
              </li>
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={70} className="-mt-4" />

                <p>
                  Frontend Developer Essential Course: Equips students with
                  essential skills and knowledge to excel in frontend
                  development.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
