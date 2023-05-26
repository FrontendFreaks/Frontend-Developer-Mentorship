import React, { useState } from "react";

const HTMLAssignmentElement = ({ number, heading, problem, imageSrc }) => {
  const [preview, setPreview] = useState(false);
  const changePreview = () => {
    setPreview(!preview);
  };
  return (
    <div className="p-4">
      <div className=" font-bold text-2xl flex flex-row items-center justify-start space-x-3 ">
        <span className="text-3xl text-[#6557fd] main-heading font-bold mx-1 ">
          {number}
        </span>
        <h1> {heading} </h1>
        <button
          className={`text-sm ${preview ? "text-red-400" : "text-[#6557fd]"} `}
          onClick={changePreview}
        >
          {preview ? "CLOSE" : "PREVIEW"}
        </button>
      </div>
      <div>
        <p className="text-xl text-[#767676] ">{problem}</p>
        {preview && <img src={imageSrc} className="" />}
      </div>
    </div>
  );
};

export default HTMLAssignmentElement;
