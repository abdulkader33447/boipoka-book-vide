import React from "react";
import {
  FaJ,
  FaJs,
  FaSquareFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content  p-10 rounded-lg">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https:/www.twitter.com" target="blank">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https:/www.youtube.com" target="blank">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="https:/www.facebook.com" target="blank">
            <FaSquareFacebook className="text-2xl" />
          </a>
        </div>
      </nav>
      <div>
        <h3 className="font-bold">Tool</h3>
        <div className="sm:flex gap-10">
          <span className="flex gap-2 items-center">
            <p>JavaScript </p>
            <FaJs className="w-4 h-4 bg-black text-[#F7E025]" />
          </span>
          <span className="flex gap-2 items-center">
            <p>JavaScript </p>
            <GrReactjs className=" text-[#00D8FF]" />
          </span>
          <span className="flex gap-2 items-center">
            <p>TailwindCss </p>
            <RiTailwindCssFill className=" text-[#00D8FF]" />
          </span>
          <span className="flex gap-2 items-center">
            <p>React Router </p>
            <SiReactrouter />
          </span>
        </div>
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
        <p className="font-medium"> Powered By: A.kader</p>
      </aside>
    </footer>
  );
};

export default Footer;
