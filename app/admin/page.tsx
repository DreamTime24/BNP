export default function AdminPage() {
  return (
    <main className="admin-panel">
      <div className="page-header" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <span className="eyebrow">Admin</span>
        <h1>Store overview</h1>
        <p>Secure operations dashboard for product, inventory, orders, and customer activity.</p>
      </div>

      <div className="dashboard-grid">
        <div className="metric-card"><h3>Revenue</h3><strong>৳1,48,600</strong></div>
        <div className="metric-card"><h3>Orders</h3><strong>314</strong></div>
        <div className="metric-card"><h3>Pending</h3><strong>28</strong></div>
        <div className="metric-card"><h3>Customers</h3><strong>1,890</strong></div>
        <div className="metric-card"><h3>Low stock</h3><strong>12</strong></div>
        <div className="metric-card"><h3>Returns</h3><strong>03</strong></div>
      </div>

      <div className="summary-card" style={{ marginTop: '1rem' }}>
        <h3>Recent orders</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Order</th><th>Customer</th><th>Status</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr><td>#LUA-1701</td><td>Farhana</td><td>Processing</td><td>৳3,430</td></tr>
              <tr><td>#LUA-1702</td><td>Riya</td><td>Shipped</td><td>৳2,190</td></tr>
              <tr><td>#LUA-1703</td><td>Aisha</td><td>Delivered</td><td>৳1,600</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
