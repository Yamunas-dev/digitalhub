import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Rating({ value, reviews }) {
  const stars = [1, 2, 3, 4, 5].map((n) => {
    if (value >= n) return <FaStar key={n} />;
    if (value >= n - 0.5) return <FaStarHalfAlt key={n} />;
    return <FaRegStar key={n} />;
  });

  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <span className="rating-text">{value.toFixed(1)}{reviews ? ` (${reviews.toLocaleString('en-IN')})` : ''}</span>
    </div>
  );
}
