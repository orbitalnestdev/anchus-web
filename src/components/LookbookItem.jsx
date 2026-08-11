import React from 'react';

export default function LookbookItem({ imageSrc, altText, className }) {
  return (
    <div className={`lookbook-item ${className || ''}`}>
      <img src={imageSrc} alt={altText || 'Lookbook Anchus'} className="lookbook-image" />
    </div>
  );
}
