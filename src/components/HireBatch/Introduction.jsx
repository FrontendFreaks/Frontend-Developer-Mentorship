import React from "react";
import AllVideos from "./AllVideos";
const Introduction = () => {
  return (
    <>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
        <p>Hire Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div>
          <AllVideos />
        </div>
      </div>
    </>
  );
};

export default Introduction;
