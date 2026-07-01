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

     

   
    </div>
  );
}

export default Quality;
