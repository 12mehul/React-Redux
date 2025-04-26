import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useFetch } from "../customHook/useFetch";
import { useParams } from "react-router-dom";
import {
  fetchSingleProductStart,
  updateImage,
  updateProductChange,
  updateProductStart,
} from "../redux/slice/productSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: category } = useFetch("categories");
  const { product } = useSelector((state) => state.products);
  const [image, setImage] = useState("");
  console.log(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    switch (name) {
      case "price":
        parsedValue = Number(value);
        break;
      case "category":
        const selectedCategory = category.find(
          (cat) => cat.id === Number(value)
        );
        if (selectedCategory) {
          parsedValue = selectedCategory;
        }
        break;
      default:
        break;
    }
    dispatch(updateProductChange({ name, value: parsedValue }));
  };

  const handleImageKeyDown = (e) => {
    if (e.key === "Enter" && image.trim()) {
      e.preventDefault();
      dispatch(updateImage(image.trim()));
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductStart(id, product));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProductStart(id));
    }
  }, [id, dispatch]);

  return (
    <Container>
      <h1 className="text-center my-4">Edit Product</h1>
      <Card className="w-75 mx-auto">
        {product && (
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
                name="category"
                value={product.category?.id}
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
        )}
      </Card>
    </Container>
  );
};

export default EditProduct;
