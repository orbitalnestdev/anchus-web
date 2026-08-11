import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5491123402383&text&type=phone_number&app_absent=0";
  const catalogUrl = "https://anchus.com.ar/mayorista/zonaprivada.php";
  const retailStoreUrl = "https://tiendaanchus.com.ar/";
  const instagramUrl = "https://www.instagram.com/anchuskids/";
  const facebookUrl = "https://www.facebook.com/AnchusPaginaOficial/";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">ANCHUS</h3>
            <p className="footer-brand-text">Indumentaria infantil.</p>
            <p className="footer-brand-text">Venta mayorista y</p>
            <p className="footer-brand-text">minorista en Argentina.</p>
          </div>

          {/* Column 2: Wholesale Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">MAYORISTA</h4>
            <ul className="footer-links">
              <li><a href={catalogUrl} target="_blank" rel="noopener noreferrer">CATÁLOGO</a></li>
              <li><a href="#nosotros">CÓMO COMPRAR</a></li>
              <li><a href="#lookbook">LOOKBOOK</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">QUIERO SER CLIENTE</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">ANCHUS</h4>
            <ul className="footer-links">
              <li><a href="#nosotros">NOSOTROS</a></li>
              <li><a href="#locales">LOCALES</a></li>
              <li><a href="#prensa">PRENSA</a></li>
              <li><a href={retailStoreUrl} target="_blank" rel="noopener noreferrer">TIENDA MINORISTA</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACTO</h4>
            <ul className="footer-links contact-links">
              <li><a href="mailto:info@anchus.com.ar">INFO@ANCHUS.COM.AR</a></li>
              <li><a href="tel:01120550734">(011) 2055-0734</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WHATSAPP MAYORISTA</a></li>
              <li className="social-link">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                {' · '}
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">FACEBOOK</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
