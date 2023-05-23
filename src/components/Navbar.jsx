import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center shadow-md p-3">
      <div className="flex justify-center items-center space-x-3">
        <div className="w-2 p-5 rounded-full bg-[#6941C6]"></div>
        <h1 className="font-bold text-lg uppercase">Logo</h1>
      </div>
      <label htmlFor="search" className="relative block ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 absolute top-1.5 ml-1"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clip-rule="evenodd"
          />
        </svg>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="border border-[#6941C6] rounded-md p-1 focus:outline-none indent-6"
        />
      </label>
      <div className="listItems ">
        <ul className="flex space-x-3">
          <li className="text-base hover:text-[#6941C6] cursor-pointer">
            Home
          </li>
          <li className="text-base hover:text-[#6941C6] cursor-pointer">
            Courses
          </li>
          <li className="text-base hover:text-[#6941C6] cursor-pointer">
            Notes
          </li>
          <li className="text-base hover:text-[#6941C6] cursor-pointer">
            Contact Us
          </li>
          <li className="text-base hover:text-[#6941C6] cursor-pointer">
            About
          </li>
        </ul>
      </div>
      <div className="btn space-x-4">
        <button className="border border-black px-5 py-1.5 rounded-lg hover:bg-[#6941C6] hover:text-white hover:border-none">
          Sign in
        </button>
        <button className="bg-[#6941C6] border px-5 py-1.5 text-white rounded-lg hover:bg-white hover:text-black hover:border-black">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
