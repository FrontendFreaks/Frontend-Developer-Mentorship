import React from "react";
import {
  FaYoutube,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-24 py-6 px-20 ">
      <div className="flex flex-row items-center justify-between  py-2 ">
        <h3 className="text-3xl font-bold md:text-3xl text-white  ">
          <span className="text-[#687eff]">f</span>rontend
          <span className="text-[#687eff]">f</span>reaks
        </h3>
        <div className="flex flex-row items-center justify-center space-x-3">
          <a href="#">
            <FaGithub size={35} color="#687eff" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
