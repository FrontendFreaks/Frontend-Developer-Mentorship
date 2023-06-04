import React from "react";
import { featuresData } from "./content";

const Features = () => {
  return (
    <div
      className="mt-24 py-24 px-10 flex flex-col items-center justify-between space-y-12 bg-[#060606]"
      id="features"
    >
      <div className="text-left font-bold text-5xl text-white flex items-start justify-between flex-col space-y-3">
        <h1>Features</h1>
        <div className="w-28 h-2 bg-[#687eff] rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-between">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="px-3 py-10 flex flex-col items-center justify-between space-y-2 bg-[#161616] rounded"
          >
            {feature.icon}
            <h1 className="uppercase font-bold text-xl text-white">
              {feature.title}
            </h1>
            <p className="text-center text-[#767676]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
