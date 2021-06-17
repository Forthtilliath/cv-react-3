import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

class NavbarElements extends Component {
  render() {
    return (
      <ul className={this.props.class} id={this.props.id}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FontAwesomeIcon icon={faCopy} size="lg" />
            Skills
          </Link>
        </li>
        <li>
          <Link to="/experiences">
            <FontAwesomeIcon icon={faIdBadge} size="lg" />
            Experiences
          </Link>
        </li>
        <li>
          <Link to="/education">
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            Education
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faAddressCard} size="lg" />
            Portfolio
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavbarElements;