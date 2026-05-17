import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src="/my-logo.svg" alt="Faithful Madu" className="nav-logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  )
}
