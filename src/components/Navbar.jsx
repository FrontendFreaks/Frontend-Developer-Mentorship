import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const navigate = useNavigate();
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleRouteAndSectionChange = (route, section) => {
    navigate(route);

    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-row px-5 md:px-10 py-4  items-center justify-between  z-[300] w-full fixed top-0 bg-[#161616] opacity-80 ">
      <div className="flex flex-row items-center justify-center space-x-2 cursor-pointer">
        <Link to="/">
          <h3
            className="text-3xl font-bold md:text-4xl  cursor-pointer text-white flex flex-row items-center justify-center space-x-2 "
            onClick={scrollToTop}
          >
            <FaLaptopCode className="font-normal" />
            <div>
              <span className="text-[#687eff]">f</span>rontend
              <span className="text-[#687eff]">f</span>reaks
            </div>
          </h3>
        </Link>
      </div>
      <div className="hidden  md:flex md:flex-row md:items-center md:justify-between md:space-x-6 ">
        <p className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]">
          <NavLink
            to="learn"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-[#687eff]" : "")}
          >
            Learn
          </NavLink>
        </p>
        <p className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]">
          <NavLink
            to="build"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-[#687eff]" : "")}
          >
            Build
          </NavLink>
        </p>
        <p className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]">
          <NavLink
            to="hire"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "text-[#687eff]" : "")}
          >
            Hire
          </NavLink>
        </p>
        <p className="bg-[#687eff] px-12 py-3 rounded-full">
          <a
            href="https://discord.gg/PkKanjX4rt"
            onClick={closeMenu}
            target="_blank"
            className="uppercase text-md font-bold text-white"
          >
            Join Discord
          </a>
        </p>
      </div>
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            color="#687eff"
            fontWeight="bold"
            size={35}
            onClick={onClose}
            className="font-bold cursor-pointer"
          />
        ) : (
          <GoThreeBars
            color="#687eff"
            fontWeight="bold"
            size={30}
            onClick={onOpen}
            className="cursor-pointer"
          />
        )}
        {menu && (
          <div className="scale-up-center flex justify-end items-start flex-col text-right px-8 py-12 absolute right-0 top-8 mt-4 min-w-52 rounded-md shadow-md z-10 bg-[#060606] ">
            <p className="my-2">
              <Link
                to="learn"
                onClick={closeMenu}
                className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]"
              >
                Learn
              </Link>
            </p>
            <p className="my-2">
              <Link
                to="build"
                onClick={closeMenu}
                className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]"
              >
                Build
              </Link>
            </p>
            <p className="my-2">
              <Link
                to="hire"
                onClick={closeMenu}
                className="uppercase text-md font-semibold transition-all duration-200 ease-out text-white  hover:text-[#687eff]"
              >
                Hire
              </Link>
            </p>
            <p className="my-2">
              <a
                href="https://discord.gg/PkKanjX4rt"
                onClick={closeMenu}
                target="_blank"
                className="uppercase text-md font-bold text-white bg-[#687EFF] px-12 py-3 rounded my-2"
              >
                Join Discord
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
