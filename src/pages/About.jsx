import React from 'react'
import '../styles/about-page.css'

function About() {
  return (
    <main className="page-shell about-page-bg">
      <div className="site-shell">
        
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">
            Illuminating <br /> <span className="text-[#d4af37]">The Future</span>
          </h1>
          <p className="about-hero-desc">
            Goldnoor is more than a lighting company. We are architects of night-time atmospheres, crafting elegant, durable, and highly functional urban spaces.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-mission-section">
          <div className="about-mission-content">
            <h3 className="about-section-subtitle">Our Story</h3>
            <h2 className="about-mission-text">
              We are the realization of a beautiful and lasting dream in the heart of darkness.
            </h2>
            <p className="about-mission-subtext">
              Designing and manufacturing premium outdoor lighting and urban furniture, we believe that the beauty of a city should not fade when the sun goes down. Since our inception, Goldnoor has been committed to creating high-end lighting solutions that withstand the test of time and weather, while elevating the aesthetics of any environment they inhabit.
            </p>
          </div>
          <div className="about-mission-image">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" alt="Goldnoor lighting factory or installation" loading="lazy" />
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section">
          <div className="text-center">
            <h3 className="about-section-subtitle">Core Pillars</h3>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">Our Philosophy</h2>
          </div>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="value-number">01</div>
              <h4 className="value-title">Premium Quality</h4>
              <p className="value-desc">
                We use the highest grade metals and weather-resistant materials to ensure our lighting structures endure decades of harsh conditions.
              </p>
            </div>
            <div className="about-value-card">
              <div className="value-number">02</div>
              <h4 className="value-title">Timeless Design</h4>
              <p className="value-desc">
                Bridging the gap between historic elegance and modern minimalism, our designs complement any architectural style perfectly.
              </p>
            </div>
            <div className="about-value-card">
              <div className="value-number">03</div>
              <h4 className="value-title">Urban Harmony</h4>
              <p className="value-desc">
                We design urban furniture and lighting to seamlessly integrate into cityscapes, creating safe, welcoming, and beautiful public spaces.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

export default About
