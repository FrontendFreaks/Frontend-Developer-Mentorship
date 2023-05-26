import React from "react";
import {
  FaYoutube,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-24 py-6 px-20 bg-[#eff1ed]">
      <div className="flex flex-row items-center justify-between  py-2 ">
        <h3 className="text-3xl font-bold md:text-3xl   ">
          <span className="text-[#6557fd]">f</span>rontend
          <span className="text-[#6557fd]">f</span>reaks
        </h3>
        <div className="flex flex-row items-center justify-center space-x-3">
          <a href="#">
            <FaGithub size={35} color="#6557fd" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
