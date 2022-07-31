import React from "react";
import { Card } from "react-bootstrap";

// my = margin
// p = padding
// product - passed in through props - destructured
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <Card.Text className="text-center"><i class="fa-regular fa-dollar-sign"></i>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
