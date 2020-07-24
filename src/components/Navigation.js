import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, ResponsiveEmbed } from 'react-bootstrap';



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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/arview"><h3>AR</h3></Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/recommendation"><h4>Recommendation</h4></Nav.Link>
                </Navbar.Collapse>
                </Navbar>
            </div>
    );
}
 
export default Navigation;