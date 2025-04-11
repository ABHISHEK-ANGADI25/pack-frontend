// src/components/Hero.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => (
  <div className="bg-dark text-white py-5 text-center">
    <Container>
      <h1 className="display-4">Start Selling Your Digital Products</h1>
      <p className="lead">FiveM servers, Discord bots, UI kits & more.</p>
      <Button variant="primary" size="lg">Browse Products</Button>
    </Container>
  </div>
);

export default Hero;
