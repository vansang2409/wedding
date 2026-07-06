import Image from "next/image"
import { weddingJourneyData } from "../../data/wedding-journey-data"
import { EndingActions } from "./ending-actions"
import { EndingAudioFade } from "./ending-audio-fade"
import { EndingParticles } from "./ending-particles"

export function ThankYouScene() {
  const { couple, event, gallery } = weddingJourneyData

  return (
    <section id="thank-you" className="journey-scene">
      <EndingAudioFade />
      <div className="thank-card relative mx-auto grid min-h-[360px] w-full max-w-[1480px] overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/58 p-8 text-center shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl md:grid-cols-[0.28fr_0.72fr] md:p-12 md:text-left">
        <EndingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(216,200,241,0.42),transparent_30%),radial-gradient(circle_at_74%_36%,rgba(255,255,255,0.72),transparent_34%),linear-gradient(100deg,rgba(242,229,250,0.58),rgba(255,250,251,0.58))]" />

        <div className="relative z-10 mx-auto grid place-items-center md:mx-0">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#D8C8F1]/28 blur-2xl" />
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              width={360}
              height={360}
              className="relative h-40 w-40 rounded-[1rem] border-[8px] border-white object-cover shadow-[0_20px_56px_rgba(53,35,76,0.16)] md:h-48 md:w-48"
            />
          </div>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center justify-center md:mt-0">
          <p className="text-[0.65rem] font-bold uppercase leading-5 tracking-[0.28em] text-[#6F6575]">
            Thank you for being part of our journey
          </p>
          <div className="mt-3 text-[#D9A55A]">♡</div>
          <h2 className="mt-3 text-[clamp(2.25rem,5vw,4.8rem)] font-normal leading-[0.95] text-[#201939] [font-family:var(--journey-serif)]">
            {couple.displayNames}
          </h2>
          <p className="mt-4 text-xl text-[#201939] [font-family:var(--journey-serif)]">{event.displayDate}</p>
          <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#6F6575]">See you soon ♡</p>
          <EndingActions />
        </div>
      </div>
    </section>
  )
}
