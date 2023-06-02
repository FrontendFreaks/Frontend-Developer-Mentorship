import BatchIntroduction from "../components/BatchIntroduction";
import StartLearning from "../components/LearnBatch/StartLearning";

const Learn = () => {
  const batchHighlights = [
    "Beginner-friendly web development curriculum: Covers HTML, CSS, JavaScript, Git, and GitHub from scratch.",
    "Comprehensive learning materials: Includes resources, assignments, cheat sheets, and over 100 questions for practice and testing.",
    "Frontend Developer Essential Course: Equips students with essential skills and knowledge to excel in frontend development.",
  ];

  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <BatchIntroduction
        batchName="Learn"
        batchIntroVideo="https://youtu.be/tI7R7YG4jEY"
        batchHighlights={batchHighlights}
      />
      <StartLearning />
    </div>
  );
};

export default Learn;
