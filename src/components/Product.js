import React from "react";
import Rating from "../components/Rating";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// my = margin all around
// p = padding all around
// product - passed in through props - destructured for full access
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link 
        style={{ textDecoration: "none" }} 
        to={`/product/${product.id}`}
        >
          <Card.Title as="div" id="card-title" className="text-center">
            <h5 style={{ color: "greenyellow" }}>{product.name}</h5>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </Card.Text>

        <Card.Text as="h5" className="text-center">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
