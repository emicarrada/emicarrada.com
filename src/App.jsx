import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import StackCards from './components/StackCards';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';
import Blog from './components/Blog';
import Contact from './components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <QuienSoy />
      <StackCards />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}
