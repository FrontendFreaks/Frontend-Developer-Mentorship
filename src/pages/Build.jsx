import React from "react";
import BatchIntroduction from "../components/BatchIntroduction";
import StartLearning from "../components/StartLearning";
import { RiReactjsLine } from "react-icons/ri";

const Build = () => {
  const batchHighlights = [
    "The second batch focuses on ReactJS, Redux, Tailwind, and NextJS, enabling participants to create practical projects and enhance their frontend expertise.",
    "For those with HTML, CSS, and JavaScript basics. Elevate skills and create with guidance.",
    "Level up in frontend development: ReactJS, Redux, Tailwind, NextJS projects in the second batch.",
  ];

  const learningData = [
    {
      icon: <RiReactjsLine size={60} color="#687eff" />,
      title: "React JS",
      linkTo: "react",
    },
  ];

  return (
    <div className="mt-32 py-6 px-10 ">
      <BatchIntroduction
        batchName="Batch"
        batchIntroVideo="https://youtu.be/F6WT-EwTBt4"
        batchHighlights={batchHighlights}
      />
      <StartLearning learningData={learningData} />
    </div>
  );
};

export default Build;
