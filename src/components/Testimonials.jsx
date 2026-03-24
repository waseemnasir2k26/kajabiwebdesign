import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: "The Soul Voyage completely rewired my nervous system. After years of chronic anxiety, I finally found the stillness I didn't know was possible. This isn't just breathwork — it's a portal to your deepest self.",
    name: 'Sophia L.',
    title: 'Yoga Teacher & Wellness Coach',
    location: 'Los Angeles, CA',
  },
  {
    quote: "I've attended ceremonies around the world, and nothing has come close to the depth of healing I experienced here. The combination of sacred geometry, sound, and breathwork creates something truly transcendent.",
    name: 'Marcus J.',
    title: 'Sound Healer',
    location: 'London, UK',
  },
  {
    quote: "As a therapist, I was skeptical. After one session, I understood why my clients kept talking about it. The somatic release was profound — I released decades of stored tension in ninety minutes.",
    name: 'Dr. Amara R.',
    title: 'Clinical Psychologist',
    location: 'Toronto, CA',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__accent"></div>
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Sacred Stories</span>
          <h2 className="section-title testimonials__title">
            Voices of <em>Transformation</em>
          </h2>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__quote-mark">&ldquo;</div>
          <blockquote className="testimonials__quote">
            {testimonials[active].quote}
          </blockquote>
          <div className="testimonials__author">
            <span className="testimonials__name">{testimonials[active].name}</span>
            <span className="testimonials__role">{testimonials[active].title}</span>
            <span className="testimonials__location">{testimonials[active].location}</span>
          </div>
        </div>

        <div className="testimonials__nav">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`testimonials__dot ${idx === active ? 'active' : ''}`}
              onClick={() => setActive(idx)}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
