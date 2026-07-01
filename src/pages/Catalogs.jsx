import React from 'react'

function Catalogs() {
  return (
    <main className="page-shell">
      <section className="home-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="site-shell text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Catalogs</h1>
          <p className="text-[#eee8de] opacity-70 max-w-2xl mx-auto">
            Download our latest product catalogs and technical specifications.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Catalogs
