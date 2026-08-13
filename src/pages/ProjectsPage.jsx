import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/projects/img3.jpg'
import img2 from '../assets/projects/Screenshot 2026-08-10 at 5.23.22 PM.png'
import img3 from '../assets/projects/Screenshot 2026-08-10 at 5.22.19 PM.png'
import '../styles/projects-page.css'


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const projectsData = [
  {
    id: 1,
    title: 'Riverside Promenade',
    category: 'Waterfront District',
    year: '2023',
    desc: 'Sleek modern poles and matching benches line a kilometre of waterfront, blending wayfinding with refined ambience.',
    image: img1
  },
  {
    id: 2,
    title: 'Grand Plaza Boulevard',
    category: 'City Center',
    year: '2024',
    desc: 'Hundreds of hand-finished classic lantern poles transformed a historic boulevard into a glowing landmark for the city.',
    image: img2
  },
  {
    id: 3,
    title: 'Ring Road Interchange',
    category: 'National Highway',
    year: '2022',
    desc: 'Powerful high-mast light towers deliver code-compliant illumination across a major multi-level highway interchange.',
    image: img3
  }
]

function ProjectsPage() {
  return (
    <main className="page-shell projects-page-bg min-h-screen">
      <div className="site-shell pt-36 pb-32">
        <div className="projects-header mb-32 text-center relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-100 md:w-150 h-100 md:h-150 bg-[#f3c042]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
           
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black text-white mb-6 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
              Selected <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f3c042] via-[#ffdf85] to-[#f3c042]">Projects</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mt-8">
              Where Goldnoor lights the way. From historic squares to modern highways — a glimpse at projects we've brought to life.
            </motion.p>
          </motion.div>
        </div>

        <div className="projects-vertical-list">
          {projectsData.map((project, idx) => (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              key={project.id} 
              className={`project-showcase-row ${idx % 2 !== 0 ? 'reverse' : ''}`}
            >
              <motion.div variants={fadeInUp} className="project-showcase-image shadow-2xl shadow-black/80 border border-white/10 rounded-4xl">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-glow"></div>
              </motion.div>
              <div className="project-showcase-content">
                <motion.div variants={fadeInUp} className="project-meta mb-6">
                  <span className="text-[#f3c042] tracking-[0.25em] text-xs md:text-sm font-bold uppercase">{project.category}</span>
                  <span className="dot text-white/20 mx-3">•</span>
                  <span className="text-white/50 tracking-[0.25em] text-xs md:text-sm uppercase">{project.year}</span>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  {project.title}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-[#f3c042]/30 pl-6 py-2">
                  {project.desc}
                </motion.p>
                <motion.button variants={fadeInUp} className="group relative overflow-hidden bg-transparent border border-white/20 px-8 py-4 rounded-full text-white tracking-[0.2em] text-xs font-bold uppercase hover:border-[#f3c042] transition-colors duration-500 shadow-lg shadow-transparent hover:shadow-[#f3c042]/20">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">Explore Project</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#f3c042] to-[#ffeba8] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage
