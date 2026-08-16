import { useEffect, useMemo, useRef, useState } from 'react'
import parkLight from '../../../assets/products/park-light.png'
import classicLight from '../../../assets/products/classic-light.png'
import classic2 from '../../../assets/products/classic2.png'
import lawnLight from '../../../assets/products/lawan-light.png'
import streetLight from '../../../assets/products/street-light.png'
import benches from '../../../assets/products/beches.png'
import urbanFurniture from '../../../assets/products/urban.png'

const faceNames = [
  'Park Lights',
  'Classic Lights',
  'Street Lights',
  'Lawn Lights',
  'Trash and Benches',
  'Urban Furniture',
]

const faceMap = ['top', 'front', 'right', 'back', 'left', 'bottom']

const cubeStops = [
  { rx: 90, ry: 0 },
  { rx: 0, ry: 0 },
  { rx: 0, ry: -90 },
  { rx: 0, ry: -180 },
  { rx: 0, ry: -270 },
  { rx: -90, ry: -360 },
]

const products = [
  {
    id: 'park-lights',
    tag: 'GoldNoor Outdoor Collection',
    title: ['Park', 'Lights'],
    body: 'Modern decorative poles and arms that bring identity and warmth to public parks, walkways, and residential landscapes.',
    stats: [
      { value: '32', label: 'Models' },
      { value: '360', label: 'Degrees' },
      { value: '1', label: 'Vision' },
    ],
    align: 'left',
    cta: 'Explore',
    image: parkLight,
  },
  {
    id: 'classic-lights',
    tag: '01 Heritage Collection',
    title: ['Classic', 'Lights'],
    body: 'Authentic cast lanterns and decorated columns for gardens, heritage districts, and architectural projects that need timeless elegance.',
    stats: [
      { value: '21', label: 'Models' },
      { value: '100', label: 'Years Style' },
    ],
    align: 'right',
    cta: 'Turn',
    image: classicLight,
  },
  {
    id: 'street-lights',
    tag: '02 Urban Collection',
    title: ['Street', 'Lights'],
    body: 'Robust street poles and high-mast solutions designed for highways, boulevards, and demanding urban infrastructure projects.',
    stats: [
      { value: '21', label: 'Models' },
      { value: 'IP66', label: 'Rated' },
    ],
    align: 'left',
    cta: 'Turn',
    image: streetLight,
  },
  {
    id: 'lawn-lights',
    tag: '03 Garden Collection',
    title: ['Lawn', 'Lights'],
    body: 'Contemporary bollards and pathway lights that softly guide movement through gardens, courtyards, and carefully designed outdoor spaces.',
    stats: [
      { value: '18', label: 'Models' },
      { value: 'LED', label: 'Efficient' },
      { value: '5', label: 'Years Warranty' },
    ],
    align: 'right',
    cta: 'Turn',
    image: lawnLight,
  },
  {
    id: 'trash-benches',
    tag: '04 Urban Furniture',
    title: ['Trash and', 'Benches'],
    body: 'Coordinated benches, chairs, and waste bins that complete a unified streetscape with weather-resistant materials and clean finishing.',
    stats: [
      { value: '4', label: 'Models' },
      { value: 'SS', label: 'Steel' },
    ],
    align: 'left',
    cta: 'Turn',
    image: benches,
  },
  {
    id: 'urban-furniture',
    tag: '05 Accessories',
    title: ['Urban', 'Furniture'],
    body: 'High-mast light towers, flag poles, and display structures engineered to become durable landmarks in plazas and civic spaces.',
    stats: [
      { value: '5', label: 'Models' },
      { value: '40m', label: 'Max Height' },
    ],
    align: 'right',
    cta: 'Begin Again',
    image: urbanFurniture,
  },
]

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

