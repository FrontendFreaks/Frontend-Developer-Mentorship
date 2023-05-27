import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSnippetHtml = ({ heading, code }) => {
  return (
    <div className="">
      <h1 className=" font-bold text-4xl">{heading}</h1>
      <SyntaxHighlighter
        language="html"
        style={okaidia}
        customStyle={{ fontSize: "16px", lineHeight: 1.5, width: "700px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippetHtml;
