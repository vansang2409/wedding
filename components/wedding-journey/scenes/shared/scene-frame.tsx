import type { JourneySceneId } from "../../data/wedding-journey-data"

type SceneFrameProps = {
  id: JourneySceneId
  eyebrow: string
  title: string
  description: string
  children: React.ReactNode
  frameClassName?: string
  contentClassName?: string
}

export function SceneFrame({
  id,
  eyebrow,
  title,
  description,
  children,
  frameClassName = "",
  contentClassName = "",
}: SceneFrameProps) {
  return (
    <section id={id} className="journey-scene journey-perspective">
      <div className={`mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-center lg:gap-12 ${frameClassName}`}>
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-white/45 bg-[#071936]/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(7,25,54,0.14)] [font-family:Arial,Helvetica,sans-serif]">
            {eyebrow}
          </p>
          <h2 className="max-w-2xl text-[clamp(2.85rem,6vw,6.25rem)] font-black leading-[0.93] tracking-normal text-[#071936] drop-shadow-[0_14px_28px_rgba(255,255,255,0.5)] [font-family:Arial,Helvetica,sans-serif]">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base font-semibold leading-8 text-[#8B8175] [font-family:Arial,Helvetica,sans-serif] md:text-lg md:leading-9">
            {description}
          </p>
        </div>
        <div className={`relative min-h-[29rem] md:min-h-[33rem] ${contentClassName}`}>{children}</div>
      </div>
    </section>
  )
}
