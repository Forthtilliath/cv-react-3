import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import NavbarElements from "./NavbarElements";

class Navbar extends Component {
  componentDidMount() {
    //https://stackoverflow.com/questions/48911593/how-to-use-sidenav-of-materialize-css-with-react
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      inDuration: 350,
      outDuration: 350,
    });
  }
  first = (
    <li>
      <div className="user-view">
        <div className="background">
          <img
            src="http://materializecss.com/images/office.jpg"
            alt="Background User View"
          />
        </div>
        <a href="#user">
          <img
            className="circle"
            src="http://materializecss.com/images/yuna.jpg"
            alt="Avatar User View"
          />
        </a>
        <a href="#name">
          <span className="white-text name">Pretty Woman</span>
        </a>
        <a href="#email">
          <span className="white-text email">prettywoman@gmail.com</span>
        </a>
      </div>
    </li>
  );
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                CV
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <NavbarElements class="right hide-on-med-and-down" />
            </div>
          </div>
        </nav>

        <NavbarElements class="sidenav" id="side-nav" first={this.first} />
      </div>
    );
  }
}

export default Navbar;
