import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  { name: 'Python',      icon: 'python' },
  { name: 'JavaScript',  icon: 'javascript' },
  { name: 'TypeScript',  icon: 'typescript' },
  { name: 'PHP',         icon: 'php' },
  { name: 'React',       icon: 'react' },
  { name: 'Node.js',     icon: 'nodedotjs' },
  { name: 'MySQL',       icon: 'mysql' },
  { name: 'Flask',       icon: 'flask' },
  { name: 'Git',         icon: 'git' },
  { name: 'Go',          icon: 'go' },
  { name: 'C++',         icon: 'cplusplus' },
  { name: 'Linux',       icon: 'linux' },
  { name: 'Chrome',      icon: 'googlechrome' },
  { name: 'Postman',     icon: 'postman' },
]

const CDN = 'https://cdn.simpleicons.org'

const STATS = [
  { number: '5+',  label: 'Projects shipped' },
  { number: '16',  label: 'GitHub repos' },
  { number: '3+',  label: 'Years building' },
  { number: '∞',   label: 'Problems to solve' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll('[data-reveal]')
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          delay: i * 0.05,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger && section.contains(t.trigger)) t.kill()
      })
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-grid">

        {/* Left */}
        <div>
          <div className="section-label" data-reveal>
            <span>About</span>
          </div>

          <h2 className="about-headline" data-reveal>
            Engineer by craft,<br />
            <em>builder</em> by instinct.
          </h2>

          <p className="about-text" data-reveal>
            I'm Faithful — a Computer Science student at Godfrey Okoye University, Abuja,
            building software that solves real problems. My work spans backend systems,
            AI integrations, GPS-based tools, and full-stack products with real users.
          </p>

          <p className="about-text" data-reveal>
            I'm drawn to hard constraints: systems that must work without infrastructure,
            models that must run on limited compute, codebases that must scale from day one.
            I build carefully, ship deliberately, and stay in the long game.
          </p>

          <div className="skills-grid" data-reveal>
            {SKILLS.map((skill) => (
              <span key={skill.name} className="skill-tag">
                <img
                  className="skill-icon"
                  src={`${CDN}/${skill.icon}`}
                  alt=""
                  width="14"
                  height="14"
                  loading="lazy"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="about-right">
          <div className="about-portrait" data-reveal>
            <img
              src="/me.jpeg"
              alt="Faithful Madu"
              loading="lazy"
              width="280"
              height="280"
            />
          </div>

          <div className="stats-grid" data-reveal>
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-cell">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
