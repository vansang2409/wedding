"use client"

import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, type CSSProperties } from "react"
import gsap from "gsap"
import styles from "./dam-ngo-v2.module.css"

const ASSET_ROOT = "/images/dam-ngo-v2-assets"

const PEAR_PETALS = [
  { left: 72, size: 10, delay: 0.2, duration: 11.8, drift: -118, rotation: 340 },
  { left: 79, size: 8, delay: 2.4, duration: 13.2, drift: -82, rotation: -290 },
  { left: 86, size: 12, delay: 4.1, duration: 12.4, drift: -146, rotation: 380 },
  { left: 93, size: 9, delay: 1.2, duration: 14.1, drift: -104, rotation: -330 },
  { left: 97, size: 7, delay: 5.7, duration: 11.4, drift: -72, rotation: 300 },
  { left: 68, size: 7, delay: 6.8, duration: 15.2, drift: -94, rotation: -360 },
  { left: 76, size: 11, delay: 8.4, duration: 12.8, drift: -132, rotation: 420 },
  { left: 84, size: 8, delay: 9.7, duration: 14.6, drift: -76, rotation: -310 },
  { left: 91, size: 10, delay: 7.5, duration: 13.7, drift: -126, rotation: 350 },
  { left: 64, size: 9, delay: 3.3, duration: 14.8, drift: -88, rotation: -390 },
  { left: 88, size: 6, delay: 11.2, duration: 12.2, drift: -68, rotation: 320 },
  { left: 95, size: 11, delay: 10.1, duration: 15.4, drift: -152, rotation: -430 },
  { left: 74, size: 6, delay: 12.6, duration: 13.5, drift: -64, rotation: 280 },
  { left: 82, size: 9, delay: 13.8, duration: 14.2, drift: -112, rotation: -370 },
  { left: 90, size: 7, delay: 14.9, duration: 12.9, drift: -86, rotation: 330 },
  { left: 99, size: 8, delay: 16.1, duration: 15.7, drift: -138, rotation: -410 },
] as const

const SWALLOW_FLOCK = [
  { delay: 0.8, duration: 7.6, scale: 0.44, route: "crown" },
  { delay: 3.7, duration: 8.4, scale: 0.34, route: "crownWide" },
  { delay: 6.2, duration: 7.9, scale: 0.4, route: "underline" },
  { delay: 9.1, duration: 8.8, scale: 0.29, route: "underlineWide" },
] as const

