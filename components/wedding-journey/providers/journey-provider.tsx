"use client"

import { AssetLoaderProvider } from "./asset-loader-provider"
import { AudioProvider } from "./audio-provider"
import { MotionPreferenceProvider } from "./motion-preference-provider"
import { ScrollCameraProvider } from "./scroll-camera-provider"

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionPreferenceProvider>
      <AssetLoaderProvider>
        <ScrollCameraProvider>
          <AudioProvider>{children}</AudioProvider>
        </ScrollCameraProvider>
      </AssetLoaderProvider>
    </MotionPreferenceProvider>
  )
}
