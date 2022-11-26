import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="resume">
      <section class="card">
        <h2>Education</h2>
          <ul>
            <li>University of Nebraska-Lincoln</li>
              <ul>
                <li>Lincoln, NE</li>
                <li>Bachelor's of Science in Education & Human Sciences</li>
              </ul>
            <li>Vesalius University</li>
              <ul>
                <li>Brussels, Belgium</li>
                <li>Marketing and Business</li>
                <li>Study Abroad Program</li>
              </ul>
            <li>Salt Lake Community College</li>
              <ul>
                <li>Salt Lake City, UT</li>
                <li>C++ Programming</li>
                <li>Certificate of Completion</li>
              </ul>
            <li>University of Utah</li>
              <ul>
                <li>Salt Lake City, Utah</li>
                <li>Certificate of Completion</li>
              </ul>
          </ul>
      </section>
      <section class="card">
        <h2>Front End Tech</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Third Party APIs</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
      </section>
      <section class="card">
        <h2>Back End Tech</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>React</li>
            <li>MERN</li>
            <li>State</li>
          </ul>
      </section>
    </div>
  )
}

export default Resume
