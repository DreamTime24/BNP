import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Create account</span>
        <h1>Start your beauty routine</h1>
        <p>Join Luna Atelier to save favorites, manage orders, and enjoy faster checkout.</p>
      </div>

      <div className="auth-grid">
        <div className="form-card">
          <form>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your full name" />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="primary-button" style={{ width: '100%' }}>Create account</button>
          </form>
        </div>

        <aside className="side-panel">
          <span className="eyebrow">Account benefits</span>
          <h2 style={{ marginTop: '0.8rem' }}>Built for repeat customers</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', display: 'grid', gap: '0.6rem', color: '#2f2624' }}>
            <li>• Save wishlist items</li>
            <li>• Track orders and delivery status</li>
            <li>• Manage shipping addresses</li>
            <li>• Access exclusive offers</li>
          </ul>
          <p style={{ marginTop: '1.2rem' }}>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </aside>
      </div>
    </main>
  );
}
