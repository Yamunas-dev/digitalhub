import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Logo from './Logo';

export const SocialIcons = () => (
  <div className="social">
    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
    <a href="#" aria-label="Instagram"><FaInstagram /></a>
    <a href="#" aria-label="Twitter"><FaTwitter /></a>
    <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
    <a href="#" aria-label="YouTube"><FaYoutube /></a>
  </div>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-desc">
            DigitalHub is a modern electronics store offering smartphones, laptops, smart watches,
            televisions and accessories at competitive prices.
          </p>
          <SocialIcons />
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <h4>Categories</h4>
          <Link to="/products?category=Mobiles">Mobiles</Link>
          <Link to="/products?category=Laptops">Laptops</Link>
          <Link to="/products?category=Smart%20Watches">Smart Watches</Link>
          <Link to="/products?category=TVs">TVs</Link>
          <Link to="/products?category=Accessories">Accessories</Link>
        </div>
        <div>
          <h4>Customer Support</h4>
          <Link to="/contact">Help Center</Link>
          <Link to="/contact">Shipping Info</Link>
          <Link to="/contact">Returns & Refunds</Link>
          <Link to="/contact">Warranty</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="footer-line"><FiMapPin /> 12, Tech Park Road, Chennai, Tamil Nadu 600001</p>
          <p className="footer-line"><FiPhone /> +91 98765 43210</p>
          <p className="footer-line"><FiMail /> support@digitalhub.com</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 DigitalHub. All Rights Reserved.</div>
    </footer>
  );
}
