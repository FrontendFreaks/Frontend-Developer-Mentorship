import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const NotesSnippet = ({ heading, language, code, point }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 5000);
  };
  return (
    <div className="">
      <h1 className="font-bold text-2xl text-white">{heading}</h1>
      {language === "js" && (
        <p className="max-w-2xl text-[#767676]"> {point}</p>
      )}
      <div className="relative">
        <button
          className="absolute top-2 right-2 py-2 px-4 bg-gray-800 text-white rounded"
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
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

export default NotesSnippet;
