import React from "react";
import CodeSnippetJs from "../../components/JS/CodeSnippetJs";
import { JSBasicNotes, JSDomNotes } from "../Notes";
const JSNotes = () => {

  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>JS Cheatsheet</p>
      </h1>
      {JSBasicNotes.map((element, index) => (
        <CodeSnippetJs
          key={index}
          point={element.point}
          heading={element.heading}
          code={element.code}
        />
      ))}
      <div className="flex flex-col items-start justify-between space-y-4 mt-8 py-24">
        <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>JS DOM</p>
        </h1>
        {JSDomNotes.map((element, index) => (
          <CodeSnippetJs
            key={index}
            point={element.point}
            heading={element.heading}
            code={element.code}
          />
        ))}
      </div>
    </div>
  );
};

export default JSNotes;
