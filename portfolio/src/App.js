import React, { useState } from "react";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const App = () => {
  const [cPage, setCPage] = useState("About");

  function handleChange() {
    if (cPage === "About") {
        return <AboutMe />
    }else if (cPage === "Portfolio"){
        return <Portfolio />
    }else if (cPage === "ContactMe"){
        return <ContactMe />
    }else {
        return <Resume />
    }
  };

  return (
    <div>
      <Nav cPage = {cPage} setCPage = {setCPage}/> 
      {handleChange()}
      <Footer />
    </div>
  );
};

export default App;
