import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SeasonIntro from './components/SeasonIntro';
import HowToBuy from './components/HowToBuy';
import Categories from './components/Categories';
import Features from './components/Features';
import Lookbook from './components/Lookbook';
import Stores from './components/Stores';
import WholesaleBanner from './components/WholesaleBanner';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  return (
    <div className="anchus-app">
      <Header />
      <main>
        <Hero />
        <SeasonIntro />
        <HowToBuy />
        <Categories />
        <Features />
        <Lookbook />
        <Stores />
        <WholesaleBanner />
      </main>
      <Footer />
    </div>
  );
}
