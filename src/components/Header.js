import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
//USING LINK CONTAINER WHICH ALLOWS FOR WRAPPING OF BOOTSTRAP COMPONENTS.
//REACT ROUTER WILL NOT WORK BUT LINK CONTAINER DOES THE SAME.  AVOIDS RE-RENDERING THE PAGE.
import { LinkContainer  } from 'react-router-bootstrap';

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
          <LinkContainer to="/">
          <Navbar.Brand>
          <h1 style={{ color: "yellowgreen"}}><i className="fa-regular fa-eye"></i> OCCHI</h1>
          </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <LinkContainer to="/cart">
              <Nav.Link>
                <h4 style={{ color : "yellowgreen"}}><i className="fab fa-opencart"></i> CART</h4>
              </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
              <Nav.Link>
                <h4 style={{ color : "yellowgreen"}}><i className="fas fa-user-circle"></i> SIGN IN</h4>
              </Nav.Link>
              </LinkContainer>

            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
