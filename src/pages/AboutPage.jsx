// AboutPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

export default function AboutPage({ currentPage, setCurrentPage }) {
  const stores = [
    {
      name: 'ТЦ "Титан"',
      address: 'просп. Дзержинского, 104Б этаж 2',
      phones: ['+375 29 770-63-54', '+375 29 599-99-38'],
      hours: 'Ежедневно, 10:00-21:00',
      images: ['../assets/titan1.jpg', '../assets/titan2.jpg', '../assets/titan3.jpg']
    },
    {
      name: 'ТРЦ «Palazzo»',
      address: 'ул. Тимирязева, 74А ТРЦ Palazzo, этаж 1',
      phones: ['+375 24 910-28-31', '+375 29 599-99-38', '+375 29 649-95-95', '+375 29 849-95-95'],
      hours: 'Ежедневно, 10:00-22:00',
      images: ['../assets/palazzo1.jpg', '../assets/palazzo2.jpg', '../assets/palazzo3.jpg']
    },
    {
      name: 'ТЦ "Момо"',
      address: 'Партизанский просп., 150А этаж 2',
      phones: ['Магазин точки PANDA +375 29 565-80-34', 'Фирма PANDA (Белтелеком) +375 24 910-28-31', 'Фирма PANDA (Velcom) +375 29 649-95-95', 'Фирма PANDA (MTC) +375 29 849-95-95'],
      hours: 'Ежедневно, 10:00-22:00',
      images: ['../assets/momo1.jpg', '../assets/momo2.jpg', '../assets/momo3.jpg']
    }
  ];

  return (
    <div className="about-page">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="about-section">
        <div className="about-container">
          {stores.map((store, index) => (
            <div key={index} className="store-section">
              <div className="store-info">
                <h2>{store.name}</h2>
                <p className="address">{store.address}</p>
                <div className="phones">
                  {store.phones.map((phone, phoneIndex) => (
                    <p key={phoneIndex} className="phone">{phone}</p>
                  ))}
                </div>
                <p className="hours">{store.hours}</p>
              </div>
              <div className="store-images">
                {store.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="store-image">
                    <img 
                      src={image} 
                      alt={`${store.name} - фото ${imageIndex + 1}`} 
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}