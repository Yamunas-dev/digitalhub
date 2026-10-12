import { Link } from 'react-router-dom';
import { onImgError } from '../data/products';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="hero-tag">Smart Technology. Better Living.</span>
          <h1>Discover the Latest Technology</h1>
          <p>
            DigitalHub brings you the newest smartphones, laptops, smart watches, TVs and accessories
            from top brands at unbeatable prices, with fast delivery and easy returns.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary btn-lg">Shop Now</Link>
            <Link to="/products?category=Mobiles" className="btn btn-outline btn-lg">Explore Products</Link>
          </div>
          <div className="hero-stats">
            <div><strong>20+</strong><span>Products</span></div>
            <div><strong>5</strong><span>Categories</span></div>
            <div><strong>4.5★</strong><span>Avg Rating</span></div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1000&q=80"
            alt="Latest electronics"
            onError={onImgError}
          />
        </div>
      </div>
    </section>
  );
}
