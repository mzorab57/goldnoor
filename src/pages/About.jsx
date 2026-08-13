import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../assets/Screenshot 2026-08-13 at 5.21.38 PM.png'
import img1 from "../assets/projects/Screenshot 2026-08-10 at 5.21.28 PM.png";
import img2 from "../assets/projects/Screenshot 2026-08-10 at 5.23.05 PM.png";
import img3 from "../assets/projects/img3.jpg";
import '../styles/about-page.css'

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

function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 0])

  return (
    <main className="about-page">
      
      {/* Simple Parallax Hero Background */}
      <section className="relative w-full h-[130vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full top-[-10%]"
          style={{ y }}
        >
          <img 
            src={heroImage} 
            alt="GoldNoor Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-[#0c1013]"></div>
        </motion.div>
        
       
      </section>

      {/* The rest of the content (Texts & Images) */}
      <div className="relative z-10 bg-[#0c1013] pt-24 pb-32">
        
        {/* Intro Section - Side by Side */}
        <section className="site-shell mb-40">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl shadow-black/50">
                <img src={img1} alt="GoldNoor Installation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-10">
              {/* <motion.span variants={fadeInUp} className="about-kicker mb-6 inline-block ">About GoldNoor</motion.span> */}
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Illuminating<br />
                <span className="text-[#f3c042] italic pr-2">The Future</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-white/70 leading-relaxed mb-8">
                GoldNoor is more than a lighting company. We are architects of night-time atmospheres, crafting elegant, durable, and highly functional urban spaces.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-white/50 leading-relaxed">
                Our designs blend seamlessly into the environment, offering robust performance while elevating the visual identity of any architectural landscape.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Story Section - Overlapping Images */}
        <section className="site-shell mb-40">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="lg:col-span-5 z-10 mt-72">
              {/* <motion.span variants={fadeInUp} className="about-kicker mb-6 inline-block">Our Story</motion.span> */}
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-[1.1] mb-8">
                A beautiful and lasting dream in the heart of darkness.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                We design and manufacture premium outdoor lighting and urban
                furniture that bring identity, elegance, and dependable performance
                to parks, streets, plazas, and architectural destinations. Every piece is built with precision and passion.
              </motion.p>
            </div>
            
            <div className="lg:col-span-7 relative min-h-125 mt-12 lg:mt-0">
              <motion.div 
                variants={fadeInUp} 
                className="absolute top-0 right-0 w-[70%] md:w-[60%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-0"
              >
                <img src={img2} alt="Urban Lighting" className="w-full h-full object-contain grayscale-20 hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="absolute bottom-0 left-0 w-[60%] md:w-[50%] aspect-4/3 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-[#0c1013]"
              >
                <img src={img3} alt="Classic Lighting" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Fin Section */}
        {/* <section className="site-shell">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="min-h-[40vh] flex flex-col items-center justify-center text-center relative border-t border-white/5 pt-20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2  bg-gradient-to-r from-transparent via-[#f3c042]/50 to-transparent"></div>
            <h2 className="text-[8rem] md:text-[12rem] font-bold tracking-tighter leading-none text-white/90 drop-shadow-[0_0_30px_rgba(243,192,66,0.15)] lowercase">
              fin.
            </h2>
          </motion.div>
        </section> */}

      </div>
    </main>
  )
}

export default About
