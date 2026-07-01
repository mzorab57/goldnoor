import React from 'react'
import '../styles/projects-page.css'

const projectsData = [
  {
    id: 1,
    title: 'Riverside Promenade',
    category: 'Waterfront District',
    year: '2023',
    desc: 'Sleek modern poles and matching benches line a kilometre of waterfront, blending wayfinding with refined ambience.',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Grand Plaza Boulevard',
    category: 'City Center',
    year: '2024',
    desc: 'Hundreds of hand-finished classic lantern poles transformed a historic boulevard into a glowing landmark for the city.',
    image: 'https://images.unsplash.com/photo-1518178877546-24e5491176b1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Ring Road Interchange',
    category: 'National Highway',
    year: '2022',
    desc: 'Powerful high-mast light towers deliver code-compliant illumination across a major multi-level highway interchange.',
    image: 'https://images.unsplash.com/photo-1493130952181-47e36589f64d?auto=format&fit=crop&q=80&w=1200'
  }
]

function ProjectsPage() {
  return (
    <main className="page-shell projects-page-bg min-h-screen">
      <div className="site-shell pt-36 pb-24">
        <div className="projects-header mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Selected <span className="text-[#d4af37]">Projects</span>
          </h1>
          <p className="text-[#eee8de] opacity-70 max-w-2xl mx-auto text-lg leading-relaxed">
            Where Goldnoor lights the way. From historic squares to modern highways — a glimpse at projects we've brought to life.
          </p>
        </div>

        <div className="projects-vertical-list">
          {projectsData.map((project, idx) => (
            <div key={project.id} className={`project-showcase-row ${idx % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="project-showcase-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-glow"></div>
              </div>
              <div className="project-showcase-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="dot">•</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.desc}</p>
                <button className="project-explore-btn">Explore Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage
