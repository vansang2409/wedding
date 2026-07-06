"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { weddingJourneyData } from "../data/wedding-journey-data"

type AssetLoaderContextValue = {
  criticalReady: boolean
}

const AssetLoaderContext = createContext<AssetLoaderContextValue>({
  criticalReady: false,
})

export function AssetLoaderProvider({ children }: { children: React.ReactNode }) {
  const [criticalReady, setCriticalReady] = useState(false)

  useEffect(() => {
    const criticalAssets = [
      weddingJourneyData.gallery[0]?.src,
      weddingJourneyData.couple.groom.character,
      weddingJourneyData.couple.bride.character,
    ].filter(Boolean)

    let cancelled = false

    Promise.all(
      criticalAssets.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new Image()
            image.onload = () => resolve()
            image.onerror = () => resolve()
            image.src = src
          }),
      ),
    ).then(() => {
      if (!cancelled) setCriticalReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(() => ({ criticalReady }), [criticalReady])

  return <AssetLoaderContext.Provider value={value}>{children}</AssetLoaderContext.Provider>
}

export function useAssetLoader() {
  return useContext(AssetLoaderContext)
}
