// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, image, price }) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>${price}</Card.Text>
      <Button variant="primary">Buy Now</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
