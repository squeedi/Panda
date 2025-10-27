import React, { useState } from 'react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Закрываем меню после клика
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Определяем какой логотип показывать в зависимости от страницы
  const logoSrc = currentPage === 'home' 
    ? '/assets/logo_mob_white.png' 
    : '/assets/logo_mob_black.png';

  return (
    <div className={`header-bg ${currentPage !== 'home' ? 'no-background' : ''}`}>
      <header className="header">
        <div className="logo" onClick={() => handleNavigation('home')}>
          <img src={logoSrc} alt="Логотип" />
        </div>
        
        {/* Бургер-меню кнопка */}
        <button className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
            className={currentPage === 'about' ? 'active' : ''}
          >
            О нас
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}
            className={currentPage === 'products' ? 'active' : ''}
          >
            Продукция
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('contacts'); }}
            className={currentPage === 'contacts' ? 'active' : ''}
          >
            Контакты
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('favorites'); }}
            className={`heart ${currentPage === 'favorites' ? 'active' : ''}`}
          >
            ❤
            <span className="badge">0</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
