function SiteFooter() {
  return (
    <footer className="site-footer lg:h-screen" id="footer">
      <div className="footer-lamp-scene" aria-hidden="true">
        <div className="footer-room">
          <div className="footer-lamp">
            <div className="footer-lamp-line" />
            <div className="footer-lamp-base">
              <div className="footer-lamp-light" />
            </div>
          </div>
          <div className="footer-lamp-text">
            <img
              src="/logoo.png"
              alt="Goldnoor"
              className="w-96 max-w-[70vw]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
      
      <div className="footer-spotlight" aria-hidden="true">
        <div />
        <div />
      </div>

      <div className="site-shell footer-content-wrapper relative z-10">
        <div className="footer-main-layout">
          {/* Links - Spanning full width with space-between */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Collections</h4>
              <ul className="footer-nav-list">
                <li><a href="#park">Park Lights</a></li>
                <li><a href="#classic">Classic Lights</a></li>
                <li><a href="#street">Street Lights</a></li>
                <li><a href="#lawn">Lawn Lights</a></li>
                <li><a href="#trash">Trash & Benches</a></li>
                <li><a href="#urban">Urban Furniture</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-nav-list">
                <li><a href="mailto:info@goldnoor.co">info@goldnoor.co</a></li>
                <li><a href="https://www.goldnoor.co" target="_blank" rel="noreferrer">www.goldnoor.co</a></li>
                <li><a href="tel:+9647701571507">+964 770 157 1507</a></li>
              </ul>
              
              <h4 className="footer-col-title footer-mt-extra">Socials</h4>
              <div className="footer-social-icons">
                <a href="https://www.instagram.com/goldnoor.co/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://web.facebook.com/goldnoor.co" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Goldnoor Lighting Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
