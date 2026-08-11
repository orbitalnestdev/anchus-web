import React from 'react';
import '../styles/WholesaleBanner.css';

export default function WholesaleBanner() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5491123402383&text&type=phone_number&app_absent=0";

  return (
    <section className="wholesale-banner-section" id="contacto">
      <div className="container">
        <div className="wholesale-banner-content">
          <h2 className="wholesale-banner-title">
            SUMATE A LA RED<br />MAYORISTA ANCHUS
          </h2>
          <p className="wholesale-banner-subtitle">
            Contanos de tu local y armamos tu primera compra juntos.
          </p>
          <div className="wholesale-banner-action">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-wholesale-primary"
            >
              QUIERO SER CLIENTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