export function DamNgoV2Experience({ fontClassName = "" }: { fontClassName?: string }) {
  const rootRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    if (!root || !stage) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const context = gsap.context(() => {
      if (reduceMotion) return

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } })
      intro
        .from(`.${styles.background}`, { scale: 1.06, opacity: 0, duration: 1.8 })
        .from(`.${styles.couple}`, { yPercent: 7, scale: 0.96, opacity: 0, duration: 1.6 }, 0.25)
        .from(`.${styles.copy} > *`, { y: 24, opacity: 0, duration: 0.9, stagger: 0.09 }, 0.45)
        .from(`.${styles.pearBlossom}`, { xPercent: 8, yPercent: -5, opacity: 0, duration: 1.5 }, 0.42)
        .from(`.${styles.lotusCluster}`, {
          xPercent: -10,
          yPercent: 7,
          opacity: 0,
          duration: 1.5,
        }, 0.68)

      gsap.to(`.${styles.couple}`, {
        y: -5,
        duration: 7.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(`.${styles.pearBlossom}`, {
        x: 4,
        y: 3,
        rotate: 0.25,
        duration: 10.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.utils.toArray<HTMLElement>(`.${styles.swallowActor}`).forEach((bird) => {
        const duration = Number(bird.dataset.duration)
        const delay = Number(bird.dataset.delay)
        const scale = Number(bird.dataset.scale)
        const route = bird.dataset.route
        const flightZone = bird.parentElement
        if (!flightZone) return

        const zoneWidth = flightZone.clientWidth
        const zoneHeight = flightZone.clientHeight
        const isUnderline = route?.startsWith("underline")
        const isWide = route?.endsWith("Wide")
        const startY = zoneHeight * (isUnderline ? (isWide ? 0.58 : 0.7) : (isWide ? 0.43 : 0.34))
        const arcY = zoneHeight * (isUnderline ? (isWide ? 0.88 : 0.97) : (isWide ? 0.03 : -0.08))
        const endY = zoneHeight * (isUnderline ? (isWide ? 0.62 : 0.48) : (isWide ? 0.48 : 0.28))
        const travel = zoneWidth * (isWide ? 1.16 : 1.1)
        const flight = gsap.timeline({ repeat: -1, repeatDelay: 2.8, delay })

        flight
          .set(bird, { x: -zoneWidth * (isWide ? 0.12 : 0.07), y: startY, rotate: isUnderline ? 7 : -7, scale, opacity: 0 })
          .to(bird, { opacity: isWide ? 0.68 : 0.9, duration: 0.48, ease: "sine.out" })
          .to(bird, {
            x: travel * 0.3,
            y: isUnderline ? arcY * 0.92 : arcY * 1.18,
            rotate: isUnderline ? 5 : -8,
            duration: duration * 0.29,
            ease: "sine.inOut",
          }, 0)
          .to(bird, {
            x: travel * 0.68,
            y: arcY,
            rotate: isUnderline ? -4 : 3,
            duration: duration * 0.38,
            ease: "sine.inOut",
          })
          .to(bird, {
            x: travel,
            y: endY,
            rotate: isUnderline ? -7 : 7,
            opacity: 0,
            duration: duration * 0.33,
            ease: "power1.in",
          })
      })

      gsap.utils.toArray<HTMLElement>(`.${styles.pearPetal}`).forEach((petal) => {
        const duration = Number(petal.dataset.duration)
        const delay = Number(petal.dataset.delay)
        const drift = Number(petal.dataset.drift)
        const rotation = Number(petal.dataset.rotation)
        const petalTimeline = gsap.timeline({ repeat: -1, delay })

        petalTimeline
          .set(petal, { x: 0, y: -100, rotate: -28, opacity: 0 })
          .to(petal, { opacity: 0.82, duration: 0.9, ease: "sine.out" })
          .to(petal, {
            x: drift,
            y: window.innerHeight + 150,
            rotate: rotation,
            duration,
            ease: "none",
          }, 0)
          .to(petal, { opacity: 0, duration: 1.2, ease: "sine.in" }, duration - 1.2)
      })
      gsap.to(`.${styles.lotusCluster}`, {
        x: 3,
        y: -4,
        rotate: 0.35,
        duration: 10.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, root)

    if (reduceMotion) return () => context.revert()

    return () => context.revert()
  }, [])

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "f") return
      if (document.fullscreenElement) await document.exitFullscreen()
      else await rootRef.current?.requestFullscreen()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main ref={rootRef} className={`${styles.page} ${fontClassName}`}>
      <div ref={stageRef} className={styles.stage}>
        <div className={styles.background} data-depth-layer="background" aria-hidden="true">
          <Image
            src={`${ASSET_ROOT}/soft-silk-stage-rect-window-c5b3d3-v4.png`}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>

        <section className={styles.copy} data-depth-layer="typography" aria-labelledby="dam-ngo-title">
          <h1 id="dam-ngo-title">
            <span className={styles.srOnly}>Lễ Dạm Ngõ</span>
            <Image
              className={styles.titleArtwork}
              src={`${ASSET_ROOT}/le-dam-ngo-calligraphy-l-complete-v3.png`}
              alt=""
              width={1676}
              height={523}
              priority
              data-title-artwork
            />
            <span className={styles.swallows} data-depth-layer="swallows" aria-hidden="true">
              {SWALLOW_FLOCK.map((bird, index) => (
                <span
                  key={index}
                  className={styles.swallowActor}
                  style={{ "--wing-offset": `${-index * 0.11}s` } as CSSProperties}
                  data-delay={bird.delay}
                  data-duration={bird.duration}
                  data-scale={bird.scale}
                  data-route={bird.route}
                >
                  <span className={`${styles.birdFrame} ${styles.birdFrameUp}`} />
                  <span className={`${styles.birdFrame} ${styles.birdFrameMid}`} />
                  <span className={`${styles.birdFrame} ${styles.birdFrameDown}`} />
                </span>
              ))}
            </span>
          </h1>

          <div className={styles.eventDetails}>
            <p className={styles.names}>Thu Thương <i>&amp;</i> Văn Sang</p>
            <div className={styles.meta}>
              <time dateTime="2026-08-31">31.08.2026</time>
              <span aria-hidden="true" />
              <p>Krông Pắc, Đắk Lắk</p>
            </div>
          </div>

          <aside className={styles.gratitude} data-gratitude aria-label="Lời cảm ơn gia đình">
            <p>
              Cảm ơn cha mẹ đã viết nên chương đẹp nhất cho cuộc đời chúng con.
            </p>
            <p>
              Mỗi bước đi con đi, mỗi thành tựu con có, đều là nhờ tình yêu và sự hy sinh thầm
              lặng của cha mẹ. Hôm nay, khi hai gia đình cùng ngồi lại, con hiểu rằng mình đã nhận
              được món quà quý giá nhất: đó là sự kết nối của hai mái ấm.
            </p>
            <p>
              Chúng con xin hứa sẽ trân trọng nhau, yêu thương nhau như cách cha mẹ đã dành cho
              chúng con cả cuộc đời này.
            </p>
          </aside>
        </section>

        <div className={styles.couple} data-depth-layer="couple">
          <Image
            src="/images/wedding-v2-couple-plain-pink-v2.png"
            alt="Thu Thương và Văn Sang"
            fill
            priority
            sizes="38vw"
          />
          <span aria-hidden="true" />
        </div>

        <div className={styles.pearBlossom} data-depth-layer="pear-blossom" aria-hidden="true">
          <Image
            src={`${ASSET_ROOT}/pear-blossom-sage-blush-v4-pastel-yellow-stamens.png`}
            alt=""
            fill
            sizes="38vw"
          />
        </div>

        <div className={styles.pearPetalField} aria-hidden="true">
          {PEAR_PETALS.map((petal, index) => (
            <span
              key={index}
              className={styles.pearPetal}
              style={{ left: `${petal.left}%`, width: petal.size * 1.65, height: petal.size * 2.15 }}
              data-delay={petal.delay}
              data-duration={petal.duration}
              data-drift={petal.drift}
              data-rotation={petal.rotation}
            />
          ))}
        </div>

        <div className={styles.lotusCluster} data-depth-layer="lotus-cluster" aria-hidden="true">
          <Image
            src={`${ASSET_ROOT}/lotus-sage-lilac-l-cluster-v6-yellowgreen-stamens.png`}
            alt=""
            fill
            sizes="68vw"
          />
        </div>

        <div className={styles.atmosphere} aria-hidden="true" />
        <div className={styles.grain} aria-hidden="true" />
      </div>
    </main>
  )
}
