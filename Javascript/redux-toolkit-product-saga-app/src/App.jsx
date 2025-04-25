import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import NavigationsBar from "./components/NavigationsBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <NavigationsBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
