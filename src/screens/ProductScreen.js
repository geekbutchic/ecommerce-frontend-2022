import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";


// md = column space 
// fluid = keeps image inside of container
const ProductScreen = () => {
  // Testing for now will come from backend later
  // Match ID in URL 
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  console.log(product);
  return (
    <React.Fragment>
      <Link  
      to="/"
      className="btn btn-secondary my-4" >
        Go Back
      </Link>
      <Row>
          <Col md={5}>
          <Image
          style={{ borderRadius: "10px"}}
          src={product.image} 
          alt={product.name} 
          fluid
          />
          </Col>
          <Col md={5}>
            <ListGroup 
            variant="flush"
            >
              <ListGroup.Item 
              style={{ color: "yellowgreen"}}
              >
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating 
                value={product.rating} 
                text={`${product.numReviews} Reviews`}
                />
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
            
          </Col>
          <Col md={2}>
            <Card>
              <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                        Price :
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={7}>
                       Status :
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? `In Stock ✅` : `Out of Stock  ❌`}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* product button disabled if count is zero */}
                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductScreen;
