import React from "react";
import NotesSnippet from "../../components/NotesSnippet";
import { HTMLBasicNotes } from "../Notes";

const HTMLNotes = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10">
      <h1 className="text-center  font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>HTML Cheatsheet</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-4">
        {HTMLBasicNotes.map((element, index) => (
          <NotesSnippet
            key={index}
            heading={element.heading}
            code={element.code}
            language="html"
          />
        ))}
      </div>
    </div>
  );
};

export default HTMLNotes;
