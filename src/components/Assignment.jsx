import { useState } from "react";

const Assignment = ({
  number,
  heading,
  problem,
  imageSrc,
  link,
  linkStatement,
}) => {
  const [preview, setPreview] = useState(false);
  const changePreview = () => {
    setPreview(!preview);
  };
  return (
    <div className="p-4 ">
      <div className="font-bold text-xl md:text-2xl flex flex-row items-start md:items-end justify-start space-x-3 rounded bg-[#0c0f0a] p-3">
        <span className="text-2xl text-[#687eff]  font-bold mx-1 ">
          {number}
        </span>
        <h1 className="text-white uppercase text-2xl"> {heading} </h1>
        {link && (
          <div>
            <a
              href={link}
              className="text-[#687eff] text-sm uppercase font-bold mx-3"
              target="_blank"
            >
              PREVIEW LINK
            </a>
          </div>
        )}
      </div>

      <div className="bg-[#252422] px-3 py-5 rounded">
        <p className="text-md text-[#767676]">{problem}</p>
        {preview && <img src={imageSrc} className="" />}
      </div>
    </div>
  );
};

export default Assignment;
