import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Where Quality & Clarity Matters
        </h1>
        <p className="hero-subtitle">
          Watch Telugu movies in HD, exclusively available on SBOMMA.COM
        </p>
        <p className="hero-description">
          Developed for smartphones, tablets and PCs.
        </p>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
