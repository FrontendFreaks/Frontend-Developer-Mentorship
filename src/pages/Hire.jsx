import VideoElement from "../components/VideoElement";
import { HiredVideos } from "./Videos";

const Hire = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
        <p>Hire Batch</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-7">
        <div>
          {
            HiredVideos.map((element, index) => (
              <VideoElement
                key={index}
                videoSrc={element.videoSrc}
                heading={element.heading}
                mainPoints={element.mainPoints}
                link={element.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Hire;
