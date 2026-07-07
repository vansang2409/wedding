import styles from "@/styles/wedding-v2/wedding-v2.module.css"

const petals = [
  { left: "12%", top: "17%", size: "15px", rotate: "-19deg", duration: "8s", delay: "-1s" },
  { left: "82%", top: "21%", size: "20px", rotate: "28deg", duration: "9.5s", delay: "-4s" },
  { left: "18%", top: "59%", size: "18px", rotate: "16deg", duration: "10s", delay: "-5s" },
] as const

const sparks = [
  { left: "24%", top: "12%", size: "4px", duration: "11s", delay: "-1s" },
  { left: "14%", top: "36%", size: "5px", duration: "12s", delay: "-7s" },
  { left: "74%", top: "78%", size: "5px", duration: "12.5s", delay: "-4s" },
] as const

const fallingFlorals = [
  { left: "9%", size: "18px", duration: "14s", delay: "-2s", drift: "54px", rotate: "-18deg" },
  { left: "48%", size: "16px", duration: "16s", delay: "-5s", drift: "42px", rotate: "12deg" },
] as const

export function BackgroundSystem() {
  return (
    <div className={styles.background} aria-hidden="true">
      <span className={styles.auroraVeil} />
      <span className={styles.orbitalHalo} />
      {petals.map((petal) => (
        <span
          className={styles.petal}
          key={`${petal.left}-${petal.top}`}
          style={{
            "--left": petal.left,
            "--top": petal.top,
            "--size": petal.size,
            "--rotate": petal.rotate,
            "--duration": petal.duration,
            "--delay": petal.delay,
          } as React.CSSProperties}
        />
      ))}
      {fallingFlorals.map((floral) => (
        <span
          className={styles.fallingFloral}
          key={`${floral.left}-${floral.delay}`}
          style={{
            "--fall-left": floral.left,
            "--fall-size": floral.size,
            "--fall-duration": floral.duration,
            "--fall-delay": floral.delay,
            "--fall-drift": floral.drift,
            "--fall-rotate": floral.rotate,
          } as React.CSSProperties}
        />
      ))}
      {sparks.map((spark) => (
        <span
          className={styles.spark}
          key={`${spark.left}-${spark.top}`}
          style={{
            "--spark-left": spark.left,
            "--spark-top": spark.top,
            "--spark-size": spark.size,
            "--spark-duration": spark.duration,
            "--spark-delay": spark.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
