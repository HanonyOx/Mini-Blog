// import React from 'react'

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 right-0 left-0 mb-3 z-50">
      <nav className="md:flex flex lg:flex justify-between px-4 py-6 w-11/12 container mx-auto items-center">
        <h1 className="font-black text-2xl text-slate-700 font-[Giest]">
          Han's Blog
        </h1>
        <ul className="hidden gap-3 text-slate-700 font-[Giest] bg-gray-100 rounded-3xl px-4 py-2 md:flex lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-1 px-3 ${isActive ? "bg-black rounded-3xl text-gray-50 " : ""}  text-sm hover:rounded-3xl py-1 px-3 hover:text-gray-50 hover:bg-black`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              `py-1 px-3 ${isActive ? "bg-black rounded-3xl text-gray-50 " : ""}  text-sm hover:rounded-3xl py-1 px-3 hover:text-gray-50 hover:bg-black`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/CreateBog"
            className={({ isActive }) =>
              `py-1 px-3 ${isActive ? "bg-black rounded-3xl text-gray-50 " : ""}  text-sm hover:rounded-3xl py-1 px-3 hover:text-gray-50 hover:bg-black`
            }
          >
            Create Blog
          </NavLink>
          <NavLink
            to="/Signup"
            className={({ isActive }) =>
              `py-1 px-3 ${isActive ? "bg-black rounded-3xl text-gray-50 " : ""}  text-sm hover:rounded-3xl py-1 px-3 hover:text-gray-50 hover:bg-black`
            }
          >
            SignUp
          </NavLink>
        </ul>

        <Link
          to="/Signup"
          className="rounded-lg bg-yellow-300 px-3 py-2 hover:bg-yellow-500 transition smooth transform-border text-black font-bold font-[Geist]"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
