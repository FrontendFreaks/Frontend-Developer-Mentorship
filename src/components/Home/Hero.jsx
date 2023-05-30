import React from "react";
import HeroImg from "./../../assets/Hero.png";
const Hero = () => {
  return (
    <div className="mt-32 py-6 px-10  flex flex-row items-center justify-between ">
      <div className="md:w-1/2  flex flex-col items-start justify-between space-y-8">
        <h1 className="text-7xl font-bold capitalize max-w-xl mt-9 leading-18 shadow-sm main-heading">
          Unleash your <span className="text-[#6557fd]"> Frontend </span>{" "}
          Superpowers
        </h1>
        <div className="flex flex-row items-center justify-start space-x-4">
          <a
            href="#join"
            className="bg-[#6557fd] px-12 py-4  text-white font-bold uppercase"
          >
            Join
          </a>
          <a
            href="#"
            className="text-[#6557fd] px-12 py-3 transition-all duration-200 ease-out  border-[3px] border-[#5557fd] font-bold uppercase hover:bg-[#6557fd] hover:text-white"
          >
            Mentorship
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={HeroImg} className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
