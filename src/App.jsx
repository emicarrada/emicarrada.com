import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import Hero from './components/Hero';
import QuienSoy from './components/QuienSoy';
import StackCards from './components/StackCards';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LoaderOneDemo from './components/ui/loader-one-demo';
import LoQueHago from './components/LoQueHago';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Asegurar que esté en la parte superior desde el inicio
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Wait for loader animation to complete (1 second draw + 1 second reverse)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds total for one complete animation

    return () => clearTimeout(timer);
  }, []);

  // Cuando el contenido aparezca, asegurar que esté arriba
  useEffect(() => {
    if (!isLoading) {
      // Forzar scroll a la parte superior de manera inmediata
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // También intentar hacer scroll al elemento home
      setTimeout(() => {
        const homeElement = document.getElementById('home');
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoaderOneDemo />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.15
          }}
          style={{ 
            willChange: 'transform, opacity',
            transform: 'translateZ(0)' 
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <QuienSoy />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <LoQueHago />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <StackCards />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
