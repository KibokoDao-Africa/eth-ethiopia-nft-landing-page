import React from 'react';
import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Why from './components/Why';
// import About from './components/About';
// import Roadmap from './components/Roadmap';
// import Team from './components/Team';
// import Collection from './components/Collection';
// import QnA from './components/QnA';
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
