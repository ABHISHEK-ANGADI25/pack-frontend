// src/App.js
import React from 'react';
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </>
  );
}

export default App;
