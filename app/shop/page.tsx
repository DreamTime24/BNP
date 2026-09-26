import { products } from '@/data/products';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Shop the collection</span>
        <h1>Beauty, skincare, and statement timepieces</h1>
        <p>Curated products for a confident daily routine and elevated essentials.</p>
      </div>

      <div className="shop-layout">
        <aside className="filter-card">
          <h3>Filters</h3>

          <div className="field-group">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option>All</option>
              <option>Skincare</option>
              <option>Cosmetics</option>
              <option>Women&apos;s Watches</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="brand">Brand</label>
            <select id="brand">
              <option>All brands</option>
              <option>L&apos;Oréal Paris</option>
              <option>Maybelline</option>
              <option>Casio</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="price">Price range</label>
            <select id="price">
              <option>Any price</option>
              <option>Under ৳1,000</option>
              <option>৳1,000 - ৳2,500</option>
              <option>৳2,500 - ৳4,000</option>
            </select>
          </div>

          <button className="secondary-button" style={{ width: '100%' }}>Clear all</button>
        </aside>

        <section>
          <div className="section-heading" style={{ marginBottom: '1rem' }}>
            <div>
              <span className="eyebrow">Featured picks</span>
              <h2>Premium collection</h2>
            </div>
            <span style={{ color: '#665c5a' }}>{products.length} items</span>
          </div>

          <div className="product-list-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-media">
                  <img src={product.image} alt={product.name} />
                  <span className="product-badge">{product.badge}</span>
                </div>
                <div className="product-body">
                  <p className="brand-name">{product.brand}</p>
                  <Link href={`/shop/${product.slug}`}><h3>{product.name}</h3></Link>
                  <div className="rating-line">
                    <span>★</span> {product.rating} <span>({product.reviewCount})</span>
                  </div>
                  <div className="price-line">
                    <span className="current-price">৳{product.price.toLocaleString('en-BD')}</span>
                    <span className="old-price">৳{product.compareAtPrice.toLocaleString('en-BD')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
