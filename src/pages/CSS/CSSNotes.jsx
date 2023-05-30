import React from "react";
import CodeSnippetCSS from "../../components/CSS/CodeSnippetCSS";
const codeSnippetsBasic = [
  {
    heading: "Adding CSS to HTML (3 methods & precedence)",
    code: `<!-- Inline CSS -->
<h1 style="color: red;">Hello World</h1>

<!-- Internal CSS -->
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>

<!-- External CSS -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
`,
  },
  {
    heading: "Understanding CSS syntax",
    code: `selector {
  property: value;
}`,
  },
  {
    heading: "CSS selectors and specificity",
    code: `/* Element selector */
h1 {
  color: red;
}

/* Class selector */
.heading {
  color: blue;
}

/* ID selector */
#title {
  color: green;
}

/* Specificity example */
.heading#title {
  color: yellow;
}`,
  },
  {
    heading: "Working with CSS fonts",
    code: `/* Font family */
body {
  font-family: Arial, sans-serif;
}

/* Font size */
h1 {
  font-size: 3rem;
}

/* Font weight */
h2 {
  font-weight: bold;
}`,
  },
  {
    heading: "Using CSS colors effectively",
    code: `/* Hex code */
h1 {
  color: #ff0000;
}

/* RGB */
.heading {
  color: rgb(0, 255, 0);
}

/* HSL */
#title {
  color: hsl(240, 100%, 50%);
}`,
  },
  {
    heading: "CSS backgrounds and gradients",
    code: `/* Background color */
body {
  background-color: #fff;
}

/* Background image */
.container {
  background-image: url(bg.jpg);
}

/* Linear gradient */
.heading {
  background-image: linear-gradient(to bottom, #ff0000, #0000ff);
}

/* Radial gradient */
.title {
  background-image: radial-gradient(circle, #ff0000, #0000ff);
}`,
  },
  {
    heading: "Creating CSS borders and Shape",
    code: `/* Border */
.container {
  border: 1px solid black;
}

/* Border radius */
.box {
  border-radius: 10px;
}

/* Box shadow */
.heading {
  box-shadow: 5px 5px 10px #888888;
}

/* Triangle */
.triangle {
  width: 0;
  height: 0;
  border-top: 50px solid red;
  border-right: 50px solid transparent;
}

/* Circle */
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
}`,
  },
  {
    heading: "Understanding the CSS box model",
    code: `/* Content box */
.container {
  width: 300px;
  height: 200px;
}

/* Padding box */
.container {
  padding: 10px;
}

/* Border box */
.container {
  border: 1px solid black;
}

/* Margin box */
.container {
  margin: 10px;
}`,
  },
  {
    heading: "Formatting CSS text",
    code: `/* Text alignment */
h1 {
  text-align: center;
}

/* Text decoration */
a {
  text-decoration: none;
}

/* Text transformation */
.heading {
  text-transform: uppercase;
}

/* Letter spacing */
.title {
  letter-spacing: 2px;
}

/* Line height */
p {
  line-height: 1.5;
}`,
  },
  {
    heading: "Creating CSS Links",
    code: `/* unvisited link */
a:link {
  color: blue;
}

/* visited link */
a:visited {
  color: purple;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
a:active {
  color: green;
}`,
  },
  {
    heading: "Using CSS Display Property",
    code: `/* block-level element */
div {
  display: block;
}

/* inline-level element */
span {
  display: inline;
}

/* inline-block element */
img {
  display: inline-block;
}`,
  },
  {
    heading: "Positioning Elements with CSS",
    code: `/* static positioning (default) */
div {
  position: static;
}

/* relative positioning */
div {
  position: relative;
  top: 10px;
  left: 20px;
}

/* absolute positioning */
div {
  position: absolute;
  top: 10px;
  left: 20px;
}

/* fixed positioning */
div {
  position: fixed;
  top: 10px;
  left: 20px;
}`,
  },
  {
    heading: "CSS Media Queries",
    code: `/* Small screens (mobile devices) */
@media only screen and (max-width: 767px) {
  /* Styles go here */
}

/* Medium screens (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Styles go here */
}

/* Large screens (desktops) */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  /* Styles go here */
}

/* Extra large screens (large desktops) */
@media only screen and (min-width: 1280px) {
  /* Styles go here */
}`,
  },
];

