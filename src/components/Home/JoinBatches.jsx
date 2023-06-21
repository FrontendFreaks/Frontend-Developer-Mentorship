import { Link } from "react-router-dom";
import { batchData } from "./content";

const JoinBatches = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="mt-24 py-32 px-10 flex flex-col items-center justify-between space-y-8"
      id="join"
    >
      <div className="text-left font-bold text-4xl md:text-5xl text-white flex flex-col items-start justify-between space-y-3">
        <h1>Join Free Mentorship</h1>
        <div className="w-28 h-2 bg-[#687eff] rounded"></div>
      </div>
      <div className="flex flex-col items-start justify-between md:space-x-3 md:flex-row">
        {batchData.map((batch) => (
          <div
            className="flex flex-col items-center justify-between space-y-2 shadow-sm py-10 px-2 w-[380px]"
            key={batch.title}
          >
            {batch.icon}
            <h1 className="uppercase font-bold text-2xl text-white">
              {batch.title}
            </h1>
            <Link
              to={batch.linkTo}
              onClick={scrollToTop}
              className="bg-[#687eff] rounded px-16 py-3 text-white font-bold uppercase"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinBatches;
