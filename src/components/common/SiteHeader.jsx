import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Catalogs', path: '/catalogs' },
  { label: 'Contacts', path: '/contacts' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header-inner">
        <div className="brand-logo-container" aria-label="Brand Logo">
          <Link to="/">
            <img src="/logoo.png" alt="Goldnoor Logo" className="site-logo" />
          </Link>
        </div>

        <nav aria-label="Main navigation">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.label} className="site-nav-item">
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
