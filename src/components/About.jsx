import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                <svg viewBox="0 0 300 300" className="about__flower">
                  <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  {[...Array(6)].map((_, i) => (
                    <circle
                      key={i}
                      cx={150 + 70 * Math.cos((i * Math.PI) / 3)}
                      cy={150 + 70 * Math.sin((i * Math.PI) / 3)}
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>
              </div>
              <div className="about__image-border"></div>
            </div>
          </div>

          <div className="about__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title about__title">
              Where Breath Meets<br />
              <em>Sacred Geometry</em>
            </h2>
            <div className="divider"></div>
            <p className="about__text">
              The Soul Voyage was born from a profound understanding that healing is not linear
              — it is geometric, rhythmic, and deeply personal. We guide you through breathwork
              journeys that unlock the body&apos;s innate wisdom through the language of sacred patterns.
            </p>
            <p className="about__text">
              Our experiences merge ancient breathwork traditions with the vibrational power of
              immersive sound and the mathematical beauty of sacred geometry, creating a container
              for deep nervous system healing and spiritual awakening.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">2,500+</span>
                <span className="about__stat-label">Lives Transformed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">150+</span>
                <span className="about__stat-label">Events Hosted</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">12</span>
                <span className="about__stat-label">Countries Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
