import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Luna Atelier</h4>
          <p>Bangladesh’s premium beauty and lifestyle boutique for modern women.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link href="/shop">Skincare</Link></li>
            <li><Link href="/shop">Cosmetics</Link></li>
            <li><Link href="/shop">Watches</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4>Customer care</h4>
          <ul>
            <li><Link href="/shipping-policy">Shipping</Link></li>
            <li><Link href="/return-policy">Returns</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <small>© 2026 Luna Atelier. All rights reserved.</small>
    </footer>
  );
}
