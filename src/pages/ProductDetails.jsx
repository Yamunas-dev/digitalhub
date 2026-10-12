import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { formatPrice, getDiscount, onImgError } from '../data/products';
import Rating from '../components/Rating';
import ProductGrid from '../components/ProductGrid';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, isFavorite, toggleFavorite } = useShop();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container empty-state">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to products</Link>
      </div>
    );
  }

  const selectedColor = color || product.colors[0];
  const fav = isFavorite(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, qty, selectedColor);
    navigate('/checkout');
  };

  return (
    <div className="container page">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link> / {product.name}
      </p>

      <div className="details-grid">
        <div className="details-image">
          <img src={product.image} alt={product.name} onError={onImgError} />
        </div>

        <div className="details-info">
          <span className="brand">{product.brand}</span>
          <h1>{product.name}</h1>
          <Rating value={product.rating} reviews={product.reviews} />

          <div className="price-row big">
            <span className="price">{formatPrice(product.price)}</span>
            <span className="old-price">{formatPrice(product.originalPrice)}</span>
            <span className="discount-pill">{getDiscount(product)}% OFF</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="option-block">
            <h4>Available Colors: <span>{selectedColor}</span></h4>
            <div className="chips">
              {product.colors.map((c) => (
                <button key={c} className={`chip ${c === selectedColor ? 'active' : ''}`} onClick={() => setColor(c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="option-block">
            <h4>Quantity</h4>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease"><FiMinus /></button>
              <span>{qty}</span>
              <button onClick={() => setQty(Math.min(10, qty + 1))} aria-label="Increase"><FiPlus /></button>
            </div>
          </div>

          <div className="details-actions">
            <button className="btn btn-outline btn-lg" onClick={() => addToCart(product, qty, selectedColor)}>
              <FiShoppingCart /> Add to Cart
            </button>
            <button className="btn btn-primary btn-lg" onClick={handleBuyNow}>Buy Now</button>
            <button className={`btn btn-lg btn-fav ${fav ? 'active' : ''}`} onClick={() => toggleFavorite(product)}>
              {fav ? <FaHeart /> : <FaRegHeart />} {fav ? 'In Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>

      <section className="specs">
        <h2>Specifications</h2>
        <table>
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}><th>{key}</th><td>{value}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      {related.length > 0 && (
        <section className="section-tight">
          <h2 className="section-title">You may also like</h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
