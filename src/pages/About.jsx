import { FiTarget, FiEye, FiAward, FiSmile } from 'react-icons/fi';
import { onImgError } from '../data/products';

export default function About() {
  return (
    <div className="container page">
      <h1 className="page-title">About DigitalHub</h1>

      <div className="about-grid">
        <div>
          <p className="lead">
            DigitalHub is a modern electronics store that provides smartphones, laptops, smart watches,
            televisions, and accessories at competitive prices. Our goal is to make the latest technology
            easily accessible to everyone with a simple and convenient shopping experience.
          </p>
          <p>
            We work directly with trusted brands so every product you buy is genuine, covered by warranty,
            and delivered quickly and safely.
          </p>
        </div>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
          alt="Electronics"
          onError={onImgError}
        />
      </div>

      <div className="features-grid four">
        <div className="feature-card"><span className="feature-icon"><FiTarget /></span><h3>Our Mission</h3>
          <p>To deliver genuine, high-quality technology at fair prices with excellent service.</p></div>
        <div className="feature-card"><span className="feature-icon"><FiEye /></span><h3>Our Vision</h3>
          <p>To become the most trusted electronics destination for every household.</p></div>
        <div className="feature-card"><span className="feature-icon"><FiAward /></span><h3>Quality</h3>
          <p>Every product is verified and backed by official brand warranty.</p></div>
        <div className="feature-card"><span className="feature-icon"><FiSmile /></span><h3>Customer Satisfaction</h3>
          <p>Friendly support, fast delivery and easy returns keep our customers happy.</p></div>
      </div>

      <section className="section-tight">
        <h2 className="section-title">Why Customers Choose Us</h2>
        <ul className="check-list">
          <li>100% genuine products from top brands</li>
          <li>Best prices with regular offers and discounts</li>
          <li>Fast and reliable delivery across India</li>
          <li>Secure payment options and easy 7-day returns</li>
          <li>Dedicated customer support team</li>
        </ul>
      </section>
    </div>
  );
}
