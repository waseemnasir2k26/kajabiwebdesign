import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient"></div>
        <div className="hero__sacred-geo">
          <svg viewBox="0 0 400 400" className="hero__mandala">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="20"
                x2="200"
                y2="380"
                stroke="currentColor"
                strokeWidth="0.2"
                transform={`rotate(${i * 30} 200 200)`}
              />
            ))}
            <polygon
              points="200,40 340,280 60,280"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
            <polygon
              points="200,360 60,120 340,120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="hero__content container">
        <span className="hero__label section-label">Sacred Breathwork Experience</span>
        <h1 className="hero__title section-title">
          Awaken the<br />
          <em>Sacred Within</em>
        </h1>
        <p className="hero__subtitle">
          Transformative breathwork and sacred geometry healing at the intersection
          of wellness, spirituality, and immersive sound.
        </p>
        <div className="hero__actions">
          <a href="#begin" className="btn btn-primary">Begin Your Voyage</a>
          <a href="#offerings" className="btn btn-outline">Explore Offerings</a>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line"></div>
          <span>Scroll to discover</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
