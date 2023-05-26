import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const HTMLNotes = () => {
  const codeSnippet1 = `<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    Content goes here
  </body>
</html>`;
  const codeSnippet2 = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

`;
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>HTML Cheatsheet</p>
      </h1>
      <div className="flex flex-row items-stretch justify-between space-x-4">
        <div className="md:w-1/2 flex-1 h-full">
          <h1 className=" font-bold text-4xl">Basic Structure</h1>
          <SyntaxHighlighter
            language="html"
            style={okaidia}
            customStyle={{ fontSize: "16px", lineHeight: 1.5 }}
          >
            {codeSnippet1}
          </SyntaxHighlighter>
        </div>
        <div className="md:w-1/2 flex-1 h-full">
          <h1 className=" font-bold text-4xl">Headings</h1>
          <SyntaxHighlighter
            language="html"
            style={okaidia}
            customStyle={{ fontSize: "16px", lineHeight: 1.5 }}
          >
            {codeSnippet2}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default HTMLNotes;
