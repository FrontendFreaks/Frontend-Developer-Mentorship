import React from "react";
import BatchIntroduction from "../components/BatchIntroduction";
import StartLearning from "../components/StartLearning";
import { RiReactjsLine, RiQuestionFill } from "react-icons/ri";

const Build = () => {
  const batchHighlights = [
    "The second batch focuses on ReactJS, Redux, Tailwind, and NextJS, enabling participants to create practical projects and enhance their frontend expertise.",
    "Elevate your skills and create with guidance for those with HTML, CSS, and JavaScript basics, providing opportunities for growth and creativity.",
    "Elevate your frontend development skills with the second batch: Dive into ReactJS, Redux, Tailwind, and NextJS projects to level up your expertise.",
  ];

  const learningData = [
    {
      icon: <RiReactjsLine size={60} color="#687eff" />,
      title: "React JS",
      linkTo: "react",
    },
    {
      icon: <RiQuestionFill size={60} color="#687eff" />,
      title: "Frontend Interview Questions",
      linkTo: "interviewqs",
    },
  ];

  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <BatchIntroduction
        batchName="Build"
        batchIntroVideo="https://youtu.be/F6WT-EwTBt4"
        batchHighlights={batchHighlights}
      />
      <StartLearning learningData={learningData} />
    </div>
  );
};

export default Build;
