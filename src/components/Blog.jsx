import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo.lazy';

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#041737] text-white">
      <Header className="mb-2" />
      <main>
        <div className="container mx-auto px-4">
          <AppleCardsCarouselDemo />
        </div>
      </main>
      <Footer className="mt-0" />
    </div>
  );
}
