import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { Link } from "react-router-dom";
const StartLearning = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 mt-10">
      <h1 className="text-center mx-4 font-bold text-5xl main-heading  ">
        Start Learning
      </h1>
      <div className="grid md:grid-cols-3 gap-14">
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <AiFillHtml5 size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">HTML</h1>
          <Link
            to="html"
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <IoLogoCss3 size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">CSS</h1>
          <Link
            to=""
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <SiJavascript size={60} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">JS</h1>
          <Link
            to=""
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <BsGit size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">Git</h1>
          <Link
            to=""
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
