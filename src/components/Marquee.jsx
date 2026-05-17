const ITEMS = [
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

function MarqueeContent() {
  return (
    <div className="marquee-content" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span className="marquee-item" key={i}>
          <img
            className="marquee-icon"
            src={`${CDN}/${item.icon}`}
            alt=""
            width="18"
            height="18"
            loading="lazy"
          />
          <span className="marquee-name">{item.name}</span>
          <span className="marquee-sep">·</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-label="Languages and tools">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}
