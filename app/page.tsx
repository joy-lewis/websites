import Image from 'next/image'

const artworks = [
  { id: 1, src: '/images/cover_img.jpg',    title: 'Study in Light',    year: '2024', layout: 'gallery-item-wide', ratio: 'landscape' },
  { id: 2, src: '/images/asap_main.jpg',    title: 'ASAP',              year: '2023', layout: '',                  ratio: 'portrait'  },
  { id: 3, src: '/images/brent_main.jpg',   title: 'Brent',             year: '2023', layout: 'gallery-item-tall', ratio: 'portrait'  },
  { id: 4, src: '/images/nombili_main.jpg', title: 'Nombili',           year: '2024', layout: '',                  ratio: 'square'    },
  { id: 5, src: '/images/ohandi_main.jpg',  title: 'Ohandi',            year: '2024', layout: '',                  ratio: 'square'    },
  { id: 6, src: '/images/ed6.jpg',          title: 'Ed. VI',            year: '2023', layout: 'gallery-item-wide', ratio: 'landscape' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-image-wrap">
          <Image
            src="/images/cover_img.jpg"
            alt="Wandi de Carvalho Lucas — Artist"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.65)' }}
          />
        </div>
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>Wandi de Carvalho Lucas</h2>
            <p>Visual Artist · Maastricht, Netherlands</p>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* ── Gallery ───────────────────────────── */}
      <section className="gallery-section">
        <div className="gallery-header">
          <h2>Selected Works</h2>
          <span className="gallery-count">{artworks.length} pieces</span>
        </div>
        <div className="gallery">
          {artworks.map((art) => (
            <div key={art.id} className={`artwork-card ${art.ratio} ${art.layout}`}>
              <Image
                src={art.src}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={art.id <= 3}
              />
              <div className="artwork-info">
                <div className="artwork-title">{art.title}</div>
                <div className="artwork-meta">{art.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

