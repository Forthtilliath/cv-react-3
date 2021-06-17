import React, { Component } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Education from "./Education";
import Portfolio from "./Portfolio";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Skills />
              <Experiences />
              <Education />
              <Portfolio />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
