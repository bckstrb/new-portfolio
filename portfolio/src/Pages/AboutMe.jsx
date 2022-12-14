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
        I am a web developer that has skills in both the 
        back-end of web applications and the front-end, 
        with a certificate from the University of Utah Full 
        Stack Coding Bootcamp. I have a background in art, 
        design, and marketing which I can utilize for UX/UI 
        designs. On my most recent project, I was elected the 
        role of leader and together we constructed an app for 
        a travel log using an MVC with Sequelize and Express. 
        I have been elected team leader on other projects as well. 
        My particular interests are React and MERN Stack however 
        I am open to working with other technologies as I continue 
        to learn and grow in this field. I am excited to explore the 
        opportunities provided by this education from the 
        University of Utah and possibly the chance to work with 
        experienced developers in a mentee position. As a woman in 
        such a largely male dominated field, I hope to one day be 
        in a position where I can mentor and be an advocate for 
        young women starting out web development. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
