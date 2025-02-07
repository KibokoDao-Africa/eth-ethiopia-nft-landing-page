import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Break from './components/Break';

function HomePage() {
  return (
    <div>
      <Hero id="hero" />
      <Break />
      <Footer />
    </div>
  );
}

export default HomePage;
