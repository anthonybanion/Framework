import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./cartCard.css";

function CartCard({ products }) {
  const buttonText = "Explore";
  return (
    <Card className="d-flex flex-row justify-content-between align-items-center cart_card">
      <div className="cart_img">
        <Card.Img src={products.image} className="cart_img" />
      </div>
      <div className="cart_info">
        <Card.Body>
          <Card.Title className="h5 text-primary fw-bold text-uppercase">
            {products.name}
          </Card.Title>
          <Card.Text className="text-muted small mb-2">
            {products.description}
          </Card.Text>
          <Card.Text className="text-muted small mb-2 fw-bold">
            ${products.price}
          </Card.Text>
          <Card.Text className="text-muted small mb-2 fw-bold">
            Quantity: {products.quantity}
          </Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CartCard;
