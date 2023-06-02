import React from "react";
import CodeSnippetCSS from "../../components/CSS/CodeSnippetCSS";
import { CSSBasicNotes, CSSFlexboxNotes, CSSGridNotes } from "../Notes";

const CSSNotes = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>CSS Cheatsheet</p>
      </h1>
      <ul className="flex flex-row items-center justify-start space-x-4 uppercase text-md font-bold text-white">
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
        {CSSBasicNotes.map((element) => (
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
        {CSSFlexboxNotes.map((element) => (
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
        {CSSGridNotes.map((element) => (
          <CodeSnippetCSS heading={element.heading} code={element.code} />
        ))}
      </div>
    </div>
  );
};

export default CSSNotes;
