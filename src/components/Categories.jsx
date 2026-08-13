import React from 'react';
import CategoryCard from './CategoryCard';
import '../styles/Categories.css';

export default function Categories() {
  const catalogUrl = "https://anchus.com.ar/mayorista/zonaprivada.php";

  const categoriesData = [
    { id: 1, title: 'RECIÉN NACIDO', imageBase: '/assets/categorias/59' },
    { id: 2, title: 'BEBÉS', imageBase: '/assets/categorias/60' },
    { id: 3, title: 'NENAS', imageBase: '/assets/categorias/61' },
    { id: 4, title: 'NENES', imageBase: '/assets/categorias/62' },
    { id: 5, title: 'COLEGIAL', imageBase: '/assets/categorias/63' },
  ];

  return (
    <>
      <section className="categories-section" id="catalogo">
        <div className="container">
          {/* Header Row */}
          <div className="categories-header-row">
            <h2 className="categories-title">LA COLECCIÓN</h2>
            <a 
              href={catalogUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-categories-outline"
            >
              VER CATÁLOGO COMPLETO
            </a>
          </div>

          {/* 5 Cards Grid */}
          <div className="categories-grid">
            {categoriesData.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                imageBase={cat.imageBase}
                altText={cat.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Green Accent Divider Bar */}
      <div className="categories-bottom-accent"></div>
    </>
  );
}
