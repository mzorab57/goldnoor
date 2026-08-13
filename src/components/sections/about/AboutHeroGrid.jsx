import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

import img1 from "../../../assets/projects/Screenshot 2026-08-10 at 5.21.28 PM.png";
import img2 from "../../../assets/projects/Screenshot 2026-08-10 at 5.22.19 PM.png";
import img3 from "../../../assets/projects/Screenshot 2026-08-10 at 5.22.50 PM.png";
import img4 from "../../../assets/projects/Screenshot 2026-08-10 at 5.23.05 PM.png";
import img5 from "../../../assets/projects/Screenshot 2026-08-10 at 5.23.22 PM.png";
import img6 from "../../../assets/projects/Screenshot 2026-08-10 at 5.27.57 PM.png";
import img7 from "../../../assets/projects/Screenshot 2026-08-10 at 5.28.53 PM.png";

const images = [
  img1, img2, img3, img4, img5, img6,  
  img7, img1, img2, img3, img4, img5,  
  img6, img7,                          
  img1                                 
];

const AboutHeroGrid = () => {
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Easings
  const easeW = cubicBezier(0.65, 0, 0.35, 1);
  const easeH = cubicBezier(0.42, 0, 0.58, 1);
  const easeOp = cubicBezier(0.61, 1, 0.88, 1);
  const easeL1 = cubicBezier(0.42, 0, 0.58, 1);
  const easeL2 = cubicBezier(0.76, 0, 0.24, 1);
  const easeL3 = cubicBezier(0.87, 0, 0.13, 1);

  // Scaler
  const animScalerWidth = useTransform(scrollYProgress, [0, 0.8], ['100vw', '100%'], { ease: easeW });
  const animScalerHeight = useTransform(scrollYProgress, [0, 0.8], ['100vh', '100%'], { ease: easeH });
  
  // Layers (Using array of easings for 3 keyframes: 2 segments)
  const animLayer1Opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0, 1], { ease: [easeOp, easeOp] });
  const animLayer1Scale = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 1], { ease: [easeL1, easeL1] });

  const animLayer2Opacity = useTransform(scrollYProgress, [0, 0.55, 0.95], [0, 0, 1], { ease: [easeOp, easeOp] });
  const animLayer2Scale = useTransform(scrollYProgress, [0, 0.3, 0.95], [0, 0, 1], { ease: [easeL2, easeL2] });

  const animLayer3Opacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [0, 0, 1], { ease: [easeOp, easeOp] });
  const animLayer3Scale = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 0, 1], { ease: [easeL3, easeL3] });

  return (
    <div className="about-hero-grid-wrapper">
      <header className="about-hero-grid-header">
        <h1 className="fluid-text">let's<br />scroll.</h1>
      </header>
      
      <section ref={containerRef} className="about-grid-section">
        <div className="about-grid-content">
          <div className="about-grid-container">
            
            <motion.div 
              className="about-grid-layer" 
              style={{ opacity: reducedMotion ? 1 : animLayer1Opacity, scale: reducedMotion ? 1 : animLayer1Scale }}
            >
              {images.slice(0, 6).map((src, i) => (
                <div key={`l1-${i}`} style={{ gridColumn: i % 2 === 0 ? 1 : 5 }}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="about-grid-layer"
              style={{ opacity: reducedMotion ? 1 : animLayer2Opacity, scale: reducedMotion ? 1 : animLayer2Scale }}
            >
              {images.slice(6, 12).map((src, i) => (
                <div key={`l2-${i}`} style={{ gridColumn: i % 2 === 0 ? 'calc(2 + var(--offset))' : 'calc(4 + var(--offset))' }}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="about-grid-layer"
              style={{ opacity: reducedMotion ? 1 : animLayer3Opacity, scale: reducedMotion ? 1 : animLayer3Scale }}
            >
              {images.slice(12, 14).map((src, i) => (
                <div key={`l3-${i}`} style={{ gridColumn: 'calc(3 + var(--offset))', gridRow: i === 0 ? 1 : 3 }}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </motion.div>

            <div className="about-grid-scaler">
              <motion.img 
                src={images[14]} 
                alt="Goldnoor scaler project" 
                style={{ width: reducedMotion ? '100%' : animScalerWidth, height: reducedMotion ? '100%' : animScalerHeight }} 
                loading="eager" 
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroGrid;
