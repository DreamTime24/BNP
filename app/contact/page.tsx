export default function ContactPage() {
  return (
    <main>
      <div className="page-header">
        <span className="eyebrow">Contact</span>
        <h1>Let’s talk beauty support</h1>
      </div>
      <div className="content-panel">
        <div className="form-card" style={{ maxWidth: '760px' }}>
          <div className="field-group">
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" type="text" placeholder="Your full name" />
          </div>
          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell us how we can help" />
          </div>
          <button className="primary-button" type="button">Send message</button>
        </div>
      </div>
    </main>
  );
}
