import VideoElement from "../../components/VideoElement";
import { JavaScriptVideos } from "../Videos";

const LearnJs = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]">
          <p>JavaScript</p>
        </h1>
        {
          JavaScriptVideos.map((video, index) => (
            <VideoElement
              key={index}
              videoUrl={video.videoUrl}
              heading={video.heading}
              mainPoints={video.mainPoints}
              change={video.change}
              notesLink={video.notesLink}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LearnJs;
