import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const VideoElement = ({ videoUrl, mainPoints, heading }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-row items-start justify-between space-x-4 my-12 ">
      <div className="md:1/2">
        <ReactPlayer url={videoUrl} controls />
      </div>
      <div className="md:1/2">
        <h1 className=" font-bold text-4xl">{heading}</h1>
        <ol className="flex flex-col items-start justify-between space-y-1 mt-2 ">
          <li className="text-xl text-[#767676] ">
            <span className="text-3xl text-[#6557fd] main-heading font-bold mr-2 ">
              1.
            </span>
            {mainPoints.one}
          </li>
          <li className="text-xl text-[#767676]">
            <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
              2.
            </span>
            {mainPoints.two}
          </li>
          <li className="text-xl text-[#767676] ">
            <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
              3.
            </span>
            {mainPoints.three}
          </li>
        </ol>
        <div className="flex flex-row items-center justify-start space-x-4 mt-7">
          <Link
            to="assignment"
            className="bg-[#6557fd] px-12 py-4  text-white font-bold uppercase"
            onClick={scrollToTop}
          >
            Assignments
          </Link>
          <Link
            to="notes"
            onClick={scrollToTop}
            className="text-[#6557fd] px-12 py-3 transition-all duration-200 ease-out  border-[3px] border-[#5557fd] font-bold uppercase hover:bg-[#6557fd] hover:text-white"
          >
            Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoElement;
