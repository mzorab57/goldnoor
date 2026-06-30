import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    category: 'Classic Lighting',
    year: '2024',
    location: 'City Center',
    title: 'Grand Plaza Boulevard',
    description: 'Hundreds of hand-finished classic lantern poles transformed a historic boulevard into a glowing landmark for the city.',
    image: '/assets/images/projects/p1.jpeg'
  },
  {
    id: 2,
    category: 'Modern Lighting',
    year: '2023',
    location: 'Waterfront District',
    title: 'Riverside Promenade',
    description: 'Sleek modern poles and matching benches line a kilometre of waterfront, blending wayfinding with refined ambience.',
    image: '/assets/images/projects/p2.jpeg'
  },
  {
    id: 3,
    category: 'Park Lights',
    year: '2024',
    location: 'Municipal Park',
    title: 'Central Park Walkway',
    description: 'A tree-lined promenade lit by ornamental triple-arm poles, creating a safe and beautiful evening destination.',
    image: '/assets/images/projects/p3.jpeg'
  },
  {
    id: 4,
    category: 'High-Mast Towers',
    year: '2022',
    location: 'National Highway',
    title: 'Ring Road Interchange',
    description: 'Powerful high-mast light towers deliver code-compliant illumination across a major multi-level highway interchange.',
    image: '/assets/images/projects/p4.jpeg'
  },
  {
    id: 5,
    category: 'Lawn & Bollards',
    year: '2023',
    location: 'Garden Residences',
    title: 'Aria Residential Complex',
    description: 'Low-level bollards and decorative garden poles guide residents through manicured landscaping with a warm, glare-free glow.',
    image: '/assets/images/projects/p5.jpeg'
  },
  {
    id: 6,
    category: 'Classic Lighting',
    year: '2022',
    location: 'Heritage District',
    title: 'Old Town Square',
    description: 'Authentic cast-iron lanterns restored the romance of the heritage quarter while running on efficient modern LED engines.',
    image: '/assets/images/projects/p6.jpeg'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      // Calculate how far we need to move the slider to the left
      // We move it by the total width of the slider minus the viewport width
      const getScrollAmount = () => -(slider.scrollWidth - window.innerWidth);

      const tween = gsap.to(slider, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${slider.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section className="projects-slider-section " id="projects" ref={sectionRef}>
      <div className="projects-sticky-wrapper ">
        
        {/* Absolute header that stays in place while slider moves */}
        <div className="projects-slider-header ">
          <div className="site-shell px-4 uppercase ">
            <span className="section-kicker ">Selected projects</span>
            <h2>Where Goldnoor <span className=" text-yellow-400">lights</span> the way</h2>
          </div>
        </div>

        <div className="projects-slider-container" ref={sliderRef}>
          {/* Spacer to push first card away from edge */}
          <div className="projects-slide-spacer"></div>

          {projectsData.map((project, index) => (
            <article key={project.id} className="project-slide-card">
              <div className="project-slide-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="project-slide-image"
                />
                <div className="project-slide-overlay" />
              </div>
              
              <div className="project-slide-content">
                <div className="project-slide-meta">
                  <span className="project-slide-category">{project.category}</span>
                  <span className="project-slide-dot">•</span>
                  <span className="project-slide-year">{project.year}</span>
                </div>
                <h3 className="project-slide-title">{project.title}</h3>
                <div className="project-slide-location">{project.location}</div>
                <p className="project-slide-description">{project.description}</p>
              </div>
            </article>
          ))}
          
          {/* Spacer to give trailing edge some breathing room */}
          <div className="projects-slide-spacer"></div>
        </div>
      </div>
    </section>
  );
}
