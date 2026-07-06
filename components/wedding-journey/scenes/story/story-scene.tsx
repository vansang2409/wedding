import Image from "next/image"
import { weddingJourneyData } from "../../data/wedding-journey-data"

const visibleMoments = weddingJourneyData.storyMoments.slice(0, 3)

export function StoryScene() {
  return (
    <section id="story" className="journey-scene">
      <div className="mx-auto grid w-full max-w-[1480px] gap-5 lg:grid-cols-[1.25fr_0.85fr]">
        <article className="story-panel relative overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/58 p-8 shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl md:p-12 lg:min-h-[640px]">
          <DecorativeBloom />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.08fr_0.42fr_0.5fr]">
            <div className="hidden lg:block">
              <TimelineRail count={visibleMoments.length} />
            </div>

            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#D9A55A]">Chapter 01</p>
              <h2 className="mt-3 text-[clamp(2.25rem,4.5vw,4.9rem)] font-normal leading-[0.95] text-[#201939] [font-family:var(--journey-serif)]">
                The Beginning
              </h2>
              <p className="mt-6 max-w-xs text-sm font-medium leading-7 text-[#6F6575]">
                Những khoảnh khắc đầu tiên được giữ lại như các trang ký ức mềm, nhẹ và đủ gần để người xem bước vào câu chuyện.
              </p>
            </div>

            <div className="relative min-h-[26rem]">
              {visibleMoments.map((moment, index) => (
                <StoryPhoto key={moment.title} moment={moment} index={index} />
              ))}
            </div>
          </div>
        </article>

        <aside className="story-panel relative overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/52 p-8 shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl md:p-10">
          <DecorativeBloom />
          <p className="relative z-10 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#D9A55A]">Timeline</p>
          <div className="relative z-10 mt-7 grid gap-7">
            {visibleMoments.map((moment, index) => (
              <div key={moment.title} className="grid grid-cols-[2.5rem_1fr] gap-5">
                <div className="text-sm text-[#201939] [font-family:var(--journey-serif)]">{String(index + 1).padStart(2, "0")}</div>
                <div className="border-l border-[#D9A55A]/35 pl-5">
                  <p className="text-sm text-[#D9A55A] [font-family:var(--journey-serif)]">{moment.date}</p>
                  <h3 className="mt-2 text-2xl font-normal leading-tight text-[#201939] [font-family:var(--journey-serif)]">
                    {moment.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <style jsx>{`
        .story-panel {
          animation: story-panel-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes story-panel-in {
          from {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}

function StoryPhoto({ moment, index }: { moment: (typeof visibleMoments)[number]; index: number }) {
  const positions = [
    "left-[12%] top-[2%] w-[72%] rotate-[4deg]",
    "left-[0%] top-[44%] w-[58%] rotate-[-7deg]",
    "right-[0%] bottom-[2%] w-[66%] rotate-[3deg]",
  ]

  return (
    <figure className={`story-photo absolute ${positions[index] ?? positions[0]}`}>
      <span className="absolute -right-4 -top-4 z-20 h-10 w-16 rotate-45 bg-[#DDBB83]/54 shadow-[0_8px_18px_rgba(80,52,24,0.12)]" />
      <Image
        src={moment.image}
        alt={moment.title}
        width={620}
        height={420}
        className="aspect-[4/3] w-full rounded-[0.25rem] border-[10px] border-white object-cover shadow-[0_18px_44px_rgba(53,35,76,0.16)]"
      />
      <figcaption className="sr-only">{moment.title}</figcaption>
      <style jsx>{`
        .story-photo {
          animation: story-photo-float 9s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          animation-delay: ${index * 0.8}s;
        }

        @keyframes story-photo-float {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -8px;
          }
        }
      `}</style>
    </figure>
  )
}

function TimelineRail({ count }: { count: number }) {
  return (
    <div className="flex h-full flex-col items-center gap-3 pt-2 text-sm text-[#201939] [font-family:var(--journey-serif)]">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-2 w-2 rounded-full bg-[#D9A55A]" />
          {index < count - 1 && <span className="h-24 w-px bg-gradient-to-b from-[#D9A55A]/70 to-[#D8C8F1]/40" />}
        </div>
      ))}
    </div>
  )
}

function DecorativeBloom() {
  return (
    <>
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#D8C8F1]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-8 h-80 w-80 rounded-full bg-[#F4E6EF]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-44 w-44 rounded-full bg-[#D9A55A]/10 blur-2xl" />
    </>
  )
}
