import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { formatPrice, getDiscount, onImgError } from '../data/products';

export default function Favorites() {
  const { products, favorites, toggleFavorite, addToCart } = useShop();
  const favProducts = products.filter((p) => favorites.includes(p.id));

  if (favProducts.length === 0) {
    return (
      <div className="container empty-state">
        <FaHeart className="empty-icon" />
        <h2>No favorites yet</h2>
        <p>Tap the heart icon on any product to save it here.</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container page">
      <h1 className="page-title">My Favorites ({favProducts.length})</h1>
      <div className="product-grid">
        {favProducts.map((p) => (
          <article className="product-card" key={p.id}>
            <span className="discount-tag">{getDiscount(p)}% OFF</span>
            <Link to={`/product/${p.id}`} className="card-img">
              <img src={p.image} alt={p.name} onError={onImgError} />
            </Link>
            <div className="card-body">
              <span className="brand">{p.brand}</span>
              <h3><Link to={`/product/${p.id}`}>{p.name}</Link></h3>
              <div className="price-row">
                <span className="price">{formatPrice(p.price)}</span>
                <span className="old-price">{formatPrice(p.originalPrice)}</span>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={() => addToCart(p, 1)}><FiShoppingCart /> Add to Cart</button>
                <button className="btn btn-outline" onClick={() => toggleFavorite(p)}><FiTrash2 /> Remove</button>
              </div>
              <Link to={`/product/${p.id}`} className="link-more">View details →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