const codeSnippetsFlex = [
  {
    heading: "Display Property",
    code: `/* Set the container to a flexbox */
.container {
  display: flex;
}`,
  },
  {
    heading: "Flex Direction Property",
    code: `/* Set the main axis direction */
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}`,
  },
  {
    heading: "Flex Wrap Property",
    code: `/* Allow items to wrap */
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}`,
  },
  {
    heading: "Flex Flow Property",
    code: `/* Combine flex-direction and flex-wrap */
.container {
  flex-flow: row wrap;
}`,
  },
  {
    heading: "Justify Content Property",
    code: `/* Align items along the main axis */
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}`,
  },
  {
    heading: "Align Items Property",
    code: `/* Align items along the cross axis */
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}`,
  },
  {
    heading: "Align Content Property",
    code: `/* Align wrapped lines along the cross axis */
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}`,
  },
  {
    heading: "Gap Property",
    code: `/* Set the gap between flex items */
.container {
  gap: 10px;
}`,
  },
  {
    heading: "Order Property",
    code: `/* Change the order of flex items */
.item {
  order: 2;
}`,
  },
  {
    heading: "Flex Grow Property",
    code: `/* Allow an item to grow to fill available space */
.item {
  flex-grow: 1;
}`,
  },
  {
    heading: "Flex Shrink Property",
    code: `/* Allow an item to shrink to fit available space */
.item {
  flex-shrink: 1;
}`,
  },
  {
    heading: "Flex Basis Property",
    code: `/* Set the initial main size of an item */
.item {
  flex-basis: auto | 0 | 50%;
}`,
  },
  {
    heading: "Flex Property",
    code: `.item {
    flex: 3 5 500px; /* shorthand for flex-grow flex-shrink flex-basis */
}`,
  },
  {
    heading: "Align Self Property",
    code: `.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`,
  },
];
const codeSnippetsGrid = [
  {
    heading: "Grid Template Columns",
    code: `/* Defines the columns of the grid. */
.container {
  grid-template-columns: 100px 100px 100px;
}`,
  },
  {
    heading: "Grid Template Rows",
    code: `/* Defines the rows of the grid. */
.container {
  grid-template-rows: 100px 100px;
}`,
  },
  {
    heading: "Grid Template Areas",
    code: `/* Defines the areas of the grid. */
.container {
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}`,
  },
  {
    heading: "Gap",
    code: `/* Specifies the size of the gap between grid items. */
.container {
  gap: 10px;
}`,
  },
  {
    heading: "Justify Items",
    code: `/* Aligns items along the inline (row) axis. */
.container {
  justify-items: center;
}`,
  },
  {
    heading: "Align Items",
    code: `/* Aligns items along the block (column) axis. */
.container {
  align-items: center;
}`,
  },
  {
    heading: "Justify Content",
    code: `/* Aligns the grid along the inline (row) axis. */
.container {
  justify-content: center;
}`,
  },
  {
    heading: "Align Content",
    code: `/* Aligns the grid along the block (column) axis. */
.container {
  align-content: center;
}`,
  },
  {
    heading: "Grid Column Start",
    code: `/* Specifies the start position of a grid item along the inline (row) axis. */
.item {
  grid-column-start: 1;
}`,
  },
  {
    heading: "Grid Column End",
    code: `/* Specifies the end position of a grid item along the inline (row) axis. */
.item {
  grid-column-end: 3;
}`,
  },
  {
    heading: "Grid Row Start",
    code: `/* Specifies the start position of a grid item along the block (column) axis. */
.item {
  grid-row-start: 1;
}`,
  },
  {
    heading: "Grid Row End",
    code: `/* Specifies the end position of a grid item along the block (column) axis. */
.item {
  grid-row-end: 3;
}`,
  },
  {
    heading: "Grid Area",
    code: `/* Specifies both the start and end positions of a grid item. */
.item {
  grid-area: 1 / 1 / 3 / 3;
}`,
  },
  {
    heading: "Justify Self",
    code: `/* Aligns a grid item along the inline (row) axis. */
.item {
  justify-self: center;
}`,
  },
  {
    heading: "Align Self",
    code: `/* Aligns a grid item along the block (column) axis. */
.item {
  align-self: center;
}`,
  },
];

const CSSNotes = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>CSS Cheatsheet</p>
      </h1>
      <ul className="flex flex-row items-center justify-start space-x-4 uppercase text-md font-bold">
        <li>
          <a href="#css">Basic CSS</a>
        </li>
        <li>
          <a href="#flexbox">Flexbox</a>
        </li>
        <li>
          <a href="#grid">Grid</a>
        </li>
      </ul>
      <div
        className="flex flex-col items-start justify-between space-y-4 py-8"
        id="css"
      >
        <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>Basic CSS</p>
        </h1>
        {codeSnippetsBasic.map((element) => (
          <CodeSnippetCSS heading={element.heading} code={element.code} />
        ))}
      </div>
      <div
        className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
        id="flexbox"
      >
        <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>Flexbox</p>
        </h1>
        {codeSnippetsFlex.map((element) => (
          <CodeSnippetCSS heading={element.heading} code={element.code} />
        ))}
      </div>
      <div
        className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
        id="grid"
      >
        <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>Grid</p>
        </h1>
        <h1 className="text-left font-bold text-1xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>1. Grid container properties</p>
        </h1>
        {codeSnippetsGrid.map((element) => (
          <CodeSnippetCSS heading={element.heading} code={element.code} />
        ))}
      </div>
    </div>
  );
};

export default CSSNotes;
