import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { fetchProductsStart } from "../redux/slice/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  const handleViewClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/edit-product/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="my-3 g-4">
        {products.map((val) => (
          <Col key={val.id}>
            <Card className="h-100">
              <Carousel>
                {val.images.map((v, i) => (
                  <Carousel.Item key={i}>
                    <Card.Img variant="top" src={v} width={50} height={220} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-evenly">
                <Button
                  variant="outline-primary"
                  size="lg"
                  onClick={() => handleViewClick(val.id)}
                >
                  View
                </Button>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => handleEditClick(val.id)}
                >
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
