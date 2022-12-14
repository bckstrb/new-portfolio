import React from 'react'
import Horiseon from '../images/hor.png'
import Password from '../images/password.png'
import Quiz from '../images/codingquiz.png'
import Scheduler from '../images/scheduler.png'
import Weather from '../images/weather.png'
import Readme from '../images/readme.png'
import Profile from '../images/profile.png'
import Notetaker from '../images/notetaker.png'
import Employee from '../images/employee.png'
import Ecommerce from '../images/ecommerce.png'
import Regex from '../images/regex.png'
import "./Portfolio.css"
import { FaGithub } from "react-icons/fa"



const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-container">
        <div className="image-container">
          <img src={Horiseon} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://bckstrb.github.io/horiseon_refactoring-/">Horiseon</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/horiseon_refactoring-"><FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Password} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://bckstrb.github.io/password-generator-js/">Password Generator</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/password-generator-js"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Quiz} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://bckstrb.github.io/coding-quiz-challenge/">Coding Quiz</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/coding-quiz-challenge"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Scheduler} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://bckstrb.github.io/my-daily-planner/">Work Day Scheduler</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/my-daily-planner"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Weather} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://bckstrb.github.io/weather-dashboard/">Weather Dashboard</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/weather-dashboard"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Readme} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/readme-gen">READme Generator</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/readme-gen"> <FaGithub color="white" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Profile} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/profile-generator">Team Profile Generator</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/profile-generator"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Notetaker} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/becks-notetaker">Note Taker</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/becks-notetaker"> <FaGithub color="black" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Employee} alt="" srcset="" />
          <div className='content'>
            <h1>
              <a className="link" href="https://github.com/bckstrb/employee-tracker">Employee Tracker</a>
            </h1>
            <h2>
              <a className="link" href="https://github.com/bckstrb/employee-tracker"> <FaGithub color="white" size="40px" /></a>
            </h2>
          </div>
        </div>

        <div className="image-container">
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
        </div>

      </div>
    </div>
  )
}

export default Portfolio
