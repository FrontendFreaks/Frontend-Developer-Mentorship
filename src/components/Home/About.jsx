import React from "react";
import AboutImage from "./../../assets/about.avif";
import ReactPlayer from "react-player";
import { GoStar } from "react-icons/go";
const About = () => {
  return (
    <div
      className="mt-20 py-20 px-10 flex flex-col md:flex-row items-start justify-between space-x-14   "
      id="about"
    >
      <div className="md:w-1/2 ">
        <ReactPlayer url="https://youtu.be/OmgIP2EZJx4" controls />
      </div>
      <div className="md:w-1/2 flex flex-col items-start justify-between space-y-4  ">
        <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
          <h1> About us </h1>
          <div className="w-28 h-2 bg-[white] rounded"></div>
        </div>
        <ul className="flex flex-col items-start justify-between space-y-2">
          <li className="text-xl text-white flex flex-row space-x-2 ">
            <GoStar size={70} className="-mt-4" />

            <p>
              Frontend Freaks empowers individuals to master frontend
              development through free resources, support, and guidance for a
              successful journey.
            </p>
          </li>{" "}
          <li className="text-xl text-white flex flex-row space-x-2 ">
            <GoStar size={60} className="-mt-4" />

            <p>
              Learning is continuous; staying updated with evolving frontend
              trends and technologies is crucial for growth in this field.
            </p>
          </li>{" "}
          <li className="text-xl text-white flex flex-row space-x-2 ">
            <GoStar size={60} className="-mt-4" />

            <p>
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
