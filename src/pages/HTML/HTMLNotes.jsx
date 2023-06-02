import React from "react";
import CodeSnippetHtml from "../../components/HTML/CodeSnippetHtml";
import { HTMLBasicNotes } from "../Notes";

const HTMLNotes = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>HTML Cheatsheet</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-4">
        {HTMLBasicNotes.map((element, index) => (
          <CodeSnippetHtml
            key={index}
            heading={element.heading}
            code={element.code}
          />
        ))}
      </div>
    </div>
  );
};

export default HTMLNotes;
