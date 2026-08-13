import { useEffect, useRef } from 'react'

function SiteFooter() {
  const footerRef = useRef(null)
  const canvasRef = useRef(null)

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
        // Goldnoor gold color particles
        context.fillStyle = `rgba(212, 175, 55, ${this.opacity})`
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
  }, [])

  return (
    <footer  className="site-footer lg:h-screen" id="footer">
       <div className="footer-lamp-scene" aria-hidden="true">
        <div className="footer-room">
          <div className="footer-lamp">
            <div className="footer-lamp-line" />
            <div className="footer-lamp-base">
              <div className="footer-lamp-light" />
            </div>
          </div>
          <div className="footer-lamp-text">
            {/* <span>Gold &amp; Noor</span> */}
            <img src="/logoo.png" alt="Goldnoor" className='w-96' />
          </div>
        </div>
      </div>
      

      <div className="footer-spotlight" aria-hidden="true">
        <div />
        <div />
      </div>

     

      <div className="site-shell footer-content-wrapper relative z-10">
        <div className="footer-main-layout">
          {/* Links - Spanning full width with space-between */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Collections</h4>
              <ul className="footer-nav-list">
                <li><a href="#park">Park Lights</a></li>
                <li><a href="#classic">Classic Lights</a></li>
                <li><a href="#street">Street Lights</a></li>
                <li><a href="#lawn">Lawn Lights</a></li>
                <li><a href="#trash">Trash & Benches</a></li>
                <li><a href="#urban">Urban Furniture</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-nav-list">
                <li><a href="mailto:info@goldnoor.co">info@goldnoor.co</a></li>
                <li><a href="https://www.goldnoor.co" target="_blank" rel="noreferrer">www.goldnoor.co</a></li>
                <li><a href="tel:+9647701571507">+964 770 157 1507</a></li>
              </ul>
              
              <h4 className="footer-col-title footer-mt-extra">Socials</h4>
              <div className="footer-social-icons">
                <a href="https://www.instagram.com/goldnoor.co/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://web.facebook.com/goldnoor.co" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Goldnoor Lighting Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
