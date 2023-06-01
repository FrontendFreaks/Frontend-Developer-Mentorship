import React from "react";
import FounderImage from "./../../assets/founder.jpeg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
const AboutFounder = () => {
  return (
    <div className="mt-24 py-6 px-5 md:px-20 flex flex-col space-y-12 ">
      <div className="text-left font-bold text-5xl text-white flex flex-col items-center md:items-start justify-between space-y-3  ">
        <h1 className="text-center md:text-left"> About the Founder </h1>
        <div className="w-28 h-2 bg-[white] rounded"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-x-12 space-y-8 md:space-y-0">
        <div className="md:1/2 flex flex-col items-between justify-between space-y-3 text-white   ">
          <img src={FounderImage} className="w-[400px] h-84  rounded-full" />
          <h1 className="text-4xl font-bold text-center ">Vishal Rajput</h1>
        </div>
        <div className="md:w-1/2 flex text-[1rem]  -mt-8 flex-col items-start justify-between space-y-4 text-white ">
          <p className="">
            Vishal Rajput, a frontend developer from India, is the driving force
            behind Frontend Freaks. With a diverse background of working with
            six startups, Vishal brings a wealth of practical experience to the
            table.
          </p>
          <p>
            As a dedicated mentor, Vishal has helped over 3000 students master
            frontend development, build real-world projects, and make
            contributions to open source. He takes immense pride in guiding more
            than 70 students to secure their first jobs in frontend development.
          </p>
          <p>
            Vishal's friendly and lighthearted approach sets him apart, making
            him a valuable asset to the Frontend Freaks community. Join us and
            benefit from Vishal's expertise as you unleash your frontend
            superpowers.
          </p>
          <div className="flex flex-row items-start justify-start space-x-3">
            <a href="#">
              <AiFillTwitterCircle size={45} className="hover:text-[#687eff]" />
            </a>
            <a href="#">
              <AiFillLinkedin size={45} className="hover:text-[#687eff]" />
            </a>
            <a href="#">
              <AiFillYoutube size={50} className="hover:text-[#687eff]" />
            </a>
            <a href="#">
              <AiFillGithub size={45} className="hover:text-[#687eff]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
