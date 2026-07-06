import { CalendarDays, HeartHandshake, MapPin, Navigation } from "lucide-react"
import { weddingJourneyData } from "../../data/wedding-journey-data"
import { MapAction } from "./map-action"

export function WeddingInfoScene() {
  const { event } = weddingJourneyData

  return (
    <section id="wedding-info" className="journey-scene">
      <div className="wedding-panel relative mx-auto grid w-full max-w-[1480px] overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/58 shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl lg:min-h-[520px] lg:grid-cols-[0.33fr_0.34fr_0.33fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_6%_78%,rgba(216,200,241,0.52),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(217,165,90,0.12),transparent_26%),linear-gradient(90deg,rgba(255,255,255,0.52),rgba(250,243,249,0.44))]" />
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#D9A55A]">Chapter 03</p>
          <h2 className="mt-3 text-[clamp(2.2rem,4.2vw,4.9rem)] font-normal leading-[0.95] text-[#201939] [font-family:var(--journey-serif)]">
            Wedding Day
          </h2>
          <p className="mt-3 text-xl text-[#D9A55A] [font-family:var(--journey-serif)]">{event.longDate}</p>
          <div className="mt-10 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(216,200,241,0.72),transparent_68%)] blur-2xl lg:block" />
        </div>

        <div className="relative z-10 grid min-h-[24rem] place-items-center border-y border-white/50 bg-white/30 px-8 py-10 lg:border-x lg:border-y-0">
          <div className="absolute inset-8 rounded-full border border-[#D8C8F1]/42" />
          <div className="absolute inset-x-16 top-12 h-52 rounded-t-full border border-[#D9A55A]/24 border-b-0" />
          <div className="relative grid h-44 w-44 place-items-center rounded-full bg-white/54 shadow-[0_20px_60px_rgba(53,35,76,0.1)] backdrop-blur-xl">
            <p className="text-center text-4xl italic leading-[0.9] text-[#D9A55A] [font-family:var(--journey-serif)]">
              Save
              <br />
              the
              <br />
              Date
            </p>
          </div>
        </div>

        <div className="relative z-10 grid gap-6 p-8 md:p-12">
          <InfoItem icon={<HeartHandshake />} label="Lễ Dạm Ngõ" value={event.damNgoDate} />
          <InfoItem icon={<CalendarDays />} label="Lễ Thành Hôn" value={event.displayDate} />
          <InfoItem icon={<MapPin />} label="Nơi đãi tiệc" value={event.venue} />
          <MapAction icon={<Navigation />} label="Xem bản đồ" value={event.address} href={event.mapUrl} />
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#D9A55A]/24 pb-5 last:border-b-0">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[#6F5598]/15 bg-white/58 text-[#6F5598]">
        {icon}
      </div>
      <div>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#6F6575]">{label}</p>
        <p className="mt-2 text-lg font-medium leading-7 text-[#201939] [font-family:var(--journey-serif)] md:text-xl">{value}</p>
      </div>
    </div>
  )
}
