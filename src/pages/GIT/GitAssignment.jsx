import Assignment from "../../components/Assignment";
import { GitAssignments } from "../Assignments";
const GitAssignment = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6 flex items-center justify-center space-x-5 text-[#687eff]">
        <p className="text-center md:text-left"> Assignment</p>
      </h1>
      {GitAssignments.map((element) => (
        <Assignment number={element.number} problem={element.problem} />
      ))}
    </div>
  );
};

export default GitAssignment;
