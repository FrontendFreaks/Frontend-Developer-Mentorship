import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/js.png";

const Main = () => {
  return (
    <main className="mx-20">
      <h3 className="font-bold tracking-normal text-2xl">
        Explore best courses
      </h3>
      <p className="text-xs text-slate-500">
        These are the most selling skills among the students.
      </p>

      <div className="boxes mt-10 flex items-center justify-between space-x-5 p-5 ">
        <div className="mainBox backShadow cursor-pointer bg-[#6941C6] p-2 rounded-xl px-10 hover:shadow-none duration-150 transition-shadow hover:bg-[#7146d4]">
          <div className="box flex flex-row-reverse items-center">
            <span className="text-white ml-4 uppercase font-bold text-lg">
              html
            </span>
            <img src={html} alt="html" className="bg-white p-2 rounded-xl" />
          </div>
        </div>
        <div className="mainBox backShadow cursor-pointer bg-[#6941C6] p-2 rounded-xl px-10 hover:shadow-none duration-150 transition-shadow hover:bg-[#7146d4]">
          <div className="box flex flex-row-reverse items-center">
            <span className="text-white ml-4 uppercase font-bold text-lg">
              css
            </span>
            <img src={css} alt="css" className="bg-white p-2 rounded-xl" />
          </div>
        </div>
        <div className="mainBox backShadow cursor-pointer bg-[#6941C6] p-2 rounded-xl px-10 hover:shadow-none duration-150 transition-shadow hover:bg-[#7146d4]">
          <div className="box flex flex-row-reverse items-center">
            <span className="text-white ml-4 uppercase font-bold text-lg">
              react js
            </span>
            <img src={react} alt="react" className="bg-white p-2 rounded-xl" />
          </div>
        </div>
        <div className="mainBox backShadow cursor-pointer bg-[#6941C6] p-2 rounded-xl px-10 hover:shadow-none duration-150 transition-shadow hover:bg-[#7146d4]">
          <div className="box flex flex-row-reverse items-center">
            <span className="text-white ml-4 uppercase font-bold text-lg">
              javascript
            </span>
            <img src={js} alt="js" className="bg-white p-2 rounded-xl" />
          </div>
        </div>
        <a
          htmlFor="#"
          className="text-[#6941C6] font-thin hover:border-b-2 hover:border-[#6941C6]"
        >
          Explore All
        </a>
      </div>
    </main>
  );
};

export default Main;
