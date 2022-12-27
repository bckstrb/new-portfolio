import React from "react";
import Horiseon from "../images/hor.png";
import Password from "../images/password.png";
import Quiz from "../images/codingquiz.png";
import Scheduler from "../images/scheduler.png";
import Weather from "../images/weather.png";
// import Readme from "../images/readme.png";
import Profile from "../images/profile.png";
import Notetaker from "../images/notetaker.png";
import Employee from "../images/employee.png";
// import Ecommerce from "../images/ecommerce.png";
// import Regex from "../images/regex.png";
import Trail from "../images/Trail.png";
import "./Portfolio.css";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-container">
        <div className="image-container">
          <img src={Horiseon} alt="" srcset="" />
          <div className="content">
            {/* <h1>
              <a className="link" href="https://bckstrb.github.io/horiseon_refactoring-/">Horiseon</a>
            </h1> */}
            <h2>
              {/* <a
                className="link"
                href="https://github.com/bckstrb/horiseon_refactoring-" target="_blank"
              >
                <FaGithub color="black" size="40px" />
              </a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://bckstrb.github.io/horiseon_refactoring-/"
              target="_blank"
            >
              Horiseon
            </a>
          </h1>
          <p className="description">
            This project provided pre-existing code that was refactored for
            better functionality and organization.
          </p>
          <ul>
            {/* <li className="tech">Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/horiseon_refactoring-"
                target="_blank"
              >
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Password} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://bckstrb.github.io/password-generator-js/">Password Generator</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/password-generator-js"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://bckstrb.github.io/password-generator-js/"
              target="_blank"
            >
              Password Generator
            </a>
          </h1>
          <p className="description">This app will allow a user to generate a random password by
           selecting the password length, upper and lower case letters, numbers, and special characters.</p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/password-generator-js"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Quiz} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://bckstrb.github.io/coding-quiz-challenge/">Coding Quiz</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/coding-quiz-challenge"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://bckstrb.github.io/coding-quiz-challenge/"
              target="_blank"
            >
              Coding Quiz
            </a>
          </h1>
          <p className="description">This app allows a user to take a short, timed coding quiz that will notify them if the answer is correct or incorrect. 
          They will also be able to log their score once the game is over. </p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Web APIs</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/coding-quiz-challenge"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Scheduler} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://bckstrb.github.io/my-daily-planner/">Work Day Scheduler</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/my-daily-planner"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://bckstrb.github.io/my-daily-planner/"
              target="_blank"
            >
              My Daily Planner
            </a>
          </h1>
          <p className="description">This application provides hour blocks for a daily 
          planner. It displays the date and time at the top of the page and color codes each 
          hour block based on the time. It also has the functionality to save and delete notes.</p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Moment.js</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/my-daily-planner"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Weather} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://bckstrb.github.io/weather-dashboard/">Weather Dashboard</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/weather-dashboard"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://bckstrb.github.io/weather-dashboard/"
              target="_blank"
            >
              Weather Dashboard
            </a>
          </h1>
          <p className="description">This app allows a user to search for 
          the weather by city and have the current weather populate along 
          with a five day forecast. </p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>OpenWeather One Call API</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/weather-dashboard"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="image-container">
          <img src={Readme} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/readme-gen">READme Generator</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/readme-gen"> <FaGithub color="white" size="40px" /></a>
            </h2>
          </div>
        </div> */}

        <div className="image-container">
          <img src={Profile} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://github.com/bckstrb/profile-generator">Team Profile Generator</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/profile-generator"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1 id="back-end" className="link">
            {/* <a className="link" href="https://bckstrb.github.io/weather-dashboard/">Weather Dashboard</a> */}
            Team Profile Generator
          </h1>
          <p className="description">This project functions on the back end and utilizes Node.js and Inquirer to build a team profile with different 
          data criteria based on employment status.</p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML & Bootstrap</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Inquirer</li>
              <li>Node.js</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/profile-generator"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Notetaker} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://becksnotetakerapp.herokuapp.com/">Note Taker</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/becks-notetaker"> <FaGithub color="black" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://becksnotetakerapp.herokuapp.com/"
              target="_blank"
            >
              Note Taker
            </a>
          </h1>
          <p className="description">This app will allow the user to create 
          a titled note. The note will be saved until it is deleted from the 
          app.</p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>Heroku</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/becks-notetaker"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        <div className="image-container">
          <img src={Employee} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://github.com/bckstrb/employee-tracker">Employee Tracker</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/employee-tracker"> <FaGithub color="white" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1 className="link" id="back-end">
            {/* <a
              className="link"
              href="https://github.com/bckstrb/employee-tracker"
            >
              Employee Tracker
            </a> */}
            Employee Tracker
          </h1>
          <p className="description">This project runs on the back end and 
          utilizes SQL and Inquirer to create a command line application to 
          view and add a company's department, roles, and employees, and also 
          update employees roles and managers.</p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>SQL</li>
              <li>Express.js</li>
              <li>Inquirer</li>
              <li>Node.js</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/employee-tracker"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="image-container">
          <img src={Ecommerce} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/ecommerce-backend">E-Commerce Back End</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/ecommerce-backend"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Regex} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://gist.github.com/bckstrb/823e6546e1db276758293f749da32fca">Regex Tutorial</a>
            </h1>
            <h2>
              <a className="link" href="https://gist.github.com/bckstrb/823e6546e1db276758293f749da32fca"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div> */}

        <div className="image-container">
          <img src={Trail} alt="" srcset="" />
          <div className="content">
            <h1>
              {/* <a className="link" href="https://trail-media.herokuapp.com/">Trail Media</a> */}
            </h1>
            <h2>
              {/* <a className="link" href="https://github.com/bckstrb/trail-media"> <FaGithub color="white" size="40px" /></a> */}
            </h2>
          </div>
        </div>

        <div className="description-container">
          <h1>
            <a
              className="link"
              href="https://trail-media.herokuapp.com/"
              target="_blank"
            >
              Trail Media
            </a>
          </h1>
          <p className="description">An app that allows users to search for 
          a trail using latitude and longitude and a description of the trail 
          will be provided. </p>
          <ul>
            {/* <li>Technologies Used</li> */}
            <ul className="items">
              <li>Trail API</li>
              <li>React</li>
              <li>State</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
            <li>
              <a
                className="link"
                href="https://github.com/bckstrb/trail-media"
                target="_blank"
              >
                {" "}
                <FaGithub color="white" size="40px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
