import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import VideoElement from "../components/VideoElement";
import { HTMLVideos } from "./Videos";
import NotesSnippet from "../components/NotesSnippet";
import { HTMLBasicNotes } from "./Notes";
import { HTMLAssignments } from "./Assignments";
import Assignment from "../components/Assignment";
import { htmlMCQQuestions } from "./Questions";
import MCQComponent from "../components/MCQComponent";

const LearnHtml = () => {
  const [currentTab, setCurrentTab] = useState("videos");
  const [htmlMcqQuestions, setHtmlMcqQuestions] = useState(htmlMCQQuestions);
  const storedHtmlAssignments = localStorage.getItem("htmlAssignments");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHTMLQs = htmlMcqQuestions.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(htmlMcqQuestions.length / itemsPerPage);
  const initialHtmlAssignments = storedHtmlAssignments
    ? JSON.parse(storedHtmlAssignments)
    : HTMLAssignments;
  const [htmlAssignments, setHtmlAssignments] = useState(
    initialHtmlAssignments
  );
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    localStorage.setItem("htmlAssignments", JSON.stringify(htmlAssignments));
    const filterCompleted = htmlAssignments.filter(
      (assignment) => assignment.status === true
    ).length;
    setCompleted(filterCompleted);
  }, [htmlAssignments]);
  const updateStatusHandler = (number) => {
    const updatedHtmlAssignments = htmlAssignments.map((assignment) => {
      if (assignment.number === number) {
        return { ...assignment, status: !assignment.status };
      } else {
        return assignment;
      }
    });
    setHtmlAssignments(updatedHtmlAssignments);
  };
  const widthColor =
    Math.round((completed / htmlAssignments.length) * 100) + "%";
  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]">
          <p> HTML</p>
        </h1>
        <div className="w-[400px] flex flex-col items-center justify-center">
          <div className="border-[#687eff] border-2  h-3 bg-[#161616] w-full flex flex-col justify-center">
            <div
              className="bg-[#687eff] p-1 w-0"
              style={{ width: widthColor }}
            ></div>
          </div>
          <div className="py-4">
            <div className="flex justify-center text-xs md:text-sm capitalize">
              <button
                className={`mr-4 px-4 md:px-8  font-bold py-3 rounded ${
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
            {HTMLVideos.map((video, index) => (
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
            {htmlAssignments.map((assignment) => (
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
          <div className="flex flex-col items-start justify-between space-y-4">
            {HTMLBasicNotes.map((element, index) => (
              <NotesSnippet
                key={index}
                heading={element.heading}
                code={element.code}
                language="html"
              />
            ))}
          </div>
        )}
        {currentTab === "interview" && (
          <div className="flex flex-col items-start justify-between space-y-4">
            {currentHTMLQs.map((element) => (
              <MCQComponent
                key={element.id}
                id={element.id}
                question={element.question}
                answer={element.answer}
                options={element.options}
                onSelect={handleOptionSelect}
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

export default LearnHtml;
