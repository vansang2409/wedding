import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Lễ Dạm Ngõ - Văn Sang & Thu Thương",
  description: "Trang trình chiếu lễ dạm ngõ ngày 31.08.2026.",
}

const floatingDots = Array.from({ length: 16 }, (_, index) => ({
  left: 9 + ((index * 47) % 82),
  top: 10 + ((index * 29) % 76),
  delay: (index % 7) * 0.45,
  size: 4 + (index % 3) * 2,
}))

export default function DamNgoV2Page() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#eee6ff] text-[#261139]">
      <section className="damngo-v2-stage relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(255,255,255,0.72)_0%,rgba(239,232,255,0.86)_40%,rgba(220,205,250,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(190,163,235,0.28)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(185,153,229,0.28)_100%)]" />

        <div className="damngo-v2-floral damngo-v2-floral-left" aria-hidden="true">
          <span className="flower flower-large" />
          <span className="flower flower-small" />
          <span className="leaf leaf-a" />
          <span className="leaf leaf-b" />
          <span className="leaf leaf-c" />
        </div>

        <div className="damngo-v2-floral damngo-v2-floral-right" aria-hidden="true">
          <span className="flower flower-large" />
          <span className="flower flower-small" />
          <span className="leaf leaf-a" />
          <span className="leaf leaf-b" />
          <span className="leaf leaf-c" />
        </div>

        <Image
          src="/images/groom-cartoon.png"
          alt="Văn Sang"
          width={900}
          height={1600}
          priority
          className="damngo-v2-person damngo-v2-groom absolute bottom-[3.2%] left-[9.2%] z-20 h-[78%] w-auto object-contain drop-shadow-[0_18px_24px_rgba(95,67,126,0.24)]"
        />

        <Image
          src="/images/bride-cartoon.png"
          alt="Thu Thương"
          width={900}
          height={1600}
          priority
          className="damngo-v2-person damngo-v2-bride absolute bottom-[4.2%] right-[9.8%] z-20 h-[76%] w-auto object-contain drop-shadow-[0_18px_24px_rgba(95,67,126,0.22)]"
        />

        <div className="damngo-v2-copy absolute left-1/2 top-[13.5%] z-30 flex w-[56vw] max-w-[980px] flex-col items-center text-center">
          <p className="damngo-v2-eyebrow font-sans text-[clamp(1.05rem,1.9vw,2.25rem)] font-medium uppercase leading-none text-[#2a143d]">
            NGÀY HAI HỌ GẶP NHAU
          </p>

          <h1 className="damngo-v2-title mt-[4vh] font-display text-[clamp(4.8rem,6.8vw,8.4rem)] font-semibold italic leading-[0.9] text-[#5a3a92]">
            Lễ Dạm Ngõ
          </h1>

          <div className="damngo-v2-date mt-[6.2vh] font-display text-[clamp(3.2rem,5.1vw,6.3rem)] font-medium leading-none text-[#211034]">
            31.08.2026
          </div>

          <p className="damngo-v2-weekday mt-[2.8vh] font-sans text-[clamp(1rem,1.65vw,2rem)] font-medium uppercase leading-none text-[#251237]">
            THỨ HAI
          </p>

          <div className="damngo-v2-names mt-[9.8vh] text-[#211034]">
            <p className="font-sans text-[clamp(0.92rem,1.28vw,1.55rem)] font-medium uppercase leading-none">
              TÊN
            </p>
            <p className="mt-[2vh] font-display text-[clamp(2rem,2.8vw,3.45rem)] font-medium leading-none">
              Văn Sang & Thu Thương
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-40">
          {floatingDots.map((dot, index) => (
            <span
              key={index}
              className="damngo-v2-dot absolute rounded-full bg-white/85 shadow-[0_0_16px_rgba(166,134,217,0.46)]"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))}
        </div>

        <Link
          href="/dam-ngo"
          className="absolute left-4 top-4 z-[90] inline-flex h-10 items-center gap-2 rounded-full border border-[#bba8db]/50 bg-white/60 px-4 text-sm font-semibold text-[#4f347a] shadow-[0_14px_34px_rgba(95,67,126,0.15)] backdrop-blur transition hover:bg-white/80 lg:hidden"
        >
          <ChevronLeft className="h-4 w-4" />
          Dạm ngõ
        </Link>

        <style>{`
          @keyframes damngo-v2-person-left {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.7deg); }
            50% { transform: translate3d(0, -8px, 0) rotate(0.25deg); }
          }

          @keyframes damngo-v2-person-right {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0.7deg); }
            50% { transform: translate3d(0, -8px, 0) rotate(-0.25deg); }
          }

          @keyframes damngo-v2-copy-in {
            from {
              opacity: 0;
              transform: translate3d(-50%, 18px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(-50%, 0, 0);
            }
          }

          @keyframes damngo-v2-dot {
            0%, 100% {
              opacity: 0.18;
              transform: translate3d(0, 0, 0) scale(0.75);
            }
            50% {
              opacity: 0.76;
              transform: translate3d(0, -14px, 0) scale(1.15);
            }
          }

          .damngo-v2-stage {
            isolation: isolate;
          }

          .damngo-v2-person {
            transform-origin: bottom center;
            will-change: transform;
          }

          .damngo-v2-groom {
            animation: damngo-v2-person-left 7s ease-in-out infinite;
          }

          .damngo-v2-bride {
            animation: damngo-v2-person-right 7.4s ease-in-out infinite;
          }

          .damngo-v2-copy {
            animation: damngo-v2-copy-in 720ms ease-out both;
          }

          .damngo-v2-title {
            text-shadow: 0 10px 28px rgba(87, 59, 137, 0.13);
          }

          .damngo-v2-dot {
            animation: damngo-v2-dot 5.8s ease-in-out infinite;
          }

          .damngo-v2-floral {
            position: absolute;
            z-index: 10;
            width: 32vw;
            max-width: 620px;
            aspect-ratio: 1;
            opacity: 0.42;
            filter: drop-shadow(0 12px 24px rgba(126, 94, 177, 0.08));
          }

          .damngo-v2-floral-left {
            left: -7vw;
            bottom: -13vw;
            transform: rotate(-12deg);
          }

          .damngo-v2-floral-right {
            right: -5vw;
            top: -12vw;
            transform: rotate(168deg);
          }

          .flower,
          .leaf {
            position: absolute;
            display: block;
            border: 3px solid rgba(111, 85, 164, 0.48);
            background: rgba(255, 255, 255, 0.24);
          }

          .flower {
            border-radius: 58% 42% 55% 45%;
          }

          .flower::before,
          .flower::after {
            content: "";
            position: absolute;
            inset: 9%;
            border: inherit;
            border-radius: inherit;
            background: rgba(255, 255, 255, 0.18);
          }

          .flower::before {
            transform: rotate(56deg);
          }

          .flower::after {
            transform: rotate(-56deg);
          }

          .flower-large {
            left: 24%;
            top: 26%;
            width: 42%;
            height: 42%;
          }

          .flower-small {
            left: 6%;
            top: 58%;
            width: 28%;
            height: 28%;
          }

          .leaf {
            width: 22%;
            height: 10%;
            border-radius: 100% 0 100% 0;
            background: rgba(147, 121, 191, 0.18);
          }

          .leaf-a {
            left: 62%;
            top: 18%;
            transform: rotate(24deg);
          }

          .leaf-b {
            left: 56%;
            top: 68%;
            transform: rotate(-22deg);
          }

          .leaf-c {
            left: 16%;
            top: 18%;
            transform: rotate(-34deg);
          }

          @media (max-width: 1250px) {
            .damngo-v2-copy {
              width: 56vw;
            }

            .damngo-v2-groom {
              left: 6.4%;
              height: 76%;
            }

            .damngo-v2-bride {
              right: 7%;
              height: 74%;
            }
          }

          @media (max-width: 900px) and (max-height: 500px) {
            .damngo-v2-copy {
              top: 12%;
              width: 60vw;
            }

            .damngo-v2-title {
              margin-top: 2.8vh;
              font-size: 3.25rem;
            }

            .damngo-v2-date {
              margin-top: 4.3vh;
              font-size: 2.65rem;
            }

            .damngo-v2-weekday {
              margin-top: 1.8vh;
              font-size: 0.9rem;
            }

            .damngo-v2-names {
              margin-top: 5.5vh;
            }

            .damngo-v2-eyebrow {
              font-size: 0.92rem;
            }

            .damngo-v2-names p:first-child {
              font-size: 0.72rem;
            }

            .damngo-v2-names p:last-child {
              margin-top: 1.4vh;
              font-size: 1.45rem;
            }

            .damngo-v2-groom {
              left: 5%;
              height: 73%;
            }

            .damngo-v2-bride {
              right: 5.5%;
              height: 71%;
            }
          }

          @media (max-width: 767px) and (orientation: portrait) {
            .damngo-v2-stage {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 100svh;
              height: 100svw;
              min-width: 100svh;
              min-height: 100svw;
              transform: translate(-50%, -50%) rotate(90deg);
              transform-origin: center;
            }

            .damngo-v2-stage a {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .damngo-v2-groom,
            .damngo-v2-bride,
            .damngo-v2-copy,
            .damngo-v2-dot {
              animation: none;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
