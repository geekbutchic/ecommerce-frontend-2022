import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';

//Components
const HomeScreen = () => {
  return (
    <React.Fragment>
        <h3>Latest Eye Wear</h3>
        <Row>
        {products.map(product => (
          //loops through products to display names
          //bootstrap sizing relative to screen size
          <Col sm={12} md={6} lg={4} xl={3}>
          <h6>{product.name}</h6>
          </Col>
        ))}
        </Row>
    </React.Fragment>
  )
}

export default HomeScreen