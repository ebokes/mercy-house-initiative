import React from "react";
import { Link, NavLink } from "react-router-dom";
import nav from "../data/navData";
import logo from "../assets/MERCY HOUSE INNITIATIVE LOGO@2x.png";
import { BsGlobe, BsSearch } from "react-icons/bs";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <header className="w-full px-5  sticky top-0 z-10 bg-white shadow-md ">
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="max-w-[100%] border-b-[7px] border-color1 py-[9px] w-[61px] lg:w-[71px]"
          />
        </Link>
        <div className="space-x-3 lg:space-x-7 flex items-center font-semibold">
          {nav.map((item) => (
            <NavLink
              className="hidden lg:inline-flex hover:text-color1"
              to={item.link}
              key={item.title}
            >
              {item.title}
            </NavLink>
          ))}

          <span className="lg:hidden">
            <Hamburger
              // color="#36b37e"
              // onClick={handleClick}
              // toggled={isMenuOpen}
              // toggle={setIsMenuOpen}
              size={30}
              className="text-4xl "
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
