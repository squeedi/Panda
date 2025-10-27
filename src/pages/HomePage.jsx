// HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstagramSection from '../components/InstagramSection';
import CollectionSection from '../components/CollectionSection';
import './HomePage.css';

export default function HomePage({ currentPage, setCurrentPage }) {
  return (
    <div className="home-page">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="product-section">
        <div className="product-container">
          <div className="product-image">
            <img 
              src="/assets/PANDA.jpg" 
              alt="Товар"
            />
          </div>
          <div className="product-details">
            <div className="product-info">
              <h2>Название</h2>
              <div className="sizes">
                <h3>Размеры</h3>
                <div className="size-options">
                  <button className="size-btn">S</button>
                  <button className="size-btn">M</button>
                  <button className="size-btn">L</button>
                </div>
              </div>
              <div className="description">
                <h3>Описание</h3>
                <p>описание</p>
              </div>
            </div>
            <button className="favorite-btn">❤</button>
          </div>
        </div>
      </div>
      <CollectionSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}