import { weddingJourneyData } from "../../data/wedding-journey-data"
import { CountdownCenterpiece } from "./countdown-centerpiece"

export function CountdownScene() {
  return (
    <section id="countdown" className="journey-scene">
      <div className="mx-auto grid w-full max-w-[1480px] items-center gap-8 overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/58 p-8 shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl md:p-12 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#D9A55A]">Chapter 04</p>
          <h2 className="mt-3 max-w-sm text-[clamp(2rem,3.5vw,4rem)] font-normal leading-[1.02] text-[#201939] [font-family:var(--journey-serif)]">
            The day we've been waiting for.
          </h2>
          <div className="mt-5 flex items-center gap-4 text-[#D9A55A]">
            <span className="h-px w-12 bg-current" />
            <span>♡</span>
          </div>
        </div>
        <CountdownCenterpiece targetDateISO={weddingJourneyData.event.dateISO} displayDate={weddingJourneyData.event.displayDate} />
      </div>
    </section>
  )
}
