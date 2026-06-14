const titleRows = [
  [
       
    { text: 'We', className: 'slide-right', delay: '0.18s' },
    { text: 'make', className: 'slide-left', delay: '0.28s' },
  ],
  [
    { text: 'darkness', className: 'slide-up', delay: '0.42s' },
    { text: 'beautiful', className: 'slide-down', delay: '0.52s' },
  ],
]

const scrollLines = ['Scroll to', 'discover more']
const currentYear = new Date().getFullYear()

function HomeHero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://cdn.zajno.com/dev/codepen/fossil/fossil.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="site-shell hero-content">
        <div className="hero-copy">
          {/* <div className="eyebrow hero-reveal hero-reveal-up">
            Gold-plated visual identity for premium industrial branding
          </div> */}

          <div className="hero-title" aria-label="Gold Noor">
            {titleRows.map((row, rowIndex) => (
              <div key={rowIndex} className="hero-title-row">
                {row.map((part) => (
                  <span
                    key={part.text}
                    className={`hero-title-part ${part.className}`}
                    style={{ '--delay': part.delay }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* <p className="hero-lead hero-reveal hero-reveal-up delay-2">
            Modern metal solutions with a bold visual language, luxurious gold
            contrast, and a strong premium presence.
          </p> */}

       
        </div>

     

        <div className="hero-meta hero-reveal hero-reveal-up delay-4">
          <span>{currentYear} all rights reserved</span>
        </div>

        <div className="hero-scroll hero-reveal hero-reveal-up delay-5">
          {scrollLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
