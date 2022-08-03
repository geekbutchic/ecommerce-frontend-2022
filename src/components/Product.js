import React from "react";
import { Card } from "react-bootstrap";
import Rating from '../components/Rating';

// my = margin all around
// p = padding all around
// product - passed in through props - destructured for full access
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a 
        style={{ textDecoration: "none" }} 
        href={`/product/${product._id}`}
        >
          <Card.Title as="div" id="card-title" className="text-center">
            <h5 style={{ color: "greenyellow" }}>{product.name}</h5>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating 
          value={product.rating} 
          text={`${product.numReviews} Reviews`}/>
        </Card.Text> 

        <Card.Text 
        as="h5" className="text-center">
          ${product.price}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Product;
