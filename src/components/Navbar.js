import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import NavbarElements from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  componentDidMount() {
    //https://stackoverflow.com/questions/48911593/how-to-use-sidenav-of-materialize-css-with-react
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      onOpenStart: () => {
        document.querySelector(".sidenav-overlay").style.zIndex = "996";
      },
      onCloseEnd: () => {
        // document.querySelector(".sidenav-overlay").style.display = 'none';
      }
    });
  }
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

        {/* <NavbarElements class="sidenav" id="side-nav" /> */}
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faCopy} /> Skills
            </Link>
          </li>
          <li>
            <Link to="/experiences">
              <FontAwesomeIcon icon={faIdBadge} /> Experiences
            </Link>
          </li>
          <li>
            <Link to="/education">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FontAwesomeIcon icon={faAddressCard} /> Portfolio
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
