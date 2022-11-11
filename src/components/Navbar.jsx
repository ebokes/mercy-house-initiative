import React from "react";
import { NavLink } from "react-router-dom";
import nav from "../data/navData";
import logo from "../assets/MERCY HOUSE INNITIATIVE LOGO@2x.png";
import { BsGlobe, BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="w-full px-5 border border-b-gray-500">
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="max-w-[100%] border border-b-[10px] border-[#04CF9F] py-[9px] w-[81px]"
        />
        <div className="space-x-3 lg:space-x-7 flex items-center font-semibold">
          {nav.map((item) => (
            <NavLink
              className="hidden lg:inline-flex"
              to={item.link}
              key={item.title}
            >
              {item.title}
            </NavLink>
          ))}
          <span className="hidden lg:flex items-center space-x-1 ">
            <BsGlobe />
            <a href="/#">ENGLISH</a>
          </span>
          <BsSearch className="inline-flex text-2xl" />
          <HiOutlineMenuAlt4 className="text-4xl lg:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
