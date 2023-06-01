import React from "react";
import ReactPlayer from "react-player";
import { GoStar } from "react-icons/go";
const Introduction = () => {
  return (
    <div>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
        <p>Build Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div className="flex flex-row items-start justify-between space-x-6 p-1">
          <div className="md:1/2">
            <ReactPlayer url="https://youtu.be/F6WT-EwTBt4" controls />
          </div>
          <div className="md:1/2">
            <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
              <h1> Batch Highlights</h1>
              <div className="w-28 h-2 bg-[white] rounded"></div>
            </div>
            <ol className="flex flex-col items-start justify-between space-y-2 mt-3">
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={100} className="-mt-8" />

                <p>
                  The second batch focuses on ReactJS, Redux, Tailwind, and
                  NextJS, enabling participants to create practical projects and
                  enhance their frontend expertise.
                </p>
              </li>
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={60} className="-mt-4" />

                <p>
                  For those with HTML, CSS, and JavaScript basics. Elevate
                  skills and create with guidance.
                </p>
              </li>
              <li className="text-xl text-white flex flex-row space-x-2 ">
                <GoStar size={60} className="-mt-4" />

                <p>
                  Level up in frontend development: ReactJS, Redux, Tailwind,
                  NextJS projects in second batch.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
