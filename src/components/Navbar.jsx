import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { BsFillRocketFill } from "react-icons/bs";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function onClose() {
    setMenu(false);
  }
  function onOpen() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <div className="flex flex-row px-10 py-5  items-center justify-between   w-full fixed top-0 bg-white">
      <div className="flex flex-row items-center justify-center space-x-2">
        <h3 className="text-3xl font-bold md:text-4xl main-heading ">
          <span className="text-[#6557fd]">f</span>rontend
          <span className="text-[#6557fd]">f</span>reaks
        </h3>
      </div>
      <div className="hidden  md:flex md:flex-row md:items-center md:justify-between md:space-x-6 ">
        <p>
          <a
            href="#"
            onClick={closeMenu}
            className="uppercase text-md font-semibold transition-all duration-200 ease-out hover:text-[#6557fd]"
          >
            Mentorships
          </a>
        </p>
        <p>
          <a
            href="#about"
            onClick={closeMenu}
            className="uppercase text-md font-semibold transition-all duration-200 ease-out hover:text-[#6557fd]"
          >
            Courses
          </a>
        </p>
        <p>
          <a
            href="#projects"
            onClick={closeMenu}
            className="uppercase text-md font-semibold transition-all duration-200 ease-out hover:text-[#6557fd]"
          >
            Assignments
          </a>
        </p>

        <p className="bg-[#6557fd] px-12 py-3 rounded-full">
          <a
            href="#contact"
            onClick={closeMenu}
            className="uppercase text-md font-bold text-white"
          >
            Join
          </a>
        </p>
      </div>
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            color="#6557fd"
            fontWeight="bold"
            size={35}
            onClick={onClose}
            className="font-bold"
          />
        ) : (
          <GoThreeBars
            color="#6557fd"
            fontWeight="bold"
            size={30}
            onClick={onOpen}
          />
        )}
        {menu && (
          <div className="scale-up-center flex justify-end items-start flex-col text-right px-8 py-12 absolute right-0 top-8 mt-4 min-w-52 rounded-md shadow-md z-10 bg-white ">
            <p className="my-2">
              <a
                href="#"
                onClick={closeMenu}
                className="uppercase text-md font-bold transition-all duration-200 ease-out hover:text-[#6557fd]"
              >
                Mentorships
              </a>
            </p>
            <p className="my-2">
              <a
                href="#about"
                onClick={closeMenu}
                className="uppercase text-md font-bold transition-all duration-200 ease-out hover:text-[#6557fd]"
              >
                Courses
              </a>
            </p>
            <p className="my-2">
              <a
                href="#projects"
                onClick={closeMenu}
                className="uppercase text-md font-bold transition-all duration-200 ease-out hover:text-[#6557fd]"
              >
                Assignments
              </a>
            </p>

            <p className="bg-[#6557fd] px-12 py-3 rounded my-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="uppercase text-md font-bold text-white"
              >
                Join
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
