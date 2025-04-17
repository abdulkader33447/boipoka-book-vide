import React from "react";

const Navbar = () => {
  const links = (
    <>
      <ul className="sm:flex gap-7">
        <li className="sm:btn hover:border-solid hover:border-[#23BE0A] hover:text-[#23BE0A]">Home</li>
        <li className="w-31 sm:btn hover:border-solid hover:border-[#23BE0A] hover:text-[#23BE0A]">Listed Books</li>
        <li className="w-31 sm:btn hover:border-solid hover:border-[#23BE0A] hover:text-[#23BE0A]">Pages to Read</li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <a className="btn btn-ghost text-xl hover:border-[#23BE0A]">Book Vibe</a>
      </div>
      <div className="sm:block hidden ">
        {links}
        </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] text-white">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
