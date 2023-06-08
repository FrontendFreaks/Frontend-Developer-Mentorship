import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";

const NotesSnippet = ({ heading, language, code, point }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 5000);
  };
  return (
    <div className="p-1">
      <h1 className="font-bold text-2xl text-white">{heading}</h1>
      {language === "js" && (
        <p className="max-w-2xl text-[#767676]"> {point}</p>
      )}

      <div className="overflow-x-auto w-[380px] md:w-[800px] relative">
        <button
          className="absolute top-3 mb-4 right-4  py-2 px-4 uppercase  text-white rounded"
          onClick={handleCopy}
        >
          {isCopied ? (
            "Copied!"
          ) : (
            <MdContentCopy className="font-bold text-xl" />
          )}
        </button>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          className="whitespace-pre-wrap"
          customStyle={{
            fontSize: "16px",
            lineHeight: 1.5,
            padding: "24px",
            maxWidth: "100%",
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
