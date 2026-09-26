export default function CartPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Cart</span>
        <h1>Your bag</h1>
        <p>Keep your selected beauty and watch essentials ready for checkout.</p>
      </div>

      <div className="cart-layout">
        <section className="summary-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ margin: 0 }}>Items</h3>
            <span style={{ color: '#665c5a' }}>2 products</span>
          </div>

          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', border: '1px solid rgba(47,38,36,0.08)', borderRadius: '1rem', padding: '0.9rem' }}>
              <div>
                <strong>Revitalift Serum</strong>
                <div style={{ color: '#665c5a', marginTop: '0.2rem' }}>Qty: 1</div>
              </div>
              <strong>৳1,790</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', border: '1px solid rgba(47,38,36,0.08)', borderRadius: '1rem', padding: '0.9rem' }}>
              <div>
                <strong>Casio Classic Watch</strong>
                <div style={{ color: '#665c5a', marginTop: '0.2rem' }}>Qty: 1</div>
              </div>
              <strong>৳2,790</strong>
            </div>
          </div>
        </section>

        <aside className="summary-card">
          <h3 style={{ marginTop: 0 }}>Order summary</h3>
          <div className="summary-row"><span>Subtotal</span><strong>৳4,580</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>৳120</strong></div>
          <div className="summary-row"><span>Discount</span><strong>-৳300</strong></div>
          <div className="summary-row" style={{ borderTop: '1px solid rgba(47,38,36,0.08)', marginTop: '0.4rem', paddingTop: '0.8rem' }}><span>Total</span><strong>৳4,400</strong></div>
          <button className="primary-button" style={{ width: '100%', marginTop: '1rem' }}>Proceed to checkout</button>
        </aside>
      </div>
    </main>
  );
}
