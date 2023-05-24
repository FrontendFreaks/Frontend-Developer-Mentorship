import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const AccordionElement = ({ accordion, onToggle }) => {
  function toogleAcc() {
    onToggle(accordion.id);
  }
  return (
    <div>
      <div className="flex flex-col items-left border-b border-lighGrayishBlue">
        <div
          onClick={toogleAcc}
          className={`text-darkGrayishBlue flex flex-row items-center justify-between text-md p-2  h-12 cursor-pointer ${
            accordion.open ? "font-light text-black" : ""
          }`}
        >
          {accordion.question}{" "}
          {accordion.open ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </div>

        {accordion.open && (
          <div className="p-2 scale-in-ver-top text-sm text-veryDarkGrayishBlue">
            {" "}
            {accordion.answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionElement;
