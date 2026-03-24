import { useState } from 'react'
import './Navbar.css'

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-text">The Soul Voyage</span>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#offerings" onClick={() => setMenuOpen(false)}>Offerings</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Stories</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#begin" className="navbar__cta" onClick={() => setMenuOpen(false)}>Begin Your Journey</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
