"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Music2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import type { PhiInvitationData } from "@/data/phi-wedding"
import styles from "./phi-invitation.module.css"

function DesignSection({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <section className={styles.designSection} data-reveal>
      <Image
        src={src}
        alt={alt}
        width={941}
        height={1672}
        priority={eager}
        loading={eager ? undefined : "lazy"}
        quality={95}
        sizes="(max-width: 941px) 100vw, 941px"
      />
    </section>
  )
}

function FamilySection({ data }: { data: PhiInvitationData }) {
  const families = data.side === "bride"
    ? [
        { label: "Nhà gái", parents: data.brideParents },
        { label: "Nhà trai", parents: data.groomParents },
      ]
    : [
        { label: "Nhà trai", parents: data.groomParents },
        { label: "Nhà gái", parents: data.brideParents },
      ]

  return (
    <section className={styles.family} aria-labelledby="family-title" data-reveal>
      <div className={styles.familyMonogram} aria-hidden="true">
        <span>P</span><span>D</span>
      </div>

      <header className={styles.familyHeading}>
        <p>Trân trọng báo tin</p>
        <h2 id="family-title">{data.ceremony} của con chúng tôi</h2>
      </header>

      <div className={styles.familyList}>
        {families.map((family) => (
          <article className={styles.familyHouse} key={family.label}>
            <p>{family.label}</p>
            <div>
              {family.parents.map((parent) => <strong key={parent}>{parent}</strong>)}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.familyCouple} aria-label={`${data.names[0]} và ${data.names[1]}`}>
        <span>{data.names[0]}</span>
        <i aria-hidden="true">&amp;</i>
        <span>{data.names[1]}</span>
      </div>

      <figure className={styles.familyPortrait}>
        <Image
          src="/images/phi/studio-standing.webp"
          alt={`${data.names[0]} và ${data.names[1]} trong ảnh cưới tại studio`}
          width={1200}
          height={1800}
          priority
          quality={95}
          sizes="(max-width: 941px) 92vw, 820px"
        />
      </figure>
    </section>
  )
}

function WeddingAlbum({ images, names }: { images: readonly string[]; names: readonly string[] }) {
  const photo = (index: number, className: string, sizes: string) => {
    const src = images[index]
    if (!src) return null

    return (
      <a
        className={`${styles.albumPhoto} ${className}`}
        href={src}
        target="_blank"
        rel="noreferrer"
        key={src}
        aria-label={`Xem ảnh cưới ${index + 1} của ${names[0]} và ${names[1]}`}
      >
        <Image
          src={src}
          alt={`Khoảnh khắc cưới ${index + 1} của ${names[0]} và ${names[1]}`}
          width={1708}
          height={2560}
          loading="lazy"
          quality={95}
          sizes={sizes}
        />
      </a>
    )
  }

  return (
    <section className={styles.album} aria-label="Album ảnh cưới">
      <div className={`${styles.albumScene} ${styles.albumOpening}`} data-reveal>
        {photo(0, styles.albumArch, "(max-width: 941px) 88vw, 830px")}
      </div>

      <div className={`${styles.albumScene} ${styles.albumStory}`} data-reveal>
        {photo(1, styles.storyPortrait, "(max-width: 941px) 48vw, 450px")}
        {photo(2, styles.storyTall, "(max-width: 941px) 50vw, 470px")}
        {photo(3, styles.storyCardLeft, "(max-width: 941px) 36vw, 340px")}
        {photo(4, styles.storyCardCenter, "(max-width: 941px) 44vw, 415px")}
        {photo(5, styles.storyCardRight, "(max-width: 941px) 36vw, 340px")}
      </div>

      <div className={`${styles.albumScene} ${styles.albumFinale}`} data-reveal>
        {photo(6, styles.finaleCinematic, "(max-width: 941px) 90vw, 850px")}
        {photo(7, styles.finaleLeft, "(max-width: 941px) 46vw, 430px")}
        {photo(8, styles.finaleRight, "(max-width: 941px) 46vw, 430px")}
        {photo(9, styles.finaleClosing, "(max-width: 941px) 78vw, 735px")}
      </div>
    </section>
  )
}

export function PhiInvitation({ data }: { data: PhiInvitationData }) {
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const openTimer = useRef<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.42
    void audio.play().catch(() => setMusicPlaying(false))
  }

  const pauseMusic = () => {
    audioRef.current?.pause()
  }

  useEffect(() => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current)
      openTimer.current = null
    }

    setOpening(false)
    setOpened(false)

    const previousRestoration = window.history.scrollRestoration
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    window.history.scrollRestoration = "manual"
    resetScroll()

    const animationFrame = window.requestAnimationFrame(resetScroll)
    const resetTimer = window.setTimeout(resetScroll, 100)
    window.addEventListener("pageshow", resetScroll)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(resetTimer)
      window.removeEventListener("pageshow", resetScroll)
      window.history.scrollRestoration = previousRestoration
    }
  }, [data.side])

  useEffect(() => {
    if (opened) return

    const root = document.documentElement
    const body = document.body
    const previousRootOverflow = root.style.overflow
    const previousBodyOverflow = body.style.overflow
    const previousBodyPosition = body.style.position
    const previousBodyInset = body.style.inset
    const previousBodyWidth = body.style.width
    const previousBodyOverscroll = body.style.overscrollBehavior

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    root.style.overflow = "hidden"
    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.inset = "0"
    body.style.width = "100%"
    body.style.overscrollBehavior = "none"

    return () => {
      root.style.overflow = previousRootOverflow
      body.style.overflow = previousBodyOverflow
      body.style.position = previousBodyPosition
      body.style.inset = previousBodyInset
      body.style.width = previousBodyWidth
      body.style.overscrollBehavior = previousBodyOverscroll
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [opened, data.side])

  useEffect(() => {
    if (!opening) return

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.setAttribute("data-visible", "true")
        observer.unobserve(entry.target)
      })
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [opening])

  useEffect(() => () => {
    if (openTimer.current) window.clearTimeout(openTimer.current)
  }, [])

  const openInvitation = () => {
    if (opening) return
    window.scrollTo(0, 0)
    playMusic()

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpening(true)
      setOpened(true)
      return
    }

    setOpening(true)
    openTimer.current = window.setTimeout(() => setOpened(true), 1400)
  }

  const toggleMusic = () => {
    if (musicPlaying) pauseMusic()
    else playMusic()
  }

  const sideLabel = data.side === "bride" ? "nhà gái" : "nhà trai"

  return (
    <div className={styles.page} data-side={data.side} data-opening={opening} data-opened={opened}>
      <section className={styles.cover} data-opening={opening} data-opened={opened} aria-hidden={opened}>
        <div className={styles.coverArt}>
          <Image
            src={data.design.cover}
            alt={`Thiệp mở đầu ${sideLabel} của ${data.names[0]} và ${data.names[1]}`}
            fill
            priority
            quality={95}
            sizes="(max-width: 767px) 100vw, 56vh"
          />
          <button
            className={styles.coverHit}
            type="button"
            aria-label="Mở thiệp"
            disabled={opening}
            onClick={openInvitation}
          />
        </div>
      </section>

      <main className={styles.invitation}>
        <FamilySection data={data} />
        <DesignSection src={data.design.event} alt={`Thời gian và địa điểm tiệc cưới ${sideLabel}`} />

        <div className={styles.locationAction} data-reveal>
          <a href={data.mapUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Mở bản đồ</a>
        </div>

        <DesignSection src={data.design.gallery} alt={`Album cưới của ${data.names[0]} và ${data.names[1]}`} />

        <WeddingAlbum images={data.albumImages} names={data.names} />

        <section className={styles.gift} aria-labelledby="gift-title" data-reveal>
          <div className={styles.giftHeading}>
            <p>Cùng chung niềm vui</p>
            <h2 id="gift-title">Mừng ngày hạnh phúc</h2>
            <span>Sự hiện diện của bạn là món quà quý giá. Nếu thuận tiện, bạn có thể gửi lời chúc và quà mừng qua mã QR bên dưới.</span>
          </div>
          <a
            className={styles.qrLink}
            href={data.qrImage}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mở mã QR ${sideLabel} toàn màn hình`}
          >
            <figure>
              <Image src={data.qrImage} alt={`Mã QR mừng cưới ${sideLabel}`} fill unoptimized sizes="(max-width: 767px) 78vw, 23rem" />
            </figure>
            <span>Chạm để xem mã QR rõ hơn</span>
          </a>
        </section>

        <footer className={styles.footer}>
          <Link href={data.side === "bride" ? "/phi/nha-trai" : "/phi/nha-gai"}>
            Xem thiệp {data.side === "bride" ? "nhà trai" : "nhà gái"}
          </Link>
        </footer>
      </main>

      <audio
        ref={audioRef}
        src="/audio/phi-vay-cuoi.mp3"
        loop
        preload="auto"
        playsInline
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      <button
        className={styles.musicToggle}
        type="button"
        data-visible={opened}
        data-playing={musicPlaying}
        aria-label={musicPlaying ? "Tắt nhạc" : "Bật nhạc"}
        aria-hidden={!opened}
        tabIndex={opened ? 0 : -1}
        onClick={toggleMusic}
      >
        {musicPlaying ? <Music2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      </button>

    </div>
  )
}
