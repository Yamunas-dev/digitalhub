import { Link } from 'react-router-dom';
import { categoryImages, onImgError } from '../data/products';

export default function CategoryCard({ name, count }) {
  return (
    <Link to={`/products?category=${encodeURIComponent(name)}`} className="category-card">
      <img src={categoryImages[name]} alt={name} loading="lazy" onError={onImgError} />
      <div className="category-info">
        <h3>{name}</h3>
        <span>{count} products</span>
      </div>
    </Link>
  );
}
