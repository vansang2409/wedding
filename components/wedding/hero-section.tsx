"use client"

import { Countdown } from "./countdown"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Wedding date: December 25, 2027
  const weddingDate = new Date("2027-12-25T10:00:00")

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, var(--primary) 0%, transparent 40%)
            `,
            filter: 'blur(100px)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Elegant frame corners */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 md:w-40 h-24 md:h-40 border-l-2 border-t-2 border-primary/30 rounded-tl-[3rem]" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 border-r-2 border-t-2 border-primary/30 rounded-tr-[3rem]" />
        <div className="absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 border-l-2 border-b-2 border-primary/30 rounded-bl-[3rem]" />
        <div className="absolute bottom-0 right-0 w-24 md:w-40 h-24 md:h-40 border-r-2 border-b-2 border-primary/30 rounded-br-[3rem]" />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Sparkle decoration */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Sparkles className="w-5 h-5 text-primary/60 animate-pulse" />
          <span className="px-6 py-2 text-xs font-semibold tracking-[0.4em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            Save The Date
          </span>
          <Sparkles className="w-5 h-5 text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Couple photos with animated rings */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Groom photo */}
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div 
                className="absolute -inset-1 rounded-full border-2 border-primary/30"
                style={{ animation: 'spin 20s linear infinite' }}
              />
              <div 
                className="absolute -inset-2 rounded-full border border-dashed border-primary/20"
                style={{ animation: 'spin 30s linear infinite reverse' }}
              />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-card shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/6.jpg"
                  alt="Chú rể"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-card rounded-full shadow-lg border border-primary/20">
                <span className="text-xs font-semibold text-primary tracking-wider">GROOM</span>
              </div>
            </div>

            {/* Animated heart connector */}
            <div className="relative flex flex-col items-center">
              <div className="absolute top-1/2 -translate-y-1/2 w-16 md:w-24 h-px">
                <div className="w-full h-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 animate-pulse" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-card to-card/80 rounded-full p-4 shadow-2xl border border-primary/30">
                  <svg
                    className="w-10 h-10 md:w-14 md:h-14 text-primary drop-shadow-lg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bride photo */}
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div 
                className="absolute -inset-1 rounded-full border-2 border-primary/30"
                style={{ animation: 'spin 20s linear infinite reverse' }}
              />
              <div 
                className="absolute -inset-2 rounded-full border border-dashed border-primary/20"
                style={{ animation: 'spin 30s linear infinite' }}
              />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-card shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/3.jpg"
                  alt="Cô dâu"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-card rounded-full shadow-lg border border-primary/20">
                <span className="text-xs font-semibold text-primary tracking-wider">BRIDE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Names with reveal animation */}
        <div className="mb-10 space-y-4">
          <div className="overflow-hidden">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight tracking-wide"
              style={{ animation: mounted ? 'slide-up 0.8s ease-out forwards' : 'none' }}
            >
              Văn Sang
            </h1>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/60 to-primary" />
            <span 
              className="font-serif text-3xl md:text-4xl text-primary"
              style={{ animation: mounted ? 'fade-scale 0.5s ease-out 0.4s both' : 'none' }}
            >
              &
            </span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-primary/60 to-primary" />
          </div>
          <div className="overflow-hidden">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight tracking-wide"
              style={{ animation: mounted ? 'slide-up 0.8s ease-out 0.2s forwards' : 'none' }}
            >
              Thu Thương
            </h1>
          </div>
        </div>

        {/* Elegant quote */}
        <p className="text-lg md:text-xl text-muted-foreground font-serif mb-12 tracking-wide italic max-w-lg mx-auto">
          "Hai trái tim, một tình yêu vĩnh cửu"
        </p>

        {/* Wedding date card */}
        <div className="mb-12">
          <div className="inline-flex flex-col items-center gap-4 px-10 py-6 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-md rounded-3xl border border-primary/20 shadow-2xl">
            <div className="flex items-center gap-6 md:gap-10">
              <div className="text-center">
                <span className="block text-4xl md:text-6xl font-display font-bold text-primary">25</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Ngày</span>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <div className="text-center">
                <span className="block text-4xl md:text-6xl font-display font-bold text-primary">12</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Tháng</span>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <div className="text-center">
                <span className="block text-4xl md:text-6xl font-display font-bold text-primary">2027</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Năm</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground font-medium tracking-wide">
              Thứ Sáu
            </div>
          </div>
        </div>

        {/* Countdown */}
        <Countdown targetDate={weddingDate} />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Khám phá</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.8;
          }
        }
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.15);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-scale {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
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
