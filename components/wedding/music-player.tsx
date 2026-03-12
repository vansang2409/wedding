"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.muted = false
      audio.play().catch(() => { })
      setIsPlaying(!isPlaying)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setShowTooltip(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-bounce">
          <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-primary/20 whitespace-nowrap">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Music className="w-4 h-4 text-primary" />
              <span>Bat nhac</span>
            </div>
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-card rotate-45 border-r border-b border-primary/20" />
          </div>
        </div>
      )}

      {/* Music button */}
      <button
        onClick={togglePlay}
        className="group relative w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none overflow-hidden"
        aria-label={isPlaying ? "Tat nhac" : "Bat nhac"}
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
            <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse" />
          </>
        )}

        {/* Background gradient */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isPlaying
          ? "bg-gradient-to-br from-primary via-primary to-primary/80"
          : "bg-gradient-to-br from-card via-card to-card/90 border border-primary/30"
          }`} />

        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${isPlaying ? "bg-primary/40 opacity-100" : "opacity-0"
          }`} />

        {/* Icon */}
        <div className="relative flex items-center justify-center w-full h-full">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-primary-foreground animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          )}
        </div>

        {/* Sound waves animation when playing */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-end gap-0.5 h-4">
              {[0.3, 0.5, 0.3, 0.7, 0.4].map((height, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-primary-foreground/50 rounded-full animate-sound-wave"
                  style={{
                    height: `${height * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </button>

      <audio
        ref={audioRef}
        autoPlay
        loop
        muted
        preload="auto"
      >
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
