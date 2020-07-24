import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, ResponsiveEmbed } from "react-bootstrap";

const Navigation = () => {
  return (
    <div class="container">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.ioiproperties.com.my/themes/ioi/logo.svg"
            width="130"
            height="64"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/">Home</Link>
          <Link to="/arview">
            <h3>AR</h3>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/recommendation">
            <h4>Recommendation</h4>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
