import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const trending = products.filter((product) => product.bestseller).slice(0, 4);

  return (
    <>
      <Header />
      <main className="bg-ivory text-cocoa">
        <section className="hero-shell">
          <div className="hero-content">
            <span className="eyebrow">Premium beauty & lifestyle essentials</span>
            <h1>Luxury beauty from Bangladesh, curated for everyday radiance.</h1>
            <p>
              Discover premium skincare, cosmetics, watches, and accessories designed for women who want
              effortless beauty and elevated style.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="primary-button">
                Shop now
              </Link>
              <Link href="/about" className="secondary-button">
                Explore brand
              </Link>
            </div>
            <div className="trust-row">
              <div><strong>20k+</strong><span>Happy customers</span></div>
              <div><strong>1.4k</strong><span>5-star reviews</span></div>
              <div><strong>48h</strong><span>Fast delivery</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card product-highlight">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
                alt="Beauty product set"
                width={540}
                height={640}
                className="hero-image"
              />
              <div className="mini-badge">
                <Sparkles size={16} />
                New collection
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">Shop by category</span>
            <h2>Curated for beauty, glow, and statement style</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link key={category.name} href="/shop" className="category-card">
                <div className="icon-box">
                  <category.icon size={26} />
                </div>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.caption}</p>
                </div>
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </section>

        <section className="section-wrap alt-bg">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Trending now</span>
              <h2>Best sellers for glowing confidence</h2>
            </div>
            <Link href="/shop" className="text-link">View all products</Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-media">
                  <Image src={product.image} alt={product.name} width={450} height={520} />
                  <span className="product-badge">{product.badge}</span>
                </div>
                <div className="product-body">
                  <p className="brand-name">{product.brand}</p>
                  <h3>{product.name}</h3>
                  <div className="rating-line">
                    <Star size={15} fill="currentColor" /> {product.rating} <span>({product.reviewCount})</span>
                  </div>
                  <div className="price-line">
                    <span className="current-price">৳{product.price.toLocaleString('en-BD')}</span>
                    <span className="old-price">৳{product.compareAtPrice.toLocaleString('en-BD')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div>
            <span className="eyebrow light">Limited time offer</span>
            <h2>Beauty bundles up to 35% off</h2>
          </div>
          <Link href="/shop" className="primary-button light">Shop the offer</Link>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">New arrivals</span>
            <h2>Fresh finds and luxury staples</h2>
          </div>
          <div className="product-grid">
            {trending.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-media">
                  <Image src={product.image} alt={product.name} width={450} height={520} />
                  <span className="product-badge subtle">{product.category}</span>
                </div>
                <div className="product-body">
                  <p className="brand-name">{product.brand}</p>
                  <h3>{product.name}</h3>
                  <div className="rating-line">
                    <Star size={15} fill="currentColor" /> {product.rating}
                  </div>
                  <div className="price-line">
                    <span className="current-price">৳{product.price.toLocaleString('en-BD')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap alt-bg">
          <div className="section-heading center-heading">
            <span className="eyebrow">Why customers choose us</span>
            <h2>The premium shopping experience you deserve</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-box">
              <Truck size={26} />
              <h3>Fast islandwide delivery</h3>
              <p>Courier support across Dhaka and Bangladesh with clear tracking.</p>
            </div>
            <div className="feature-box">
              <ShieldCheck size={26} />
              <h3>Verified product sources</h3>
              <p>We clearly label demo-market stock references and seller validation status.</p>
            </div>
            <div className="feature-box">
              <Gift size={26} />
              <h3>Exclusive offers</h3>
              <p>Seasonal bundles, coupon codes, and gifting ideas for beauty lovers.</p>
            </div>
          </div>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">Loved by customers</span>
            <h2>Real feedback from beauty lovers</h2>
          </div>
          <div className="review-grid">
            {[
              'The packaging feels premium and the serum works beautifully on my skin. Delivery was fast and smooth.',
              'I love the minimalist luxury aesthetic. It feels like a premium Bangladeshi beauty brand.',
              'Great watch collection for women. The finish and quality are impressive for the price.'
            ].map((review, index) => (
              <article key={index} className="review-card">
                <div className="rating-line review-stars">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p>“{review}”</p>
                <strong>Customer {index + 1}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div>
            <span className="eyebrow">Stay inspired</span>
            <h2>Subscribe for beauty drops, launch alerts, and member-only offers</h2>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit" className="primary-button light">Join</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
