import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Phaithful' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/febechukwu/' },
  { label: 'Instagram', href: 'https://www.instagram.com/thegarnet__/' },
  { label: 'Email', href: 'mailto:madufaithful1@gmail.com' },
]

export default function Contact() {
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
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    })
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-inner">
        <div className="section-label" data-reveal>
          <span>Get in Touch</span>
        </div>

        <p className="contact-intro" data-reveal>
          Open to work, collaboration, and interesting problems. If you're building
          something meaningful, let's talk.
        </p>

        <a
          href="mailto:madufaithful1@gmail.com"
          className="contact-email"
          data-reveal
        >
          madufaithful1@gmail.com
        </a>

        <ul className="contact-socials" data-reveal>
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
