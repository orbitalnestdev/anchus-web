import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5491123402383&text&type=phone_number&app_absent=0";
  const catalogUrl = "https://anchus.com.ar/mayorista/zonaprivada.php";

  return (
    <>
      {/* Top Green Accent Bar */}
      <div className="top-accent-bar"></div>

      <header className="site-header">
        <div className="container header-container">
          {/* Logo Image */}
          <a href="#" className="site-logo-link">
            <picture>
              <source type="image/avif" srcSet="/assets/logo.avif" />
              <source type="image/webp" srcSet="/assets/logo.webp" />
              <img 
                src="/assets/logo.png" 
                alt="Anchus Trip of Joy" 
                width="160"
                height="47"
                decoding="async"
                className="site-logo-img" 
              />
            </picture>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <a href="#nosotros" className="nav-link">NOSOTROS</a>
            <a href="#locales" className="nav-link">LOCALES</a>
            <a href="#lookbook" className="nav-link">LOOKBOOK</a>
            <a href="#prensa" className="nav-link">PRENSA</a>
            <a href="#contacto" className="nav-link">CONTACTO</a>
            <a 
              href="https://tiendaanchus.com.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link"
            >
              TIENDA MINORISTA
            </a>
          </nav>

          {/* Header Action / CTA */}
          <div className="header-actions">
            <div className="header-cta-group">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-header-cta"
              >
                QUIERO SER CLIENTE
              </a>
              <a 
                href={catalogUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="header-catalog-link"
              >
                INGRESÁ AL CATÁLOGO
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-content">
            <nav className="mobile-nav">
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>NOSOTROS</a>
              <a href="#locales" onClick={() => setMobileMenuOpen(false)}>LOCALES</a>
              <a href="#lookbook" onClick={() => setMobileMenuOpen(false)}>LOOKBOOK</a>
              <a href="#prensa" onClick={() => setMobileMenuOpen(false)}>PRENSA</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>CONTACTO</a>
              <a 
                href="https://tiendaanchus.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                TIENDA MINORISTA
              </a>
            </nav>
            <div className="mobile-cta-wrapper">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-header-cta w-full text-center" 
                onClick={() => setMobileMenuOpen(false)}
              >
                QUIERO SER CLIENTE
              </a>
              <a 
                href={catalogUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-catalog-link text-center mt-2 block" 
                onClick={() => setMobileMenuOpen(false)}
              >
                INGRESÁ AL CATÁLOGO
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
