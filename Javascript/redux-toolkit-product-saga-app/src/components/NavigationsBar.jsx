import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationsBar = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="mx-auto fs-5">
          <Nav.Link href="/">Products</Nav.Link>
          <Nav.Link href="/add-product">Add Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationsBar;
