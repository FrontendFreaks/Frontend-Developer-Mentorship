import VideoElement from "../../components/VideoElement";
const LearnReact = () => {
  const videos = [
    {
      videoSrc: "https://youtu.be/ddCoFFqLo-g",
      heading: "Fundamentals of React Js",
      mainPoints: {
        one: "ReactJS fundamentals: components, functional vs class, imports/exports, JSX, props, state, and examples.",
        two: "Learn by doing: create a counter app, solve practice questions, and complete a hands-on exercise.",
        three:
          "Gain a strong foundation in ReactJS and be prepared to develop your own applications.",
      },
    },
    {
      videoSrc: "https://youtu.be/lLpdRMaDVQc",
      heading: "Build Modern Todo App",
      mainPoints: {
        one: "Preview Todo App, Set up Coding Environment, List Rendering, Add/Delete/Mark/Filter Tasks.",
        two: "Clear completed tasks, show remaining count, refactor app as component, understand fragments.",
        three:
          "Organize components folder, submit assignment, learn conditional rendering, and clear completed tasks.",
      },
    },
    {
      videoSrc: "https://youtu.be/OOnavajXOAE",
      heading: "Build a Quiz App",
      mainPoints: {
        one: "Quiz App Project Overview: Create sandbox, routes, welcome page, quiz page, score page, and review component.",
        two: "Task 1-3: Set up routes, not found page, and create components for welcome and quiz pages.",
        three:
          "Task 4-10: Implement navigation, buttons, score calculation, timer, and review answer component.",
      },
    },
  ];
  return (
    <div className="mt-32 py-6 px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>React Js</p>
        </h1>
      </div>
      <div>
        {
          videos.map((element, index) => (
            <VideoElement
              key={index}
              videoSrc={element.videoSrc}
              heading={element.heading}
              mainPoints={element.mainPoints}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LearnReact;
