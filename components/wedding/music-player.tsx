"use client"

import { useEffect, useRef, useState } from "react"
import { Music, Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowTooltip(false), 5000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    tryPlay()
    document.addEventListener("click", tryPlay, { once: true })
    document.addEventListener("touchstart", tryPlay, { once: true })

    return () => {
      document.removeEventListener("click", tryPlay)
      document.removeEventListener("touchstart", tryPlay)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
    setShowTooltip(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 hidden animate-bounce sm:block">
          <div className="rounded-xl border border-primary/20 bg-card/95 px-4 py-2 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 whitespace-nowrap text-sm text-foreground">
              <Music className="h-4 w-4 text-primary" />
              <span>Bật nhạc</span>
            </div>
            <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 border-b border-r border-primary/20 bg-card" />
          </div>
        </div>
      )}

      <button
        onClick={togglePlay}
        className="group relative h-14 w-14 overflow-hidden rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/40"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        type="button"
      >
        {isPlaying && (
          <>
            <div className="absolute inset-0 animate-ping rounded-full border-2 border-primary/30" />
            <div className="absolute -inset-2 animate-pulse rounded-full border border-primary/20" />
          </>
        )}

        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isPlaying
              ? "bg-gradient-to-br from-primary via-primary to-primary/80"
              : "border border-primary/30 bg-gradient-to-br from-card via-card to-card/90"
          }`}
        />

        <div
          className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${
            isPlaying ? "bg-primary/40 opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative flex h-full w-full items-center justify-center">
          {isPlaying ? (
            <Volume2 className="h-6 w-6 animate-pulse text-primary-foreground" />
          ) : (
            <VolumeX className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          )}
        </div>

        {isPlaying && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-4 items-end gap-0.5">
              {[0.3, 0.5, 0.3, 0.7, 0.4].map((height, index) => (
                <div
                  key={index}
                  className="w-0.5 animate-sound-wave rounded-full bg-primary-foreground/50"
                  style={{
                    height: `${height * 100}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="/ct.mp3" type="audio/mpeg" />
      </audio>

      <style jsx>{`
        @keyframes sound-wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1.2);
          }
        }
        .animate-sound-wave {
          animation: sound-wave 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
