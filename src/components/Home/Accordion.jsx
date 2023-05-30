import React from "react";
import Accordion1 from "./Accordion1";
import Accordion2 from "./Accordion2";
const Accordion = () => {
  return (
    <div className="mt-24 py-6 px-20 flex flex-col space-y-12 bg-[#f7f7ff]">
      <h1 className="text-left mx-4 font-bold text-5xl main-heading  ">FAQs</h1>
      <div className="flex flex-row items-start justify-between space-x-2 ">
        <Accordion1 />
        <Accordion2 />
      </div>
    </div>
  );
};

export default Accordion;
