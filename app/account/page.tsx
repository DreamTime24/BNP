export default function AccountPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">My account</span>
        <h1>Welcome, Nusrat</h1>
        <p>Manage profile, orders, addresses, product wishlist, and account settings.</p>
      </div>

      <div className="account-shell">
        <aside className="side-nav">
          <a href="#overview">Overview</a>
          <a href="#orders">Orders</a>
          <a href="#wishlist">Wishlist</a>
          <a href="#addresses">Addresses</a>
          <a href="#settings">Settings</a>
        </aside>

        <section>
          <div className="dashboard-grid">
            <div className="metric-card">
              <h3>Orders</h3>
              <strong>06</strong>
            </div>
            <div className="metric-card">
              <h3>Wishlist</h3>
              <strong>12</strong>
            </div>
            <div className="metric-card">
              <h3>Saved</h3>
              <strong>৳8,400</strong>
            </div>
          </div>

          <div className="summary-card" style={{ marginTop: '1rem' }}>
            <h3>Recent orders</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Order</th><th>Status</th><th>Total</th></tr>
                </thead>
                <tbody>
                  <tr><td>#LUA-1204</td><td>Processing</td><td>৳2,790</td></tr>
                  <tr><td>#LUA-1182</td><td>Delivered</td><td>৳1,490</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
