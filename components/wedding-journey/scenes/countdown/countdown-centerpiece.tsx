"use client"

import { useEffect, useState } from "react"
import { CountdownDigits } from "./countdown-digits"

type CountdownCenterpieceProps = {
  targetDateISO: string
  displayDate: string
}

export type CountdownTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getRemainingTime(targetDateISO: string): CountdownTime {
  const targetTime = new Date(targetDateISO).getTime()
  const diff = Math.max(targetTime - Date.now(), 0)

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  }
}

const initialTime: CountdownTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export function CountdownCenterpiece({ targetDateISO }: CountdownCenterpieceProps) {
  const [time, setTime] = useState<CountdownTime>(initialTime)

  useEffect(() => {
    setTime(getRemainingTime(targetDateISO))
    const interval = window.setInterval(() => setTime(getRemainingTime(targetDateISO)), 1000)
    return () => window.clearInterval(interval)
  }, [targetDateISO])

  return (
    <div className="relative">
      <div className="absolute inset-y-2 left-0 hidden w-px bg-gradient-to-b from-transparent via-[#D9A55A]/50 to-transparent md:block" />
      <CountdownDigits time={time} />
    </div>
  )
}
