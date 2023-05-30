import React, { useState } from "react";
import AccordionElement from "./AccordionElement";
const Dummy_Questions = [
  {
    id: "01",
    question: "Do you provide notes and assignments?",
    answer:
      "Yes. You will get cheatsheet and source code of every tutorial. It will help to revise that topic easily ",
    open: false,
  },
  {
    id: "02",
    question: "Do you provide mentorship and guidance?",
    answer: "Yes. Lot's of mentorship programs are on the way!",
    open: true,
  },
  {
    id: "03",
    question: " Are all of your courses free?",
    answer:
      " Yes! All of our courses are and will always be free. You can find those on our YouTube channel",
    open: false,
  },
];
const Accordion2 = () => {
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
    <div className="flex flex-col items-start justify-between w-[600px]  space-y-1">
      {questions.map((accordion) => (
        <AccordionElement accordion={accordion} onToggle={mainToggleHandler} />
      ))}
    </div>
  );
};

export default Accordion2;
