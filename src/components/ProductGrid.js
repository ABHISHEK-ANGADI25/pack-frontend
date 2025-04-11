// src/components/ProductGrid.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const products = [
  { title: 'FiveM Server', price: 25, image: '/images/fivem.jpg' },
  { title: 'Discord Bot', price: 15, image: '/images/discordbot.jpg' },
  { title: 'UI Template', price: 10, image: '/images/uitemplate.jpg' },
];

const ProductGrid = () => (
  <Container id="products" className="py-5">
    <h2 className="text-center mb-4">Our Products</h2>
    <Row>
      {products.map((prod, i) => (
        <Col md={4} key={i} className="mb-4">
          <ProductCard {...prod} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductGrid;
