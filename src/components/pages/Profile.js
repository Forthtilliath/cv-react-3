import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../images/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img src={ImgProfile} alt="Vincent LISITA" className="activator" />
            <Link
              className="btn-floating halfway-fab waves-effect wave-light red"
              to=""
            >
              <i className="material-icons activator">more_vert</i>
            </Link>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Vincent LISITA
            </span>
            <p>Développeur Front-end</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Follow Me
              <i className="material-icons right">close</i>
            </span>
            <p className="flex-container">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <FontAwesomeIcon icon={["fab", "pinterest"]} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
