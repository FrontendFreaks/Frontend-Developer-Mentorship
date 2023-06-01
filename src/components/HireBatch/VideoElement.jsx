import React from "react";
import ReactPlayer from "react-player";

const VideoElement = ({ videoSrc, mainPoints, heading, link }) => {
  return (
    <div className="flex flex-row items-start justify-between space-x-7 my-12 p-4 ">
      <div className="w-full md:w-1/2  flex flex-col items-center ">
        <ReactPlayer url={videoSrc} width="100%" controls />
      </div>
      <div className="md:1/2">
        <h1 className=" font-bold text-4xl max-w-md text-white">{heading}</h1>
        <ol className="flex flex-col items-start justify-between space-y-1 mt-2 text-white">
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
        {link && (
          <div className="flex flex-row items-center justify-start space-x-4 mt-7">
            <a
              href={link}
              className="bg-[#687eff] px-12 py-4  text-white font-bold uppercase"
            >
              Template
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoElement;
