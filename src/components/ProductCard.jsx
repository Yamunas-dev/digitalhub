import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { formatPrice, getDiscount, onImgError } from '../data/products';
import Rating from './Rating';

export default function ProductCard({ product, onRemoveFavorite }) {
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const navigate = useNavigate();
  const fav = isFavorite(product.id);

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/checkout');
  };

  return (
    <article className="product-card">
      <button
        className={`fav-btn ${fav ? 'active' : ''}`}
        onClick={() => toggleFavorite(product)}
        aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
      >
        {fav ? <FaHeart /> : <FaRegHeart />}
      </button>
      <span className="discount-tag">{getDiscount(product)}% OFF</span>

      <Link to={`/product/${product.id}`} className="card-img">
        <img src={product.image} alt={product.name} loading="lazy" onError={onImgError} />
      </Link>

      <div className="card-body">
        <span className="brand">{product.brand}</span>
        <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <p className="short">{product.short}</p>
        <Rating value={product.rating} reviews={product.reviews} />
        <div className="price-row">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="old-price">{formatPrice(product.originalPrice)}</span>
        </div>
        <div className="card-actions">
          <button className="btn btn-outline" onClick={() => addToCart(product, 1)}>
            <FiShoppingCart /> Add to Cart
          </button>
          <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </article>
  );
}
