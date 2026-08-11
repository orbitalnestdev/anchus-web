import React from 'react';

export default function CategoryCard({ title, imageSrc, altText }) {
  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <img src={imageSrc} alt={altText || title} className="category-image" />
      </div>
      <div className="category-label-banner">
        <span className="category-card-title">{title}</span>
      </div>
    </div>
  );
}
