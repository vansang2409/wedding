import styles from "@/styles/wedding-v2/wedding-v2.module.css"

const foregroundBirds = [
  { top: "7%", scale: "0.92", duration: "16s", delay: "-3s" },
] as const

const foregroundFlorals = [
  { left: "39%", size: "16px", duration: "13s", delay: "-6s", drift: "-54px", rotate: "32deg" },
  { left: "84%", size: "24px", duration: "15s", delay: "-8s", drift: "-76px", rotate: "-28deg" },
] as const

export function CinematicOverlay() {
  return (
    <div className={styles.cinematicOverlay} aria-hidden="true">
      <span className={styles.filmVignette} />
      <span className={styles.filmGrain} />
      <span className={styles.scanBeam} />
      {foregroundBirds.map((bird) => (
        <span
          className={styles.foregroundBird}
          key={`${bird.top}-${bird.duration}`}
          style={{
            "--fg-bird-top": bird.top,
            "--fg-bird-scale": bird.scale,
            "--fg-bird-duration": bird.duration,
            "--fg-bird-delay": bird.delay,
          } as React.CSSProperties}
        >
          <span />
          <span />
          <span />
        </span>
      ))}
      {foregroundFlorals.map((floral) => (
        <span
          className={styles.foregroundFloral}
          key={`${floral.left}-${floral.delay}`}
          style={{
            "--fg-floral-left": floral.left,
            "--fg-floral-size": floral.size,
            "--fg-floral-duration": floral.duration,
            "--fg-floral-delay": floral.delay,
            "--fg-floral-drift": floral.drift,
            "--fg-floral-rotate": floral.rotate,
          } as React.CSSProperties}
        />
      ))}
      <span className={styles.cinemaBars} />
      <span className={styles.motionTimeline} />
    </div>
  )
}
