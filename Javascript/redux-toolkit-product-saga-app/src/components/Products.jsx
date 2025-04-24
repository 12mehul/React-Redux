import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { fetchProductsStart } from "../redux/slice/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="my-3 g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.images[0]}
                width={50}
                height={220}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-evenly">
                <Button variant="outline-primary" size="lg">
                  View
                </Button>
                <Button variant="outline-secondary" size="lg">
                  Edit
                </Button>
                <Button variant="outline-danger" size="lg">
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
