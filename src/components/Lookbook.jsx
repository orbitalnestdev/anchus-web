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
              <picture>
                <source 
                  type="image/avif" 
                  srcSet="/assets/lookbook/67_600.avif 600w, /assets/lookbook/67_350.avif 350w"
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
                <source 
                  type="image/webp" 
                  srcSet="/assets/lookbook/67_600.webp 600w, /assets/lookbook/67_350.webp 350w"
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
                <img 
                  src="/assets/lookbook/67.png" 
                  alt="Anchus Lookbook - Nenes" 
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="lookbook-img" 
                />
              </picture>
            </div>
          </div>

          {/* Middle Column - 2 Stacked Cards (64.png & 68.png) */}
          <div className="lookbook-col-mid">
            <div className="lookbook-card card-half">
              <picture>
                <source 
                  type="image/avif" 
                  srcSet="/assets/lookbook/64_800.avif 800w, /assets/lookbook/64_450.avif 450w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <source 
                  type="image/webp" 
                  srcSet="/assets/lookbook/64_800.webp 800w, /assets/lookbook/64_450.webp 450w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <img 
                  src="/assets/lookbook/64.png" 
                  alt="Anchus Lookbook - Bebés" 
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="lookbook-img" 
                />
              </picture>
            </div>
            <div className="lookbook-card card-half">
              <picture>
                <source 
                  type="image/avif" 
                  srcSet="/assets/lookbook/68_600.avif 600w, /assets/lookbook/68_350.avif 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <source 
                  type="image/webp" 
                  srcSet="/assets/lookbook/68_600.webp 600w, /assets/lookbook/68_350.webp 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <img 
                  src="/assets/lookbook/68.png" 
                  alt="Anchus Lookbook - Nenas" 
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="lookbook-img" 
                />
              </picture>
            </div>
          </div>

          {/* Right Column - 2 Stacked Cards (65.png: Baby in Basket & 66.png: Colegial) */}
          <div className="lookbook-col-right">
            <div className="lookbook-card card-half">
              <picture>
                <source 
                  type="image/avif" 
                  srcSet="/assets/lookbook/65_600.avif 600w, /assets/lookbook/65_350.avif 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <source 
                  type="image/webp" 
                  srcSet="/assets/lookbook/65_600.webp 600w, /assets/lookbook/65_350.webp 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <img 
                  src="/assets/lookbook/65.png" 
                  alt="Anchus Lookbook - Recién Nacido" 
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="lookbook-img" 
                />
              </picture>
            </div>
            <div className="lookbook-card card-half">
              <picture>
                <source 
                  type="image/avif" 
                  srcSet="/assets/lookbook/66_600.avif 600w, /assets/lookbook/66_350.avif 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <source 
                  type="image/webp" 
                  srcSet="/assets/lookbook/66_600.webp 600w, /assets/lookbook/66_350.webp 350w"
                  sizes="(max-width: 992px) 50vw, 30vw"
                />
                <img 
                  src="/assets/lookbook/66.png" 
                  alt="Anchus Lookbook - Colegial" 
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="lookbook-img" 
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
