import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { fetchProductsStart } from "../redux/slice/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [id, setId] = useState("");
  const { loading, products } = useSelector((state) => state.products);

  const handleClose = () => setShow(false);
  const handleViewClick = (id) => navigate(`/product/${id}`);
  const handleEditClick = (id) => navigate(`/edit-product/${id}`);
  const totalProducts = Math.ceil(products.length / 12);

  const handleShowDelete = (id) => {
    setShow(true);
    setId(id);
  };

  const handleDelete = () => {
    if (id) {
      setShow(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalProducts) newPage = totalProducts;
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="my-3 g-4">
        {loading ? (
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          products.slice((page - 1) * 12, page * 12).map((val) => (
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
                  <Button
                    variant="outline-danger"
                    size="lg"
                    onClick={() => handleShowDelete(val.id)}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Card.Footer className="p-3 d-flex gap-5 justify-content-center">
        <Button
          variant={page === 1 ? "outline-secondary" : "outline-primary"}
          size="lg"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          variant={
            page === totalProducts ? "outline-secondary" : "outline-primary"
          }
          size="lg"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalProducts}
        >
          Next
        </Button>
      </Card.Footer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure delete this product!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Products;
