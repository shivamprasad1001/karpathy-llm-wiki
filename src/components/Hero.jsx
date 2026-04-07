import React from 'react';
import { WikiGraph } from './WikiGraph';
import { RevealSection } from './RevealSection';

export const Hero = () => (
  <section className="hero">
    <div className="hero-left">
      <RevealSection className="hero-content">
        <div className="eyebrow">Knowledge Pattern · v1.0</div>
        <h1>Thinking in <em>living</em> wikis.</h1>
        <p className="hero-desc">The "Living Wiki" pattern for AI knowledge management. Maintain complex bodies of knowledge with 0 maintenance overhead — letting the AI do the bookkeeping while you do the thinking.</p>
        <div className="cta-row">
          <a href="#how" className="btn-primary">See the pattern</a>
          <a href="#demo" className="btn-ghost">Interactive Demo</a>
        </div>
      </RevealSection>
    </div>
    <div className="hero-right">
      <WikiGraph />
    </div>
  </section>
);
