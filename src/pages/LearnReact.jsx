import VideoElement from "../components/VideoElement";
import { ReactVideos } from "./Videos";
import Assignment from "../components/Assignment";
import { ReactAssignments } from "./Assignments";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { reactMCQQuestions } from "./Questions";
import MCQComponent from "../components/MCQComponent";

const LearnReact = () => {
  const [reactMcqQuestions, setReactMcqQuestions] = useState(reactMCQQuestions);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTab, setCurrentTab] = useState("videos");
  const [completed, setCompleted] = useState(0);

  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReactQs = reactMcqQuestions.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(reactMcqQuestions.length / itemsPerPage);

  const storedReactAssignments = localStorage.getItem("reactAssignments");
  const initialReactAssignments = storedReactAssignments
    ? JSON.parse(storedReactAssignments)
    : ReactAssignments;
  const [reactAssignments, setReactAssignments] = useState(
    initialReactAssignments
  );
  useEffect(() => {
    localStorage.setItem("reactAssignments", JSON.stringify(reactAssignments));
    const filterCompleted = reactAssignments.filter(
      (assignment) => assignment.status === true
    ).length;
    setCompleted(filterCompleted);
  }, [reactAssignments]);
  const updateStatusHandler = (number) => {
    const updatedReactAssignments = reactAssignments.map((assignment) => {
      if (assignment.number === number) {
        return { ...assignment, status: !assignment.status };
      } else {
        return assignment;
      }
    });
    setReactAssignments(updatedReactAssignments);
  };
  const widthColor =
    Math.round((completed / reactAssignments.length) * 100) + "%";
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>React Js</p>
        </h1>

        <div className="w-[300px] md:w-[400px] flex flex-col items-center justify-center">
          <div className="border-[#687eff] border-2  h-3 bg-[#161616] w-full flex flex-col justify-center">
            <div
              className="bg-[#687eff] p-1 w-0"
              style={{ width: widthColor }}
            ></div>
          </div>{" "}
          <div className="py-4">
            <div className="flex justify-center text-sm">
              <button
                className={`mr-4 px-3 md:px-8 uppercase font-bold py-3 rounded ${
                  currentTab === "videos"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("videos")}
              >
                Videos
              </button>
              <button
                className={`mr-4 px-3 md:px-8 uppercase font-bold py-3 rounded ${
                  currentTab === "assignments"
                    ? "text-white  bg-[#687eff]"
                    : " bg-gray-200 text-[#161616]"
                }`}
                onClick={() => setCurrentTab("assignments")}
              >
                Assignments
              </button>
              <button
                className={`mr-4 px-3 md:px-8 font-bold py-2 capitalize rounded ${
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
      </div>
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
            {reactAssignments.map((assignment) => (
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
        {currentTab === "interview" && (
          <div className="flex flex-col items-center justify-between space-y-4">
            {currentReactQs.map((element) => (
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

export default LearnReact;
