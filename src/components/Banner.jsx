import React from "react";
import img from "../assets/banner-img.jpeg";

const Banner = () => {
  return (
    <div className="banner flex p-5">
      <div className="textContainer flex flex-col justify-center items-start mx-5 px-5">
        <div className="title w-1/2 p-2">
          <h1 className="font-bold text-[35px] mb-1">
            Up Your <span className="text-[#6941C6]">Skills</span> To
            <span className="text-[#6941C6]"> Advance</span> Your
            <span className="text-[#6941C6]"> Career</span> Path
          </h1>
        </div>

        <div className="subtitle w-1/3 px-2">
          <p className="text-xs text-slate-500 leading-3 font-extralight">
            Our personalized learning approach ensures that you receive tailored
            guidance to reach your professional goals.
          </p>
        </div>
      </div>

      <div className="imgContainer flex justify-center items-center mt-10 m-0">
        <img
          src={img}
          alt="banner-img"
          className="banner-img m-0 p-0 aspect-video"
        />
      </div>
    </div>
  );
};

export default Banner;
