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

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Ngày", icon: "calendar" },
    { value: timeLeft.hours, label: "Giờ", icon: "clock" },
    { value: timeLeft.minutes, label: "Phút", icon: "timer" },
    { value: timeLeft.seconds, label: "Giây", icon: "zap" },
  ]

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative w-18 h-20 md:w-28 md:h-32 rounded-2xl bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-md border border-primary/20 shadow-xl flex flex-col items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-300">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  style={{ animation: 'shimmer 2s infinite' }}
                />
              </div>
              
              {/* Number with flip animation */}
              <div className="relative">
                <span 
                  className="text-3xl md:text-5xl font-display font-bold text-primary tabular-nums"
                  key={unit.value}
                  style={{ animation: unit.label === 'Giây' ? 'flip 0.5s ease-out' : 'none' }}
                >
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
          
          {/* Label */}
          <span className="mt-3 text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-[0.15em]">
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
