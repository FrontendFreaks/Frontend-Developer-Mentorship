import React from "react";

const GITAssignmentElement = ({ number, problem }) => {
  return (
    <div className="p-4">
      <div className=" font-bold text-2xl flex flex-row items-center justify-start space-x-3 ">
        <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
          {number}
        </span>
      </div>
      <div>
        <p className="text-xl text-[#767676] ">{problem}</p>
      </div>
    </div>
  );
};

export default GITAssignmentElement;
