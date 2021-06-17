import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import NavbarElements from "./NavbarElements";
import NavbarTest from "./NavbarTest";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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

  list = (
    <>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
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

        {/* <NavbarElements class="sidenav" id="side-nav" first={this.first} /> */}
        <NavbarTest
          buttons={["left"]}
          list={this.list}
        />
      </div>
    );
  }
}

export default Navbar;
