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
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-regular fa-eye"></i> OCCHI
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="/cart">
                <i className="fab fa-opencart"></i> CART
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user-circle"></i> SIGN IN
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
