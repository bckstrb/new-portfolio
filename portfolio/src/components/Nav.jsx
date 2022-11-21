import React from 'react'
import "./Nav.css"

const nav = ({cPage, setCPage}) => {
  return (
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Beck Straub</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon" /> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick = {()=> setCPage("Home")}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("About")}>BIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("Portfolio")}>PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("ContactMe")}>CONTACT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("Resume")}>RESUME</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default nav
