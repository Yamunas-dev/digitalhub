import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
  const { products } = useShop();
  const [params, setParams] = useSearchParams();

  const category = params.get('category') || 'All';
  const search = (params.get('search') || '').trim().toLowerCase();

  const highestPrice = Math.max(...products.map((p) => p.price));
  const [brand, setBrand] = useState('All');
  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState('featured');

  const brands = ['All', ...new Set(products.map((p) => p.brand))];

  const changeCategory = (value) => {
    const next = new URLSearchParams(params);
    if (value === 'All') next.delete('category');
    else next.set('category', value);
    setParams(next);
  };

  const resetFilters = () => {
    setBrand('All');
    setMaxPrice(highestPrice);
    setMinRating(0);
    setSort('featured');
    setParams({});
  };

  const results = useMemo(() => {
    const list = products.filter((p) => {
      const matchesSearch =
        !search || [p.name, p.brand, p.category].some((text) => text.toLowerCase().includes(search));
      const matchesCategory = category === 'All' || p.category === category;
      const matchesBrand = brand === 'All' || p.brand === brand;
      return matchesSearch && matchesCategory && matchesBrand && p.price <= maxPrice && p.rating >= minRating;
    });

    if (sort === 'low') list.sort((a, b) => a.price - b.price);
    else if (sort === 'high') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') list.sort((a, b) => new Date(b.addedOn) - new Date(a.addedOn));
    return list;
  }, [products, search, category, brand, maxPrice, minRating, sort]);

  const title = search ? `Search results for "${params.get('search')}"` : category === 'All' ? 'All Products' : category;

  return (
    <div className="container page">
      <h1 className="page-title">{title}</h1>
      <p className="muted">{results.length} product(s) found</p>

      <div className="filters">
        <label>
          Category
          <select value={category} onChange={(e) => changeCategory(e.target.value)}>
            <option value="All">All</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>

        <label>
          Brand
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>

        <label>
          Rating
          <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value={0}>All ratings</option>
            <option value={4.5}>4.5 & above</option>
            <option value={4}>4.0 & above</option>
            <option value={3}>3.0 & above</option>
          </select>
        </label>

        <label>
          Max Price: ₹{maxPrice.toLocaleString('en-IN')}
          <input
            type="range" min="1000" max={highestPrice} step="1000"
            value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>

        <label>
          Sort by
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </label>

        <button className="btn btn-outline" onClick={resetFilters}>Reset</button>
      </div>

      <ProductGrid products={results} />
    </div>
  );
}
