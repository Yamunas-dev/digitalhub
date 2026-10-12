import { Link } from 'react-router-dom';
import { FiShield, FiTag, FiTruck, FiLock, FiRefreshCw } from 'react-icons/fi';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';

const features = [
  { icon: FiShield, title: 'Genuine Products', text: '100% authentic products with brand warranty.' },
  { icon: FiTag, title: 'Best Prices', text: 'Competitive prices and exciting offers every day.' },
  { icon: FiTruck, title: 'Fast Delivery', text: 'Quick and safe delivery to your doorstep.' },
  { icon: FiLock, title: 'Secure Payment', text: 'Multiple safe and trusted payment options.' },
  { icon: FiRefreshCw, title: 'Easy Returns', text: 'Hassle-free 7-day return policy.' },
];

export default function Home() {
  const { products } = useShop();
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <>
      <Hero />

      <section className="section container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {categories.map((c) => (
            <CategoryCard key={c} name={c} count={products.filter((p) => p.category === c).length} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose DigitalHub?</h2>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <div className="feature-card" key={title}>
                <span className="feature-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products" className="link-more">View all →</Link>
        </div>
        <ProductGrid products={featured} />
      </section>
    </>
  );
}
