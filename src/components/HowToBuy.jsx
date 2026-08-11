import React from 'react';
import '../styles/HowToBuy.css';

export default function HowToBuy() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5491123402383&text&type=phone_number&app_absent=0";
  const existingClientUrl = "https://anchus.com.ar/mayorista/zonaprivada.php";

  return (
    <section className="how-to-buy-section" id="nosotros">
      <div className="container">
        {/* Header Row */}
        <div className="how-header-row">
          <h2 className="how-title">CÓMO COMPRAR POR MAYOR</h2>
          <div className="how-header-info">
            <p>Atendemos comercios de todo el país.</p>
            <p>Mínimo de compra 6 unidades por artículo.</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="how-divider"></div>

        {/* 3 Step Columns */}
        <div className="steps-grid">
          {/* Step 01 */}
          <div className="step-card">
            <span className="step-number">01</span>
            <h3 className="step-title">REGISTRATE</h3>
            <p className="step-description">
              Contanos de tu local y te damos de alta como cliente mayorista.
            </p>
          </div>

          {/* Step 02 */}
          <div className="step-card">
            <span className="step-number">02</span>
            <h3 className="step-title">ARMÁ TU COMPRA</h3>
            <p className="step-description">
              Accedés al catálogo con precios mayoristas, curva de talles y disponibilidad en tiempo real.
            </p>
          </div>

          {/* Step 03 */}
          <div className="step-card">
            <span className="step-number">03</span>
            <h3 className="step-title">RECIBILA</h3>
            <p className="step-description">
              Coordinamos envío a todo el país o retiro por depósito.
            </p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="how-cta-row">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-how-primary"
          >
            QUIERO SER CLIENTE
          </a>
          <a 
            href={existingClientUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-how-existing"
          >
            ¿YA SOS CLIENTE? <span className="underline-text">INGRESÁ AL CATÁLOGO</span>
          </a>
        </div>
      </div>
    </section>
  );
}
