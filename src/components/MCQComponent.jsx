import React, { useState } from "react";

const MCQComponent = ({ question, options, answer, onSelect, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === answer);
    onSelect(option, option === answer);
  };

  return (
    <div className=" w-[390px] md:w-[700px] p-3 text-white">
      <h4 className="p-2 bg-[#687eff] text-white font-bold ">
        <span className="mr-1">{id} </span>
        {question}
      </h4>
      <div className="">
        {options.map((option, index) => (
          <div
            key={index}
            className={`px-1 py-2  flex flex-row items-center   ${
              selectedOption === option
                ? isCorrect
                  ? "bg-[#16db65]"
                  : "bg-[#ff4d6d]"
                : ""
            }`}
            id={index}
          >
            <input
              type="radio"
              id={`option-${question}-${index}`}
              value={option}
              className="mr-2 "
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label
              htmlFor={`option-${question}-${index}`}
              className="cursor-pointer  w-full"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQComponent;
