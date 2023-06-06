import ReactPlayer from "react-player";
import { GoStar } from "react-icons/go";
import { aboutText } from "./content";

const About = () => {
  return (
    <div
      className="mt-20 py-20 px-3 md:px-15 space-y-8 flex flex-col md:flex-row items-start justify-between md:space-x-8 md:space-y-0  "
      id="about"
    >
      <div className="w-full md:w-1/2  flex flex-col items-center  ">
        <ReactPlayer url="https://youtu.be/OmgIP2EZJx4" width="100%" controls />
      </div>
      <div className="md:w-1/2 flex flex-col items-start md:items-start justify-between space-y-4 space-x-0  p-1">
        <div className="text-left font-bold text-5xl text-white flex flex-col items-start justify-between space-y-3  ">
          <h1> About us </h1>
          <div className="w-28 h-2 bg-[#687eff] rounded"></div>
        </div>
        <ul className="flex flex-col items-start justify-between space-y-2">
          {aboutText.map((text, index) => (
            <li
              key={index}
              className="text-xl text-white flex flex-row space-x-2"
            >
              <GoStar size={50} className="-mt-2" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
