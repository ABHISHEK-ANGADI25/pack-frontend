// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container className="text-center">
      <p>© {new Date().getFullYear()} Pack.Org. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
