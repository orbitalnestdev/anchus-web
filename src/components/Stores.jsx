import React from 'react';
import '../styles/Stores.css';

export default function Stores() {
  const storesData = [
    { id: 1, name: 'WILDE', address: 'LAS FLORES 99' },
    { id: 2, name: 'LANÚS', address: 'ITUZAINGÓ 1515' },
    { id: 3, name: 'QUILMES', address: 'ALSINA 233' },
    { id: 4, name: 'LOMAS DE ZAMORA', address: 'ESPAÑA 142' },
  ];

  return (
    <section className="stores-section" id="locales">
      <div className="container">
        {/* Header Row */}
        <div className="stores-header-row">
          <h2 className="stores-title">VENÍ A VISITARNOS</h2>
          <a href="#locales" className="btn-stores-outline">
            COMO LLEGAR
          </a>
        </div>

        {/* 4 Store Location Cards */}
        <div className="stores-grid">
          {storesData.map((store) => (
            <div key={store.id} className="store-card">
              <h3 className="store-name">{store.name}</h3>
              <p className="store-address">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
