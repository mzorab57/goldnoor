import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Catalogs', path: '/catalogs' },
  { label: 'Contacts', path: '/contacts' },
];

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Add background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-9999 transition-all  duration-500 ease-in-out ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}>
        <div className="w-full px-2">
          
          {/* Main Navbar Pill */}
          <div className={`relative flex items-center justify-between w-full mx-auto max-w-7xl py-2  container rounded-full px-4 xl:py-2 transition-all duration-500 z-50 ${isScrolled || isMobileMenuOpen ? 'bg-[#0a0a0a]/75 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]' : 'bg-transparent border border-transparent'}`}>
            
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link
                to="/"
                onClick={handleNavClick}
                className="flex items-center group relative z-9999"
              >
                <img 
                  src="/logospi.png" 
                  alt="Goldnoor Logo" 
                  className="h-12  w-auto transition-transform duration-500 group-hover:scale-105" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex shrink-0 justify-center ml-10">
              <ul className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink 
                      to={item.path}
                      onClick={handleNavClick}
                      className={({ isActive }) => 
                        `relative px-4 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.15em] font-medium rounded-full transition-all duration-300 ${
                          isActive 
                            ? "text-[#D4AF37]" 
                            : "text-white/70 hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          {isActive && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex-1 flex justify-end xl:hidden">
              <button 
                className="flex flex-col justify-center items-end w-10 h-10 gap-1.25 focus:outline-none group relative z-[9999]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span className={`block h-0.5 bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-7 group-hover:w-6'}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-5 group-hover:w-7'}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6 group-hover:w-5'}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ------------------------------------------- */}
      {/* Premium Mobile Menu Overlay                 */}
      {/* ------------------------------------------- */}
      <div 
        className={`fixed inset-0 z-9998 bg-[#030303] overflow-hidden transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#D4AF37]/15 via-[#D4AF37]/0 to-transparent blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3 transition-opacity duration-1000"></div>
        
        {/* Subtle Architectural Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Large Faded Background Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[25vh] font-black text-white/2 pointer-events-none select-none -rotate-90 origin-left">
          GOLDNOOR
        </div>

        <div className="flex flex-col h-full px-8 pt-32 pb-10 relative z-10 w-full max-w-md mx-auto">
          
          {/* Navigation Links with "Reveal" Animation */}
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <li key={item.label} className="overflow-hidden">
                  <div 
                    className={`transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                      isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[120%]'
                    }`}
                    style={{ transitionDelay: `${isMobileMenuOpen ? 150 + (index * 80) : 0}ms` }}
                  >
                    <NavLink 
                      to={item.path}
                      onClick={handleNavClick}
                      className={({ isActive }) => 
                        `group flex items-end gap-4 w-full ${isActive ? 'text-[#D4AF37]' : 'text-white'}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {/* Sequential Number */}
                        
                          
                          {/* Label */}
                          <span className="text-[2.5rem] sm:text-5xl font-black uppercase tracking-tighter leading-none group-hover:pl-2 transition-all duration-300">
                            {item.label}
                          </span>
                          
                          {/* Active Dot / Arrow on Hover */}
                          <span className={`mb-2 opacity-0 -translate-x-2 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D4AF37]'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </>
                      )}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Menu Footer (Contact & Socials) */}
          <div 
            className={`mt-auto border-t border-white/10 pt-6 flex justify-between items-end transition-all duration-700 delay-500 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Contact Details */}
            <div className="flex flex-col gap-1">
              <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Direct Inquiries</span>
              <a href="mailto:info@goldnoor.co" className="text-white text-sm hover:text-[#D4AF37] transition-colors font-light">info@goldnoor.co</a>
              <a href="tel:+9647701571507" className="text-white/70 text-sm hover:text-[#D4AF37] transition-colors font-light mt-1">+964 770 157 1507</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SiteHeader;
