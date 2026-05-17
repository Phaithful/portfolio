import { useEffect, useRef } from 'react'

const PATH =
  'M-50,380 C80,200 120,80 200,120 C280,160 220,300 180,380 ' +
  'C140,460 100,500 160,440 C220,380 340,200 480,180 ' +
  'C620,160 700,260 800,280 C900,300 980,240 1060,200 ' +
  'C1140,160 1180,300 1200,400 C1220,500 1300,560 1360,520 ' +
  'C1400,496 1420,460 1460,420 C1480,580 1300,640 1260,600 ' +
  'C1220,560 1280,520 1300,560'

export default function Hero() {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    requestAnimationFrame(() => {
      path.style.transition =
        'stroke-dashoffset 3.5s cubic-bezier(0.65, 0, 0.35, 1) 0.1s, stroke 0.4s ease'
      path.style.strokeDashoffset = '0'
    })
  }, [])

  return (
    <section className="hero">
      <div className="noise-overlay" aria-hidden="true" />

      <svg
        className="hero-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path ref={pathRef} className="hero-svg-path" d={PATH} />
      </svg>

      <div className="hero-label">
        <span>Software Engineer · Fullstack Developer</span>
      </div>

      <div className="hero-name" aria-label="Faithful Febechukwu Madu">
        <div className="hero-name-line"><span>Faithful</span></div>
        <div className="hero-name-line"><span>Febechukwu</span></div>
        <div className="hero-name-line"><span>Madu</span></div>
      </div>

      <div className="hero-bottom">
        <p className="hero-tagline">
          Building systems that scale, backend engineering, AI integration, and software that ships.
          CS student, turning ideas into real products.
        </p>
        <div className="hero-scroll" aria-hidden="true">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}
