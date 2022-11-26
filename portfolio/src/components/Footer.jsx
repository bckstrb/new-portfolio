import React from "react";
import "./Footer.css";
import Github from "../images/github.png";
import In from "../images/in.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <a href="https://github.com/bckstrb"></a>
        <img id="github" src={Github} alt="" srcset="" />
      </div>
      <div>
        <img id="in" src={In} alt="" srcset="" />
        <a href="https://www.linkedin.com/in/beck-straub-ba8ba123a/"></a>
      </div>
    </div>
  );
};

export default Footer;
