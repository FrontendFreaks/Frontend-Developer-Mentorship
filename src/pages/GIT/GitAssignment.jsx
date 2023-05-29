import React from "react";
import GITAssignmentElement from "../../components/GIT/GitAssignmentElement";
const GitAssignment = () => {
  const assignment = [
    {
      number: 1,
      problem:
        "Create a repository named 'Frontend Developer Essential' and upload all completed and upcoming assignments.",
    },
    {
      number: 2,
      problem:
        "Share your GitHub profile on LinkedIn and Twitter using #FrontendWithVishal, and mention me for feedback.",
    },
    {
      number: 3,
      problem: "Create a new repository for each future project.",
    },
    {
      number: 4,
      problem:
        "Host the Portfolio you built after the CSS Flexbox video on GitHub. Share it on LinkedIn and Twitter using #FrontendWithVishal, and mention me for feedback.",
    },
  ];
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#6557fd]">
        <p> Assignment</p>
      </h1>
      {assignment.map((element) => (
        <GITAssignmentElement
          number={element.number}
          problem={element.problem}
        />
      ))}
    </div>
  );
};

export default GitAssignment;
