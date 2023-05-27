import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const Introduction = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>CSS</p>
      </h1>{" "}
      <div className="flex flex-row items-start justify-between space-x-4 p-1">
        <div className="md:1/2">
          <ReactPlayer url="https://youtu.be/Qu0dbQxm6II" controls />
        </div>
        <div className="md:1/2">
          <h1 className=" font-bold text-4xl">Video Highlights</h1>
          <ol className="flex flex-col items-start justify-between space-y-1 mt-2 ">
            <li className="text-xl text-[#767676] ">
              <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
                1.
              </span>
              Set up HTML boilerplate, add a page title, and use Live Server
              extension for development.
            </li>
            <li className="text-xl text-[#767676]">
              <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
                2.
              </span>
              Learn heading and paragraph tags, line breaks, horizontal lines,
              formatting text with bold and italic tags, and creating links,
              lists, tables, and forms in HTML.
            </li>
            <li className="text-xl text-[#767676] ">
              <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
                3.
              </span>
              Explore media embedding, semantic tags, and practice HTML through
              assignments.
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
    </div>
  );
};

export default Introduction;
