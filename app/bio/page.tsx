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
          Wandi has been painting for as long as she can remember, as a pursuit, as well as, necessity.
          Every canvas began where language ended: in the feeling she couldn&apos;t speak out loud.
        </p>
        <p>
          Her inspirations live in the everyday and the electric, the bass in a hip hop track,
          the specific energy of meeting someone for the first time, a conversation inside a community
          that holds an entire world in it. She paints experiences. The ones that hit before you can name them.
        </p>
        <p>
          Her work centers Black people, rendered with intimacy, intention, and a quiet insistence on being seen.
          Growing up between cultures, she found in painting a space that belonged entirely to her,
          where her layered identity didn&apos;t need to be explained or edited.
        </p>
        <p>
          Now based in the Netherlands, where she studies European Law, she works in a crisp, graphic style,
          bold forms, clear lines, while moving toward the looser, more instinctive language of abstraction.
          The feeling always comes first. The painting follows.
        </p>

        <div className="bio-divider" />

        <p className="bio-social-label">Find my work on</p>
        <div className="bio-social">
          <a
            href="https://www.tiktok.com/@by.wandi"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/ft.wandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
