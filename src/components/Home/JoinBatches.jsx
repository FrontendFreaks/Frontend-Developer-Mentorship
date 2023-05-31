import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const JoinBatches = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="mt-24 py-32 px-10  flex flex-col items-center justify-between space-y-8"
      id="join"
    >
      <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
        <h1> Join Batches </h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className=" flex flex-col items-start justify-between space-x-3 md:flex-row ">
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <RiPencilRuler2Fill size={50} color="#687eff" />
          <h1 className="uppercase font-bold text-2xl text-white">Learn</h1>
          <Link
            to="learn"
            onClick={scrollToTop}
            className="bg-[#687eff] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 shadow-sm  py-10 px-2  w-[380px]">
          <FaLaptopCode size={50} color="#687eff" />
          <h1 className="uppercase font-bold text-2xl text-white">Build</h1>
          <Link
            to="build"
            onClick={scrollToTop}
            className="bg-[#687eff] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 shadow-sm  py-10 px-2  w-[380px]">
          <GiReceiveMoney size={50} color="#687eff" />
          <h1 className="uppercase font-bold text-2xl text-white">Hire</h1>
          <Link
            to="hire"
            onClick={scrollToTop}
            className="bg-[#687eff] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinBatches;
