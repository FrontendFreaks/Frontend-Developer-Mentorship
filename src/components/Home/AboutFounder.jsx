import React from "react";
import FouderImage from "./../assets/founder.jpeg";
const AboutFounder = () => {
  return (
    <div className="mt-24 py-6 px-20 flex flex-col space-y-12 bg-[#f7f7ff]">
      <h1 className="text-center mx-4 font-bold text-4xl main-heading  ">
        About the Founder
      </h1>
      <div className="flex flex-row items-start justify-between space-x-6">
        <div className="md:1/2 border-4 border-black">
          <img src={FouderImage} className="w-full" />
        </div>
        <div className="md:w-1/2  border-4 border-black"></div>
      </div>
    </div>
  );
};

export default AboutFounder;
