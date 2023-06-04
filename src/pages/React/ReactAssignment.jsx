import Assignment from "../../components/Assignment";
import { ReactAssignments } from "../Assignments";

const ReactAssignment = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#6557fd]">
        <p className="text-center md:text-left">React Js Assignment</p>
      </h1>
      {ReactAssignments.map((assignment) => (
        <Assignment
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
