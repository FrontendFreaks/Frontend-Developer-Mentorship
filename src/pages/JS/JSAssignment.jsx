import { JSAssignments } from "../Assignments";
import Assignment from "../../components/Assignment";

const JSAssignment = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#6557fd]">
        <p className="text-center md:text-left">JS Assignment</p>
      </h1>
      {JSAssignments.map((assignment) => (
        <Assignment
          key={assignment.number}
          number={assignment.number}
          heading={assignment.heading}
          problem={assignment.problem}
          imageSrc={assignment.imageSrc}
          link={assignment.link}
        />
      ))}
    </div>
  );
};

export default JSAssignment;
