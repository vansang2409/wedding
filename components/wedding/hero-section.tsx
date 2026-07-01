"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { CalendarDays, MapPin, Sparkles } from "lucide-react"
import { Countdown } from "./countdown"
import { WeddingScene3D } from "./wedding-scene-3d"
import { useInView } from "@/hooks/use-in-view"

const depthPhotos = [
  { src: "/images/6.jpg", alt: "Chú rể Văn Sang", className: "left-[3%] top-[16%] rotate-[-8deg]" },
  { src: "/images/3.jpg", alt: "Cô dâu Thu Thương", className: "right-[4%] top-[20%] rotate-[7deg]" },
  { src: "/images/1.jpg", alt: "Khoảnh khắc cưới", className: "left-[10%] bottom-[13%] rotate-[6deg]" },
  { src: "/images/10.jpg", alt: "Ảnh cưới Sang và Thương", className: "right-[11%] bottom-[14%] rotate-[-6deg]" },
]

export function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const heroRef = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        left: (index * 37) % 100,
        top: (index * 53) % 100,
        size: 3 + (index % 4),
        delay: (index % 8) * 0.35,
        duration: 6 + (index % 7) * 0.8,
      })),
    [],
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      hero.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`)
      hero.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`)
      hero.style.setProperty("--shift-x", `${(x * 16).toFixed(2)}px`)
      hero.style.setProperty("--shift-y", `${(y * 12).toFixed(2)}px`)
    }

    const reset = () => {
      hero.style.setProperty("--tilt-x", "0deg")
      hero.style.setProperty("--tilt-y", "0deg")
      hero.style.setProperty("--shift-x", "0px")
      hero.style.setProperty("--shift-y", "0px")
    }

    hero.addEventListener("pointermove", onPointerMove)
    hero.addEventListener("pointerleave", reset)
    reset()

    return () => {
      hero.removeEventListener("pointermove", onPointerMove)
      hero.removeEventListener("pointerleave", reset)
    }
  }, [])

  const weddingDate = new Date("2027-12-25T10:00:00")

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#fff9fd_0%,#f5ecff_42%,#fffdf8_100%)] px-4 py-16 md:py-20"
    >
      <WeddingScene3D />

      <div className="pointer-events-none absolute bottom-10 left-[max(0.75rem,calc(50%-43rem))] z-[4] hidden w-[165px] opacity-85 drop-shadow-[0_30px_45px_rgba(87,65,105,0.16)] xl:block 2xl:w-[210px]">
        <Image
          src="/images/groom-cartoon.png"
          alt=""
          width={919}
          height={1712}
          className="h-auto w-full"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute bottom-12 right-[max(11rem,calc(50%-39rem))] z-[4] hidden w-[155px] opacity-85 drop-shadow-[0_30px_45px_rgba(87,65,105,0.16)] xl:block 2xl:w-[198px]">
        <Image
          src="/images/bride-cartoon.png"
          alt=""
          width={941}
          height={1672}
          className="h-auto w-full"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.46)_22%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.46)_78%,rgba(255,255,255,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_48%,rgba(255,255,255,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {mounted && (
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          {particles.map((particle, index) => (
            <span
              key={index}
              className="absolute rounded-full bg-primary/35 shadow-[0_0_18px_rgba(171,117,226,0.45)]"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `hero-particle ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-5 z-[2] hidden pointer-events-none sm:block md:inset-10">
        <div className="absolute left-0 top-0 h-28 w-28 border-l border-t border-primary/30" />
        <div className="absolute right-0 top-0 h-28 w-28 border-r border-t border-primary/30" />
        <div className="absolute bottom-0 left-0 h-28 w-28 border-b border-l border-primary/30" />
        <div className="absolute bottom-0 right-0 h-28 w-28 border-b border-r border-primary/30" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-center justify-center">
        <div className="relative w-full py-8 [perspective:1200px]">
          <div
            className="pointer-events-none absolute inset-0 hidden transition-transform duration-300 ease-out lg:block"
            style={{
              transform:
                "translate3d(calc(var(--shift-x, 0px) * -0.35), calc(var(--shift-y, 0px) * -0.35), 0)",
            }}
          >
            {depthPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`absolute h-44 w-32 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/50 p-1 shadow-[0_26px_80px_rgba(88,62,119,0.2)] backdrop-blur-sm ${photo.className}`}
                style={{ animation: `photo-drift ${7 + index}s ease-in-out infinite`, animationDelay: `${index * 0.35}s` }}
              >
                <Image src={photo.src} alt={photo.alt} width={260} height={340} className="h-full w-full rounded-[1rem] object-cover" />
              </div>
            ))}
          </div>

          <div
            className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transform:
                "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translate3d(var(--shift-x, 0px), var(--shift-y, 0px), 0)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="mb-7 flex items-center justify-center gap-3">
              <Sparkles className="h-5 w-5 text-primary/70" />
              <span className="border-y border-primary/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Save The Date
              </span>
              <Sparkles className="h-5 w-5 text-primary/70" />
            </div>

            <div className="mb-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
              <div className="justify-self-center">
                <Portrait src="/images/6.jpg" alt="Chú rể Văn Sang" label="Văn Sang" />
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/25 bg-white/55 shadow-[0_18px_60px_rgba(130,82,172,0.18)] backdrop-blur-md">
                  <div className="absolute inset-2 rounded-full border border-dashed border-primary/25" style={{ animation: "spin 24s linear infinite" }} />
                  <span className="font-display text-4xl text-primary">&</span>
                </div>
              </div>

              <div className="justify-self-center">
                <Portrait src="/images/3.jpg" alt="Cô dâu Thu Thương" label="Thu Thương" />
              </div>
            </div>

            <div className="mb-8 space-y-3">
              <h1 className="text-[clamp(3rem,10vw,7.8rem)] font-display font-bold leading-[0.95] tracking-normal text-foreground">
                Văn Sang
              </h1>
              <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <h1 className="text-[clamp(3rem,10vw,7.8rem)] font-display font-bold leading-[0.95] tracking-normal text-foreground">
                Thu Thương
              </h1>
            </div>

            <p className="mx-auto mb-9 max-w-xl text-lg italic tracking-wide text-muted-foreground md:text-xl">
              "Hai trái tim, một tình yêu vĩnh cửu"
            </p>

            <div className="mb-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/68 px-5 py-3 text-sm font-medium text-foreground shadow-[0_12px_36px_rgba(96,66,124,0.12)] backdrop-blur">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>Thứ Bảy, 25.12.2027</span>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-primary/20 bg-white/68 px-5 py-3 text-sm font-medium text-foreground shadow-[0_12px_36px_rgba(96,66,124,0.12)] backdrop-blur sm:inline-flex">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lễ cưới</span>
              </div>
            </div>

            <Countdown targetDate={weddingDate} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Khám phá</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30 pt-2">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-primary/60" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-particle {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.34;
          }
          45% {
            transform: translate3d(18px, -34px, 0) scale(1.5);
            opacity: 0.78;
          }
        }

        @keyframes photo-drift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 40px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

function Portrait({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-2 rounded-full border border-primary/20" style={{ animation: "spin 28s linear infinite" }} />
      <div className="absolute -inset-4 rounded-full border border-dashed border-primary/15" style={{ animation: "spin 36s linear infinite reverse" }} />
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0_24px_70px_rgba(92,62,120,0.24)] transition-transform duration-500 group-hover:scale-105 md:h-44 md:w-44">
        <Image src={src} alt={alt} width={220} height={220} className="h-full w-full object-cover" priority />
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/20 bg-white/88 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-primary shadow-lg backdrop-blur">
        {label}
      </div>
    </div>
  )
}
