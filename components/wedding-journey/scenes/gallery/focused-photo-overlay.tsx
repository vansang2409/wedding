"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { JourneyImage } from "../../data/wedding-journey-data"

type FocusedPhotoOverlayProps = {
  images: JourneyImage[]
  activeIndex: number | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

const swipeThreshold = 48

export function FocusedPhotoOverlay({ images, activeIndex, onClose, onPrevious, onNext }: FocusedPhotoOverlayProps) {
  const [loadedImage, setLoadedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const startXRef = useRef<number | null>(null)
  const startYRef = useRef<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const image = activeIndex === null ? null : images[activeIndex]
  const counter = activeIndex === null ? "" : `${activeIndex + 1} / ${images.length}`

  const adjacentImages = useMemo(() => {
    if (activeIndex === null || images.length <= 1) return []
    return [images[(activeIndex - 1 + images.length) % images.length], images[(activeIndex + 1) % images.length]]
  }, [activeIndex, images])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeIndex])

  useEffect(() => {
    setLoadedImage(null)
  }, [image?.src])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }

      if (event.key === "ArrowLeft") {
        onPrevious()
      }

      if (event.key === "ArrowRight") {
        onNext()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIndex, onClose, onNext, onPrevious])

  useEffect(() => {
    adjacentImages.forEach((nextImage) => {
      const preload = new window.Image()
      preload.src = nextImage.src
    })
  }, [adjacentImages])

  if (!mounted || !image || activeIndex === null) return null

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = event.clientX
    startYRef.current = event.clientY
  }

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null || startYRef.current === null) return

    handleSwipe(event.clientX, event.clientY)
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    if (!touch) return

    startXRef.current = touch.clientX
    startYRef.current = touch.clientY
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    if (!touch) return

    handleSwipe(touch.clientX, touch.clientY)
  }

  const handleSwipe = (clientX: number, clientY: number) => {
    if (startXRef.current === null || startYRef.current === null) return

    const deltaX = clientX - startXRef.current
    const deltaY = clientY - startYRef.current
    startXRef.current = null
    startYRef.current = null

    if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) < Math.abs(deltaY)) return

    if (deltaX > 0) {
      onPrevious()
      return
    }

    onNext()
  }

  return createPortal(
    <div
      className="gallery-lightbox fixed inset-0 z-[80] grid grid-rows-[auto_1fr_auto] overflow-hidden bg-[#32162F]/42 px-4 py-4 text-[#071936] backdrop-blur-2xl md:px-8 md:py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh cưới"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,249,239,0.82)_0%,rgba(239,233,255,0.46)_42%,rgba(50,22,47,0.24)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,204,255,0.28)_0%,rgba(244,201,107,0.12)_45%,transparent_72%)] blur-md" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="rounded-full border border-white/60 bg-white/58 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[0_12px_28px_rgba(62,54,44,0.08)] backdrop-blur-md [font-family:Arial,Helvetica,sans-serif]">
          {counter}
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/68 text-[#071936] shadow-[0_14px_34px_rgba(73,52,31,0.12)] backdrop-blur-md transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/86 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70"
          aria-label="Đóng ảnh"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative z-10 grid min-h-0 place-items-center py-4">
        <button
          type="button"
          onClick={onPrevious}
          className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/58 text-[#071936] shadow-[0_14px_34px_rgba(73,52,31,0.12)] backdrop-blur-md transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-1 hover:bg-white/82 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70 md:grid"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <figure className="gallery-lightbox-figure relative grid h-full max-h-[72svh] w-full max-w-6xl place-items-center">
          <div
            className={`absolute inset-0 m-auto h-full max-h-[72svh] w-full max-w-5xl rounded-[2.2rem] border border-white/55 bg-white/35 shadow-[0_24px_80px_rgba(72,55,38,0.14)] backdrop-blur-xl transition-opacity duration-500 ${
              loadedImage === image.src ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          >
            <div className="h-full w-full animate-pulse rounded-[2.2rem] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.78),rgba(217,204,255,0.26)_52%,rgba(244,201,107,0.1))]" />
          </div>
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1440}
            height={1080}
            priority
            sizes="100vw"
            className={`gallery-lightbox-image max-h-[72svh] w-auto max-w-full rounded-[2rem] border-[10px] border-white/86 object-contain shadow-[0_34px_90px_rgba(48,35,22,0.2)] transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loadedImage === image.src ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-3 scale-[0.985] opacity-0 blur-sm"
            }`}
            onLoadingComplete={() => setLoadedImage(image.src)}
          />
          <figcaption className="sr-only">{image.alt}</figcaption>
        </figure>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/58 text-[#071936] shadow-[0_14px_34px_rgba(73,52,31,0.12)] backdrop-blur-md transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:bg-white/82 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70 md:grid"
          aria-label="Ảnh tiếp theo"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="max-w-2xl text-sm font-semibold leading-6 text-[#FFF8EE] drop-shadow-[0_2px_8px_rgba(50,22,47,0.28)] md:text-base">
          {image.alt}
        </p>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onPrevious}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/64 text-[#071936] shadow-[0_14px_34px_rgba(73,52,31,0.12)] backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/64 text-[#071936] shadow-[0_14px_34px_rgba(73,52,31,0.12)] backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .gallery-lightbox {
          animation: lightbox-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
          touch-action: pan-y;
        }

        .gallery-lightbox-figure {
          animation: lightbox-figure-in 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes lightbox-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes lightbox-figure-in {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (max-width: 767px) {
          .gallery-lightbox {
            padding: 1rem;
          }

          .gallery-lightbox-image {
            max-height: 64svh;
            border-width: 7px;
            border-radius: 1.45rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-lightbox,
          .gallery-lightbox-figure,
          .gallery-lightbox-image {
            animation: none !important;
            transition-duration: 1ms !important;
          }
        }
      `}</style>
    </div>,
    document.body
  )
}
