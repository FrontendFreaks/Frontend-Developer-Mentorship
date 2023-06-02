import VideoElement from "../../components/VideoElement";

const LearnCss = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
          <p>CSS</p>
        </h1>
        <VideoElement
          videoUrl="https://youtu.be/Qu0dbQxm6II"
          heading="Introduction to CSS"
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
          heading="Flexbox in CSS"
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
          heading="Grid in CSS"
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
    </div>
  );
};

export default LearnCss;
