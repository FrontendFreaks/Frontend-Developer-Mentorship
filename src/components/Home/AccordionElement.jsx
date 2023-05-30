import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const AccordionElement = ({ accordion, onToggle }) => {
  function toggleAcc() {
    onToggle(accordion.id);
  }

  return (
    <div className="flex flex-col space-x-1 items-start justify-between w-[550px] bg-white">
      <div
        onClick={toggleAcc}
        className={` flex flex-row  items-center justify-between text-md min-w-[550px] h-12 cursor-pointer px-4 py-1 ${
          accordion.open ? "font-bold " : ""
        }`}
      >
        <p className="text-lg cursor-pointer opacity-80 ">
          {accordion.question}
        </p>
        <div>
          {accordion.open ? (
            <BiMinus size={30} color="#6557fd" />
          ) : (
            <BiPlus size={30} color="#6557fd" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          accordion.open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="scale-in-ver-top text-md py-2 px-3 text-[#767676]">
          {accordion.answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionElement;
