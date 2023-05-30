import React from "react";
import VideoElement from "./VideoElement";
const AllVideos = () => {
  const videos = [
    {
      videoSrc: "https://www.youtube.com/watch?v=MJC1SI-f2eA",
      heading: "Optimize Your LinkedIn Profile",
      mainPoints: {
        one: "Optimize LinkedIn profile: Showcase skills and experiences with keywords.",
        two: "Include professional headshot: Attract potential employers effectively.",
        three:
          "Watch tutorial video: Improve profile and attract employers on LinkedIn.",
      },
    },
    {
      videoSrc: "https://www.youtube.com/watch?v=RIZJ4um56f8",
      heading: "Create Profile on Wellfound",
      mainPoints: {
        one: "AngelList (Wellfound) connects job seekers with startups, boosting internship/job prospects.",
        two: "Include professional headshot: Attract potential employers effectively.Tutorial: Increase your chances of interview calls by applying for jobs on AngelList.",
        three:
          "Method: Set up LinkedIn and AngelList profiles, tailor applications, follow up persistently for offers.",
      },
    },
    {
      videoSrc: "https://www.youtube.com/watch?v=1sUIvJM939c",
      heading: "Create Your Resume",
      mainPoints: {
        one: "Use essential resume sections: header, summary, experience, education, skills, achievements, and coding profiles.",
        two: "Optimize with ChatGPT and improve ATS score with Resumeworded for better job prospects.",
        three:
          "Gain remote frontend development experience through open-source projects and internships, using Overleaf for professional resumes.",
      },
    },
  ];
  return (
    <div>
      {videos.map((element, index) => (
        <VideoElement
          key={index}
          videoSrc={element.videoSrc}
          heading={element.heading}
          mainPoints={element.mainPoints}
        />
      ))}
    </div>
  );
};

export default AllVideos;
