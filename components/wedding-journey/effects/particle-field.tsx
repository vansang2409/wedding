"use client"

const particles = Array.from({ length: 22 }, (_, index) => ({
  left: 4 + ((index * 37) % 92),
  top: 8 + ((index * 53) % 84),
  size: 2 + (index % 4),
  delay: (index % 9) * 0.7,
  duration: 14 + (index % 9),
  lavender: index % 3 === 0,
}))

export function ParticleField() {
  return (
    <div className="absolute inset-0">
      {particles.map((particle, index) => (
        <span
          key={index}
          className={`journey-dust absolute rounded-full ${particle.lavender ? "bg-[#D9CCFF]/45" : "bg-[#F4C96B]/35"}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `journey-particle ${particle.duration}s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        .journey-dust {
          filter: blur(0.2px);
        }

        @keyframes journey-particle {
          0%,
          100% {
            opacity: 0.08;
            transform: translate3d(0, 0, 0) scale(0.78);
          }
          50% {
            opacity: 0.42;
            transform: translate3d(12px, -34px, 0) scale(1.12);
          }
        }
      `}</style>
    </div>
  )
}
