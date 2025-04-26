import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import {
  addImage,
  addProductChange,
  addProductStart,
  clearProduct,
} from "../redux/slice/addProductSlice";
import { useFetch } from "../customHook/useFetch";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { data: category } = useFetch("categories");
  const { product } = useSelector((state) => state.addProduct);
  const [image, setImage] = useState("");

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
    if (!product || Object.keys(product).length === 0) {
      return alert("Please fill all the fields");
    }
    dispatch(addProductStart(product));
    dispatch(clearProduct());
  };

  return (
    <Container>
      <h1 className="text-center my-4">Add Product</h1>
      <Card className="w-75 mx-auto">
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
          <Button
            variant="outline-primary"
            size="lg"
            className="my-3"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddProduct;
