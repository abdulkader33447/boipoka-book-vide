import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <ul className="sm:flex gap-7">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 outline-green-500 btn " : "btn"
          }
          to="/"
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 outline-green-500 btn " : "btn "
          }
          to="/about"
        >
          <li>About</li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500 outline-green-500 btn " : "btn"
          }
          to="/readList"
        >
          <li>Read List</li>
        </NavLink>
      </ul>
    </>
  );

  return (
    <div className="navbar p-0 bg-base-200 shadow-sm fixed top-0  z-20 sm:w-7xl rounded-lg">
      <div className="navbar-start">
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl hover:border-[#23BE0A]">
          Book Vibe
        </a>
      </div>
      <div className="sm:block hidden ">{links}</div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end mr-3">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
