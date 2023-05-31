import React from "react";
import Accordion1 from "./Accordion1";
import Accordion2 from "./Accordion2";
const Accordion = () => {
  return (
    <div
      className="mt-24 py-24  px-5 md:px-20 flex flex-col space-y-12 bg-[#687eff]"
      id="faqs"
    >
      <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
        <h1> FAQs </h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between space-y-4 md:space-x-2 md:space-y-0 ">
        <Accordion1 />
        <Accordion2 />
      </div>
    </div>
  );
};

export default Accordion;
