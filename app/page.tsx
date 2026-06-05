import Image from 'next/image'

const artworks = [
  { id: 1, src: '/images/182929-2 copy 2.jpg', title: 'Artwork 1' },
  { id: 2, src: '/images/182929-2 2 copy.jpg', title: 'Artwork 2' },
  { id: 3, src: '/images/182929-2 2.jpg', title: 'Artwork 3' },
  { id: 4, src: '/images/182929-2 copy 3.jpg', title: 'Artwork 4' },
  { id: 5, src: '/images/182929-2 copy.jpg', title: 'Artwork 5' },
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
            priority={art.id === 1}
          />
        </div>
      ))}
    </div>
  )
}
