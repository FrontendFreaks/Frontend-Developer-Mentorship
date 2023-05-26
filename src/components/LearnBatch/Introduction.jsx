import React from "react";
import { RiPencilRuler2Fill } from "react-icons/ri";
import ReactPlayer from "react-player";
const Introduction = () => {
  return (
    <>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>Learn Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div className="flex flex-row items-start justify-between space-x-6 p-1">
          <div className="md:1/2">
            <ReactPlayer url="https://youtu.be/tI7R7YG4jEY" controls />
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
                Beginner-friendly web development curriculum: Covers HTML, CSS,
                JavaScript, Git, and GitHub from scratch.
              </li>
              <li className="text-xl text-[#767676]">
                <span className="text-3xl text-[#6557fd] main-heading font-bold ">
                  2.{" "}
                </span>{" "}
                Comprehensive learning materials: Includes resources,
                assignments, cheat sheets, and over 100 questions for practice
                and testing.
              </li>
              <li className="text-xl text-[#767676] ">
                <span className="text-3xl text-[#6557fd] main-heading font-bold ">
                  3.{" "}
                </span>{" "}
                Frontend Developer Essential Course: Equips students with
                essential skills and knowledge to excel in frontend development.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
