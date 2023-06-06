import React from "react";
import { Link } from "react-router-dom";

const StartLearning = ({ learningData }) => {
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
        <div className="w-28 h-2 bg-[#687eff] rounded"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-14 text-white">
        {learningData.map((learn, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between space-y-2 py-10 px-2 w-[380px] shadow-sm"
          >
            {learn.icon}
            <h1 className="uppercase font-bold text-2xl">{learn.title}</h1>
            <Link
              to={learn.linkTo}
              onClick={scrollToTop}
              className="bg-[#6557fd] rounded px-16 py-3 text-white font-bold uppercase"
            >
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartLearning;
