import React, { useState } from "react";
import AccordionElement from "./AccordionElement";
const Dummy_Questions = [
  {
    id: "01",
    question: " When can I join?",
    answer:
      "You can join our community at any time! Our courses and resources are self-paced, allowing you to learn at your own convenience. ",
    open: false,
  },
  {
    id: "02",
    question: " What types of mentorship do you provide?",
    answer:
      "We offer three batches of mentorship. The first batch is perfect for beginners, covering HTML, CSS, and JavaScript fundamentals through exciting projects. The second batch focuses on mastering ReactJS and building real-world projects. The third batch provides guidance on job hunting, application strategies, and securing referrals.",
    open: true,
  },
  {
    id: "03",
    question: "Not sure which batch to join?",
    answer:
      "If you're confident in your HTML, CSS, and JavaScript skills, join batch 2 to learn ReactJS. Otherwise, start with batch 1 to establish a solid foundation before diving into ReactJS. If you already have impressive skills and projects, join batch 3 to focus on job applications. Otherwise, joining batch 2 to build real-world projects would be beneficial.",
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
    <div className="flex flex-col items-start justify-between w-[400]  md:w-[600px]  space-y-3">
      {questions.map((accordion) => (
        <AccordionElement accordion={accordion} onToggle={mainToggleHandler} />
      ))}
    </div>
  );
};

export default Accordion2;
