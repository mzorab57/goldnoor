import React from 'react'
import { motion } from 'framer-motion'
// دڵنیابە لەم لینکەی خوارەوە بۆ وێنەکەت
import parkLight from '../assets/products/park-light.png' 

// جووڵەکانی فڕەیمەر مۆشن
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

function Catalogs() {
  return (
    <main className="relative min-h-screen bg-[#030303] overflow-hidden font-sans selection:bg-[#f3c042] selection:text-black">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-150 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#f3c042]/15 via-[#030303]/0 to-transparent pointer-events-none blur-3xl"></div>
      
      {/* Dark Subtle Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="site-shell pt-32 pb-32 relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Page Header */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center mb-28 relative"
        >
         

          <motion.h1 variants={fadeInUp} className="text-[clamp(3.5rem,8vw,7.5rem)] font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
            Brand <br className="md:hidden" />
            <span className="relative inline-block mt-2 md:mt-0 md:ml-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f3c042] via-[#ffdf85] to-[#d49f25]">Catalogs</span>
              <span className="absolute -bottom-2 left-0 w-full h-1px bg-linear-to-r from-transparent via-[#f3c042]/50 to-transparent blur-sm"></span>
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mt-10">
            Explore our latest collections, technical specifications, and design inspirations. The future of urban illumination is here.
          </motion.p>
        </motion.div>

        {/* Catalog Showcase Area */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="flex flex-col  items-center justify-center gap-16 lg:gap-24 relative"
        >
          
          {/* Background large 2026 text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/2 pointer-events-none z-0 tracking-tighter select-none">
            2026
          </div>

          {/* Left: 3D Floating Book Presentation */}
          <motion.div variants={fadeInUp} className="relative z-10 perspective-[2000px] group cursor-pointer">
            
            {/* Base Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#f3c042]/20 blur-2xl rounded-[100%] group-hover:bg-[#f3c042]/40 group-hover:scale-110 transition-all duration-700"></div>
            
            <motion.div animate={floatAnimation}>
              <div className="w-70 h-105 md:w-90 md:h-125 relative transition-transform duration-700 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105 transform-style-3d">
                
                {/* Book Spine */}
                <div className="absolute top-0 bottom-0 -left-6 w-6 bg-linear-to-b from-[#111] to-[#050505] origin-right -rotate-y-90 border-l border-y border-white/10 rounded-l-md flex items-center justify-center">
                   <span className="text-white/20 text-[10px] tracking-widest -rotate-90 whitespace-nowrap">GOLDNOOR • 2026</span>
                </div>

                {/* Book Pages */}
                <div className="absolute top-2 bottom-2 -right-2 w-2 bg-neutral-300 origin-left rotate-y-90 rounded-r-sm shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]"></div>

                {/* Front Cover */}
                <div className="absolute inset-0 bg-linear-to-br from-[#1c1c1c] via-[#0a0a0a] to-black rounded-r-xl border border-white/10 shadow-[25px_25px_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-20">
                  
                  {/* Glass Glossy Effect */}
                  <div className="absolute inset-0 w-[200%] h-full bg-linear-to-tr from-transparent via-white/5 to-transparent translate-x-[-120%] group-hover:translate-x-[20%] transition-transform duration-1000 ease-in-out skew-x-[-20deg] z-50 pointer-events-none"></div>
                  
                  {/* Spine inner shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-black/90 via-black/30 to-transparent z-40 pointer-events-none"></div>
                  
                  {/* Cover Content */}
                  <div className="relative z-30 p-8 md:p-10 flex flex-col h-full justify-between ml-2">
                    
                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                      <div className="flex flex-col">
                        <span className="text-[#f3c042] tracking-[0.3em] text-[10px] font-bold uppercase mb-1">Vol. 01</span>
                        <span className="text-white text-xs tracking-widest font-light">URBAN LIGHTING</span>
                      </div>
                      <span className="text-white/30 tracking-widest text-[10px] uppercase border border-white/10 px-2 py-1 rounded-sm">V. 1.0</span>
                    </div>
                    
                    {/* Center Image Component */}
                    <div className="absolute w-full z-10 opacity-70 mix-blend-screen group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                       <img src={parkLight} alt="Park Light" className=" object-contain filter drop-shadow-[0_0_15px_rgba(243,192,66,0.3)]" />
                    </div>

                    <div className="mt-auto relative z-20">
                      <h3 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-2 text-shadow-xl">
                        Gold<br/>Noor
                      </h3>
                      <div className="text-[#f3c042] text-2xl md:text-3xl font-light tracking-[0.2em] mt-3">
                        2026
                      </div>
                      <p className="text-white/40 text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-6">
                        The Master Collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Action Buttons Only */}
          <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center justify-center">
            
            {/* Buttons Layout */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              
              <a 
                href="/GOLDNOOR_2026_Catalog.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="group relative overflow-hidden bg-[#f3c042] text-black px-8 py-4 md:py-5 rounded-sm tracking-[0.2em] text-xs font-bold uppercase transition-all shadow-[0_0_20px_rgba(243,192,66,0.15)] hover:shadow-[0_0_30px_rgba(243,192,66,0.4)] text-center w-full sm:w-auto min-w-55"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  View Online
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              
              <a 
                href="/GOLDNOOR_2026_Catalog.pdf" 
                download
                className="group relative overflow-hidden bg-transparent border border-white/20 hover:border-[#f3c042]/50 text-white px-8 py-4 md:py-5 rounded-sm tracking-[0.2em] text-xs font-bold uppercase transition-colors text-center w-full sm:w-auto min-w-55 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-4 h-4 text-white/50 group-hover:text-[#f3c042] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </span>
              </a>
            </div>
            
            {/* File Info */}
            <div className="flex items-center gap-4 mt-6 text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">
              <span>PDF Format</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>24.5 MB</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>120 Pages</span>
            </div>
            
          </motion.div>

        </motion.div>
      </div>
    </main>
  )
}

export default Catalogs