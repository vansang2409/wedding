import { Mouse } from "lucide-react"
import Image from "next/image"
import { weddingJourneyData } from "../../data/wedding-journey-data"

const petals = Array.from({ length: 16 }, (_, index) => ({
  left: 8 + ((index * 19) % 86),
  top: 10 + ((index * 31) % 76),
  delay: index * 0.32,
  size: 9 + (index % 4) * 3,
  rotate: index * 27,
}))

export function OpeningScene() {
  const { couple, hero, event, gallery } = weddingJourneyData

  return (
    <section id="opening" className="journey-scene">
      <div className="hero-card relative mx-auto grid min-h-[calc(100svh-2rem)] w-full max-w-[1480px] overflow-hidden rounded-[1.4rem] border border-white/70 bg-[#FBF6FB]/72 shadow-[0_34px_120px_rgba(53,35,76,0.13)] backdrop-blur-xl lg:min-h-[860px] lg:grid-cols-[0.48fr_0.52fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.92),transparent_28%),radial-gradient(circle_at_76%_70%,rgba(216,200,241,0.36),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.58),rgba(246,235,250,0.42))]" />
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(32,25,57,0.035)_1px,transparent_1px),linear-gradient(rgba(32,25,57,0.028)_1px,transparent_1px)] [background-size:44px_44px]" />

        {petals.map((petal, index) => (
          <span
            key={index}
            className="hero-petal pointer-events-none absolute z-10 rounded-[90%_10%_90%_10%] bg-[#D8C8F1]/70 shadow-[0_10px_24px_rgba(111,85,152,0.12)]"
            style={{
              left: `${petal.left}%`,
              top: `${petal.top}%`,
              width: `${petal.size * 1.6}px`,
              height: `${petal.size}px`,
              rotate: `${petal.rotate}deg`,
              animationDelay: `${petal.delay}s`,
            }}
          />
        ))}

        <div className="relative z-20 flex flex-col justify-center px-8 pb-10 pt-28 text-center sm:px-12 lg:px-24 lg:py-28 lg:text-left">
          <p className="mx-auto max-w-xs text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.48em] text-[#201939] lg:mx-0">
            {hero.label}
          </p>
          <h1 className="mt-8 text-[clamp(3.1rem,8vw,6.8rem)] font-normal leading-[0.95] text-[#201939] [font-family:var(--journey-serif)]">
            <span className="block">{couple.groom.name}</span>
            <span className="my-1 block text-[0.62em] italic leading-none text-[#D9A55A]">&</span>
            <span className="block">{couple.bride.name}</span>
          </h1>
          <div className="mx-auto mt-7 flex items-center justify-center gap-4 text-sm text-[#201939] lg:mx-0 lg:justify-start">
            <span className="h-px w-10 bg-[#D9A55A]/60" />
            <span className="[font-family:var(--journey-serif)]">{event.longDate}</span>
            <span className="h-px w-10 bg-[#D9A55A]/60" />
          </div>
          <a
            href="#story"
            className="mx-auto mt-9 inline-flex h-14 w-fit items-center gap-4 rounded-full bg-[#6F5598] px-8 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_44px_rgba(111,85,152,0.32)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[#5E4784] focus:outline-none focus:ring-4 focus:ring-[#D8C8F1]/80 lg:mx-0"
          >
            {hero.primaryCta}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative z-20 min-h-[24rem] lg:min-h-0">
          <div className="absolute bottom-0 left-[4%] right-[4%] top-[4%] rounded-[45%_45%_0_0] bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.72),rgba(216,200,241,0.28)_55%,transparent_76%)]" />
          <Image
            src={gallery[0].src}
            alt={gallery[0].alt}
            width={980}
            height={980}
            priority
            className="hero-couple absolute bottom-0 left-1/2 z-10 h-[92%] w-[88%] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_34px_72px_rgba(53,35,76,0.2)]"
          />
          <div className="pointer-events-none absolute bottom-0 left-[-8%] right-[-8%] z-20 h-48 bg-[radial-gradient(ellipse_at_center,rgba(216,200,241,0.78),rgba(255,255,255,0.24)_55%,transparent_76%)] blur-sm" />
          <div className="pointer-events-none absolute bottom-[9%] right-[12%] z-30 h-40 w-80 rotate-[-7deg] rounded-[999px] border border-[#D9A55A]/45" />
          <p className="pointer-events-none absolute right-[13%] top-[18%] z-30 hidden rotate-[17deg] text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#D9A55A] lg:block">
            We're getting married
          </p>
        </div>

        <a
          href="#story"
          className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#201939]/70 lg:flex"
          aria-label="Scroll"
        >
          <span className="grid h-9 w-6 place-items-center rounded-full border border-[#201939]/35 bg-white/40">
            <Mouse className="h-4 w-4" />
          </span>
          Scroll
        </a>
      </div>

      <style jsx>{`
        .hero-card {
          animation: hero-card-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .hero-couple {
          animation: hero-couple-breathe 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .hero-petal {
          animation: hero-petal-drift 16s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @keyframes hero-card-in {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes hero-couple-breathe {
          0%,
          100% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          50% {
            transform: translateX(-50%) translateY(-6px) scale(1.008);
          }
        }

        @keyframes hero-petal-drift {
          0%,
          100% {
            translate: 0 0;
            opacity: 0.34;
          }
          50% {
            translate: 14px -28px;
            opacity: 0.68;
          }
        }

        @media (max-width: 767px) {
          .hero-card {
            min-height: calc(100svh - 1rem);
          }
        }
      `}</style>
    </section>
  )
}
