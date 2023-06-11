import VideoElement from "../components/VideoElement";
import { JavaScriptVideos } from "./Videos";
import { useState } from "react";
import { JSAssignments } from "./Assignments";
import Assignment from "../components/Assignment";
import NotesSnippet from "../components/NotesSnippet";
import { JSBasicNotes, JSDomNotes } from "./Notes";

const LearnJs = () => {
  const [currentTab, setCurrentTab] = useState("videos");
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]">
          <p>JavaScript</p>
        </h1>
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
            <button
              className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
                currentTab === "notes"
                  ? "text-white  bg-[#687eff]"
                  : " bg-gray-200 text-[#161616]"
              }`}
              onClick={() => setCurrentTab("notes")}
            >
              Notes
            </button>
          </div>
        </div>

        {currentTab === "videos" && (
          <div>
            {JavaScriptVideos.map((video, index) => (
              <VideoElement
                key={index}
                videoUrl={video.videoUrl}
                heading={video.heading}
                mainPoints={video.mainPoints}
                change={video.change}
                notes={video.notes}
                assignment={video.assignment}
              />
            ))}
          </div>
        )}
        {currentTab === "assignments" && (
          <div>
            {JSAssignments.map((assignment) => (
              <Assignment
                key={assignment.number}
                number={assignment.number}
                heading={assignment.heading}
                problem={assignment.problem}
                linkStatement={assignment.linkStatement}
                link={assignment.link}
              />
            ))}
          </div>
        )}
        {currentTab === "notes" && (
          <div>
            {JSBasicNotes.map((element, index) => (
              <NotesSnippet
                key={index}
                point={element.point}
                heading={element.heading}
                code={element.code}
                language="js"
              />
            ))}
            <div className="flex flex-col items-start justify-between space-y-4 mt-8 py-24">
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>JS DOM</p>
              </h1>
              {JSDomNotes.map((element, index) => (
                <NotesSnippet
                  key={index}
                  point={element.point}
                  heading={element.heading}
                  code={element.code}
                  language="js"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnJs;
