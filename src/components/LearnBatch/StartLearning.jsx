import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { Link } from "react-router-dom";
const StartLearning = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-between space-y-4 mt-16">
      <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
        <h1> Start Learning</h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-14 text-white">
        <div className="flex flex-col items-center justify-between space-y-2  py-10 px-2 w-[380px] ">
          <AiFillHtml5 size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl ">HTML</h1>
          <Link
            to="html"
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
            onClick={scrollToTop}
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <IoLogoCss3 size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">CSS</h1>
          <Link
            to="css"
            onClick={scrollToTop}
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <SiJavascript size={60} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">JS</h1>
          <Link
            to="js"
            onClick={scrollToTop}
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Start Learning
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <BsGit size={80} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">Git & GitHub </h1>
          <Link
            to="git"
            onClick={scrollToTop}
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
