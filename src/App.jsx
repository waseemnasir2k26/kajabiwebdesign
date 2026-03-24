import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Events from './components/Events'
import CTA from './components/CTA'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Offerings />
      <Benefits />
      <Testimonials />
      <Events />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
