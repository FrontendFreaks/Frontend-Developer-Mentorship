import React from "react";
import { GoStar } from "react-icons/go";
import ReactPlayer from "react-player";
const BatchIntroduction = ({ batchName, batchIntroVideo, batchHighlights }) => {
  return (
    <>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>{batchName} Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7 p-3">
        <div className="space-y-4 flex flex-col md:flex-row items-start justify-between md:space-x-3 md:space-y-0">
          <div className="w-full  ">
            <ReactPlayer url={batchIntroVideo} width="100%" controls />
          </div>

          <div className="md:1/2 ">
            <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
              <h1> Batch Highlights</h1>
              <div className="w-28 h-2 bg-[#687eff] rounded"></div>
            </div>
            <ol className="flex flex-col items-start justify-between space-y-2 mt-3">
              {batchHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-xl text-white flex flex-row space-x-2"
                >
                  <GoStar size={40} />
                  <p>{highlight}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchIntroduction;
