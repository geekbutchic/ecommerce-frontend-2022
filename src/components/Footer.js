import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
//Badge = Bold Font based off of heading h1,h2,h3 and so on

//py = padding on y axis - top & bottom
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col id="footer" className="text-center py-3">
            <h6>
              <Badge bg="secondary">Copyright &copy; Sonny Lee Valenzuela</Badge>
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
