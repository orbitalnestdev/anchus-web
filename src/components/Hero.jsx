import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll offset calculation for dynamic image framing
  const objectPosY = Math.min(50, 18 + scrollY * 0.08);
  const scaleVal = Math.max(1, 1.05 - scrollY * 0.0003);

  return (
    <section className="hero-section">
      <div className="hero-banner-wrapper">
        <img 
          src="/assets/home/hero_full.png" 
          alt="Anchus Trip of Joy - Primavera Verano 2027" 
          className="hero-banner-img"
          style={{
            objectPosition: `center ${objectPosY}%`,
            transform: `scale(${scaleVal})`
          }}
        />
        
        {/* Overlay Button matching exact mockup placement */}
        <div className="hero-button-overlay">
          <a href="#catalogo" className="btn-hero-products">
            VER PRODUCTOS
          </a>
        </div>
      </div>
    </section>
  );
}
