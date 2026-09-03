"use client"

import Image from "next/image"
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gift,
  MapPin,
  Music2,
  VolumeX,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

import type { PhiInvitationData } from "@/data/phi-wedding"
import styles from "./phi-groom-v2.module.css"

const calendarDays = Array.from({ length: 35 }, (_, index) => (index > 0 && index <= 30 ? index : null))

type EventBlockProps = {
  label: string
  time: string
  dayName: string
  day: string
  monthYear: string
  lunarDate: string
  venue: string
  address: string
  mapUrl?: string
  align: "left" | "right"
}

function EventBlock({ label, time, dayName, day, monthYear, lunarDate, venue, address, mapUrl, align }: EventBlockProps) {
  return (
    <section className={styles.eventBlock} data-align={align} data-reveal>
      <div className={styles.eventRibbon}>{label}</div>
      <div className={styles.eventBody}>
        <h2>{label === "Lễ tân hôn" ? "Lễ cưới sẽ diễn ra vào lúc" : "Tiệc cưới sẽ diễn ra vào lúc"}</h2>
        <strong className={styles.eventTime}>{time}</strong>
        <div className={styles.dateRow}>
          <span>{dayName}</span>
          <b>{day}</b>
          <span>{monthYear}</span>
        </div>
        <small>({lunarDate})</small>
        <p>Địa điểm tổ chức</p>
        <h3>{venue}</h3>
        <address>{address}</address>
        {mapUrl && (
          <a href={mapUrl} target="_blank" rel="noreferrer" className={styles.mapLink}>
            <MapPin aria-hidden="true" /> Chỉ đường
          </a>
        )}
      </div>
    </section>
  )
}

