import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
const axios = require("axios");

const urlEndpoint = "http://localhost:4000";
// Components
// Row

const HomeScreen = () => {
  //use state hook
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const apiResponse = await fetch(`${urlEndpoint}/server/api/products`);
  //     //.json all fetch responses - not parsed
  //     //axios does parse
  //     const apiJSON = await apiResponse.json();
  //     setProducts(apiJSON);
  //   };
  //   fetchProducts();
  // },[]);

  // .data = axios only not fetch 
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${urlEndpoint}/server/api/products`);
      setProducts(data.message);
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <h3 style={{ color: "yellowgreen" }} className="text-center">
        LATEST EYE WEAR
      </h3>
      <Row>
        {products.map((product, index) => (
          //Loops through products to display names
          //Bootstrap sizing relative to screen size
          //Product component
          <Col sm={12} md={6} lg={4} xl={4} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
