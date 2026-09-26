import Link from 'next/link';

export default function LoginPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Account access</span>
        <h1>Welcome back</h1>
        <p>Sign in to manage orders, wishlist items, and beauty recommendations.</p>
      </div>

      <div className="auth-grid">
        <div className="form-card">
          <form>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" />
            </div>
            <button type="submit" className="primary-button" style={{ width: '100%' }}>Sign in</button>
          </form>
        </div>

        <aside className="side-panel">
          <span className="eyebrow">Quick access</span>
          <h2 style={{ marginTop: '0.8rem' }}>Continue with Google</h2>
          <p style={{ color: '#665c5a', lineHeight: 1.7 }}>Google sign-in is prepared with server-side verification and env-based client ID configuration.</p>
          <button type="button" className="secondary-button" style={{ marginTop: '1rem' }}>
            Continue with Google
          </button>
          <p style={{ marginTop: '1.2rem', color: '#665c5a' }}>
            Need an account? <Link href="/register">Create one</Link>
          </p>
        </aside>
      </div>
    </main>
  );
}
