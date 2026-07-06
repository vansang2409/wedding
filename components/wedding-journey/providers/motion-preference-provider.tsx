"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { getDeviceProfile, type DeviceProfile } from "../utils/device-profile"

type MotionPreferenceContextValue = {
  reducedMotion: boolean
  deviceProfile: DeviceProfile
}

const MotionPreferenceContext = createContext<MotionPreferenceContextValue>({
  reducedMotion: false,
  deviceProfile: "high",
})

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [deviceProfile, setDeviceProfile] = useState<DeviceProfile>("high")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const sync = () => {
      setReducedMotion(mediaQuery.matches)
      setDeviceProfile(getDeviceProfile(window.innerWidth))
    }

    sync()
    mediaQuery.addEventListener("change", sync)
    window.addEventListener("resize", sync)

    return () => {
      mediaQuery.removeEventListener("change", sync)
      window.removeEventListener("resize", sync)
    }
  }, [])

  const value = useMemo(() => ({ reducedMotion, deviceProfile }), [deviceProfile, reducedMotion])

  return <MotionPreferenceContext.Provider value={value}>{children}</MotionPreferenceContext.Provider>
}

export function useMotionPreference() {
  return useContext(MotionPreferenceContext)
}
