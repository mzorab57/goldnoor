import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    category: 'Classic Lighting',
    year: '2024',
    location: 'City Center',
    title: 'Grand Plaza Boulevard',
    description: 'Hundreds of hand-finished classic lantern poles transformed a historic boulevard into a glowing landmark for the city.',
    image: 'https://images.unsplash.com/photo-1518178877546-24e5491176b1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    category: 'Modern Lighting',
    year: '2023',
    location: 'Waterfront District',
    title: 'Riverside Promenade',
    description: 'Sleek modern poles and matching benches line a kilometre of waterfront, blending wayfinding with refined ambience.',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    category: 'Park Lights',
    year: '2024',
    location: 'Municipal Park',
    title: 'Central Park Walkway',
    description: 'A tree-lined promenade lit by ornamental triple-arm poles, creating a safe and beautiful evening destination.',
    image: 'https://images.unsplash.com/photo-1508216335198-466d744b80b7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    category: 'High-Mast Towers',
    year: '2022',
    location: 'National Highway',
    title: 'Ring Road Interchange',
    description: 'Powerful high-mast light towers deliver code-compliant illumination across a major multi-level highway interchange.',
    image: 'https://images.unsplash.com/photo-1493130952181-47e36589f64d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 5,
    category: 'Lawn & Bollards',
    year: '2023',
    location: 'Garden Residences',
    title: 'Aria Residential Complex',
    description: 'Low-level bollards and decorative garden poles guide residents through manicured landscaping with a warm, glare-free glow.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children[0]) {
        setCardWidth(trackRef.current.children[0].offsetWidth);
      }
    };
    
    // Initial width calculation
    updateWidth();
    
    // Recalculate on resize
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  // Gap is 2rem (32px)
  const gap = 32;
  const translateX = -(activeIndex * (cardWidth + gap));

  return (
    <section className="projects-carousel-section" id="projects">
      <div className="site-shell px-4 mb-12 relative z-10 flex justify-between items-end flex-wrap gap-8">
        <div className="uppercase">
          <span className="section-kicker">Selected projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tighter">
            Where Goldnoor <span className="text-[#d4af37]">lights</span> the way
          </h2>
        </div>
        
        {/* Pagination Controls */}
        <div className="projects-pagination-controls">
          <button onClick={prevSlide} className="carousel-control-btn" aria-label="Previous Project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="carousel-dots">
            {projectsData.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button onClick={nextSlide} className="carousel-control-btn" aria-label="Next Project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      <div className="projects-carousel-wrapper">
        <div 
          className="projects-carousel-track manual-track" 
          ref={trackRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {projectsData.map((project, index) => (
            <article key={project.id} className={`project-carousel-card ${activeIndex === index ? 'is-active' : ''}`}>
              <div className="project-carousel-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="project-carousel-image"
                />
                <div className="project-carousel-overlay" />
              </div>
              
              <div className="project-carousel-content">
                <div className="project-carousel-meta">
                  <span className="project-carousel-category">{project.category}</span>
                  <span className="project-carousel-dot">•</span>
                  <span className="project-carousel-year">{project.year}</span>
                </div>
                <h3 className="project-carousel-title">{project.title}</h3>
                <div className="project-carousel-location">{project.location}</div>
                <Link to="/projects" className="project-carousel-link">Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
