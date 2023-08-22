import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.svg";
import { UserAuth } from "../../auth/AuthContext";

function MainNavigation() {
  console.log("CurentUser");
  const { currentUser } = UserAuth();
  console.log("currentuser", currentUser);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="p-3 "
      style={{ borderBottom: "1.5px solid #347347" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-success fw-bolder">
          <img src={logo} alt="website logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold ">
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
                For Homes
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/investors">
                For Investors
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-success" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          {currentUser ? (
            <Nav.Link className="btn btn-primary bg-success mb-3 mb-lg-0 py-2 px-3">
              <Link className="text-decoration-none text-white" to="/myaccount">
                My Account
              </Link>
            </Nav.Link>
          ) : (
            <Nav className=" gap-lg-3 d-lg-flex justify-content-center align-items-center ">
              <Nav.Link className="btn btn-primary bg-success mb-3 mb-lg-0">
                <Link className="text-decoration-none text-white" to="/signup">
                  Sign Up
                </Link>
              </Nav.Link>
              <Nav.Link className="btn btn-primary bg-success">
                <Link className="text-decoration-none text-white" to="/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
