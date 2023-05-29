import React from "react";
import VideoElement from "./VideoElement";
const Introduction = () => {
  return (
    <div>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>CSS</p>
      </h1>
      <VideoElement
        videoUrl="https://youtu.be/Qu0dbQxm6II"
        mainPoints={{
          one: "Introduction to CSS methods, syntax, selectors, values, specificity, fonts, colors, backgrounds, gradients, borders, shapes, box model, and text formatting.",
          two: "Creating CSS links, customizing appearance, and changing element rendering with the display property.",
          three:
            "Positioning elements with CSS using absolute, relative, fixed, and sticky positioning techniques.",
        }}
        change={false}
        notesLink="notes#css"
      />
      <VideoElement
        videoUrl="https://youtu.be/3nLglJtUHjA"
        mainPoints={{
          one: "Introduction to CSS Flexbox: Learn the basics of CSS Flexbox for flexible and responsive layouts.",
          two: "Understanding Flexbox: Explore the display, flex-direction, and flex-wrap properties to control the layout and wrapping behavior.",
          three:
            "CSS properties for precise element alignment and sizing: justify-content, align-items, gap, order, flex properties.",
        }}
        change={true}
        notesLink="notes#flexbox"
      />
      <VideoElement
        videoUrl="https://youtu.be/ULp7wPJ-rzQ"
        mainPoints={{
          one: "Introduction to CSS Grid and Flexbox comparison",
          two: "Creating Grid layout with display and grid-template properties",
          three:
            "Alignment, spacing, grid lines, areas, and design enhancements with CSS Grid",
        }}
        change={false}
        notesLink="notes#flexbox"
      />
    </div>
  );
};

export default Introduction;
