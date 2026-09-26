export default function CheckoutPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Checkout</span>
        <h1>Complete your order</h1>
        <p>Confirm customer details, shipping, payment, and final review.</p>
      </div>

      <div className="content-panel">
        <div className="form-card" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" defaultValue="Nusrat Ahmed" />
            </div>
            <div className="field-group">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" defaultValue="01711223344" />
            </div>
            <div className="field-group">
              <label htmlFor="address">Delivery address</label>
              <textarea id="address" rows={4} defaultValue="House 12, Road 5, Dhanmondi, Dhaka 1205" />
            </div>
            <div className="field-group">
              <label htmlFor="payment">Payment method</label>
              <select id="payment">
                <option>Cash on delivery</option>
                <option>Online payment</option>
              </select>
            </div>
            <button className="primary-button" type="button">Place order</button>
          </div>
        </div>
      </div>
    </main>
  );
}
