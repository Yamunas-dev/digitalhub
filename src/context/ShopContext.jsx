import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { products } from '../data/products';

const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

// Small helper hook: state that is saved in localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useLocalStorage('dh_cart', []); // [{ id, qty, color }]
  const [favorites, setFavorites] = useLocalStorage('dh_favorites', []); // [id, id, ...]
  const [orders, setOrders] = useLocalStorage('dh_orders', []);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, key: Date.now() });
  }, []);
  const hideToast = useCallback(() => setToast(null), []);

  // ----- Cart -----
  const addToCart = (product, qty = 1, color) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + qty } : item));
      }
      return [...prev, { id: product.id, qty, color: color || product.colors[0] }];
    });
    showToast(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart', 'info');
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: Math.min(qty, 10) } : item)));
  };

  const clearCart = () => setCart([]);

  // Full product info + quantity for each cart line
  const cartItems = cart
    .map((item) => ({ ...products.find((p) => p.id === item.id), ...item }))
    .filter((item) => item.name);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCharge = subtotal === 0 || subtotal >= 10000 ? 0 : 99; // free delivery above Rs. 10,000
  const total = subtotal + deliveryCharge;

  // ----- Favorites -----
  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (product) => {
    if (favorites.includes(product.id)) {
      setFavorites((prev) => prev.filter((id) => id !== product.id));
      showToast('Removed from favorites', 'info');
    } else {
      setFavorites((prev) => [...prev, product.id]);
      showToast('Added to favorites');
    }
  };

  // ----- Orders (demo only, no real payment) -----
  const placeOrder = (customer, paymentMethod) => {
    const delivery = new Date();
    delivery.setDate(delivery.getDate() + 5);

    const order = {
      id: 'DH' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10),
      customer,
      paymentMethod,
      items: cartItems.map((i) => ({ id: i.id, name: i.name, image: i.image, price: i.price, qty: i.qty, color: i.color })),
      subtotal,
      deliveryCharge,
      total,
      placedOn: new Date().toISOString(),
      estimatedDelivery: delivery.toISOString(),
    };

    setOrders((prev) => [order, ...prev]);
    clearCart();
    return order.id;
  };

  const value = {
    products, cart, cartItems, cartCount, subtotal, deliveryCharge, total,
    addToCart, removeFromCart, updateQty, clearCart,
    favorites, isFavorite, toggleFavorite,
    orders, placeOrder,
    toast, showToast, hideToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
