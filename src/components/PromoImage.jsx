import './PromoImage.css';

export default function PromoImage({ src }) {
  return (
    <div className="promo">
      <img src={src} alt="Promo" />
    </div>
  );
}
