import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">The Soul Voyage</span>
            <p className="footer__tagline">
              Breathwork & Sacred Geometry Healing
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Experience</h4>
              <a href="#offerings">Breathwork Sessions</a>
              <a href="#offerings">Private Healing</a>
              <a href="#events">Live Events</a>
              <a href="#offerings">Online Programs</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Podcast</a>
              <a href="#">Newsletter</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Info</h4>
              <a href="#about">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 The Soul Voyage. All rights reserved.</span>
          <span className="footer__credit">
            Designed by <a href="https://www.waseemnasir.com" target="_blank" rel="noopener noreferrer">Waseem Nasir</a> | <a href="https://www.skynetjoe.com" target="_blank" rel="noopener noreferrer">Skynet Labs</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
