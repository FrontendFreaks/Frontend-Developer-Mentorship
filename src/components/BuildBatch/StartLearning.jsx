import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const StartLearning = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-between space-y-4 mt-10">
      <h1 className="text-center mx-4 font-bold text-5xl text-white ">
        Start Learning
      </h1>
      <div className="grid md:grid-cols-3 gap-14">
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <RiReactjsLine size={60} color="#687eff" />
          <h1 className="uppercase font-bold text-2xl text-white">React JS</h1>
          <Link
            to="react"
            className="bg-[#687eff] rounded px-16 py-3  text-white font-bold uppercase"
            onClick={scrollToTop}
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
