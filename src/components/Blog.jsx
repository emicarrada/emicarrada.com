import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo';

export default function Blog() {
  return (
    <>
      <Header />
      <main className="bg-[#041737] text-white">
        <div className="container mx-auto px-4">
          <AppleCardsCarouselDemo />
        </div>
      </main>
      <Footer />
    </>
  );
}
