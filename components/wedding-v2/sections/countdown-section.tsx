"use client"

import { useEffect, useMemo, useState } from "react"

import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type CountdownSectionProps = {
  data: typeof weddingV2Data.countdown
}

function getRemaining(target: number) {
  const distance = Math.max(0, target - Date.now())
  const days = Math.floor(distance / 86_400_000)
  const hours = Math.floor((distance % 86_400_000) / 3_600_000)
  const minutes = Math.floor((distance % 3_600_000) / 60_000)
  const seconds = Math.floor((distance % 60_000) / 1000)

  return { days, hours, minutes, seconds }
}

export function CountdownSection({ data }: CountdownSectionProps) {
  const target = useMemo(() => new Date(data.targetDate).getTime(), [data.targetDate])
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setRemaining(getRemaining(target))
    const interval = window.setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => window.clearInterval(interval)
  }, [target])

  const tiles = [
    { value: remaining?.days, label: data.units.days },
    { value: remaining?.hours, label: data.units.hours },
    { value: remaining?.minutes, label: data.units.minutes },
    { value: remaining?.seconds, label: data.units.seconds },
  ]

  return (
    <section className={styles.countdown} aria-labelledby="wedding-v2-countdown-title">
      <div className={styles.countdownIntro}>
        <h2 id="wedding-v2-countdown-title">{data.title}</h2>
        <span className={styles.storyHeart} aria-hidden="true">
          ♡
        </span>
      </div>

      <div className={styles.countdownTiles}>
        {tiles.map((tile) => (
          <div className={styles.countdownTile} key={tile.label}>
            <span>{tile.value == null ? "--" : String(tile.value).padStart(tile.label === data.units.days ? 1 : 2, "0")}</span>
            <p>{tile.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
