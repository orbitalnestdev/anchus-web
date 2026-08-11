import React from 'react';
import '../styles/SeasonIntro.css';

export default function SeasonIntro() {
  return (
    <section className="season-intro-section">
      <div className="container">
        <div className="season-intro-content">
          <span className="season-tagline">PRESENTAMOS</span>
          <h2 className="season-title">PRIMAVERA VERANO 2027</h2>
          <p className="season-line-1">Recién nacido, bebés, nenas, nenes y colegial.</p>
          <p className="season-line-2">
            La nueva temporada de Anchus, disponible para comercios de todo el país.
          </p>
        </div>
      </div>
    </section>
  );
}
