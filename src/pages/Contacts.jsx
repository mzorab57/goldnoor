import InnerPageHero from '../components/common/InnerPageHero'

const contacts = [
  {
    label: 'Email',
    title: 'Project Inquiries',
    text: 'Use this contact point for quotations, technical requests, and collaboration discussions.',
    value: 'hello@goldnoor.com',
  },
  {
    label: 'Phone',
    title: 'Direct Communication',
    text: 'Ideal for active project coordination, product follow-up, and fast commercial support.',
    value: '+964 (000) 000 0000',
  },
  {
    label: 'Location',
    title: 'Office and Operations',
    text: 'Prepared for showroom, office, or factory address details when you are ready to publish them.',
    value: 'GoldNoor Company Address',
  },
  {
    label: 'Support',
    title: 'Catalog and Specification Help',
    text: 'A dedicated point for requesting brochures, dimensions, and product-family information.',
    value: 'Catalog assistance available',
  },
]

function Contacts() {
  return (
    <main className="inner-page">
      <InnerPageHero
        kicker="Contacts"
        title="Let’s Talk About Your"
        accent="Next Project"
        description="GoldNoor is ready to support architects, developers, contractors, and municipalities with product guidance, project coordination, and specification material."
        metrics={[
          { value: 'Fast', label: 'Response Direction' },
          { value: 'Project', label: 'Coordination Focus' },
          { value: 'Technical', label: 'Catalog Support' },
          { value: 'Direct', label: 'Communication' },
        ]}
        primaryAction={{ label: 'See Catalogs', to: '/catalogs' }}
        secondaryAction={{ label: 'Explore Projects', to: '/projects' }}
      />

      <section className="inner-page-section inner-page-section-tight">
        <div className="site-shell">
          <div className="inner-page-contact-grid">
            {contacts.map((item) => (
              <article key={item.title} className="inner-contact-panel">
                <span className="inner-contact-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="inner-contact-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts
