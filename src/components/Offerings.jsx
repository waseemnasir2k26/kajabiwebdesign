import './Offerings.css'

const offerings = [
  {
    number: '01',
    title: 'Breathwork Journeys',
    subtitle: 'In-Person & Online',
    description: 'Immersive 90-minute breathwork sessions guided by sacred geometry patterns, ambient soundscapes, and intuitive facilitation. Experience deep somatic release and nervous system recalibration.',
    features: ['Somatic Release', 'Nervous System Reset', 'Guided Meditation'],
  },
  {
    number: '02',
    title: 'Sacred Geometry Healing',
    subtitle: 'Private Sessions',
    description: 'One-on-one sessions combining breathwork with sacred geometry visualization. Each session is uniquely crafted to address your specific healing journey and energetic blueprint.',
    features: ['Personalized Protocol', 'Energy Alignment', 'Integration Support'],
  },
  {
    number: '03',
    title: 'Immersive Sound Events',
    subtitle: 'Live Experiences',
    description: 'Multi-sensory healing events merging live music, breathwork, and sacred geometry projections. A cinematic journey through sound and breath in curated luxury venues.',
    features: ['Live Musicians', 'Visual Projections', 'Community Healing'],
  },
  {
    number: '04',
    title: 'Online Programs',
    subtitle: 'Self-Paced & Live',
    description: 'Access transformative breathwork practices from anywhere in the world. Structured programs with weekly live sessions, guided recordings, and a supportive community.',
    features: ['Weekly Live Sessions', 'Guided Library', 'Private Community'],
  },
]

function Offerings() {
  return (
    <section id="offerings" className="offerings">
      <div className="container">
        <div className="offerings__header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title offerings__title">
            Curated Healing<br />
            <em>Experiences</em>
          </h2>
        </div>

        <div className="offerings__grid">
          {offerings.map((offering) => (
            <div key={offering.number} className="offering-card">
              <span className="offering-card__number">{offering.number}</span>
              <div className="offering-card__content">
                <span className="offering-card__subtitle">{offering.subtitle}</span>
                <h3 className="offering-card__title">{offering.title}</h3>
                <p className="offering-card__desc">{offering.description}</p>
                <div className="offering-card__features">
                  {offering.features.map((feature) => (
                    <span key={feature} className="offering-card__feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="offering-card__line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
