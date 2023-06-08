import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
const socialLinks = [
  {
    href: "https://twitter.com/frontendfreaks",
    icon: (
      <FaTwitterSquare size={45} className="text-white hover:text-[#687eff]" />
    ),
  },
  {
    href: "https://www.linkedin.com/company/frontendfreaks/",
    icon: (
      <AiFillLinkedin
        size={50}
        className=" text-white   hover:text-[#687eff]"
      />
    ),
  },
  {
    href: "https://github.com/Vishal-raj-1",
    icon: (
      <FaGithubSquare size={45} className=" text-white  hover:text-[#687eff]" />
    ),
  },
];
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-24 py-6 px-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between  py-2 space-y-2 md:space-y-0 ">
        <Link to="/">
          <h3
            className="text-3xl font-bold md:text-4xl  cursor-pointer text-white flex flex-row items-center justify-center space-x-1 "
            onClick={scrollToTop}
          >
            <FaLaptopCode />
            <div>
              <span className="text-[#687eff]">f</span>rontend
              <span className="text-[#687eff]">f</span>reaks
            </div>
          </h3>
        </Link>
        <div className="flex flex-row items-center justify-center space-x-3">
          {socialLinks.map((element, index) => (
            <a key={index} href={element.href} target="_blank">
              {element.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
