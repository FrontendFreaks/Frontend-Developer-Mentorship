import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" mt-24 py-12 px-10 bg-[#eff7f6] flex flex-col items-center justify-between space-y-4">
      <h1 className="text-center font-bold text-4xl main-heading  ">
        Get in Touch!
      </h1>
      <p className="text-[#767676]  ">
        Contact us to elevate your frontend skills and become a professional.
      </p>
      <div className="flex flex-row items-center justify-between space-x-4">
        <div className="px-20 py-6 bg-white flex flex-col items-center justify-between space-y-2">
          <FaTwitterSquare size={50} color="#687eff" />
          <h1 className="text-center font-bold text-md uppercase main-heading  ">
            Twitter
          </h1>
        </div>
        <div className="px-20 py-6 bg-white flex flex-col items-center justify-between space-y-2">
          <MdEmail size={50} color="#687eff" />
          <h1 className="text-center font-bold text-md uppercase main-heading  ">
            Email
          </h1>
        </div>
        <div className="px-20 py-6 bg-white flex flex-col items-center justify-between space-y-2">
          <BsLinkedin size={40} color="#687eff" />
          <h1 className="text-center font-bold text-md uppercase main-heading  ">
            Linkedin
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
