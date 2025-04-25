import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  addImage,
  addProductChange,
  addProductStart,
  clearProduct,
} from "../redux/slice/addProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");
  const { product } = useSelector((state) => state.addProduct);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setCategory(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "categoryId" ? Number(value) : value;
    dispatch(addProductChange({ name, value: parsedValue }));
  };

  const handleImageKeyDown = (e) => {
    if (e.key === "Enter" && image.trim()) {
      e.preventDefault();
      dispatch(addImage(image.trim()));
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductStart(product));
    dispatch(clearProduct());
  };

  return (
    <Container>
      <h1 className="text-center my-4">Add Product</h1>
      <Row className="g-4">
        <Col>
          <Card>
            <Form
              className="d-flex flex-column align-items-center m-4"
              onSubmit={handleSubmit}
            >
              <Form.Group className="w-100 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter product name..."
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="w-100 mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter product price..."
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="w-100 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter product description..."
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="w-100 mb-3">
                <Form.Select
                  aria-label="Default select example"
                  name="categoryId"
                  value={product.categoryId}
                  onChange={handleChange}
                >
                  <option>Open this select menu</option>
                  {category.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Row className="g-2">
                {product.images.map((img, index) => (
                  <Card.Img
                    key={index}
                    src={img}
                    alt="image"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                ))}
              </Row>
              <Form.Group className="w-100 mt-3">
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter image URL and press Enter..."
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onKeyDown={handleImageKeyDown}
                />
              </Form.Group>
              <Button className="w-50 my-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
