import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const LearnGit = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-32 py-6 px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
          <p> GIT & Github</p>
        </h1>
        <div className="flex my-4 flex-col md:flex-row items-start justify-between space-x-4 p-1 space-y-4 md:space-y-0">
          <div className="w-full md:w-4/5">
            <ReactPlayer
              url="https://youtu.be/ng_3YZHnz8U"
              width="100%"
              controls
            />
          </div>

          <div className="w-full">
            <h1 className=" font-bold text-4xl text-white">
              Introduction to Git & Github{" "}
            </h1>
            <ol className="flex flex-col items-start justify-between space-y-1 mt-2 text-white ">
              <li className="text-xl  ">
                <span className="text-3xl   font-bold mx-1 text-[#687eff]  ">
                  1|
                </span>
                Introduction: Git/GitHub importance in version control for
                developers, understanding basics: Git, repositories, branches,
                commits.
              </li>
              <li className="text-xl  ">
                <span className="text-3xl   font-bold mx-1 text-[#687eff]  ">
                  2|
                </span>
                Download Git, initialize repository with git init, and collaborate
                on GitHub.
              </li>
              <li className="text-xl  ">
                <span className="text-3xl   font-bold mx-1 text-[#687eff]  ">
                  3|
                </span>
                GitHub Collaboration: Create, remote, push, contribute via
                forking, cloning, pull requests.
              </li>
            </ol>
            <div className="flex flex-row items-center justify-start space-x-4 mt-7">
              <Link
                to="assignment"
                className="bg-[#687eff] px-12 py-4  text-white font-bold uppercase"
                onClick={scrollToTop}
              >
                Assignments
              </Link>
              <Link
                to="notes"
                onClick={scrollToTop}
                className="text-[#687eff] px-12 py-3 transition-all duration-200 ease-out  border-[3px] border-[#5557fd] font-bold uppercase hover:bg-[#687eff] hover:text-white"
              >
                Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnGit;
