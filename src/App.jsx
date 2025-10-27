import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'favorites':
        return <FavoritesPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'contacts':
        return <ContactsPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}
