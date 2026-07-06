"use client"

import { Menu, Music2, VolumeX } from "lucide-react"
import type { JourneyScene } from "../data/wedding-journey-data"
import { useJourneyAudio } from "../providers/audio-provider"
import { useScrollCamera } from "../providers/scroll-camera-provider"

const navItems = [
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#wedding-info", label: "Wedding" },
  { href: "#countdown", label: "Countdown" },
]

export function JourneyControls({ scenes }: { scenes: JourneyScene[] }) {
  const { playing, toggleAudio } = useJourneyAudio()
  const { activeScene, progress } = useScrollCamera()
  const currentIndex = Math.max(scenes.findIndex((scene) => scene.id === activeScene.id), 0)
  const nextScene = scenes[Math.min(currentIndex + 1, scenes.length - 1)]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between">
        <a
          href="#opening"
          className="group relative grid h-14 w-14 place-items-center rounded-full border border-white/55 bg-white/34 text-[#201939] shadow-[0_16px_36px_rgba(44,30,66,0.08)] backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/56 focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
          aria-label="Về đầu thiệp cưới"
        >
          <span className="absolute left-3 top-2 text-[1.15rem] leading-none [font-family:var(--journey-serif)]">V</span>
          <span className="absolute right-3 bottom-2 text-[1.15rem] leading-none [font-family:var(--journey-serif)]">S</span>
          <span className="h-8 w-px rotate-45 bg-[#D9A55A]/70 transition group-hover:bg-[#C79243]" />
        </a>

        <nav className="hidden items-center gap-10 rounded-full border border-white/35 bg-white/22 px-8 py-3 text-sm text-[#201939] shadow-[0_16px_36px_rgba(44,30,66,0.06)] backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [font-family:var(--journey-serif)] hover:text-[#6F5598] focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleAudio}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#6F5598]/20 bg-white/34 text-[#201939] shadow-[0_16px_36px_rgba(44,30,66,0.08)] backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/58 focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
            aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
          >
            {playing ? <Music2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
          <a
            href={`#${nextScene.id}`}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#6F5598]/20 bg-white/34 text-[#201939] shadow-[0_16px_36px_rgba(44,30,66,0.08)] backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/58 focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
            aria-label="Chuyển cảnh tiếp theo"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none mx-auto mt-3 h-px max-w-[1480px] origin-left bg-gradient-to-r from-[#D8C8F1] via-[#D9A55A] to-transparent opacity-70 transition-opacity duration-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
