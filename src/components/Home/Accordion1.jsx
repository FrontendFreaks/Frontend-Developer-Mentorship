import React, { useState } from "react";
import AccordionElement from "./AccordionElement";
const Dummy_Questions = [
  {
    id: "01",
    question: " What is Frontend Freaks?",
    answer:
      "Frontend Freaks is a vibrant community founded by Vishal Rajput, dedicated to helping individuals in frontend development. We provide resources to learn frontend basics, work on practical projects, and stay up-to-date with the latest industry trends.",
    open: false,
  },
  {
    id: "02",
    question: "What is Frontend Developer Mentorship? ",
    answer:
      "Frontend Developer Mentorship is our program at Frontend Freaks Community designed to guide newcomers in learning frontend development, building real-world projects, and assisting them in securing internships and jobs.",
    open: true,
  },
  {
    id: "03",
    question: " Is Frontend Developer Mentorship paid?",
    answer:
      "No, our mentorship programs and resources are completely free of cost. At Frontend Freaks, we believe in making quality education accessible to everyone.",
    open: false,
  },
];
const Accordion1 = () => {
  const [questions, setQuestions] = useState(Dummy_Questions);
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
    <div className="flex flex-col items-start justify-between w-[400] md:w-[600px] space-y-3 ">
      {questions.map((accordion) => (
        <AccordionElement accordion={accordion} onToggle={mainToggleHandler} />
      ))}
    </div>
  );
};

export default Accordion1;
