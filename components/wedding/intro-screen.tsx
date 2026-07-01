"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function IntroScreen({ onOpen }: { onOpen: () => void }) {
  const [show, setShow] = useState(true)

  const handleOpen = () => {
    setShow(false)
    onOpen()
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8efff]/82 px-4 backdrop-blur-md"
      onClick={handleOpen}
    >
      <div className="relative w-full max-w-[700px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-white/82 to-violet-100/84 px-8 py-20 text-center shadow-2xl">
        <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <h2 className="mb-12 text-2xl font-display text-purple-400 md:text-3xl">
          The Wedding Invitation
        </h2>

        <button
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-t from-violet-100 to-violet-600 shadow-xl transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Mở thiệp cưới"
          type="button"
        >
          <Heart className="h-11 w-11 fill-white text-white" />
        </button>

        <p className="mt-10 text-lg text-purple-400">
          Chạm để mở thiệp
        </p>

        <h1 className="mt-2 text-center font-display text-[clamp(23px,6vw,50px)] text-gray-800">
          Văn Sang <span className="text-purple-300">&</span> Thu Thương
        </h1>
      </div>
    </div>
  )
}
