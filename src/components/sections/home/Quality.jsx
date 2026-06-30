import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const qualityCards = [
  {
    num: '01',
    title: 'Precision Engineering',
    text: 'Crafted from aerospace-grade materials and finished with high-durability, weather-resistant coatings to withstand any environment.',
  },
  {
    num: '02',
    title: 'Sustainable Brilliance',
    text: 'Powered by advanced, energy-efficient LED cores designed to deliver flawless illumination for decades without maintenance.',
  },
  {
    num: '03',
    title: 'Timeless Aesthetics',
    text: 'A design philosophy that bridges the gap between classic architectural heritage and sleek, modern minimalism.',
  },
];

function Quality() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main header
      gsap.fromTo('.quality-header-anim', 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#quality',
            start: 'top 75%',
          }
        }
      );

      // Animate the cards
      gsap.fromTo('.quality-card-anim',
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.quality-grid',
            start: 'top 85%',
          }
        }
      );

      // Animate the showcase panel
      gsap.fromTo('.showcase-panel-anim',
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#collections',
            start: 'top 70%',
          }
        }
      );

      // Contact banner parallax
      gsap.fromTo('.contact-banner-bg',
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="quality-wrapper">
      <section className="home-section" id="quality">
        <div className="site-shell">
          <div className="section-heading quality-header-anim">
            <span className="section-kicker">The Goldnoor Standard</span>
            <h2>Uncompromising quality in every detail.</h2>
            <p>
              We don't just build lights; we engineer luminous landmarks. Every pole, lantern, and bollard is a testament to our dedication to craftsmanship and urban elegance.
            </p>
          </div>

          <div className="quality-grid">
            {qualityCards.map((card) => (
              <article key={card.title} className="quality-card quality-card-anim">
                <div className="quality-card-glow"></div>
                <span className="quality-index">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section showcase-section" id="collections">
        <div className="site-shell showcase-grid">
          <div className="showcase-copy quality-header-anim">
            <span className="section-kicker">Global Infrastructure</span>
            <h2>Illuminating cities across the world.</h2>
            <p>
              From the historic boulevards of Europe to the ultra-modern highways of the Middle East, Goldnoor's infrastructure collections are trusted by municipalities globally for their reliability and striking presence.
            </p>
          </div>

          <div className="showcase-panel showcase-panel-anim">
            <span className="showcase-label">Core Capabilities</span>
            <ul className="showcase-list">
              <li>Smart City Integration Ready</li>
              <li>IP66+ Weather Resistance</li>
              <li>Custom Architectural Moulding</li>
              <li>High-Mast Stadium Solutions</li>
              <li>Solar & Hybrid Options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="site-shell">
          <div className="contact-banner overflow-hidden relative">
            <div className="contact-banner-bg absolute inset-0 bg-gradient-to-br from-[#1a1508] to-[#000000] z-0 opacity-50"></div>
            
            <div className="relative z-10">
              <span className="section-kicker text-[#d4af37]">Let's Work Together</span>
              <h2 className="text-white mt-2">Ready to illuminate your next monumental project?</h2>
            </div>

            <a className="primary-button relative z-10" href="mailto:hello@goldnoor.com">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quality;
