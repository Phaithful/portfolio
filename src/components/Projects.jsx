import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: '01',
    name: 'G-Map',
    desc: 'GPS-based campus attendance system for GOUNI. No QR codes, no campus Wi-Fi dependency — precise location verification in real time.',
    tags: ['Python', 'GPS / Location', 'Systems Design', 'Backend'],
    link: 'https://github.com/Phaithful',
    screenshot: '/screenshots/gmap.png',
  },
  {
    num: '02',
    name: 'APRIS',
    desc: 'Full-stack ML product in architecture stage. Designed around a production-grade build order — backend, auth, data pipeline, then the model layer.',
    tags: ['Python', 'Machine Learning', 'Full-Stack', 'REST API'],
    link: 'https://github.com/Phaithful',
    screenshot: '/screenshots/apris.png',
  },
  {
    num: '03',
    name: 'Room 3',
    desc: 'Daily live trivia platform where survivors split the prize pool. Skill-based power-up system with a real-time WebSocket game engine.',
    tags: ['Node.js', 'Rust', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/Phaithful',
    screenshot: '/screenshots/room3.png',
  },
  {
    num: '04',
    name: 'Build & Scale 2026',
    desc: 'Official website for a one-day student conference at GOUNI. Speaker listings, registration flow, conference info. Deployed live on Vercel.',
    tags: ['React', 'JavaScript', 'CSS', 'Vercel'],
    link: 'https://buildandscale2026.vercel.app',
    screenshot: '/screenshots/buildscale.png',
  },
]

export default function Projects() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const grid = gridRef.current
    if (!header || !grid) return

    gsap.fromTo(
      header,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: header, start: 'top 85%' } }
    )

    const cards = grid.querySelectorAll('.project-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
        scrollTrigger: { trigger: grid, start: 'top 85%' } }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="projects-header" ref={headerRef}>
        <div className="projects-header-left">
          <div className="section-label">
            <span>Selected Work</span>
          </div>
          <h2 className="projects-title">Projects</h2>
        </div>
        <span className="projects-counter">05 works</span>
      </div>

      <ul className="project-grid" ref={gridRef}>
        {PROJECTS.map((project) => (
          <li key={project.num} className="project-card">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-img-wrap">
                <img
                  className="project-screenshot"
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  loading="lazy"
                />
                <span className="project-img-num">{project.num}</span>
              </div>

              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
