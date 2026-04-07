import React from 'react';
import './index.css';
import { Navbar, Band, HowItWorks, Comparison, Architecture, UseCases, Quote, FooterCTA, Footer } from './components/SharedLayout';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { OriginalPaper } from './components/OriginalPaper';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="app">
      <Analytics />
      <Navbar />
      <Hero />
      <Band />
      <HowItWorks />
      <Comparison />
      <InteractiveDemo />
      <Architecture />
      <OriginalPaper />
      <UseCases />
      <Quote />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default App;
