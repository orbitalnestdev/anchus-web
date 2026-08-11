import React from 'react';
import '../styles/Lookbook.css';

export default function Lookbook() {
  const catalogUrl = "https://anchus.com.ar/mayorista/zonaprivada.php";

  return (
    <section className="lookbook-section" id="lookbook">
      <div className="container">
        {/* Header Row */}
        <div className="lookbook-header-row">
          <h2 className="lookbook-title">LOOKBOOK</h2>
          <a 
            href={catalogUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-lookbook-outline"
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>

        {/* 3 Column Gallery Grid */}
        <div className="lookbook-gallery-grid">
          {/* Left Column - Large Vertical Card (67.png: Boy in Green Sweatshirt) */}
          <div className="lookbook-col-left">
            <div className="lookbook-card card-large">
              <img 
                src="/assets/lookbook/67.png" 
                alt="Anchus Lookbook - Nenes" 
                className="lookbook-img" 
              />
            </div>
          </div>

          {/* Middle Column - 2 Stacked Cards (64.png & 68.png) */}
          <div className="lookbook-col-mid">
            <div className="lookbook-card card-half">
              <img 
                src="/assets/lookbook/64.png" 
                alt="Anchus Lookbook - Bebés" 
                className="lookbook-img" 
              />
            </div>
            <div className="lookbook-card card-half">
              <img 
                src="/assets/lookbook/68.png" 
                alt="Anchus Lookbook - Nenas" 
                className="lookbook-img" 
              />
            </div>
          </div>

          {/* Right Column - 2 Stacked Cards (65.png: Baby in Basket & 66.png: Colegial) */}
          <div className="lookbook-col-right">
            <div className="lookbook-card card-half">
              <img 
                src="/assets/lookbook/65.png" 
                alt="Anchus Lookbook - Recién Nacido" 
                className="lookbook-img" 
              />
            </div>
            <div className="lookbook-card card-half">
              <img 
                src="/assets/lookbook/66.png" 
                alt="Anchus Lookbook - Colegial" 
                className="lookbook-img" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
