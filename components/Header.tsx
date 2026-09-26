import Link from 'next/link';
import { Search, ShoppingBag, UserRound, Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="navbar">
      <div className="topbar">
        <div className="site-shell">
          <span>Free shipping over ৳3,500 in Bangladesh</span>
          <span>New arrivals every week</span>
        </div>
      </div>
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Luna Atelier home">
          <span className="brand-mark">L</span>
          <span>Luna Atelier</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="header-actions">
          <label className="search-box" aria-label="Search products">
            <Search size={16} />
            <input type="search" placeholder="Search products" />
          </label>
          <Link href="/account" className="icon-button" aria-label="Account">
            <UserRound size={17} />
          </Link>
          <Link href="/wishlist" className="icon-button" aria-label="Wishlist">
            <Heart size={17} />
          </Link>
          <Link href="/cart" className="icon-button" aria-label="Cart">
            <ShoppingBag size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
