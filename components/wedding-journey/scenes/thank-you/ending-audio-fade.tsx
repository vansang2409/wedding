"use client"

import { useEffect } from "react"
import { useJourneyAudio } from "../../providers/audio-provider"
import { useScrollCamera } from "../../providers/scroll-camera-provider"

export function EndingAudioFade() {
  const { activeScene } = useScrollCamera()
  const { playing, fadeToVolume } = useJourneyAudio()

  useEffect(() => {
    if (!playing) return

    if (activeScene.id === "thank-you") {
      fadeToVolume(0.22)
      return
    }

    fadeToVolume(1)
  }, [activeScene.id, fadeToVolume, playing])

  return null
}
