import React from "react";
import BatchIntroduction from "../components/BatchIntroduction";
import StartLearning from "../components/BuildBatch/StartLearning";

const Build = () => {
  const batchHighlights = [
    "The second batch focuses on ReactJS, Redux, Tailwind, and NextJS, enabling participants to create practical projects and enhance their frontend expertise.",
    "For those with HTML, CSS, and JavaScript basics. Elevate skills and create with guidance.",
    "Level up in frontend development: ReactJS, Redux, Tailwind, NextJS projects in the second batch.",
  ];

  return (
    <div className="mt-32 py-6 px-10 ">
      <BatchIntroduction
        batchName="Batch"
        batchIntroVideo="https://youtu.be/F6WT-EwTBt4"
        batchHighlights={batchHighlights}
      />
      <StartLearning />
    </div>
  );
};

export default Build;
