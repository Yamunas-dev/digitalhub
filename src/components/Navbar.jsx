import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import Logo from './Logo';
import SearchBar from './SearchBar';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Mobiles', to: '/products?category=Mobiles' },
  { label: 'Laptops', to: '/products?category=Laptops' },
  { label: 'Smart Watches', to: '/products?category=Smart%20Watches' },
  { label: 'TVs', to: '/products?category=TVs' },
  { label: 'Accessories', to: '/products?category=Accessories' },
  { label: 'Favorites', to: '/favorites', icon: FiHeart },
  { label: 'Cart', to: '/cart', icon: FiShoppingCart },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { cartCount, favorites } = useShop();

  const isActive = (to) => location.pathname + location.search === to || (to === '/' && location.pathname === '/' );
  const close = () => setOpen(false);

  const badge = (label) => {
    if (label === 'Cart' && cartCount > 0) return <span className="badge">{cartCount}</span>;
    if (label === 'Favorites' && favorites.length > 0) return <span className="badge">{favorites.length}</span>;
    return null;
  };

  return (
    <header className="navbar">
      <div className="container navbar-top">
        <Logo />
        <div className="navbar-search"><SearchBar onSearch={close} /></div>
        <div className="navbar-actions">
          <Link to="/favorites" className="icon-btn" aria-label="Favorites"><FiHeart />{badge('Favorites')}</Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart"><FiShoppingCart />{badge('Cart')}</Link>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <nav className={`nav-links-wrap ${open ? 'open' : ''}`}>
        <div className="container nav-links">
          {links.map(({ label, to, icon: Icon }) => (
            <Link key={label} to={to} onClick={close} className={isActive(to) ? 'active' : ''}>
              {Icon && <Icon />} {label} {badge(label)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
