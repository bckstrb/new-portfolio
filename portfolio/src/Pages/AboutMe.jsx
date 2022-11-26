import React from "react";
import "./AboutMe.css"
import Profilepic from "../images/profilepic.jpg"

const AboutMe = () => {
  return (
    <div className="body">
      <img className="profile-pic" src={Profilepic} alt="" srcset="" />
      <div className="bio-container">
        <h1 className="text-center">My Story</h1>
      <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptate explicabo possimus quod, sit molestias, incidunt consectetur
          aut iusto modi saepe qui reprehenderit, tenetur nam accusamus sapiente
          excepturi quisquam? Consequatur esse nulla laudantium harum
          consectetur corrupti quis minima labore odit cumque dolore adipisci
          quo earum possimus atque accusantium quam eaque asperiores iste
          obcaecati, accusamus voluptatum debitis? Minima optio ea officia
          dignissimos ducimus, aperiam vitae nulla beatae blanditiis sed
          quisquam eveniet facere, quibusdam cumque ipsam quae dicta architecto,
          similique adipisci. Iste.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
