import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc"

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <a href="https://github.com/bckstrb"><FaGithub color="black" size="50px" /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/beck-straub-ba8ba123a/"><FaLinkedin size="50px" /></a>
      </div>
      <div>
        <a href="https://bold.pro/my/rebecca-straub"><FcViewDetails size="50px" /></a>
      </div>
    </div>
  );
};

export default Footer;
