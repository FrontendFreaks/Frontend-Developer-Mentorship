import BatchIntroduction from "../components/BatchIntroduction";
import StartLearning from "../components/StartLearning";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const Learn = () => {
  const batchHighlights = [
    "Beginner-friendly web development curriculum: Covers HTML, CSS, JavaScript, Git, and GitHub from scratch.",
    "Comprehensive learning materials: Includes resources, assignments, cheat sheets, and over 100 questions for practice and testing.",
    "Frontend Developer Essential Course: Equips students with essential skills and knowledge to excel in frontend development.",
  ];

  const learningData = [
    {
      icon: <AiFillHtml5 size={80} color="#6557fd" />,
      title: "HTML",
      linkTo: "html",
    },
    {
      icon: <IoLogoCss3 size={80} color="#6557fd" />,
      title: "CSS",
      linkTo: "css",
    },
    {
      icon: <SiJavascript size={60} color="#6557fd" />,
      title: "JS",
      linkTo: "js",
    },
    {
      icon: <BsGit size={80} color="#6557fd" />,
      title: "Git & GitHub",
      linkTo: "git",
    },
  ];

  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <BatchIntroduction
        batchName="Learn"
        batchIntroVideo="https://youtu.be/tI7R7YG4jEY"
        batchHighlights={batchHighlights}
      />
      <StartLearning learningData={learningData} />
    </div>
  );
};

export default Learn;
