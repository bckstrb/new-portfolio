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



const Portfolio = () => {
  return (
    <div>
      <h1>My Works</h1>
      <div className="portfolio-container">
        <div className="image-container">
          <img src={Horiseon} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/horiseon_refactoring-">Horiseon</a>
              <a href="https://github.com/bckstrb/horiseon_refactoring-"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Password} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/password-generator-js">Password Generator</a>
              <a href="https://github.com/bckstrb/password-generator-js"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Quiz} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/coding-quiz-challenge">Coding Quiz</a>
              <a href="https://github.com/bckstrb/coding-quiz-challenge"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Scheduler} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/my-daily-planner">Work Day Scheduler</a>
              <a href="https://github.com/bckstrb/my-daily-planner"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Weather} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/weather-dashboard">Weather Dashboard</a>
              <a href="https://github.com/bckstrb/weather-dashboard"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Readme} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/readme-gen">READme Generator</a>
              <a href="https://github.com/bckstrb/readme-gen"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Profile} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/profile-generator">Team Profile Generator</a>
              <a href="https://github.com/bckstrb/profile-generator"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Notetaker} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/becks-notetaker">Note Taker</a>
              <a href="https://github.com/bckstrb/becks-notetaker"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Employee} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/employee-tracker">Employee Tracker</a>
              <a href="https://github.com/bckstrb/employee-tracker"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Ecommerce} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://github.com/bckstrb/ecommerce-backend">E-Commerce Back End</a>
              <a href="https://github.com/bckstrb/ecommerce-backend"> GITHUB link</a>
            </h2>
          </div>
        </div>

        <div className="image-container">
          <img src={Regex} alt="" srcset="" />
          <div className='content'>
            <h2>
              <a href="https://gist.github.com/bckstrb/823e6546e1db276758293f749da32fca">Regex Tutorial</a>
              <a href="https://gist.github.com/bckstrb/823e6546e1db276758293f749da32fca"> GITHUB link</a>
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
