import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const VideoElement = ({
  videoUrl,
  mainPoints,
  heading,
  notes,
  assignment,
  link,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex my-4 flex-col md:flex-row items-start md:items-center justify-between space-x-0 md:space-x-4 p-1 space-y-4 md:space-y-0">
      <div className="w-full md:w-4/5">
        <ReactPlayer url={videoUrl} width="100% h-40 md:h-full" controls />
      </div>
      <div className="w-full">
        <h1 className=" font-bold text-4xl text-white">{heading}</h1>
        <ol className="flex flex-col items-start justify-between space-y-1 mt-2 text-white ">
          <li className="text-xl  ">
            <span className="text-3xl text-[#687eff]  font-bold mr-2 ">1|</span>
            {mainPoints.one}
          </li>
          <li className="text-xl ">
            <span className="text-3xl text-[#687eff]  font-bold mx-1 ">2|</span>
            {mainPoints.two}
          </li>
          <li className="text-xl ">
            <span className="text-3xl text-[#687eff]  font-bold mx-1 ">3|</span>
            {mainPoints.three}
          </li>
        </ol>
        <div className="flex flex-row items-center justify-start space-x-4 mt-7">
          {assignment && (
            <Link
              to="assignment"
              className="bg-[#687eff] rounded px-8 py-3 md:px-12 md:py-4  text-white font-bold uppercase"
              onClick={scrollToTop}
            >
              Assignments
            </Link>
          )}
          {notes && (
            <Link
              to="notes"
              onClick={scrollToTop}
              className="bg-white rounded px-8 py-3 md:px-12 md:py-4  text-[#687eff] font-bold uppercase"
            >
              Notes
            </Link>
          )}
          {link && (
            <a
              href={link}
              onClick={scrollToTop}
              target="_blank"
              className="bg-[#687eff] rounded px-8 py-3 md:px-12 md:py-4  text-white font-bold uppercase"
            >
              Template
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoElement;
