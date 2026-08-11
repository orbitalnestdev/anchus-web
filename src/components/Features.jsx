import React from 'react';
import '../styles/Features.css';

export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: 'FABRICACIÓN PROPIA',
      description: 'Diseñamos y producimos cada prenda. Control de calidad y reposición sin intermediarios.'
    },
    {
      id: 2,
      title: 'CURVA COMPLETA',
      description: 'Talles desde recién nacido hasta colegial, con curva armada para que no te falte nada en el local.'
    },
    {
      id: 3,
      title: 'ASESORAMIENTO',
      description: 'Te acompañamos en la selección de la temporada según tu punto de venta y tu público.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresList.map((item) => (
            <div key={item.id} className="feature-item">
              <h3 className="feature-title">{item.title}</h3>
              <div className="feature-underline"></div>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
