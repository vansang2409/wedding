"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react"

const galleryImages = [
  { src: "/images/1.jpg", alt: "Ảnh cưới 1" },
  { src: "/images/2.jpg", alt: "Ảnh cưới 2" },
  { src: "/images/3.jpg", alt: "Ảnh cưới 3" },
  { src: "/images/4.jpg", alt: "Ảnh cưới 4" },
  { src: "/images/5.jpg", alt: "Ảnh cưới 5" },
  { src: "/images/6.jpg", alt: "Ảnh cưới 6" },
  { src: "/images/7.jpg", alt: "Ảnh cưới 7" },
  { src: "/images/8.jpg", alt: "Ảnh cưới 8" },
  { src: "/images/9.jpg", alt: "Ảnh cưới 9" },
  { src: "/images/10.jpg", alt: "Ảnh cưới 10" },
]

export function GallerySection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1
      )
    }
  }, [lightboxIndex])

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1
      )
    }
  }, [lightboxIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, goToPrevious, goToNext])

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Khoảnh Khắc Đẹp
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-5 h-5 text-primary/60 fill-primary/20" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer aspect-square ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ 
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1)`,
                transitionDelay: `${index * 80}ms` 
              }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-card" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <span className="text-card font-display font-medium text-sm">Xem ảnh</span>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-card/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-card/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors border border-card/20"
            aria-label="Đóng"
          >
            <X className="w-6 h-6 text-card" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 md:left-8 w-14 h-14 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors border border-card/20 group"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-8 h-8 text-card group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 md:right-8 w-14 h-14 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors border border-card/20 group"
            aria-label="Ảnh sau"
          >
            <ChevronRight className="w-8 h-8 text-card group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Image */}
          <div
            className="relative flex items-center justify-center w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1000}
              height={800}
              priority
              className="object-contain rounded-lg max-h-[80vh] w-auto h-auto"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-card/10 rounded-full border border-card/20">
            <span className="text-card font-medium">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
