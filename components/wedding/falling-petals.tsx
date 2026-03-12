"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
  type: "heart" | "petal" | "sparkle" | "ring"
  color: string
}

const colors = [
  "text-primary/70",
  "text-primary/50",
  "text-accent/60",
  "text-primary/40",
]

export function FallingPetals() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 15,
      size: 8 + Math.random() * 16,
      opacity: 0.3 + Math.random() * 0.5,
      type: ["heart", "petal", "sparkle", "ring"][Math.floor(Math.random() * 4)] as Particle["type"],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  const renderParticle = (particle: Particle) => {
    switch (particle.type) {
      case "heart":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={particle.color}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )
      case "petal":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            className={particle.color}
          >
            <ellipse
              cx="12"
              cy="12"
              rx="5"
              ry="10"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        )
      case "sparkle":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={particle.color}
          >
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
          </svg>
        )
      case "ring":
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={particle.color}
          >
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall-rotate"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity,
          }}
        >
          {renderParticle(particle)}
        </div>
      ))}
      <style jsx>{`
        @keyframes fall-rotate {
          0% {
            transform: translateY(-5vh) rotate(0deg) translateX(0) scale(0);
            opacity: 0;
          }
          5% {
            transform: translateY(0) rotate(20deg) translateX(10px) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) rotate(90deg) translateX(-20px) scale(1);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(30px) scale(0.9);
          }
          75% {
            transform: translateY(75vh) rotate(270deg) translateX(-15px) scale(0.8);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(20px) scale(0.5);
            opacity: 0;
          }
        }
        .animate-fall-rotate {
          animation: fall-rotate ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
