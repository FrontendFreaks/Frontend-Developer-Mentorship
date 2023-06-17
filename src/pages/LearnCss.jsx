import { useState, useEffect } from "react";
import VideoElement from "../components/VideoElement";
import { CSSVideos } from "./Videos";
import ReactPaginate from "react-paginate";
import { CSSBasicNotes, CSSFlexboxNotes, CSSGridNotes } from "./Notes";
import NotesSnippet from "../components/NotesSnippet";
import { CSSAssignments } from "./Assignments";
import Assignment from "../components/Assignment";
import { cssMCQQuestions } from "./Questions";
import MCQComponent from "../components/MCQComponent";

const LearnCss = () => {
  const [cssMcqQuestions, setCssMcqQuestions] = useState(cssMCQQuestions);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCSSQs = cssMcqQuestions.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(cssMcqQuestions.length / itemsPerPage);

  const [currentTab, setCurrentTab] = useState("videos");
  const storedCssAssignments = localStorage.getItem("cssAssignments");
  const initialCssAssignments = storedCssAssignments
    ? JSON.parse(storedCssAssignments)
    : CSSAssignments;
  const [cssAssignments, setCssAssignments] = useState(initialCssAssignments);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    localStorage.setItem("cssAssignments", JSON.stringify(cssAssignments));
    const filterCompleted = cssAssignments.filter(
      (assignment) => assignment.status === true
    ).length;
    setCompleted(filterCompleted);
  }, [cssAssignments]);
  const updateStatusHandler = (number) => {
    const updatedCssAssignments = cssAssignments.map((assignment) => {
      if (assignment.number === number) {
        return { ...assignment, status: !assignment.status };
      } else {
        return assignment;
      }
    });
    setCssAssignments(updatedCssAssignments);
  };
  const widthColor =
    Math.round((completed / cssAssignments.length) * 100) + "%";
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]">
          <p> CSS</p>
        </h1>
        <div className="w-[300px] md:w-[400px] flex flex-col items-center justify-center">
          <div className="border-[#687eff] border-2  h-3 bg-[#161616] w-full flex flex-col justify-center">
            <div
              className="bg-[#687eff] p-1 w-0"
              style={{ width: widthColor }}
            ></div>
          </div>
          <div className="py-4">
            <div className="flex justify-center text-xs md:text-sm capitalize">
              <button
                className={`mr-4 px-4 md:px-8 font-bold py-3 rounded ${
                  currentTab === "videos"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("videos")}
              >
                Videos
              </button>
              <button
                className={`mr-4 px-4 md:px-8 font-bold py-3 rounded ${
                  currentTab === "assignments"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("assignments")}
              >
                Assignments
              </button>
              <button
                className={`mr-4 px-4 md:px-8 font-bold py-3 rounded ${
                  currentTab === "notes"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("notes")}
              >
                Notes
              </button>
              <button
                className={`mr-4 px-4 md:px-8 font-bold py-2 capitalize rounded ${
                  currentTab === "interview"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("interview")}
              >
                InterviewQs
              </button>
            </div>
          </div>
        </div>
        {currentTab === "videos" && (
          <div>
            {CSSVideos.map((video, index) => (
              <VideoElement
                key={index}
                videoUrl={video.videoUrl}
                heading={video.heading}
                mainPoints={video.mainPoints}
                notes={video.notes}
                assignment={video.assignment}
              />
            ))}
          </div>
        )}
        {currentTab === "assignments" && (
          <div>
            {cssAssignments.map((assignment) => (
              <Assignment
                key={assignment.number}
                number={assignment.number}
                heading={assignment.heading}
                problem={assignment.problem}
                link={assignment.link}
                status={assignment.status}
                onUpdate={updateStatusHandler}
              />
            ))}
          </div>
        )}
        {currentTab === "notes" && (
          <div>
            <ul className="flex flex-row items-center justify-start space-x-4 uppercase text-md font-bold text-white">
              <li>
                <a href="#css">Basic CSS</a>
              </li>
              <li>
                <a href="#flexbox">Flexbox</a>
              </li>
              <li>
                <a href="#grid">Grid</a>
              </li>
            </ul>
            <div
              className="flex flex-col items-start justify-between space-y-4 py-8"
              id="css"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Basic CSS</p>
              </h1>
              {CSSBasicNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
            <div
              className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
              id="flexbox"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Flexbox</p>
              </h1>
              {CSSFlexboxNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
            <div
              className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
              id="grid"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Grid</p>
              </h1>
              <h1 className="text-left font-bold text-1xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>1. Grid container properties</p>
              </h1>
              {CSSGridNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
          </div>
        )}
        {currentTab === "interview" && (
          <div className="flex flex-col items-center justify-between space-y-4">
            {currentCSSQs.map((element) => (
              <MCQComponent
                key={element.id}
                id={element.id}
                question={element.question}
                answer={element.answer}
                options={element.options}
              />
            ))}
            <div className="flex flex-row items-center justify-center mt-8">
              <ReactPaginate
                className="flex flex-row space-x-4 px-3 py-2 font-bold text-white "
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"text-[#6557fd]"}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnCss;
