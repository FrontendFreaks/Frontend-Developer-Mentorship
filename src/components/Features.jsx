import React from "react";
import { MdOndemandVideo, MdAssignment, MdSpeakerNotes } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BsPeopleFill } from "react-icons/bs";
import { FaTools, FaUserGraduate, FaVideo } from "react-icons/fa";
const Features = () => {
  return (
    <div className="mt-24 py-6 px-10  flex flex-col items-center justify-between space-y-12">
      <h1 className="text-center font-bold text-5xl main-heading  ">
        Features
      </h1>
      <div className="grid md:grid-cols-3 gap-6 items-start justify-between  ">
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <FaUserGraduate size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">Guidance</h1>
          <p className="text-center text-[#767676] ">
            Get guidance in your career and life with the best mentors and
            experts across the world
          </p>
        </div>
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <FaVideo size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">
            Curated Videos
          </h1>
          <p className="text-center text-[#767676]">
            Learn through in-depth tutorials, how to approach an algorithm, how
            to implement it & how to optimise it.
          </p>
        </div>
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <MdAssignment size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">
            Assignments
          </h1>
          <p className="text-center text-[#767676]">
            Assignments and questions are provided to understand the concepts
            well.
          </p>
        </div>
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <FaTools size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">
            {" "}
            Learn By Doing
          </h1>
          <p className="text-center text-[#767676]">
            Learn things by buidling awesome projects and doing open source
            contributions
          </p>
        </div>
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <MdSpeakerNotes size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">Notes</h1>
          <p className="text-center text-[#767676]">
            Get complete cheatsheet and source code for all lectures so that you
            can focus on learning and practising.
          </p>
        </div>
        <div className="px-2 py-10 flex flex-col items-center justify-between space-y-2 bg-[#f8f9fa]">
          <BsPeopleFill size={40} color="#6557fd" />
          <h1 className="uppercase font-bold text-xl main-heading">
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
