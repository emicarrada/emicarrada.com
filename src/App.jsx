import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import StackCards from './components/StackCards';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LoaderOneDemo from './components/ui/loader-one-demo';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for loader animation to complete (1 second draw + 1 second reverse)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds total for one complete animation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderOneDemo />;
  }

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
