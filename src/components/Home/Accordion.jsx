import { useState, useRef } from "react";
import AccordionElement from "./AccordionElement";
import { accordionQuestions } from "./content";
import FAQ from "./../../assets/faq.svg";

const Accordion = () => {
  const [questions, setQuestions] = useState(accordionQuestions);

  function mainToggleHandler(id) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          open: !question.open,
        };
      }
      return {
        ...question,
        open: false,
      };
    });
    setQuestions(updatedQuestions);
  }

  return (
    <div
      className="mt-24 py-24 px-5 md:px-20 flex flex-col space-y-12 bg-[#687eff]"
      id="faqs"
    >
      <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3">
        <h1>FAQs</h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className="flex flex-col-reverse space-x-2 md:space-y-0 md:flex-row items-center justify-between">
        <div className="mt-4 flex flex-col md:flex-row items-start justify-between space-y-4 md:space-x-2 md:space-y-0">
          <div className="flex flex-col items-start justify-between w-[300] md:w-[600px] space-y-3">
            {questions.map((accordion) => (
              <AccordionElement
                accordion={accordion}
                onToggle={mainToggleHandler}
                key={accordion.id}
              />
            ))}
          </div>
        </div>
        <div>
          <img src={FAQ} alt="Cartoon image of two people with a big question mark floating behind them." />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
