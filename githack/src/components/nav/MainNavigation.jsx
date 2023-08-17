import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.svg";

function MainNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-3 ">
      <Container>
        <Navbar.Brand href="#home" className="text-success fw-bolder">
          <img src={logo} alt="website logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold ">
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/individual">
                Individual
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/investors">
                Investors
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>

            <Nav.Link className="btn btn-primary bg-success">
              <Link className="text-decoration-none text-white" to="/login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
