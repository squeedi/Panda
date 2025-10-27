import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './FavoritesPage.css';

export default function FavoritesPage({ currentPage, setCurrentPage }) {
  return (
    <div className="favorites-page">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="favorites-section">
        <div className="favorites-container">
          <div className="favorites-header">
            <h1>ИЗБРАННОЕ </h1>
            <div className="product-image">
              <img src="/assets/PANDA.jpg" alt="Товар" />
            </div>
          </div>
          <div className="favorites-details">
            <div className="product-info">
              <div className="info-row">
                <label>Название</label>
                <input type="text" placeholder="Название товара" />
              </div>
              <div className="info-row">
                <label>Размер</label>
                <input type="text" placeholder="Размер" />
              </div>
              <div className="info-row">
                <label>Количество</label>
                <input type="number" placeholder="1" />
              </div>
              <div className="info-row">
                <label>Цена</label>
                <input type="text" placeholder="Цена" />
              </div>
              <div className="info-row">
                <label>Описание</label>
                <select>
                  <option>Выберите описание</option>
                  <option>Описание 1</option>
                  <option>Описание 2</option>
                </select>
              </div>
            </div>
            <button className="email-btn">Написать на почту</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