function WeddingCalendar() {
  return (
    <section className={styles.calendarSection} data-reveal aria-labelledby="calendar-title">
      <h2 id="calendar-title">Our Wedding</h2>
      <CalendarDays aria-hidden="true" />
      <p>Tháng 09 / 2026</p>
      <div className={styles.calendar} aria-label="Lịch tháng 09 năm 2026">
        {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'].map((dayName) => <b key={dayName}>{dayName}</b>)}
        {calendarDays.map((day, index) => (
          day ? (
            <span key={day} className={day === 20 ? styles.weddingDay : undefined}>
              {day}
              {day === 20 && <i aria-label="Ngày cưới">♥</i>}
            </span>
          ) : <span key={`empty-${index}`} aria-hidden="true" />
        ))}
      </div>
    </section>
  )
}

export function PhiGroomV2({ groom, bride }: { groom: PhiInvitationData; bride: PhiInvitationData }) {
  const [opening, setOpening] = useState(false)
  const [opened, setOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)
  const [activePhoto, setActivePhoto] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const openTimer = useRef<number | null>(null)

  const playMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.38
    void audio.play().catch(() => setMusicPlaying(false))
  }

  const pauseMusic = () => audioRef.current?.pause()

  const openInvitation = () => {
    if (opening) return
    setOpening(true)
    playMusic()
    openTimer.current = window.setTimeout(() => setOpened(true), 4000)
  }

  useEffect(() => {
    if (opened) return

    const root = document.documentElement
    const body = document.body
    const previousRootOverflow = root.style.overflow
    const previousBodyOverflow = body.style.overflow
    root.style.overflow = "hidden"
    body.style.overflow = "hidden"
    window.scrollTo(0, 0)

    return () => {
      root.style.overflow = previousRootOverflow
      body.style.overflow = previousBodyOverflow
    }
  }, [opened])

  useEffect(() => {
    if (!opening) return

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.setAttribute("data-visible", "true")
        observer.unobserve(entry.target)
      })
    }, { rootMargin: "0px 0px -10%", threshold: 0.08 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [opening])

  useEffect(() => {
    if (activePhoto === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null)
      if (event.key === "ArrowLeft") setActivePhoto((current) => current === null ? null : (current - 1 + groom.albumImages.length) % groom.albumImages.length)
      if (event.key === "ArrowRight") setActivePhoto((current) => current === null ? null : (current + 1) % groom.albumImages.length)
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activePhoto, groom.albumImages.length])

  useEffect(() => {
    if (!giftOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGiftOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [giftOpen])

  useEffect(() => () => {
    if (openTimer.current) window.clearTimeout(openTimer.current)
  }, [])

  const visiblePhotos = showAllPhotos ? groom.albumImages : groom.albumImages.slice(0, 8)

  return (
    <div className={styles.viewport} data-opening={opening} data-opened={opened}>
      <div className={styles.paper}>
        <div className={styles.cover} aria-hidden={opened}>
          <div className={`${styles.door} ${styles.leftDoor}`}><span className={styles.coverFlowers} /></div>
          <div className={`${styles.door} ${styles.rightDoor}`}><span className={styles.coverFlowers} /></div>
          <button className={styles.openButton} type="button" onClick={openInvitation} disabled={opening}>
            <span className={styles.coverMonogram} aria-hidden="true"><i>♥</i></span>
            <strong>Trân trọng kính mời</strong>
            <small>Chạm để mở thiệp</small>
          </button>
        </div>

        <main className={styles.invitation}>
          <section className={styles.hero} data-reveal aria-label="Hoàng Phi và Mỹ Duyên">
            <span className={`${styles.botanical} ${styles.botanicalTop}`} aria-hidden="true" />
            <span className={`${styles.botanical} ${styles.botanicalLeft}`} aria-hidden="true" />
            <span className={`${styles.botanical} ${styles.botanicalRight}`} aria-hidden="true" />
            <div className={styles.greenBand} aria-hidden="true" />

            <figure className={`${styles.polaroid} ${styles.groomPhoto}`}>
              <Image src="/images/phi/groom-fountain.webp" alt="Chú rể Hoàng Phi" fill priority sizes="230px" />
            </figure>
            <figure className={`${styles.polaroid} ${styles.bridePhoto}`}>
              <Image src="/images/phi/bride-portrait.webp" alt="Cô dâu Mỹ Duyên" fill priority sizes="220px" />
            </figure>

            <div className={`${styles.personName} ${styles.groomName}`}><span>Chú rể</span><strong>Hoàng Phi</strong></div>
            <div className={`${styles.personName} ${styles.brideName}`}><span>Cô dâu</span><strong>Mỹ Duyên</strong></div>
          </section>

          <section className={styles.familySection} data-reveal>
            <div className={styles.miniFlowers} aria-hidden="true" />
            <div className={styles.familyGrid}>
              <article>
                <p>Nhà trai</p>
                {groom.groomParents.map((parent) => <strong key={parent}>{parent}</strong>)}
              </article>
              <article>
                <p>Nhà gái</p>
                {groom.brideParents.map((parent) => <strong key={parent}>{parent}</strong>)}
              </article>
            </div>
          </section>

          <EventBlock
            label="Lễ tân hôn"
            time={groom.ceremonyTime}
            dayName="Chủ Nhật"
            day="20"
            monthYear="09 · 2026"
            lunarDate="Nhằm ngày 10 tháng 08 năm Bính Ngọ"
            venue="Tư gia nhà trai"
            address={groom.groomAddress.join(" · ")}
            align="right"
          />

          <EventBlock
            label="Tiệc cưới nhà gái"
            time={bride.banquet}
            dayName="Thứ Bảy"
            day="19"
            monthYear="09 · 2026"
            lunarDate="Nhằm ngày 09 tháng 08 năm Bính Ngọ"
            venue={bride.venue}
            address={bride.venueAddress.join(" · ")}
            mapUrl={bride.mapUrl}
            align="left"
          />

          <EventBlock
            label="Tiệc cưới nhà trai"
            time={groom.banquet}
            dayName="Chủ Nhật"
            day="20"
            monthYear="09 · 2026"
            lunarDate="Nhằm ngày 10 tháng 08 năm Bính Ngọ"
            venue={groom.venue}
            address={groom.venueAddress.join(" · ")}
            mapUrl={groom.mapUrl}
            align="right"
          />

          <WeddingCalendar />

          <section className={styles.albumSection} data-reveal aria-labelledby="album-title">
            <span className={`${styles.botanical} ${styles.albumBotanical}`} aria-hidden="true" />
            <h2 id="album-title">Album Ảnh Cưới</h2>
            <div className={styles.albumGrid} data-expanded={showAllPhotos}>
              {visiblePhotos.map((src, index) => (
                <button type="button" key={src} onClick={() => setActivePhoto(index)} aria-label={`Mở ảnh cưới ${index + 1}`}>
                  <Image src={src} alt={`Khoảnh khắc cưới ${index + 1} của Hoàng Phi và Mỹ Duyên`} fill loading="lazy" sizes="(max-width: 480px) 50vw, 240px" />
                </button>
              ))}
            </div>
            <button className={styles.moreButton} type="button" onClick={() => setShowAllPhotos((current) => !current)} aria-expanded={showAllPhotos}>
              {showAllPhotos ? "Thu gọn" : "Xem thêm"}<ChevronDown aria-hidden="true" />
            </button>
          </section>

          <section className={styles.giftSection} data-reveal aria-labelledby="gift-title">
            <h2 id="gift-title">Hộp Mừng Cưới</h2>
            <button className={styles.giftBox} type="button" onClick={() => setGiftOpen(true)} aria-label="Mở hộp mừng cưới">
              <Gift aria-hidden="true" />
            </button>
            <button className={styles.giftHint} type="button" onClick={() => setGiftOpen(true)}>
              Nhấn để mở hộp
            </button>
            <p>Sự hiện diện của quý khách<br />là niềm vinh hạnh của gia đình chúng tôi!</p>
          </section>
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

        <button className={styles.musicToggle} type="button" data-visible={opened} data-playing={musicPlaying} aria-label={musicPlaying ? "Tắt nhạc" : "Bật nhạc"} onClick={() => musicPlaying ? pauseMusic() : playMusic()}>
          {musicPlaying ? <Music2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
        </button>

        {giftOpen && (
          <div className={styles.giftModal} role="dialog" aria-modal="true" aria-labelledby="gift-modal-title" onClick={() => setGiftOpen(false)}>
            <div className={styles.giftModalCard} onClick={(event) => event.stopPropagation()}>
              <button className={styles.giftModalClose} type="button" aria-label="Đóng hộp mừng cưới" onClick={() => setGiftOpen(false)}>
                <X aria-hidden="true" />
              </button>
              <h2 id="gift-modal-title">Hộp Mừng Cưới</h2>
              <p>Cảm ơn tất cả các tình cảm mà các em, các bạn,<br />các anh các chị đã dành cho hai vợ chồng ạ!</p>
              <div className={styles.qrCards}>
                <article className={styles.qrCard}>
                  <h3>Chú rể<strong>{groom.names[0]}</strong></h3>
                  <a className={styles.modalQrImage} href={groom.qrImage} target="_blank" rel="noreferrer">
                    <Image src={groom.qrImage} alt={`Mã QR mừng cưới chú rể ${groom.names[0]}`} fill unoptimized sizes="220px" />
                  </a>
                  <a className={styles.qrDownload} href={groom.qrImage} download="QR-mung-cuoi-Hoang-Phi.jpg">Tải ảnh QR</a>
                </article>
                <article className={styles.qrCard}>
                  <h3>Cô dâu<strong>{bride.names[0]}</strong></h3>
                  <a className={styles.modalQrImage} href={bride.qrImage} target="_blank" rel="noreferrer">
                    <Image src={bride.qrImage} alt={`Mã QR mừng cưới cô dâu ${bride.names[0]}`} fill unoptimized sizes="220px" />
                  </a>
                  <a className={styles.qrDownload} href={bride.qrImage} download="QR-mung-cuoi-My-Duyen.jpg">Tải ảnh QR</a>
                </article>
              </div>
            </div>
          </div>
        )}

        {activePhoto !== null && (
          <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`Ảnh cưới ${activePhoto + 1}`} onClick={() => setActivePhoto(null)}>
            <button className={styles.lightboxClose} type="button" aria-label="Đóng ảnh" onClick={() => setActivePhoto(null)}><X aria-hidden="true" /></button>
            <button className={`${styles.lightboxArrow} ${styles.lightboxPrev}`} type="button" aria-label="Ảnh trước" onClick={(event) => { event.stopPropagation(); setActivePhoto((activePhoto - 1 + groom.albumImages.length) % groom.albumImages.length) }}><ChevronLeft aria-hidden="true" /></button>
            <figure onClick={(event) => event.stopPropagation()}>
              <Image src={groom.albumImages[activePhoto]} alt={`Ảnh cưới ${activePhoto + 1} của Hoàng Phi và Mỹ Duyên`} fill priority sizes="95vw" />
            </figure>
            <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} type="button" aria-label="Ảnh sau" onClick={(event) => { event.stopPropagation(); setActivePhoto((activePhoto + 1) % groom.albumImages.length) }}><ChevronRight aria-hidden="true" /></button>
          </div>
        )}
      </div>
    </div>
  )
}
