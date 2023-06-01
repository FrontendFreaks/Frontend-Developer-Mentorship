import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSnippetCSS = ({ heading, code }) => {
  return (
    <div className="">
      <h1 className=" font-bold text-2xl text-white">{heading}</h1>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language="css"
          style={dracula}
          className="whitespace-pre-wrap"
          customStyle={{
            fontSize: "16px",
            lineHeight: 1.5,
            width: "700px",
            color: "white",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippetCSS;
