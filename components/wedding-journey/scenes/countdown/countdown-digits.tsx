import type { CountdownTime } from "./countdown-centerpiece"

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
] as const

export function CountdownDigits({ time }: { time: CountdownTime }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {units.map((unit, index) => (
        <div key={unit.key} className="relative text-center">
          {index > 0 && <span className="absolute -left-4 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D9A55A] md:block" />}
          <p className="text-[clamp(3.1rem,7vw,6rem)] font-normal leading-none text-[#201939] [font-family:var(--journey-serif)]">
            {String(time[unit.key]).padStart(2, "0")}
          </p>
          <p className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#6F6575]">{unit.label}</p>
        </div>
      ))}
    </div>
  )
}
