import { useEffect, useRef, useState } from 'react'

const footerLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'WhatsApp', href: 'https://wa.me/' },
  { label: 'Email', href: 'mailto:hello@goldnoor.com' },
]

const featureCards = [
  {
    title: 'Premium Identity',
    text: 'A luxurious dark-and-gold visual tone built to feel elegant, bold, and memorable.',
  },
  {
    title: 'Flexible Structure',
    text: 'Reusable sections and route-ready architecture that keep future growth simple.',
  },
]

function SiteFooter() {
  const footerRef = useRef(null)
  const canvasRef = useRef(null)
  const [goldMode, setGoldMode] = useState(true)

  useEffect(() => {
    const section = footerRef.current
    const canvas = canvasRef.current

    if (!section || !canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    let animationFrameId = 0
    let particles = []

    class Particle {
      constructor(width, height) {
        this.width = width
        this.height = height
        this.reset(true)
      }

      reset(randomizeY = false) {
        this.x = Math.random() * this.width
        this.y = randomizeY ? Math.random() * this.height : this.height + Math.random() * 40
        this.speed = Math.random() * 0.35 + 0.12
        this.size = Math.random() * 1.8 + 0.6
        this.opacity = Math.random() * 0.45 + 0.18
      }

      update() {
        this.y -= this.speed
        if (this.y < -10) {
          this.reset()
        }
      }

      draw() {
        context.fillStyle = goldMode
          ? `rgba(243, 192, 66, ${this.opacity})`
          : `rgba(194, 204, 255, ${this.opacity})`
        context.fillRect(this.x, this.y, this.size, this.size * 3.2)
      }
    }

    const resizeCanvas = () => {
      const { width, height } = section.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const particleCount = Math.max(36, Math.floor((width * height) / 14000))
      particles = Array.from({ length: particleCount }, () => new Particle(width, height))
    }

    const animate = () => {
      const { width, height } = section.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.width = width
        particle.height = height
        particle.update()
        particle.draw()
      })
      animationFrameId = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [goldMode])

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${goldMode ? 'site-footer-gold' : 'site-footer-ice'}`}
      id="footer"
    >
      <canvas
        ref={canvasRef}
        className="footer-particle-canvas"
        aria-hidden="true"
      />

      <div className="footer-spotlight" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>

      <div className="footer-accent-lines" aria-hidden="true">
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className="site-shell footer-header">
        <h2 className="footer-brand">
          <a href="/">GoldNoor</a>
        </h2>

        <button
          type="button"
          className="footer-mid-spot"
          aria-label="Toggle footer glow"
          aria-pressed={goldMode}
          onClick={() => setGoldMode((current) => !current)}
        />

        <a className="footer-contact-btn" href="mailto:hello@goldnoor.com">
          <span className="footer-glow" />
          <span className="footer-contact-content">Contact Us</span>
        </a>
      </div>

      <div className="footer-hero-sub">
        <p>Introducing</p>
      </div>

      <div className="footer-hero">
        <div className="footer-hero-title">
          <h2>GoldNoor</h2>
          <h2>GoldNoor</h2>
        </div>
      </div>

      <p className="footer-hero-copy">
        Premium metal identity,
        <br />
        powered by modern structure + elegant design.
      </p>

      <div className="footer-mountains" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>

      

   
    </footer>
  )
}

export default SiteFooter
