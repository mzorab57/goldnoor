const brandPills = ['Gold', 'Noor']
const navItems = [
  { label: 'Quality', href: '#quality' },
  { label: 'Collections', href: '#collections' },
  { label: 'Contact', href: '#contact' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header-inner">
        <div className="brand-pills" aria-label="Brand labels">
          {brandPills.map((pill) => (
            <span key={pill} className="pill-text">
              {pill}
            </span>
          ))}
        </div>

        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.label} className="site-nav-item">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
