import VideoElement from "../../components/VideoElement";
import { ReactVideos } from "../Videos";
import Assignment from "../../components/Assignment";
import { ReactAssignments } from "../Assignments";
import { useState } from "react";

const LearnReact = () => {
  const [currentTab, setCurrentTab] = useState("videos");
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>React Js</p>
        </h1>
      </div>
      <div className="py-4">
        <div className="flex justify-center">
          <button
            className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
              currentTab === "videos"
                ? "text-white  bg-[#687eff]"
                : " bg-gray-200 text-[#161616]"
            }`}
            onClick={() => setCurrentTab("videos")}
          >
            Videos
          </button>
          <button
            className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
              currentTab === "assignments"
                ? "text-white  bg-[#687eff]"
                : " bg-gray-200 text-[#161616]"
            }`}
            onClick={() => setCurrentTab("assignments")}
          >
            Assignments
          </button>
        </div>
      </div>{" "}
      <div>
        {currentTab === "videos" && (
          <div>
            {ReactVideos.map((element, index) => (
              <VideoElement
                key={index}
                videoUrl={element.videoSrc}
                heading={element.heading}
                mainPoints={element.mainPoints}
                notes={element.notes}
                assignment={element.assignment}
              />
            ))}
          </div>
        )}
        {currentTab === "assignments" && (
          <div>
            {ReactAssignments.map((assignment) => (
              <Assignment
                key={assignment.number}
                number={assignment.number}
                heading={assignment.heading}
                problem={assignment.problem}
                link={assignment.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnReact;
