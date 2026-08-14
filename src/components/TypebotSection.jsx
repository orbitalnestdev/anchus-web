import React from 'react';
import '../styles/TypebotSection.css';

export default function TypebotSection() {
  return (
    <section className="typebot-section" id="contacto">
      <div className="container">
        <div className="typebot-header">
          <h2 className="typebot-title">CONTACTATE CON UN ASESOR</h2>
          <p className="typebot-subtitle">
            Completá nuestro asistente virtual para recibir atención personalizada, listas de precios y catálogo mayorista.
          </p>
        </div>

        <div className="typebot-iframe-wrapper">
          <iframe
            src="https://tbv.orbitalnest.net/anchus-lead-bot-tq12r26"
            style={{ border: 'none', width: '100%', height: '600px', borderRadius: '12px' }}
            title="Anchus Lead Bot"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
