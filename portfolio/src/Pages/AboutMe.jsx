import React from "react";
import "./AboutMe.css";
import Profilepic from "../images/profilepic.jpg";

const AboutMe = () => {
  return (
    <div className="body">
      <img className="profile-pic" src={Profilepic} alt="" srcset="" />
      <div className="bio-container">
        <h1 className="text-center">My Story</h1>
        <p className="text-center">
          My name is Beck and I have recently received my Certificate of 
          Completion from the the University of Utah's Coding Bootcamp with 
          the goal of becoming a full-stack developer. I have a Bachelors of 
          Science in Education and Human Sciences from the University of Nebraska-Lincoln. 
          I moved to Utah three ago and enjoy exploring the nature that this state has to offer.
          I also enjoy reading, being by the ocean when I can, and working
          with my hands to build different projects.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
