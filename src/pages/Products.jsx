import React, { useState, useEffect } from 'react'
import parkLight  from '../assets/products/park-light.png'
import classicLight  from '../assets/products/classic-light.png'
import classic2  from '../assets/products/classic2.png'

import  '../styles/products-page.css'

const allProducts = [
  { id: 1, title: 'Riverside Lantern', category: 'Classic', image: parkLight },
  { id: 2, title: 'Aria High-Mast', category: 'Outdoor', image: classicLight },
  { id: 3, title: 'Metro Bollard', category: 'Urban', image: classic2 },
  { id: 4, title: 'Heritage Post', category: 'Classic', image: parkLight },
  { id: 5, title: 'Lumina Street Light', category: 'Outdoor', image: classicLight },
  { id: 6, title: 'Zen Bench & Light', category: 'Urban', image: classic2 },
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
        
        <div className="products-header relative my-20">
          {/* Subtle ambient glow behind the text */}
          <div className="absolute -top-32 -left-20 w-100 h-100 bg-[#f3c042]/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
             
              <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black text-white mb-6 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                Our <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f3c042] via-[#ffdf85] to-[#f3c042]">Products</span>
              </h1>
              <div className="border-l-2 border-[#f3c042]/30 pl-6 py-1 mt-8">
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                  Discover our extensive collection of premium outdoor lighting and urban furniture. 
                  <span className="block mt-2 text-white/90 font-medium">Engineered for durability, designed for elegance.</span>
                </p>
              </div>
            </div>

            <div className="products-filter-bar flex-shrink-0 bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-white/10 self-start md:self-end">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn !m-0 !mr-2 last:!mr-0 rounded-xl transition-all duration-300 ${filter === cat ? 'active !bg-[#f3c042] !text-black shadow-[0_0_20px_rgba(243,192,66,0.3)]' : 'hover:bg-white/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
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
