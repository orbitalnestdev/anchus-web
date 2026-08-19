import React from 'react';

export default function CategoryCard({ title, imageBase, altText }) {
  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <picture>
          <source 
            type="image/avif" 
            srcSet={`${imageBase}_350.avif 350w, ${imageBase}.avif 550w`}
            sizes="(max-width: 576px) 160px, (max-width: 992px) 250px, 300px"
          />
          <source 
            type="image/webp" 
            srcSet={`${imageBase}_350.webp 350w, ${imageBase}.webp 550w`}
            sizes="(max-width: 576px) 160px, (max-width: 992px) 250px, 300px"
          />
          <img 
            src={`${imageBase}.png`} 
            alt={altText || title} 
            width="350"
            height="466"
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
