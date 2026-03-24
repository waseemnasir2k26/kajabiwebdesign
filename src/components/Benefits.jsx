import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 8 C24 8 32 16 32 24 C32 32 24 40 24 40 C24 40 16 32 16 24 C16 16 24 8 24 8Z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
    title: 'Nervous System Regulation',
    description: 'Recalibrate your autonomic nervous system through targeted breathing patterns that shift you from fight-or-flight into deep rest and restoration.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="24,4 44,24 24,44 4,24" />
        <polygon points="24,12 36,24 24,36 12,24" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
    title: 'Emotional Release',
    description: 'Access and release stored trauma and emotional blockages held in the body. Breathwork creates a safe container for profound somatic healing.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="20" />
        <circle cx="24" cy="24" r="12" />
        <line x1="24" y1="4" x2="24" y2="44" />
        <line x1="4" y1="24" x2="44" y2="24" />
        <line x1="10" y1="10" x2="38" y2="38" />
        <line x1="38" y1="10" x2="10" y2="38" />
      </svg>
    ),
    title: 'Spiritual Awakening',
    description: 'Experience expanded states of consciousness and deep connection to your inner wisdom through the intersection of breath, geometry, and sound.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M8 40 C8 28 16 20 24 20 C32 20 40 28 40 40" />
        <circle cx="24" cy="12" r="8" />
        <path d="M16 36 L32 36" />
      </svg>
    ),
    title: 'Physical Vitality',
    description: 'Oxygenate every cell in your body, boost your immune response, and unlock profound physical energy that carries through your daily life.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="20" />
        <path d="M12 24 C12 24 18 16 24 16 C30 16 36 24 36 24 C36 24 30 32 24 32 C18 32 12 24 12 24Z" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
    title: 'Clarity & Intuition',
    description: 'Quiet the mental noise and access deep states of clarity. Many participants report heightened intuition and creative downloads during sessions.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="20" />
        <circle cx="16" cy="24" r="8" />
        <circle cx="32" cy="24" r="8" />
        <circle cx="24" cy="16" r="8" />
      </svg>
    ),
    title: 'Community Connection',
    description: 'Join a global community of seekers and healers. Our events create lasting bonds forged through shared vulnerability and collective transformation.',
  },
]

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <div className="benefits__header">
          <span className="section-label">The Transformation</span>
          <h2 className="section-title benefits__title">
            What Awaits <em>You</em>
          </h2>
          <p className="benefits__intro">
            Every session is designed to create lasting transformation across body, mind, and spirit.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-card__icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
