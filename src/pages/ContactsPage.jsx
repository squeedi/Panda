import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactsPage.css';

export default function ContactsPage({ currentPage, setCurrentPage }) {
  const stores = [
    {
      name: 'ТЦ "Титан"',
      address: 'просп. Дзержинского, 104Б этаж 2',
      phones: ['+375 29 770-63-54', '+375 29 599-99-38'],
      hours: 'Ежедневно, 10:00-21:00',
      image: '/assets/титан.jpg'
    },
    {
      name: 'ТРЦ «Palazzo»',
      address: 'ул. Тимирязева, 74А ТРЦ Palazzo, этаж 1',
      phones: ['+375 24 910-28-31', '+375 29 599-99-38', '+375 29 649-95-95', '+375 29 849-95-95'],
      hours: 'Ежедневно, 10:00-22:00',
      image: '/assets/Палац1.webp'
    },
    {
      name: 'ТЦ "Момо"',
      address: 'Партизанский просп., 150А этаж 2',
      phones: ['Магазин точки PANDA +375 29 565-80-34', 'Фирма PANDA (Белтелеком) +375 24 910-28-31', 'Фирма PANDA (Velcom) +375 29 649-95-95', 'Фирма PANDA (MTC) +375 29 849-95-95'],
      hours: 'Ежедневно, 10:00-22:00',
      image: '/assets/Момо1.webp'
    }
  ];

  return (
    <div className="contacts-page">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="contacts-section">
        <div className="contacts-container">
          <h1>КОНТАКТЫ</h1>
          <div className="contacts-content">
            <div className="contact-blocks">
              {stores.map((store, index) => (
                <div key={index} className={`contact-block ${index === 2 ? 'large' : ''}`}>
                  <div className="store-image">
                    <img src={store.image} alt={store.name} />
                  </div>
                  <div className="store-info">
                    <h3>{store.name}</h3>
                    <p className="address">{store.address}</p>
                    <div className="phones">
                      {store.phones.map((phone, phoneIndex) => (
                        <p key={phoneIndex} className="phone">{phone}</p>
                      ))}
                    </div>
                    <p className="hours">{store.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
