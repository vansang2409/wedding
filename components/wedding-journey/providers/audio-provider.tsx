"use client"

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"
import { weddingJourneyData } from "../data/wedding-journey-data"

type AudioContextValue = {
  playing: boolean
  toggleAudio: () => void
  fadeToVolume: (volume: number) => void
}

const AudioContext = createContext<AudioContextValue>({
  playing: false,
  toggleAudio: () => undefined,
  fadeToVolume: () => undefined,
})

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleAudio = useCallback(() => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.volume = 1
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      return
    }

    audioRef.current.pause()
    setPlaying(false)
  }, [])

  const fadeToVolume = useCallback((volume: number) => {
    const audio = audioRef.current
    if (!audio) return

    const targetVolume = Math.min(Math.max(volume, 0), 1)
    const startVolume = audio.volume
    const startTime = performance.now()
    const duration = 1400

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      audio.volume = startVolume + (targetVolume - startVolume) * progress
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [])

  const value = useMemo(() => ({ playing, toggleAudio, fadeToVolume }), [fadeToVolume, playing, toggleAudio])

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio ref={audioRef} src={weddingJourneyData.audio.src} preload="none" loop />
    </AudioContext.Provider>
  )
}

export function useJourneyAudio() {
  return useContext(AudioContext)
}
