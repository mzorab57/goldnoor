const qualityCards = [
  {
    title: 'Premium Finish',
    text: 'Clean luxury direction with a gold-first visual system and bold dark contrast.',
  },
  {
    title: 'Modern Presence',
    text: 'Structured sections, elegant spacing, and a polished brand tone ready for growth.',
  },
  {
    title: 'Flexible System',
    text: 'A reusable page structure that makes future sections easy to add and maintain.',
  },
]

function HomeSections() {
  return (
    <>
      <section className="home-section" id="quality">
        <div className="site-shell">
          <div className="section-heading">
            <span className="section-kicker">Quality</span>
            <h2>Built on a clean structure for the next stage of GoldNoor.</h2>
            <p>
              The project now has a page-based layout so new sections and routes
              can be added without turning the codebase into one long file.
            </p>
          </div>

          <div className="quality-grid">
            {qualityCards.map((card) => (
              <article key={card.title} className="quality-card">
                <span className="quality-index">0{qualityCards.indexOf(card) + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section showcase-section" id="collections">
        <div className="site-shell showcase-grid">
          <div className="showcase-copy">
            <span className="section-kicker">Collections</span>
            <h2>Sections are ready for future product showcases and landing pages.</h2>
            <p>
              You can now add `About`, `Products`, `Services`, and `Contact`
              pages or home sections without changing the whole application
              structure again.
            </p>
          </div>

          <div className="showcase-panel">
            <span className="showcase-label">Current setup</span>
            <ul className="showcase-list">
              <li>`routes` for page navigation</li>
              <li>`layouts` for shared shell and header</li>
              <li>`pages` for route-level screens</li>
              <li>`components/sections` for reusable UI blocks</li>
              <li>`styles` for separated CSS files</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="site-shell contact-banner">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>Ready to continue the rest of the website with this structure.</h2>
          </div>

          <a className="primary-button" href="mailto:hello@goldnoor.com">
            Start Next Step
          </a>
        </div>
      </section>
    </>
  )
}

export default HomeSections
