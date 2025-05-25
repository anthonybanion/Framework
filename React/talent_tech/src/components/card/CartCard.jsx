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
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>{products.description}</Card.Text>
          <Card.Text>
            <strong>${products.price}</strong>
          </Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CartCard;
