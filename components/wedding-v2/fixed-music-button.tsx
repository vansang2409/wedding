"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type FixedMusicButtonProps = {
  src: string
  label: string
}

export function FixedMusicButton({ src, label }: FixedMusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      audio.muted = false
      audio.volume = 0.52
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [])

  useEffect(() => {
    const attempts = [
      window.setTimeout(() => void play(), 0),
      window.setTimeout(() => void play(), 450),
      window.setTimeout(() => void play(), 1400),
    ]

    const handlePageShow = () => {
      void play()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") void play()
    }

    window.addEventListener("pageshow", handlePageShow)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      attempts.forEach((attempt) => window.clearTimeout(attempt))
      window.removeEventListener("pageshow", handlePageShow)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [play])

  useEffect(() => {
    const handleFirstGesture = (event: Event) => {
      if (event.target instanceof Element && event.target.closest("[data-wedding-v2-music]")) return
      void play()
    }

    window.addEventListener("pointerdown", handleFirstGesture, { once: true, capture: true })
    window.addEventListener("touchstart", handleFirstGesture, { once: true, capture: true, passive: true })
    window.addEventListener("click", handleFirstGesture, { once: true, capture: true })
    window.addEventListener("keydown", handleFirstGesture, { once: true, capture: true })

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture, { capture: true })
      window.removeEventListener("touchstart", handleFirstGesture, { capture: true })
      window.removeEventListener("click", handleFirstGesture, { capture: true })
      window.removeEventListener("keydown", handleFirstGesture, { capture: true })
    }
  }, [play])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      await play()
      return
    }

    audio.pause()
    setPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop autoPlay />
      <button
        className={styles.fixedMusicButton}
        type="button"
        aria-label={label}
        aria-pressed={playing}
        data-playing={playing}
        data-wedding-v2-music
        onClick={toggle}
      >
        <span className={styles.musicOrb} aria-hidden="true" />
        <svg className={styles.fixedMusicIcon} viewBox="0 0 24 28" aria-hidden="true">
          <path
            d="M9 20.5V6.6l10-2.4v13.9"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M9 20.5c0 1.7-1.7 3.1-3.7 3.1S1.7 22.6 1.7 21s1.7-3.1 3.7-3.1S9 18.8 9 20.5Zm10-2.4c0 1.7-1.7 3.1-3.7 3.1s-3.7-1.1-3.7-2.7 1.7-3.1 3.7-3.1 3.7 1 3.7 2.7Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      </button>
    </>
  )
}
