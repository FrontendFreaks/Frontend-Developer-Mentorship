import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const NotesSnippet = ({ heading, language, code }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl text-white">{heading}</h1>
      {language === "js" && <p className="max-w-2xl text-[#767676]"> {point}</p>}
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
