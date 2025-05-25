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

function ProductCard({ title, image, description, buttonText }) {
  const [clicks, setClicks] = useState(0); // State to keep track of button clicks

  function click() {
    // Handle button click event
    console.log("exploring: " + title);
    console.log("Button clicked!", clicks + 1);
    setClicks(clicks + 1);
  }

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={click}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
