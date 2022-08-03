import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

//Navbar or Header
const Header = () => {
  return (
    <header>
      <Navbar
        id="navbar"
        bg="black"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container className="py-4">
          <Navbar.Brand href="/">
          <h1 style={{ color: "yellowgreen"}}><i className="fa-regular fa-eye"></i> OCCHI</h1>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav.Link href="/cart">
                <h4 style={{ color : "yellowgreen"}}><i className="fab fa-opencart"></i> CART</h4>
              </Nav.Link>

              <Nav.Link href="/login">
                <h4 style={{ color : "yellowgreen"}}><i className="fas fa-user-circle"></i> SIGN IN</h4>
              </Nav.Link>

            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
