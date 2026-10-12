import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { formatPrice } from '../data/products';

const emptyForm = { name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '' };

export default function Checkout() {
  const { cartItems, subtotal, deliveryCharge, total, placeOrder } = useShop();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [payment, setPayment] = useState('Cash on Delivery');
  const [upiId, setUpiId] = useState('');
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState({});

  if (cartItems.length === 0) {
    return (
      <div className="container empty-state">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state.trim()) e.state = 'State is required';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode';
    if (payment === 'UPI' && !/^[\w.-]+@[\w]+$/.test(upiId)) e.upi = 'Enter a valid UPI ID (e.g. name@bank)';
    if (payment === 'Credit/Debit Card') {
      if (!/^\d{16}$/.test(card.number.replace(/\s/g, ''))) e.cardNumber = 'Enter a 16-digit card number';
      if (!/^\d{2}\/\d{2}$/.test(card.expiry)) e.expiry = 'Use MM/YY format';
      if (!/^\d{3}$/.test(card.cvv)) e.cvv = 'Enter a 3-digit CVV';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: demo only. Card / UPI details are NOT saved anywhere.
    const orderId = placeOrder(form, payment);
    navigate(`/order-success/${orderId}`);
  };

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={handleChange} />
      {errors[name] && <small className="error">{errors[name]}</small>}
    </div>
  );

  return (
    <div className="container page">
      <h1 className="page-title">Checkout</h1>
      <form className="cart-layout" onSubmit={handleSubmit} noValidate>
        <div className="checkout-form">
          <h3>Delivery Details</h3>
          <div className="form-grid">
            {field('name', 'Full Name', 'text', 'John Doe')}
            {field('email', 'Email', 'email', 'you@example.com')}
            {field('phone', 'Phone Number', 'tel', '9876543210')}
            {field('pincode', 'Pincode', 'text', '600001')}
            <div className="full">{field('address', 'Address', 'text', 'House no, street, area')}</div>
            {field('city', 'City', 'text', 'Chennai')}
            {field('state', 'State', 'text', 'Tamil Nadu')}
          </div>

          <h3>Payment Method</h3>
          <div className="payment-options">
            {['Cash on Delivery', 'UPI', 'Credit/Debit Card'].map((m) => (
              <label key={m} className={`payment ${payment === m ? 'active' : ''}`}>
                <input type="radio" name="payment" value={m} checked={payment === m} onChange={() => setPayment(m)} />
                {m}
              </label>
            ))}
          </div>

          {payment === 'UPI' && (
            <div className="form-field">
              <label>UPI ID</label>
              <input value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="name@bank" />
              {errors.upi && <small className="error">{errors.upi}</small>}
            </div>
          )}

          {payment === 'Credit/Debit Card' && (
            <div className="form-grid">
              <div className="form-field full">
                <label>Card Number</label>
                <input value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} placeholder="1234 5678 9012 3456" />
                {errors.cardNumber && <small className="error">{errors.cardNumber}</small>}
              </div>
              <div className="form-field">
                <label>Expiry</label>
                <input value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} placeholder="MM/YY" />
                {errors.expiry && <small className="error">{errors.expiry}</small>}
              </div>
              <div className="form-field">
                <label>CVV</label>
                <input type="password" maxLength={3} value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} placeholder="123" />
                {errors.cvv && <small className="error">{errors.cvv}</small>}
              </div>
            </div>
          )}
          <p className="muted small">This is a demo checkout. No real payment is processed.</p>
        </div>

        <aside className="summary">
          <h3>Your Order</h3>
          {cartItems.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>{item.name} × {item.qty}</span>
              <span>{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
          <hr />
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>{deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}</span></div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">Place Order</button>
        </aside>
      </form>
    </div>
  );
}
