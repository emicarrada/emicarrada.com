import React from 'react';
import './styles/globals.css';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import StackCards from './components/StackCards';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <QuienSoy />
      <StackCards />
      <Footer />
    </>
  );
}
