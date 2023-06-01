import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSnippetJs = ({ heading, code, point }) => {
  return (
    <div className="">
      <h1 className=" font-bold text-2xl text-[#ffffff]">{heading}</h1>
      <p className="max-w-2xl text-[#767676]"> {point}</p>
      <SyntaxHighlighter
        language="js"
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
  );
};

export default CodeSnippetJs;
