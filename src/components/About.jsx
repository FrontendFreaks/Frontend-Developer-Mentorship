import React from "react";
import AboutImage from "./../assets/about.avif";
import { BsStarFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="mt-24 py-6 px-10 flex flex-row items-start justify-between space-x-7">
      <div className="md:w-1/2">
        <img src={AboutImage} className="w-full rounded" />
      </div>
      <div className="md:w-1/2 flex flex-col items-start justify-between space-y-4 p-2 bg-[#f8f9fa]">
        <h1 className="text-left font-bold text-5xl main-heading  ">
          About us
        </h1>
        <ul className="flex flex-col items-start justify-between space-y-2">
          <li className="flex items-start space-x-3">
            <BsStarFill size={60} className="-mt-4" color="#6557fd" />
            <p className="text-xl text-[#403d39] ">
              Frontend Freaks empowers individuals to master frontend
              development through free resources, support, and guidance for a
              successful journey.
            </p>
          </li>

          <li className="flex items-start space-x-3">
            <BsStarFill size={55} className="-mt-3" color="#6557fd" />
            <p className="text-xl text-[#403d39] ">
              Learning is continuous; staying updated with evolving frontend
              trends and technologies is crucial for growth in this field.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <BsStarFill size={60} className="-mt-4" color="#6557fd" />
            <p className="text-xl text-[#403d39] ">
              Join us today to unleash your potential, sharpen your coding
              prowess, and create stunning user experiences as a frontend
              master.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