function Product() {
  const rootRef = useRef(null)
  
  // Refs بۆ دەستکاری کردنی ڕاستەوخۆی DOM بۆ ئەوەی ڕێگری لە Re-render ی ڕیاکت بکەین
  const cubeRef = useRef(null)
  const percentTextRef = useRef(null)
  const barFillRef = useRef(null)
  const stopIndexRef = useRef(null)
  
  // State تەنها بۆ ئەو شتانەی پێویستە بگۆڕێن (وەک گۆڕینی سێکشنەکان کە زۆر کەم ڕوودەدات)
  const [activeIndex, setActiveIndex] = useState(0)
  const [theme, setTheme] = useState('gold')

  // گۆڕاوەکان بۆ دروستکردنی ئەنیمەیشنی نەرم (Smooth Scroll / Lerp)
  const scrollData = useRef({ current: 0, target: 0 })
  const requestRef = useRef(null)

  const sectionIds = useMemo(
    () => products.map((product) => `product-section-${product.id}`),
    []
  )

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const sections = Array.from(root.querySelectorAll('.product-showcase-panel'))
    const revealItems = Array.from(root.querySelectorAll('.product-reveal'))

    // 1. حسابکردنی Target Progress لەسەر سکڕۆڵ (بەبێ ڕیاکت ستەیت)
    const handleScroll = () => {
      const rootRect = root.getBoundingClientRect()
      const totalScrollable = Math.max(rootRect.height - window.innerHeight, 1)
      const rawProgress = Math.min(Math.max((-rootRect.top || 0) / totalScrollable, 0), 1)
      scrollData.current.target = rawProgress
    }

    // 2. ئەنیمەیشن لووپ (60 FPS) بۆ نوێکردنەوەی شێوەکان بە نەرمی
    const renderLoop = () => {
      // Lerp (Linear Interpolation) - بۆ نەرمکردنی جوڵەکە
      scrollData.current.current += (scrollData.current.target - scrollData.current.current) * 0.08
      const p = scrollData.current.current

      // حیسابکردنی جوڵەی سێجاکە
      const t = p * (cubeStops.length - 1)
      const i = Math.min(Math.floor(t), cubeStops.length - 2)
      const blend = easeInOut(t - i)
      const from = cubeStops[i]
      const to = cubeStops[i + 1]
      const rx = from.rx + (to.rx - from.rx) * blend
      const ry = from.ry + (to.ry - from.ry) * blend

      const stopIndex = Math.min(cubeStops.length - 1, Math.round(p * (cubeStops.length - 1)))
      const pct = String(Math.round(p * 100))

      // گۆڕینی DOM ڕاستەوخۆ خێراترین ڕێگایە لە مۆبایل
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
      }
      if (percentTextRef.current) {
        percentTextRef.current.innerText = `${pct.padStart(3, '0')}%`
      }
      if (barFillRef.current) {
        barFillRef.current.style.width = `${pct}%`
      }
      if (stopIndexRef.current) {
        stopIndexRef.current.innerText = String(stopIndex + 1).padStart(2, '0')
      }

      requestRef.current = requestAnimationFrame(renderLoop)
    }

    // 3. ئۆبزێرڤەر بۆ ئەکتیڤکردنی دەقەکان (بۆ ئەوەی پێویست بە حیساباتی ئاڵۆز نەکات لە سکڕۆڵدا)
    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { threshold: 0.45 }
    )
    sections.forEach((s) => activeSectionObserver.observe(s))

    // 4. ئۆبزێرڤەر بۆ دەرکەوتنی دەقەکان (Reveal)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )
    revealItems.forEach((item) => revealObserver.observe(item))

    // دەستپێکردن
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial calc
    requestRef.current = requestAnimationFrame(renderLoop)

    // پاککردنەوە
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      cancelAnimationFrame(requestRef.current)
      activeSectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={rootRef}
      className={`product-showcase product-theme-${theme}`}
      id="collections"
    >
      <div className="product-showcase-sticky">
        <div className="product-showcase-scene" aria-hidden="true">
          {/* بەکارهێنانی Ref لەبری State بۆ سێجاکە */}
          <div ref={cubeRef} className="product-cube">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-cube-face product-cube-face-${faceMap[index]}`}
              >
                <img
                  src={product.image}
                  alt={product.title.join(' ')}
                  loading="lazy"
                  className="product-cube-img"
                />
                <span className="product-cube-placeholder">{faceNames[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-showcase-hud">
          {/* بەکارهێنانی Ref بۆ دەقەکان */}
          <div ref={percentTextRef} className="product-showcase-pct">
            000%
          </div>
          <div className="product-showcase-bar">
            <div ref={barFillRef} className="product-showcase-bar-fill" />
          </div>
          <div className="product-showcase-label">{faceNames[activeIndex]}</div>
        </div>

        <div className="product-showcase-dots" aria-label="Collection navigation">
          {products.map((product, index) => (
            <a
              key={product.id}
              href={`#${sectionIds[index]}`}
              className={`product-showcase-dot ${activeIndex === index ? 'is-active' : ''}`}
              aria-label={product.title.join(' ')}
            />
          ))}
        </div>

        <button
          type="button"
          className="product-theme-toggle"
          onClick={() => setTheme((current) => (current === 'gold' ? 'ice' : 'gold'))}
          aria-label="Toggle showcase theme"
        >
          <span className="product-theme-toggle-core" />
        </button>

        <div className="product-face-caption" aria-live="polite">
          <div ref={stopIndexRef} className="product-face-caption-num">
            01
          </div>
          <div className="product-face-caption-name">{faceNames[activeIndex]}</div>
        </div>
      </div>

      <div className="product-showcase-scroll">
        {products.map((product, index) => (
          <section
            key={product.id}
            id={sectionIds[index]}
            className={`product-showcase-panel product-align-${product.align}`}
          >
            <div className={`product-card product-card-${product.align}`}>
              {index > 0 && <div className="product-card-line product-reveal" />}
              <div className="product-card-tag product-reveal">{product.tag}</div>
              <h2 className="product-card-title product-reveal">
                {product.title[0]}
                <br />
                {product.title[1]}
              </h2>
              <p className="product-card-body product-reveal">{product.body}</p>

              <div className="product-card-stats product-reveal">
                {product.stats.map((stat) => (
                  <div key={stat.label} className="product-card-stat">
                    <span className="product-card-stat-num">{stat.value}</span>
                    <span className="product-card-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="product-card-actions product-reveal">
                {index > 0 && (
                  <a className="product-card-back" href={`#${sectionIds[index - 1]}`}>
                    Back
                  </a>
                )}
                <a
                  className="product-card-cta"
                  href={`#${sectionIds[index === products.length - 1 ? 0 : index + 1]}`}
                >
                  {product.cta}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Product