import Image from 'next/image'

export default function Bio() {
  return (
    <div className="bio-page">
      <div className="bio-hero">
        <Image
          src="/images/asap_main.jpg"
          alt="Wandi de Carvalho Lucas"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div className="bio-hero-overlay" />
      </div>

      <div className="bio-content">
        <p className="section-label">About the Artist</p>
        <h2>Wandi de Carvalho Lucas</h2>
        <div className="bio-divider" />
        <p>
          Based in the historic city of Maastricht, Netherlands, Wandi de Carvalho Lucas is a
          visual artist dedicated to capturing the essence of form and color through contemporary
          painting.
        </p>
        <p>
          Her work explores the intimacy of portraiture — finding stillness in a subject&apos;s
          gaze, tracing the architecture of light across skin, and honoring the quiet power of
          presence. Each piece is a conversation between artist and subject, between observation
          and imagination.
        </p>
        <p>
          Working primarily in oils and mixed media, Wandi brings a rich, textural sensitivity
          to her canvases. Her practice is rooted in a deep respect for traditional techniques,
          while remaining open to the emotional possibilities of contemporary expression.
        </p>
      </div>
    </div>
  )
}
