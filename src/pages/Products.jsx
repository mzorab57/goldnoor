import React, { useState, useEffect } from 'react'
import '../styles/products-page.css'

const allProducts = [
  { id: 1, title: 'Riverside Lantern', category: 'Classic', image: 'https://images.unsplash.com/photo-1543884877-3e13d42bcda4?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Aria High-Mast', category: 'Outdoor', image: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Metro Bollard', category: 'Urban', image: 'https://images.unsplash.com/photo-1574971714800-478643809633?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Heritage Post', category: 'Classic', image: 'https://images.unsplash.com/photo-1563728637494-b2959c5d1ed2?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Lumina Street Light', category: 'Outdoor', image: 'https://images.unsplash.com/photo-1524317189115-3fbdf6c5d9a9?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Zen Bench & Light', category: 'Urban', image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800' },
]

const categories = ['All', 'Outdoor', 'Urban', 'Classic']

function Products() {
  const [filter, setFilter] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => {
      if (filter === 'All') {
        setFilteredProducts(allProducts)
      } else {
        setFilteredProducts(allProducts.filter(p => p.category === filter))
      }
      setIsAnimating(false)
    }, 300) // matches css transition

    return () => clearTimeout(timeout)
  }, [filter])

  return (
    <main className="page-shell products-page-bg min-h-screen">
      <div className="site-shell pt-36 pb-24">
        
        <div className="products-header">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Our <span className="text-[#d4af37]">Products</span>
          </h1>
          <p className="text-[#eee8de] opacity-70 max-w-2xl mb-12 text-lg leading-relaxed">
            Discover our extensive collection of premium outdoor lighting and urban furniture. 
            Engineered for durability, designed for elegance.
          </p>

          <div className="products-filter-bar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={`products-grid ${isAnimating ? 'filtering' : ''}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item-card">
              <div className="product-item-image-wrapper">
                <img src={product.image} alt={product.title} className="product-item-img" loading="lazy" />
                <div className="product-item-overlay">
                  <span className="product-view-btn">View Details</span>
                </div>
              </div>
              <div className="product-item-info">
                <span className="product-item-cat">{product.category}</span>
                <h3 className="product-item-title">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default Products
