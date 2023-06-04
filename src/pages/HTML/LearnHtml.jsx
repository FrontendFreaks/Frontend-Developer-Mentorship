import VideoElement from "../../components/VideoElement";
import { HTMLVideos } from "../Videos";

const LearnHtml = () => {
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
          <p>HTML</p>
        </h1>
        {HTMLVideos.map((video, index) => (
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

export default LearnHtml;
