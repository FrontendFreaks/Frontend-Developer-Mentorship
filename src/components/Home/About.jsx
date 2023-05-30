import React from "react";
import AboutImage from "./../../assets/about.avif";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div
      className="mt-24 py-20 px-10 flex flex-row items-start justify-between space-x-10 "
      id="about"
    >
      <div className="md:w-1/2">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=F6WT-EwTBt4"
          controls
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-start justify-between space-y-4  bg-[#f8f9fa]">
        <h1 className="text-left font-bold text-5xl main-heading  ">
          About us
        </h1>
        <ul className="flex flex-col items-start justify-between space-y-2">
          <li className="text-xl text-[#767676] ">
            <span className="text-3xl text-[#6557fd] main-heading font-bold  mx-2">
              1.
            </span>
            Frontend Freaks empowers individuals to master frontend development
            through free resources, support, and guidance for a successful
            journey.
          </li>
          <li className="text-xl text-[#767676] ">
            <span className="text-3xl text-[#6557fd] main-heading font-bold mx-2 ">
              2.
            </span>
            Learning is continuous; staying updated with evolving frontend
            trends and technologies is crucial for growth in this field.
          </li>
          <li className="text-xl text-[#767676] ">
            <span className="text-3xl text-[#6557fd] main-heading font-bold  mx-2">
              3.
            </span>
            Join us today to unleash your potential, sharpen your coding
            prowess, and create stunning user experiences as a frontend master.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
