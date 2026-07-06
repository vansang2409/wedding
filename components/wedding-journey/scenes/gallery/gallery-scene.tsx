import { weddingJourneyData } from "../../data/wedding-journey-data"
import { FloatingPhotoField } from "./floating-photo-field"

export function GalleryScene() {
  return (
    <section id="gallery" className="journey-scene">
      <div className="gallery-card relative mx-auto grid w-full max-w-[1480px] gap-8 overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/52 p-8 shadow-[0_26px_90px_rgba(53,35,76,0.1)] backdrop-blur-xl md:p-12 lg:min-h-[640px] lg:grid-cols-[0.35fr_0.65fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(216,200,241,0.32),transparent_28%),radial-gradient(circle_at_18%_90%,rgba(217,165,90,0.1),transparent_34%)]" />
        <div className="relative z-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#D9A55A]">Chapter 02</p>
          <h2 className="mt-3 text-[clamp(2.45rem,5vw,5.2rem)] font-normal leading-[0.95] text-[#201939] [font-family:var(--journey-serif)]">
            Memories
          </h2>
          <p className="mt-6 max-w-xs text-sm font-medium leading-7 text-[#6F6575]">
            Những bức ảnh được đặt như mảnh ký ức trên nền giấy lavender, nhẹ và có chủ ý hơn một lưới ảnh thông thường.
          </p>
        </div>
        <FloatingPhotoField images={weddingJourneyData.gallery} />
      </div>
    </section>
  )
}
