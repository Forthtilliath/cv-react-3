import { useState } from "react";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavbarElements, NavbarItem, NavbarItemProps } from "./NavbarElements";

import { Link } from "react-router-dom";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-fixed">
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              CV
            </Link>
            <ul onClick={() => setOpen(true)}>
              <li
                className="show-on-medium-and-down"
                style={{ display: "none" }}
              >
                <Link to="#">
                  <i className="material-icons">menu</i>
                </Link>
              </li>
            </ul>
            <SwipeableDrawer
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
            >
              <Box
                sx={{
                  width: "350px",
                  bgcolor: "background.paper",
                }}
              >
                <NavbarElements
                  className=""
                  render={({ icon, label, to }: NavbarItemProps) => (
                    <Link to={to}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => setOpen(false)}>
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText primary={label} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )}
                />
              </Box>
            </SwipeableDrawer>

            <NavbarElements className="right hide-on-med-and-down" />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
