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
      <h1 className="text-center font-bold text-5xl main-heading  ">
        Join Batches
      </h1>
      <div className=" flex flex-col items-start justify-between space-x-3 md:flex-row ">
        <div className="flex flex-col items-center justify-between space-y-2  shadow-sm  py-10 px-2 w-[380px]">
          <RiPencilRuler2Fill size={50} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">Learn</h1>
          <Link
            to="learn"
            onClick={scrollToTop}
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 shadow-sm  py-10 px-2  w-[380px]">
          <FaLaptopCode size={50} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">Build</h1>
          <Link
            to="build"
            onClick={scrollToTop}
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 shadow-sm  py-10 px-2  w-[380px]">
          <GiReceiveMoney size={50} color="#6557fd" />
          <h1 className="uppercase font-bold text-2xl">Hire</h1>
          <Link
            to="hire"
            onClick={scrollToTop}
            className="bg-[#6557fd] rounded px-16 py-3  text-white font-bold uppercase"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinBatches;
