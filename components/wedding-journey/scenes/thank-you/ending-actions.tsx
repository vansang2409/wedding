"use client"

import { RotateCcw, Share2 } from "lucide-react"
import { useState } from "react"
import { weddingJourneyData } from "../../data/wedding-journey-data"

export function EndingActions() {
  const [shareLabel, setShareLabel] = useState("Chia sẻ")

  const onShare = async () => {
    const shareData = {
      title: weddingJourneyData.couple.displayNames,
      text: `${weddingJourneyData.event.title}: ${weddingJourneyData.event.displayDate}`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(window.location.href)
      setShareLabel("Đã copy link")
      window.setTimeout(() => setShareLabel("Chia sẻ"), 1800)
    } catch {
      setShareLabel("Chia sẻ")
    }
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href="#opening"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#6F5598]/18 bg-white/54 px-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#201939] shadow-[0_12px_28px_rgba(53,35,76,0.08)] backdrop-blur-md transition duration-500 hover:-translate-y-0.5 hover:bg-white/76 focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Xem lại
      </a>
      <button
        type="button"
        onClick={onShare}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#6F5598] px-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_36px_rgba(111,85,152,0.28)] transition duration-500 hover:-translate-y-0.5 hover:bg-[#5E4784] focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/70"
      >
        <Share2 className="h-3.5 w-3.5" />
        {shareLabel}
      </button>
    </div>
  )
}
