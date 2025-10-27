import './ProductSection.css';

export default function ProductSection({ products }) {
  return (
    <section id="products" className="section products">
      <div className="section-header">
        <h2>НОВИНКИ СЕЗОНА</h2>
        <div className="line"></div>
      </div>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
