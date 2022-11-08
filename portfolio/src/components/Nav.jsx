import React from 'react'

const nav = ({cPage, setCPage}) => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Beck Straub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick = {()=> setCPage("About")}>About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("Portfolio")}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("ContactMe")}>Contact Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick = {() => setCPage("Resume")}>Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default nav
