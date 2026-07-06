const particles = Array.from({ length: 14 }, (_, index) => ({
  left: 8 + ((index * 37) % 86),
  top: 10 + ((index * 41) % 76),
  delay: index * 0.44,
  duration: 15 + (index % 8),
  size: 3 + (index % 4),
  petal: index % 3 === 0,
}))

export function EndingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className={particle.petal ? "ending-petal" : "ending-mote"}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.petal ? particle.size * 2 : particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <style jsx>{`
        .ending-mote,
        .ending-petal {
          position: absolute;
          display: block;
        }

        .ending-mote {
          border-radius: 999px;
          background: rgba(217, 165, 90, 0.34);
          animation: ending-mote-rise cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .ending-petal {
          border-radius: 90% 10% 90% 10%;
          background: rgba(216, 200, 241, 0.6);
          animation: ending-petal-rise cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @keyframes ending-mote-rise {
          0%,
          100% {
            opacity: 0.16;
            transform: translate3d(0, 0, 0) scale(0.82);
          }
          50% {
            opacity: 0.36;
            transform: translate3d(8px, -34px, 0) scale(1.08);
          }
        }

        @keyframes ending-petal-rise {
          0%,
          100% {
            opacity: 0.2;
            transform: translate3d(0, 0, 0) rotate(-10deg);
          }
          50% {
            opacity: 0.5;
            transform: translate3d(14px, -42px, 0) rotate(16deg);
          }
        }

        @media (max-width: 767px) {
          .ending-mote:nth-child(n + 10),
          .ending-petal:nth-child(n + 10) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
