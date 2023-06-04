import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
const socialLinks = [
  {
    href: "#",
    icon: (
      <AiFillTwitterCircle
        size={45}
        className="text-white hover:text-[#687eff]"
      />
    ),
  },
  {
    href: "#",
    icon: (
      <AiFillLinkedin
        size={45}
        className=" text-white   hover:text-[#687eff]"
      />
    ),
  },
  {
    href: "https://www.youtube.com/c/VishalRajput_1",
    icon: (
      <AiFillYoutube size={50} className=" text-white  hover:text-[#687eff]" />
    ),
  },
  {
    href: "https://github.com/Vishal-raj-1",
    icon: (
      <AiFillGithub size={45} className=" text-white  hover:text-[#687eff]" />
    ),
  },
];
const Footer = () => {
  return (
    <div className="mt-24 py-6 px-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between  py-2 ">
        <h3 className="text-3xl font-bold md:text-3xl text-white  ">
          <span className="text-[#687eff]">f</span>rontend
          <span className="text-[#687eff]">f</span>reaks
        </h3>
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
