import React from 'react'
import { motion } from 'framer-motion'

// ئەنیمەیشنەکان بۆ هاتنە ژوورەوەیەکی زۆر نەرم و پریمێم
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

function Contacts() {
  return (
    <main className="min-h-screen bg-[#030303] relative overflow-hidden font-sans selection:bg-[#f3c042] selection:text-black flex items-center">
      
      {/* 1. Ambient Background Lighting (شێوازی ڕووناکی ئاڵتونی) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f3c042]/10 via-[#f3c042]/0 to-transparent blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      {/* Architectural Grid (هێڵی تەلارسازی زۆر کاڵ) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
        >
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#f3c042]"></span>
              <span className="text-[#f3c042] tracking-[0.3em] text-xs font-bold uppercase">Get In Touch</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[clamp(3rem,6vw,6rem)] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Let's Start A <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40">
                Conversation.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-white/50 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Whether you're planning a massive urban project or need bespoke lighting solutions, our team is ready to illuminate your vision.
            </motion.p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center gap-12">
            
            {/* Contact Details List */}
            <div className="flex flex-col gap-10">
              
              {/* Item: Email */}
              <motion.div variants={fadeInUp} className="group relative">
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Direct Inquiry</p>
                <a href="mailto:info@goldnoor.co" className="inline-flex items-center gap-4 text-white text-2xl md:text-3xl font-light hover:text-[#f3c042] transition-colors duration-500">
                  info@goldnoor.co
                  <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#f3c042]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </a>
                <motion.div variants={lineReveal} className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/10 origin-left"></motion.div>
              </motion.div>

              {/* Item: Phone */}
              <motion.div variants={fadeInUp} className="group relative">
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Call Us</p>
                <a href="tel:+9647701571507" className="inline-flex items-center gap-4 text-white text-2xl md:text-3xl font-light hover:text-[#f3c042] transition-colors duration-500">
                  +964 770 157 1507
                  <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#f3c042]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </a>
                <motion.div variants={lineReveal} className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/10 origin-left"></motion.div>
              </motion.div>

              {/* Item: Website */}
              <motion.div variants={fadeInUp} className="group relative">
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Global Site</p>
                <a href="https://www.goldnoor.co" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-white text-2xl md:text-3xl font-light hover:text-[#f3c042] transition-colors duration-500">
                  www.goldnoor.co
                  <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#f3c042]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <motion.div variants={lineReveal} className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/10 origin-left"></motion.div>
              </motion.div>

            </div>

            {/* Socials Block */}
            <motion.div variants={fadeInUp} className="mt-4">
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-6">Social Networks</p>
              
              <div className="flex gap-4">
                {/* Instagram */}
                <a 
                  href="#" 
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#f3c042]/50"
                  aria-label="Instagram"
                >
                  <div className="absolute inset-0 bg-[#f3c042] translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="#" 
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#f3c042]/50"
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 bg-[#f3c042] translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
        
      </div>
    </main>
  )
}

export default Contacts