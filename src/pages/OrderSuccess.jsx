import { Link, useParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import { formatPrice, onImgError } from '../data/products';

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export default function OrderSuccess() {
  const { orderId } = useParams();
  const { orders } = useShop();
  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return (
      <div className="container empty-state">
        <h2>Order not found</h2>
        <Link to="/" className="btn btn-primary">Go to Home</Link>
      </div>
    );
  }

  const { customer } = order;

  return (
    <div className="container page">
      <div className="success-box">
        <FiCheckCircle className="success-icon" />
        <h1>Your order has been placed successfully!</h1>
        <p className="muted">Thank you for shopping with DigitalHub.</p>
      </div>

      <div className="order-details">
        <div className="order-meta">
          <div><span>Order ID</span><strong>{order.id}</strong></div>
          <div><span>Customer</span><strong>{customer.name}</strong></div>
          <div><span>Payment</span><strong>{order.paymentMethod}</strong></div>
          <div><span>Estimated Delivery</span><strong>{fmtDate(order.estimatedDelivery)}</strong></div>
        </div>

        <h3>Delivery Address</h3>
        <p>{customer.address}, {customer.city}, {customer.state} - {customer.pincode}<br />Phone: {customer.phone}</p>

        <h3>Ordered Products</h3>
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.image} alt={item.name} onError={onImgError} />
            <div><strong>{item.name}</strong><p className="muted">Qty: {item.qty} • {item.color}</p></div>
            <span>{formatPrice(item.price * item.qty)}</span>
          </div>
        ))}

        <div className="summary-row"><span>Delivery Charge</span><span>{order.deliveryCharge === 0 ? 'FREE' : formatPrice(order.deliveryCharge)}</span></div>
        <div className="summary-row total"><span>Total Amount</span><span>{formatPrice(order.total)}</span></div>
      </div>

      <div className="center">
        <Link to="/products" className="btn btn-primary btn-lg">Continue Shopping</Link>
      </div>
    </div>
  );
}
