"use client"

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { weddingJourneyData, type JourneyScene } from "../data/wedding-journey-data"
import { getActiveScene, getSceneProgress } from "../animation/scene-registry"

type ScrollCameraContextValue = {
  progress: number
  sceneProgress: number
  activeScene: JourneyScene
}

const initialScene = weddingJourneyData.scenes[0]

const ScrollCameraContext = createContext<ScrollCameraContextValue>({
  progress: 0,
  sceneProgress: 0,
  activeScene: initialScene,
})

export function ScrollCameraProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const sync = () => {
      frameRef.current = null
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const nextProgress = Math.min(Math.max(window.scrollY / scrollable, 0), 1)
      setProgress(nextProgress)
      document.documentElement.style.setProperty("--journey-progress", nextProgress.toFixed(4))
    }

    const requestSync = () => {
      if (frameRef.current !== null) return
      frameRef.current = requestAnimationFrame(sync)
    }

    sync()
    window.addEventListener("scroll", requestSync, { passive: true })
    window.addEventListener("resize", requestSync)

    return () => {
      window.removeEventListener("scroll", requestSync)
      window.removeEventListener("resize", requestSync)
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const activeScene = getActiveScene(weddingJourneyData.scenes, progress)
  const sceneProgress = getSceneProgress(activeScene, progress)
  const value = useMemo(() => ({ progress, sceneProgress, activeScene }), [activeScene, progress, sceneProgress])

  return <ScrollCameraContext.Provider value={value}>{children}</ScrollCameraContext.Provider>
}

export function useScrollCamera() {
  return useContext(ScrollCameraContext)
}
