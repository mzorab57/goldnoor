import { useEffect, useRef } from 'react'

const titleRows = [
  [
    { text: 'We', className: 'slide-right', delay: '0.18s' },
    { text: 'make', className: 'slide-left', delay: '0.28s' },
  ],
  [
    { text: 'darkness', className: 'slide-up', delay: '0.42s' },
    { text: 'beautiful', className: 'slide-down', delay: '0.52s' },
  ],
]


const scrollLines = ['Illuminating', 'The Future']
const currentYear = new Date().getFullYear()

// تێبینی: باشترە ناوی فایلەکان بۆشایی (space) و کەوانەی تێدا نەبێت
const heroVideoWebm = '/assets/videos/fossil.webm'
const heroVideoMp4 = '/assets/videos/fossil (1).mp4' 

function HomeHero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // ئەمە زۆر گرنگە بۆ ئایفۆن بۆ ئەوەی دڵنیابێتەوە کە ڤیدیۆکە بێدەنگە پێش ئیشپێکردنی
      video.defaultMuted = true
      video.muted = true
      
      // بۆ ئەوەی لە ئایفۆن نەچێتە شاشەی گەورە (Fullscreen)
      video.setAttribute('playsinline', '') 

      // بە زۆر ئیشپێکردنی ڤیدیۆکە
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay was prevented by Safari:", error)
        })
      }
    }
  }, [])

  return (
    <section className="hero-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        defaultMuted // ئەمە کلیلی چارەسەرەکەیە لە ڕیاکت بۆ ئایفۆن
        loop
        playsInline // ئەمەیان ڕێگری دەکات لە کردنەوەی بە فول سکرین لە ئایفۆن
        preload="auto"
        // poster="/logo.jpg" // زۆر گرنگە ئەمە لابەریت لە کۆمێنت و وێنەیەکی بۆ دابنێیت (لە خوارەوە ڕوونم کردووەتەوە بۆچی)
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
      </video>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="site-shell hero-content">
        <div className="hero-copy">
          <div className="hero-title" aria-label="Gold Noor">
            {titleRows.map((row, rowIndex) => (
              <div key={rowIndex} className="hero-title-row">
                {row.map((part) => (
                  <span
                    key={part.text}
                    className={`hero-title-part ${part.className}`}
                    style={{ '--delay': part.delay }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      

        <div className="hero-scroll hero-reveal hero-reveal-up delay-5">
          {scrollLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero