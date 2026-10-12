import { Link, useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { formatPrice, onImgError } from '../data/products';

export default function Cart() {
  const { cartItems, updateQty, removeFromCart, subtotal, deliveryCharge, total } = useShop();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container empty-state">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container page">
      <h1 className="page-title">Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} onError={onImgError} />
              </Link>
              <div className="cart-info">
                <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                <p className="muted">{item.brand} • {item.color}</p>
                <p className="price">{formatPrice(item.price)}</p>
              </div>
              <div className="cart-controls">
                <div className="qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease"><FiMinus /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase"><FiPlus /></button>
                </div>
                <strong>{formatPrice(item.price * item.qty)}</strong>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}><FiTrash2 /> Remove</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row">
            <span>Delivery Charge</span>
            <span>{deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}</span>
          </div>
          <div className="summary-row total"><span>Final Total</span><span>{formatPrice(total)}</span></div>
          <p className="muted small">Free delivery on orders above ₹10,000.</p>
          <button className="btn btn-primary btn-block btn-lg" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}
