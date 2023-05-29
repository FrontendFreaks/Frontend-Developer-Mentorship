import React from "react";
import Github from "./../../assets/JS/github.png";
import JSAssignmentElement from "../../components/JS/JSAssignmentElement";
const JSAssignment = () => {
  const assignments = [
    {
      number: 1,
      heading: "Basic JavaScript Challenge",
      problem: `Complete JavaScript basics challenges from this website https://www.jschallenger.com/javascript-practice`,
      imageSrc: null,
    },
    {
      number: 2,
      heading: "JS DOM Challenge",
      problem: `Complete JavaScript DOM challenges from this website: https://www.jschallenger.com/javascript-dom-exercises`,
      imageSrc: null,
    },
    {
      number: 3,
      heading: "Simple Counter",
      problem:
        "Create a simple miniature counter application with buttons for increasing, decreasing, and resetting the count, design it using CSS",
      imageSrc: null,
    },
    {
      number: 4,
      heading: "Google Keep Clone ",
      problem:
        "Move deleted and archived notes to separate sections, enable note editing, optionally add reminders with notifications based on due dates, and provide sorting/filtering options by creation time.",
      imageSrc: null,
    },
    {
      number: 5,
      heading: "Whack a Mole Game ",
      problem:
        "Project Completion: Ensure responsiveness by utilizing HTML, CSS, and JavaScript for a fully functional and adaptable website.",
      imageSrc: null,
    },
    {
      number: 6,
      heading: "Github Wrapper ",
      problem:
        "Project completion requires adding filters to repositories and sorting them based on the selected filters.",
      imageSrc: Github,
    },
  ];

  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#6557fd]">
        <p>JS Assignment</p>
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

export default JSAssignment;
