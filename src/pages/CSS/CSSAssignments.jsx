import React from "react";
import GridImage from "./../../assets/CSS/grid.png";
import LinkedIn from "./../../assets/CSS/linkedin.png";

import CSSAssignmentElement from "../../components/CSS/CSSAssignmentElement";
const CSSAssignments = () => {
  const assignments = [
    {
      number: 1,
      heading: "Design All Assignments",
      problem:
        "Apply CSS knowledge to design solved assignments: syntax, selectors, box model, layout, typography, colors, backgrounds. Use 2 fonts, 2 colors, and a background gradient for visual appeal. Utilize CSS properties creatively for a unique design.",
      imageSrc: null,
    },
    {
      number: 2,
      heading: "Build Your own Developer Portfolio",
      problem:
        "Create a responsive portfolio with all sections. Get inspiration from this portfolio.",
      imageSrc: null,
    },
    {
      number: 3,
      heading: "Practise Grid",
      problem:
        "Create stunning CSS Grid layouts and share them on social media to inspire others. Embrace the beauty of CSS Grid and unleash your creativity in just a few clicks!",
      imageSrc: GridImage,
    },
    {
      number: 4,
      heading: "LinkedIn Clone",
      problem:
        "Create a table that displays the prices of products in an online store. The table should have the following columns: Product Name, Description, Price, and Availability. Populate the table with data for at least five products.",
      imageSrc: LinkedIn,
    },
  ];

  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
        <p>CSS Assignment</p>
      </h1>
      {assignments.map((assignment) => (
        <CSSAssignmentElement
          key={assignment.number}
          number={assignment.number}
          heading={assignment.heading}
          problem={assignment.problem}
          imageSrc={assignment.imageSrc}
        />
      ))}
    </div>
  );
};

export default CSSAssignments;
