import VideoElement from "../../components/VideoElement";
import { CSSVideos } from "../Videos";

const LearnCss = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
          <p>CSS</p>
        </h1>
        {CSSVideos.map((video, index) => (
          <VideoElement
            key={index}
            videoUrl={video.videoUrl}
            heading={video.heading}
            mainPoints={video.mainPoints}
            notes={video.notes}
            assignment={video.assignment}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnCss;
