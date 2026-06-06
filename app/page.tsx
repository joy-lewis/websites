import Image from 'next/image'

const artworks = [
  { id: 1, src: '/images/asap_main.jpg', title: 'ASAP' },
  { id: 2, src: '/images/brent_main.jpg', title: 'Brent' },
  { id: 3, src: '/images/cover_img.jpg', title: 'Artist Portrait' },
  { id: 4, src: '/images/nombili_main.jpg', title: 'Nombili' },
  { id: 5, src: '/images/ohandi_main.jpg', title: 'Ohandi' },
  { id: 6, src: '/images/ed6.jpg', title: 'Artwork' },
]

export default function Home() {
  return (
    <div className="gallery">
      {artworks.map((art) => (
        <div key={art.id} className="artwork-card">
          <Image
            src={art.src}
            alt={art.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={art.id <= 3}
          />
        </div>
      ))}
    </div>
  )
}
