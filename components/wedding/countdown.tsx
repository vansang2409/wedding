"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) return null

  const timeUnits = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ]

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="group flex flex-col items-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-20 w-18 flex-col items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-card/90 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-primary/40 md:h-32 md:w-28">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  style={{ animation: "shimmer 2s infinite" }}
                />
              </div>

              <span
                key={unit.value}
                className="relative text-3xl font-bold tabular-nums text-primary md:text-5xl"
                style={{ animation: unit.label === "Giây" ? "flip 0.5s ease-out" : "none" }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
          </div>

          <span className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground md:text-sm">
            {unit.label}
          </span>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes flip {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
