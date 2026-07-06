"use client"

import { Code2 } from "lucide-react"
import { useAssetLoader } from "./providers/asset-loader-provider"

export function LoadingExperience() {
  const { criticalReady } = useAssetLoader()

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[90] grid place-items-center bg-[#F6EFE4] transition-opacity duration-500 ${
        criticalReady ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative grid h-16 w-16 place-items-center text-[#071936]">
        <Code2 className="h-12 w-12" strokeWidth={2.4} />
        <span className="absolute -left-20 h-4 w-4 animate-spin rounded-full border-4 border-[#2b9fda] border-r-transparent" />
      </div>
    </div>
  )
}
