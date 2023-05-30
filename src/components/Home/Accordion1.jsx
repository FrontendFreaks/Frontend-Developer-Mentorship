import React, { useState } from "react";
import AccordionElement from "./AccordionElement";
const Dummy_Questions = [
  {
    id: "01",
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ",
    open: false,
  },
  {
    id: "02",
    question: "What is the maximum file upload size? ",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    open: true,
  },
  {
    id: "03",
    question: " How do I reset my password?",
    answer:
      " Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
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
    <div className="flex flex-col items-start justify-between w-[600px] space-y-1 ">
      {questions.map((accordion) => (
        <AccordionElement accordion={accordion} onToggle={mainToggleHandler} />
      ))}
    </div>
  );
};

export default Accordion1;
