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

  const objectPosY = Math.min(50, 18 + scrollY * 0.08);
  const scaleVal = Math.max(1, 1.05 - scrollY * 0.0003);

  return (
    <section className="hero-section">
      <div className="hero-banner-wrapper">
        <picture>
          <source 
            type="image/avif" 
            srcSet="/assets/home/hero_full_1600.avif 1600w, /assets/home/hero_full_1200.avif 1200w, /assets/home/hero_full_800.avif 800w, /assets/home/hero_full_400.avif 400w"
            sizes="100vw"
          />
          <source 
            type="image/webp" 
            srcSet="/assets/home/hero_full_1600.webp 1600w, /assets/home/hero_full_1200.webp 1200w, /assets/home/hero_full_800.webp 800w, /assets/home/hero_full_400.webp 400w"
            sizes="100vw"
          />
          <img 
            src="/assets/home/hero_full.png" 
            alt="Anchus Trip of Joy - Primavera Verano 2027" 
            width="2309"
            height="1043"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
            className="hero-banner-img"
            style={{
              objectPosition: `center ${objectPosY}%`,
              transform: `scale(${scaleVal})`
            }}
          />
        </picture>
        
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
