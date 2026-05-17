import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CERTS = [
  {
    num: '01',
    name: 'Python Programming',
    issuer: 'NIIT Abuja',
    sub: 'National Institute of Information Technology',
    desc: 'Core Python programming, object-oriented design, data manipulation, and scripting for real-world applications.',
    badge: 'Completed',
  },
  {
    num: '02',
    name: 'Full Stack Web Development',
    issuer: 'Access Solution Limited',
    sub: null,
    desc: 'Frontend (HTML, CSS, JS, React) and backend (Node.js, REST APIs, databases). Awarded upon completion of internship programme.',
    badge: '2025',
  },
  {
    num: '03',
    name: 'Software Engineering Fundamentals',
    issuer: 'Coursera',
    sub: 'IBM',
    desc: null,
    badge: 'Completed',
  },
]

function reveal(el, props = {}) {
  gsap.fromTo(
    el,
    { opacity: 0, y: 32 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 87%' },
      ...props,
    }
  )
}

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    section.querySelectorAll('[data-reveal]').forEach((el, i) => {
      reveal(el, { delay: i * 0.06 })
    })

    const certCards = section.querySelectorAll('.cert-card')
    gsap.fromTo(
      certCards,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: section.querySelector('.cert-grid'), start: 'top 87%' },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="experience" className="experience" ref={sectionRef}>

      {/* ── Education ───────────────────────────────────────── */}
      <div className="exp-block" data-reveal>
        <div className="section-label">
          <span>Education</span>
        </div>

        <div className="edu-entry">
          <div className="edu-left">
            <h3 className="edu-degree">B.Sc. Computer Science</h3>
            <p className="edu-school">Godfrey Okoye University</p>
            <p className="edu-coursework">
              <span className="edu-coursework-label">Coursework —</span>{' '}
              Expert Systems, Computer Networks, Software Engineering,
              Data Structures &amp; Algorithms, Database Management, Operating Systems.
            </p>
          </div>
          <span className="edu-year">2021 – 2025</span>
        </div>
      </div>

      {/* ── Certifications ──────────────────────────────────── */}
      <div className="exp-block" data-reveal>
        <div className="section-label">
          <span>Certifications &amp; Training</span>
        </div>

        <div className="cert-grid">
          {CERTS.map(cert => (
            <div className="cert-card" key={cert.num}>
              <div className="cert-card-top">
                <span className="cert-num">{cert.num}</span>
                <span className="cert-badge">{cert.badge}</span>
              </div>
              <h4 className="cert-name">{cert.name}</h4>
              <p className="cert-issuer">
                {cert.issuer}
                {cert.sub && <span className="cert-sub"> — {cert.sub}</span>}
              </p>
              {cert.desc && <p className="cert-desc">{cert.desc}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Awards ──────────────────────────────────────────── */}
      <div className="exp-block" data-reveal>
        <div className="section-label">
          <span>Awards &amp; Achievements</span>
        </div>

        <div className="award-card">
          <div className="award-card-content">
            <div className="award-card-header">
              <div>
                <p className="award-place">Runner-Up</p>
                <h3 className="award-title">
                  Enugu State Campus Hackathon
                  <span className="award-abbr"> (ESCH)</span>
                </h3>
              </div>
              <span className="award-date">Oct 8, 2025</span>
            </div>

            <ul className="award-points">
              <li>
                Placed 2nd among competing university teams for building{' '}
                <em>Outreach</em> — an anonymous mental health support platform
                tailored for Nigerians.
              </li>
              <li>
                Recognised for product impact, originality, and technical
                execution under hackathon time constraints.
              </li>
            </ul>
          </div>

          <div className="award-img-wrap">
            <img
              className="award-img"
              src="/hackathon.jpeg"
              alt="Enugu State Campus Hackathon 2025"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
