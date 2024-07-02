import React from 'react';
import '../App.css';
import './HeroSection.css';
import Navbar from './navbar';  // Assuming the navbar import is correct

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/valintino.mp4" autoPlay loop playsInline muted className="background-video" />
      <Navbar/>
    </div>
  );
}

export default HeroSection;

