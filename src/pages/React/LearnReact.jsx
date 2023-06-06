import VideoElement from "../../components/VideoElement";
import { ReactVideos } from "../Videos";

const LearnReact = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>React Js</p>
        </h1>
      </div>
      <div>
        {ReactVideos.map((element, index) => (
          <VideoElement
            key={index}
            videoUrl={element.videoSrc}
            heading={element.heading}
            mainPoints={element.mainPoints}
            notes={element.notes}
            assignment={element.assignment}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnReact;
