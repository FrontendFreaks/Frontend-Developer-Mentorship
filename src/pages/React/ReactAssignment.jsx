import React from "react";
import JSAssignmentElement from "../../components/JS/JSAssignmentElement";
import QuizProject from "./../../assets/React/quizproject.gif";
const ReactAssignment = () => {
  const assignments = [
    {
      number: 1,
      heading: "Enhance Counter App",
      problem: `Enhance the counter by adding a reset button, custom increment/decrement feature, and dynamic color change based on positive/negative values.`,
      imageSrc: null,
    },
    {
      number: 2,
      heading: "Explore Official Documentation",
      problem: `Explore ReactJS official documentation, focusing on the "Describing the UI" section. Read it thoroughly and complete the 22 challenges across 8 articles to enhance your skills and reinforce your knowledge of code syntax.`,
      imageSrc: null,
    },
    {
      number: 3,
      heading: "Enhance Todo App",
      problem:
        "Enhance the todo app with task manipulation (add, delete, mark complete), task filtering, local storage, optional drag-and-drop functionality, video-inspired design, and light/dark theme options.",
      imageSrc: null,
    },
    {
      number: 4,
      heading: "Build Quiz App ",
      problem:
        "Build a time-bound question-answer web app in ReactJS with a timer, score display, review answer section, and aesthetically pleasing design.",
      imageSrc: QuizProject,
    },
  ];

  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#6557fd]">
        <p>React Js Assignment</p>
      </h1>
      {assignments.map((assignment) => (
        <JSAssignmentElement
          key={assignment.number}
          number={assignment.number}
          heading={assignment.heading}
          problem={assignment.problem}
          imageSrc={assignment.imageSrc}
        />
      ))}
    </div>
  );
};

export default ReactAssignment;
