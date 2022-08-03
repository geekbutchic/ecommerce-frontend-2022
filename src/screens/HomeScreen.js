import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from '../components/Product';

//Components
//Row 
const HomeScreen = () => {
  return (
    <React.Fragment>
      <h3 
      style={{color : "yellowgreen"}} 
      className="text-center">LATEST EYE WEAR</h3>
      <Row>
        {products.map((product, index) => (
          //Loops through products to display names
          //Bootstrap sizing relative to screen size
          //Product component
          <Col sm={12} md={6} lg={4} xl={4} key={index}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
