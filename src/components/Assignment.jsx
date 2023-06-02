import { useState } from "react";

const Assignment = ({ number, heading, problem, imageSrc, link }) => {
  const [preview, setPreview] = useState(false);
  const changePreview = () => {
    setPreview(!preview);
  };
  return (
    <div className="p-4">
      <div className="font-bold text-2xl flex flex-row items-center justify-start space-x-3">
        <span className="text-3xl text-[#687eff]  font-bold mx-1 ">
          {number}
        </span>
        <h1 className="text-white"> {heading} </h1>
        {imageSrc && (
          <button
            className={`text-sm ${preview ? "text-red-400" : "text-[#687eff]"
              } `}
            onClick={changePreview}
          >
            {preview ? "CLOSE" : "PREVIEW"}
          </button>
        )}
      </div>

      <div>
        <p className="text-xl text-[#767676]">
          {problem}{" "}
          {link && (
            <a
              href={link}
              className="text-[#687eff] text-sm uppercase font-bold"
              target="_blank"
            >
              Click Here
            </a>
          )}
        </p>
        {preview && <img src={imageSrc} className="" />}
      </div>
    </div>
  );
};

export default Assignment;
