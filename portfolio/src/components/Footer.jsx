import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc"

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <a href="https://github.com/bckstrb" target="_blank"><FaGithub color="black" size="50px" /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/beck-straub-ba8ba123a/" target="_blank"><FaLinkedin size="50px" /></a>
      </div>
      <div>
        <a href="https://docs.google.com/document/d/1FnNDnpsADHnui6Wt-lulVwm79DEHSCzDe4fsIiErsIE/edit?usp=sharing" target="_blank"><FcViewDetails size="50px" /></a>
      </div>
    </div>
  );
};

export default Footer;
