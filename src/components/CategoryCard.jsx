import React from 'react';

export default function CategoryCard({ title, imageBase, altText }) {
  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <picture>
          <source 
            type="image/avif" 
            srcSet={`${imageBase}_350.avif 350w, ${imageBase}.avif 550w`}
            sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 20vw"
          />
          <source 
            type="image/webp" 
            srcSet={`${imageBase}_350.webp 350w, ${imageBase}.webp 550w`}
            sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 20vw"
          />
          <img 
            src={`${imageBase}.png`} 
            alt={altText || title} 
            width="550"
            height="733"
            loading="lazy"
            decoding="async"
            className="category-image" 
          />
        </picture>
      </div>
      <div className="category-label-banner">
        <span className="category-card-title">{title}</span>
      </div>
    </div>
  );
}
