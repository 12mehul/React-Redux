import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { fetchSingleProductStart } from "../redux/slice/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProductStart(id));
    }
  }, [id, dispatch]);

  return (
    <Container>
      <h1 className="text-center my-4">View Product</h1>
      {product && (
        <Card>
          <Row className="d-flex align-items-center justify-content-center p-4">
            <Col md={4}>
              <Carousel>
                {product.images.map((v, i) => (
                  <Carousel.Item key={i}>
                    <Card.Img variant="top" src={v} width={50} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col md={8}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Row>
                  <Card.Title>Category: {product.category.name}</Card.Title>
                  <Card.Title>Price: {product.price}$</Card.Title>
                  <Card.Body className="w-25">
                    <Card.Img
                      variant="top"
                      src={product.category.image}
                      className="w-25"
                    />
                  </Card.Body>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetails;
