import './InstagramSection.css';

export default function InstagramSection() {
  const instagramImages = [
    './assets/inst1.jpg',
    './assets/inst2.jpg',
    './assets/inst3.jpg',
  ];

  return (
    <section id="instagram" className="section instagram">
      <div className="section-header">
        <h2>НАШ ИНСТАГРАМ</h2>
        <div className="line"></div>
      </div>
      <div className="instagram-grid">
        {instagramImages.map((image, index) => (
          <div key={index} className="instagram-item">
            <img 
              src={image} 
              alt={`Instagram post ${index + 1}`}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.target.style.display = 'none';
              }}
              onLoad={() => {
                console.log(`Successfully loaded image: ${image}`);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
