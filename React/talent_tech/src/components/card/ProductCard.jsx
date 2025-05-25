// ==========================================
//
// This component displays a product card
// with an image, title, description, and a button.
//
// File: ProductCard.jsx
// Author: Anthony Bañon
// Created: 2025-05-25
// Last Updated: 2025-05-25
// ==========================================

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./productCard.css";

function ProductCard({ products }) {
  const [clicks, setClicks] = useState(0); // State to keep track of button clicks
  const buttonText = "Explore";
  function click() {
    // Handle button click event
    console.log("exploring: " + products.name);
    console.log("Button clicked!", clicks + 1);
    setClicks(clicks + 1);
  }

  return (
    <Card className="product_card">
      <Card.Img variant="top" src={products.image} className="product_img" />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>{products.description}</Card.Text>
        <Card.Text>
          <strong>${products.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={click}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
