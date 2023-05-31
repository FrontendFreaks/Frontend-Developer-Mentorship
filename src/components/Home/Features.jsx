import React from "react";
import { MdOndemandVideo, MdAssignment, MdSpeakerNotes } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BsPeopleFill } from "react-icons/bs";
import { FaTools, FaUserGraduate, FaVideo } from "react-icons/fa";
const Features = () => {
  return (
    <div
      className="mt-24 py-24 px-10  flex flex-col items-center justify-between space-y-12 bg-[#060606]"
      id="features"
    >
      <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
        <h1> Features</h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-between  ">
        <div className="px-3 py-10 flex flex-col items-center justify-between space-y-2 bg-[#161616] rounded ">
          <FaUserGraduate size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white ">Guidance</h1>
          <p className="text-center text-[#767676] ">
            Get guidance in your career and life with the best mentors and
            experts across the world
          </p>
        </div>
        <div className="px-3 py-10 flex flex-col items-center justify-between space-y-2 bg-[#161616] rounded ">
          <FaVideo size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white">
            Curated Videos
          </h1>
          <p className="text-center text-[#767676]">
            Discover through detailed tutorials: algorithm analysis,
            implementation, and optimization.
          </p>
        </div>
        <div className="px-3 py-10 flex flex-col items-center justify-between space-y-2 bg-[#161616] rounded ">
          <MdAssignment size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white">
            Assignments
          </h1>
          <p className="text-center text-[#767676]">
            Assignments and questions are provided to understand the concepts
            well.
          </p>
        </div>
        <div className="px-3  py-10 flex flex-col items-center justify-between space-y-2  bg-[#161616] rounded">
          <FaTools size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white ">
            {" "}
            Learn By Doing
          </h1>
          <p className="text-center text-[#767676]">
            Learn things by buidling awesome projects and doing open source
            contributions
          </p>
        </div>
        <div className="px-3 py-10 flex flex-col items-center justify-between space-y-2 bg-[#161616] rounded ">
          <MdSpeakerNotes size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white ">Notes</h1>
          <p className="text-center text-[#767676]">
            Get cheatsheet and source code for all lectures to focus on learning
            and practicing.
          </p>
        </div>
        <div className="px-3 py-10 flex flex-col items-center justify-between space-y-2  bg-[#161616] rounded">
          <BsPeopleFill size={40} color="#687eff" />
          <h1 className="uppercase font-bold text-xl text-white ">
            Grow with community
          </h1>
          <p className="text-center text-[#767676]">
            Compete with your friends, practise with them & enter live sessions
            to grow daily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
