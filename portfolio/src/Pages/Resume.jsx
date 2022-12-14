import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="resume">
      <section class="card">
        <h2 class="header-two">Education</h2>
          <ul>
            <li class="header-one">University of Nebraska-Lincoln</li>
              <ul>
                <li class="card-one">Lincoln, NE</li>
                <li class="card-one">Bachelor's of Science in Education & Human Sciences</li>
              </ul>
            <li class="header-one">Vesalius University</li>
              <ul>
                <li class="card-one">Brussels, Belgium</li>
                <li class="card-one">Marketing and Business</li>
                <li class="card-one">Study Abroad Program</li>
              </ul>
            <li class="header-one">Salt Lake Community College</li>
              <ul>
                <li class="card-one">Salt Lake City, UT</li>
                <li class="card-one">C++ Programming Certificate</li>
              </ul>
            <li class="header-one">University of Utah</li>
              <ul>
                <li class="card-one">Salt Lake City, Utah</li>
                <li class="card-one">Full Stack Web Development Certificate</li>
              </ul>
          </ul>
      </section>
      <section class="card">
        <h2 class="header-two">Front End Tech</h2>
          <ul>
            <li class="card-two">HTML</li>
            <li class="card-two">CSS</li>
            <li class="card-two">Javascript</li>
            <li class="card-two">Third Party APIs</li>
            <li class="card-two">Bootstrap</li>
            <li class="card-two">Git</li>
          </ul>
      </section>
      <section class="card">
        <h2 class="header-two">Back End Tech</h2>
          <ul>
            <li class="card-two">Node.js</li>
            <li class="card-two">Express.js</li>
            <li class="card-two">MySQL</li>
            <li class="card-two">NoSQL</li>
            <li class="card-two">MongoDB</li>
            <li class="card-two">GraphQL</li>
            <li class="card-two">React</li>
            <li class="card-two">MERN</li>
            <li class="card-two">State</li>
          </ul>
      </section>
    </div>
  )
}

export default Resume
