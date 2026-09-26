import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <main className="product-detail-shell">
      <div className="page-header" style={{ paddingTop: '1rem' }}>
        <span className="eyebrow">{product.category}</span>
        <h1>{product.name}</h1>
      </div>

      <div className="product-detail">
        <div className="gallery-grid">
          {product.gallery.map((image, index) => (
            <Image key={index} src={image} alt={`${product.name} view ${index + 1}`} width={900} height={1100} />
          ))}
        </div>

        <aside className="detail-card">
          <p className="brand-name">{product.brand}</p>
          <div className="rating-line">
            <Star size={16} fill="currentColor" /> {product.rating} <span>({product.reviewCount} reviews)</span>
          </div>

          <div className="meta-row">
            <div>
              <div className="price-line">
                <span className="current-price">৳{product.price.toLocaleString('en-BD')}</span>
                <span className="old-price">৳{product.compareAtPrice.toLocaleString('en-BD')}</span>
              </div>
            </div>
            <span className="pill">{product.stock > 0 ? `${product.stock} in stock` : 'Sold out'}</span>
          </div>

          <div className="badge-row">
            {product.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>

          <p style={{ margin: '1rem 0', color: '#665c5a', lineHeight: 1.8 }}>{product.description}</p>

          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem' }}>
            <button className="primary-button" style={{ flex: 1 }}>
              <ShoppingBag size={16} style={{ marginRight: '0.5rem' }} /> Add to cart
            </button>
            <button className="secondary-button">Wishlist</button>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2f2624' }}><Truck size={18} /> Free Dhaka delivery over ৳3,500</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2f2624' }}><ShieldCheck size={18} /> Secure checkout and order tracking</div>
          </div>
        </aside>
      </div>

      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">You may also like</span>
            <h2>Related products</h2>
          </div>
        </div>

        <div className="product-grid">
          {related.map((item) => (
            <article key={item.id} className="product-card">
              <div className="product-media">
                <img src={item.image} alt={item.name} />
                <span className="product-badge">{item.badge}</span>
              </div>
              <div className="product-body">
                <p className="brand-name">{item.brand}</p>
                <Link href={`/shop/${item.slug}`}><h3>{item.name}</h3></Link>
                <div className="price-line">
                  <span className="current-price">৳{item.price.toLocaleString('en-BD')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
