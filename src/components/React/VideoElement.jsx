import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const VideoElement = ({ videoSrc, mainPoints, heading }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-row items-start justify-between space-x-7 my-12 p-4 ">
      <div className="w-full md:w-1/2  flex flex-col items-center ">
        <ReactPlayer url={videoSrc} width="100%" controls />
      </div>
      <div className="md:1/2 flex flex-col space-y-5 items-start">
        <h1 className=" font-bold text-4xl max-w-md text-white">{heading}</h1>
        <ol className="flex flex-col items-start justify-between space-y-1 mt-2  text-white">
          <li className="text-xl  ">
            <span className="text-3xl text-[#687eff]  font-bold mr-2 ">1|</span>
            {mainPoints.one}
          </li>
          <li className="text-xl  ">
            <span className="text-3xl text-[#687eff]  font-bold mr-2 ">2|</span>
            {mainPoints.two}
          </li>
          <li className="text-xl  ">
            <span className="text-3xl text-[#687eff]  font-bold mr-2 ">3|</span>
            {mainPoints.three}
          </li>
        </ol>
        <Link
          to="assignment"
          className="bg-[#6557fd] px-12 py-4  text-white font-bold uppercase"
          onClick={scrollToTop}
        >
          Assignments
        </Link>
      </div>
    </div>
  );
};

export default VideoElement;
