import React from "react";
import VideoElement from "./VideoElement";
const Introduction = () => {
  return (
    <div>
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>JavaScript</p>
      </h1>
      <VideoElement
        videoUrl="https://youtu.be/9Shi7sbrHqY"
        mainPoints={{
          one: "JavaScript Basics: Introduction to JavaScript, including variables, data types, and operators.",
          two: "Control Flow: Conditional statements (if-else, switch) and loops (for, while, do-while) for program flow control.",
          three:
            "Functions and Arrays: Working with functions for code organization and arrays for storing and manipulating collections of data.",
        }}
        change={false}
        notesLink="notes#css"
      />
      <VideoElement
        videoUrl="https://youtu.be/85jzHRTVdsc"
        mainPoints={{
          one: "The Document Object Model (DOM) represents the structured HTML elements in a web page.",
          two: "HTML DOM element retrieval: Get Element by ID, Class Name, Tag Name, Query Selector, and Query Selector All.",
          three:
            "HTML DOM: Inner HTML, Inner Text, show/hide card, event listeners, style changes, counter program.",
        }}
        change={true}
        notesLink="notes#flexbox"
      />
      <VideoElement
        videoUrl="https://youtu.be/CVS8CdVrsoc"
        mainPoints={{
          one: "Introduction to structuring and designing websites using HTML, CSS, and JavaScript.",
          two: "Adding and displaying notes on the website, exploring localStorage and sessionStorage for data storage.",
          three:
            "Implementing essential features like adding, deleting, and updating notes for a complete website experience.",
        }}
        change={false}
        notesLink="notes#flexbox"
      />
      <VideoElement
        videoUrl="https://youtu.be/lY7j-NBGFHM"
        mainPoints={{
          one: "Introduction to Whack A Mole Game, including game mechanics and objectives.",
          two: "Structuring the game board using HTML to create the visual layout.",
          three:
            "Designing the game's appearance with CSS to enhance the user experience.",
        }}
        change={false}
        notesLink="notes#flexbox"
      />
      <VideoElement
        videoUrl="https://youtu.be/z1LJ_gWwzFs"
        mainPoints={{
          one: "GitHub Wrapper project overview: HTML and JS used, Fetch API for data retrieval, Promises utilized with .then() and .catch().",
          two: "Exploring how to use Fetch API in JS for efficient data fetching.",
          three:
            "Implementation of GitHub user profile card and project cards, leveraging Async & Await for asynchronous operations.",
        }}
        change={false}
        notesLink="notes#flexbox"
      />
    </div>
  );
};

export default Introduction;
