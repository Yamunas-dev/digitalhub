import { Link } from 'react-router-dom';
import { FiCpu } from 'react-icons/fi';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-icon"><FiCpu /></span>
      <span className="logo-text">
        <strong>Digital<span>Hub</span></strong>
        <small>Smart Technology. Better Living.</small>
      </span>
    </Link>
  );
}
