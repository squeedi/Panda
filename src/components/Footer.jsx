import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>Адреса</p>
          <p>Минск, ТРЦ «Palazzo», ул. Тимирязева, 74А, 1-й этаж, пав. 20</p>
          <p>Минск, ТЦ "Момо", пр-т. Партизанский, 150А, 2 этаж, пав. 76, жёлтый сектор</p>
          <p>Минск, ТЦ "Титан", пр-т. Дзержинского, 104, 2-ой этаж</p>
        </div>
        <div className="footer-right">
          <a href="https://instagram.com" className="social">
            <span></span> Instagram
          </a>
          <a href="https://t.me" className="social">
            <span> </span> Telegram
          </a>
          <a href="https://tiktok.com" className="social">
            <span></span> TikTok
          </a>
          <a href="https://vk.com" className="social">
            <span></span> VK
          </a>
        </div>
      </div>
    </footer>
  );
}
