import './CTA.css'

function CTA() {
  return (
    <section id="begin" className="cta">
      <div className="cta__bg">
        <svg viewBox="0 0 400 400" className="cta__geo">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <polygon points="200,10 200,390" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.2" />
          <polygon points="200,30 350,280 50,280" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <polygon points="200,370 50,120 350,120" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="container cta__content">
        <span className="section-label">Your Journey Begins</span>
        <h2 className="section-title cta__title">
          The Breath That<br />
          <em>Changes Everything</em>
        </h2>
        <p className="cta__text">
          Step into a space where healing is sacred, transformation is inevitable,
          and every breath brings you closer to who you truly are.
        </p>
        <div className="cta__actions">
          <a href="#" className="btn btn-primary">Book Your First Session</a>
          <a href="#" className="btn btn-outline">Download Free Breathwork Guide</a>
        </div>
        <p className="cta__note">
          Limited spots available for private sessions. Join 2,500+ souls who have already begun their voyage.
        </p>
      </div>
    </section>
  )
}

export default CTA
