import React from "react";
import HeroImg from "./../../assets/hero.jpeg";
const Hero = () => {
  return (
    <div className="mt-4 py-24 px-5 md:px-10  flex flex-col-reverse md:flex-row items-center md:items-center justify-between bg-[#131313] ">
      <div className="md:w-1/2 md:-mt-28  flex flex-col items-center md:items-start justify-between space-y-4  p-2">
        <h1 className="text-5xl md:text-7xl text-center md:text-left font-bold capitalize max-w-xl mt-9 leading-18 text-white">
          Unleash your{" "}
          <span className="text-[#687eff] text-6xl md:text-7xl">
            {" "}
            Frontend{" "}
          </span>{" "}
          Superpowers
        </h1>
        <div className="flex flex-row items-center justify-start space-x-4">
          <a
            href=" https://discord.gg/PkKanjX4rt"
            target="_blank"
            className="bg-[#687eff] text-sm text-center md:text-lg px-8 py-3 transition-all duration-200 ease-out   font-bold uppercase rounded  text-white"
          >
            Join Community
          </a>
          <a
            href="#join"
            className="bg-[#687eff] text-sm text-center md:text-lg px-8 py-3 transition-all duration-200 ease-out   font-bold uppercase rounded  text-white"
          >
            Join Mentorship
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2  p-1 ">
        <img src={HeroImg} className="w-full " />
      </div>
    </div>
  );
};

export default Hero;
