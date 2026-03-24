import './Events.css'

const events = [
  {
    date: 'APR 12',
    year: '2026',
    title: 'Full Moon Breathwork Ceremony',
    location: 'Malibu, California',
    type: 'In-Person',
    spots: '8 spots remaining',
  },
  {
    date: 'APR 26',
    year: '2026',
    title: 'Sacred Geometry & Sound Journey',
    location: 'Online — Global Access',
    type: 'Virtual',
    spots: 'Open enrollment',
  },
  {
    date: 'MAY 10',
    year: '2026',
    title: 'The Deep Dive — Weekend Retreat',
    location: 'Tulum, Mexico',
    type: 'Retreat',
    spots: '4 spots remaining',
  },
]

function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="events__header">
          <div>
            <span className="section-label">Upcoming</span>
            <h2 className="section-title events__title">
              Sacred <em>Gatherings</em>
            </h2>
          </div>
          <a href="#begin" className="btn btn-outline events__view-all">View All Events</a>
        </div>

        <div className="events__list">
          {events.map((event, idx) => (
            <div key={idx} className="event-row">
              <div className="event-row__date">
                <span className="event-row__date-text">{event.date}</span>
                <span className="event-row__year">{event.year}</span>
              </div>
              <div className="event-row__info">
                <h3 className="event-row__title">{event.title}</h3>
                <span className="event-row__location">{event.location}</span>
              </div>
              <div className="event-row__meta">
                <span className="event-row__type">{event.type}</span>
                <span className="event-row__spots">{event.spots}</span>
              </div>
              <a href="#begin" className="event-row__cta">
                Reserve
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
