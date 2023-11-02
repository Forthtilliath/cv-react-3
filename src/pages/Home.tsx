import { Component } from "react";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Education from "./Education";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
