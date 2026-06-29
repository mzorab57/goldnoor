import { useEffect, useMemo, useRef, useState } from 'react'

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
    body:
      'Modern decorative poles and arms that bring identity and warmth to public parks, walkways, and residential landscapes.',
    stats: [
      { value: '32', label: 'Models' },
      { value: '360', label: 'Degrees' },
      { value: '1', label: 'Vision' },
    ],
    align: 'left',
    cta: 'Explore',
    image:
      'https://kimi-web-img.moonshot.cn/img/xeratech.in/6af4859eeee00fc47c84a73ab0f536f38614dd11.jpg',
  },
  {
    id: 'classic-lights',
    tag: '01 Heritage Collection',
    title: ['Classic', 'Lights'],
    body:
      'Authentic cast lanterns and decorated columns for gardens, heritage districts, and architectural projects that need timeless elegance.',
    stats: [
      { value: '21', label: 'Models' },
      { value: '100', label: 'Years Style' },
    ],
    align: 'right',
    cta: 'Turn',
    image:
      'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/de8c155f035a2af07e969e7c84b160849f6b6b76.webp',
  },
  {
    id: 'street-lights',
    tag: '02 Urban Collection',
    title: ['Street', 'Lights'],
    body:
      'Robust street poles and high-mast solutions designed for highways, boulevards, and demanding urban infrastructure projects.',
    stats: [
      { value: '21', label: 'Models' },
      { value: 'IP66', label: 'Rated' },
    ],
    align: 'left',
    cta: 'Turn',
    image:
      'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/9fd389e80efd71617836193c06777304fd672d5a.webp',
  },
  {
    id: 'lawn-lights',
    tag: '03 Garden Collection',
    title: ['Lawn', 'Lights'],
    body:
      'Contemporary bollards and pathway lights that softly guide movement through gardens, courtyards, and carefully designed outdoor spaces.',
    stats: [
      { value: '18', label: 'Models' },
      { value: 'LED', label: 'Efficient' },
      { value: '5', label: 'Years Warranty' },
    ],
    align: 'right',
    cta: 'Turn',
    image:
      'https://kimi-web-img.moonshot.cn/img/tekled.co.uk/dd38fc4957eae27ce5ac362dbd6871cedd9b4b22.webp',
  },
  {
    id: 'trash-benches',
    tag: '04 Urban Furniture',
    title: ['Trash and', 'Benches'],
    body:
      'Coordinated benches, chairs, and waste bins that complete a unified streetscape with weather-resistant materials and clean finishing.',
    stats: [
      { value: '4', label: 'Models' },
      { value: 'SS', label: 'Steel' },
    ],
    align: 'left',
    cta: 'Turn',
    image:
      'https://kimi-web-img.moonshot.cn/img/img.archiexpo.com/2fa5145e39cefc05cb1341ae21a8c62e53cced99.jpg',
  },
  {
    id: 'urban-furniture',
    tag: '05 Accessories',
    title: ['Urban', 'Furniture'],
    body:
      'High-mast light towers, flag poles, and display structures engineered to become durable landmarks in plazas and civic spaces.',
    stats: [
      { value: '5', label: 'Models' },
      { value: '40m', label: 'Max Height' },
    ],
    align: 'right',
    cta: 'Begin Again',
    image:
      'https://kimi-web-img.moonshot.cn/img/image.made-in-china.com/968135a394df213ce319fa71258b6880a4401365.webp',
  },
]

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

function Product() {
  const rootRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [theme, setTheme] = useState('gold')

  const sectionIds = useMemo(
    () => products.map((product) => `product-section-${product.id}`),
    [],
  )

  useEffect(() => {
    const root = rootRef.current
    if (!root) {
      return undefined
    }

    const sections = Array.from(root.querySelectorAll('.product-showcase-panel'))
    const revealItems = Array.from(root.querySelectorAll('.product-reveal'))

    const updateState = () => {
      const rootRect = root.getBoundingClientRect()
      const totalScrollable = Math.max(rootRect.height - window.innerHeight, 1)
      const rawProgress = Math.min(
        Math.max((-rootRect.top || 0) / totalScrollable, 0),
        1,
      )
      const currentIndex = Math.min(
        products.length - 1,
        Math.max(
          0,
          sections.findIndex((section) => {
            const rect = section.getBoundingClientRect()
            return rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.45
          }),
        ),
      )

      setProgress(rawProgress)
      setActiveIndex(currentIndex === -1 ? 0 : currentIndex)
    }

    const handleScroll = () => {
      window.requestAnimationFrame(updateState)
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealItems.forEach((item) => revealObserver.observe(item))

    updateState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      revealObserver.disconnect()
    }
  }, [])

  const stopIndex = Math.min(
    cubeStops.length - 1,
    Math.round(progress * (cubeStops.length - 1)),
  )

  const cubeTransform = useMemo(() => {
    const t = progress * (cubeStops.length - 1)
    const i = Math.min(Math.floor(t), cubeStops.length - 2)
    const blend = easeInOut(t - i)
    const from = cubeStops[i]
    const to = cubeStops[i + 1]
    const rx = from.rx + (to.rx - from.rx) * blend
    const ry = from.ry + (to.ry - from.ry) * blend

    return `rotateX(${rx}deg) rotateY(${ry}deg)`
  }, [progress])

  return (
    <section
      ref={rootRef}
      className={`product-showcase  product-theme-${theme}`}
      id="collections"
    >
      <div className="product-showcase-sticky">
        <div className="product-showcase-scene" aria-hidden="true">
          <div className="product-cube" style={{ transform: cubeTransform }}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-cube-face product-cube-face-${faceMap[index]}`}
              >
                <img src={product.image} alt={product.title.join(' ')} loading="lazy" className='border-8 border-mist-900 p-8 bg-linear-to-br from-bs-mist-700  to-mist-700' />
                <span className="product-cube-placeholder">{faceNames[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-showcase-hud">
          <div className="product-showcase-pct">
            {String(Math.round(progress * 100)).padStart(3, '0')}%
          </div>
          <div className="product-showcase-bar">
            <div
              className="product-showcase-bar-fill"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
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
          <div className="product-face-caption-num">
            {String(stopIndex + 1).padStart(2, '0')}
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
