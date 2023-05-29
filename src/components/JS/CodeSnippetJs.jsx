import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSnippetJs = ({ heading, code, point }) => {
  return (
    <div className="">
      <h1 className=" font-bold text-2xl">{heading}</h1>
      <p className="max-w-2xl"> {point}</p>
      <SyntaxHighlighter
        language="js"
        style={okaidia}
        customStyle={{ fontSize: "16px", lineHeight: 1.5, width: "700px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippetJs;
