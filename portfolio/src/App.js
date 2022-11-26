import React, { useState } from "react";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [cPage, setCPage] = useState("Home");

  function handleChange() {
    if (cPage === "Home") {
      return <Home />;
    } else if (cPage === "About") {
      return <AboutMe />;
    } else if (cPage === "Portfolio") {
      return <Portfolio />;
    } else if (cPage === "ContactMe") {
      return <ContactMe />;
    } else {
      return <Resume />;
    }
  }

  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
          <Nav cPage={cPage} setCPage={setCPage} />
          {handleChange()}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
