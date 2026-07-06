import Image from "next/image"
import type { JourneyImage } from "../../data/wedding-journey-data"

type PhotoPlaneLayout = {
  left: number
  top: number
  width: number
  rotate: number
  featured?: boolean
}

export function PhotoPlane({
  image,
  index,
  layout,
  onOpen,
}: {
  image: JourneyImage
  index: number
  layout: PhotoPlaneLayout
  onOpen: () => void
}) {
  return (
    <figure
      className={`photo-paper pointer-events-auto group ${layout.featured ? "z-20" : "z-10"}`}
      style={
        {
          "--photo-left": `${layout.left}%`,
          "--photo-top": `${layout.top}%`,
          "--photo-width": `${layout.width}%`,
          "--photo-rotate": `${layout.rotate}deg`,
          animationDelay: `${index * 90}ms`,
        } as React.CSSProperties
      }
    >
      <span className="absolute -right-3 -top-3 z-20 h-8 w-14 rotate-45 bg-[#DDBB83]/58 shadow-[0_8px_18px_rgba(80,52,24,0.12)]" />
      <button
        type="button"
        onClick={onOpen}
        className="block w-full rounded-[0.2rem] outline-none focus-visible:ring-4 focus-visible:ring-[#D8C8F1]/80"
        aria-label={`Xem ảnh ${index + 1}: ${image.alt}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={layout.featured ? 620 : 460}
          height={layout.featured ? 620 : 420}
          priority={image.priority}
          loading={image.priority ? "eager" : "lazy"}
          sizes={layout.featured ? "(max-width: 767px) 100vw, 30vw" : "(max-width: 767px) 100vw, 24vw"}
          className={`w-full border-[9px] border-white object-cover shadow-[0_18px_42px_rgba(53,35,76,0.16)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018] ${
            layout.featured ? "aspect-square" : "aspect-[4/3]"
          }`}
        />
      </button>
      <figcaption className="sr-only">{image.alt}</figcaption>

      <style jsx>{`
        .photo-paper {
          position: absolute;
          left: var(--photo-left);
          top: var(--photo-top);
          width: var(--photo-width);
          transform: rotate(var(--photo-rotate));
          animation: photo-paper-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .photo-paper:hover {
          transform: rotate(var(--photo-rotate)) translateY(-6px);
        }

        @keyframes photo-paper-in {
          from {
            opacity: 0;
            filter: blur(8px);
            transform: translate3d(0, 24px, 0) rotate(var(--photo-rotate));
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: rotate(var(--photo-rotate));
          }
        }

        @media (max-width: 767px) {
          .photo-paper {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            transform: rotate(var(--photo-rotate));
          }

          .photo-paper:nth-child(n + 5) {
            display: none;
          }
        }
      `}</style>
    </figure>
  )
}
