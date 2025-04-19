import React from "react";
import Navbar from "../../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto relative z-20">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
