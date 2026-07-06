"use client"

import { useCallback, useState } from "react"
import type { JourneyImage } from "../../data/wedding-journey-data"
import { FocusedPhotoOverlay } from "./focused-photo-overlay"
import { PhotoPlane } from "./photo-plane"

const desktopLayout = [
  { left: 38, top: 4, width: 30, rotate: 5, featured: true },
  { left: 4, top: 20, width: 26, rotate: -8 },
  { left: 68, top: 18, width: 25, rotate: 6 },
  { left: 15, top: 56, width: 24, rotate: 7 },
  { left: 44, top: 52, width: 28, rotate: -5 },
  { left: 70, top: 60, width: 23, rotate: 9 },
]

export function FloatingPhotoField({ images }: { images: JourneyImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setActiveIndex(index), [])
  const closeLightbox = useCallback(() => setActiveIndex(null), [])
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length))
  }, [images.length])
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length))
  }, [images.length])

  return (
    <>
      <div className="memory-collage pointer-events-none relative z-10 min-h-[34rem]">
        {images.map((image, index) => (
          <PhotoPlane
            key={image.src}
            image={image}
            index={index}
            layout={desktopLayout[index] ?? desktopLayout[0]}
            onOpen={() => openLightbox(index)}
          />
        ))}
      </div>
      <FocusedPhotoOverlay images={images} activeIndex={activeIndex} onClose={closeLightbox} onPrevious={showPrevious} onNext={showNext} />

      <style jsx>{`
        @media (max-width: 767px) {
          .memory-collage {
            display: grid;
            min-height: 0;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}
