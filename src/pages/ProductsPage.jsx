import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductsPage.css';

export default function ProductsPage({ currentPage, setCurrentPage }) {
  const products = [
    { id: 1, name: 'Платье "Элегант"', size: 'S, M, L', image: '/assets/PANDA.jpg' },
    { id: 2, name: 'Блузка "Классик"', size: 'S, M, L', image: '/assets/PANDA.png' },
    { id: 3, name: 'Юбка "Модерн"', size: 'S, M, L', image: '/assets/background.jpg' },
    { id: 4, name: 'Платье "Романтик"', size: 'S, M, L', image: '/assets/NUNNM5CM0UjMx8FM2EzMx0SMyMjMtEGZuFGcqcGchMTYwMCEyNDAwIWN1dCFubw==.jpg' },
    { id: 5, name: 'Топ "Спорт"', size: 'S, M, L', image: '/assets/PANDA.jpg' },
    { id: 6, name: 'Брюки "Офис"', size: 'S, M, L', image: '/assets/PANDA.png' }
  ];

  const totalPages = 2; // Пример

  return (
    <div className="products-page">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="products-section">
        <div className="products-header">
          <h1>ПРОДУКЦИЯ</h1>
          <h2>Женская одежда</h2>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.size}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Назад
          </button>
          <span>Страница {currentPage}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Вперед
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
