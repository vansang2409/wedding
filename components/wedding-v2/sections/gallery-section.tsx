import Image from "next/image"

import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type GallerySectionProps = {
  data: typeof weddingV2Data.gallery
}

export function GallerySection({ data }: GallerySectionProps) {
  return (
    <section className={styles.gallery} aria-labelledby="wedding-v2-gallery-title">
      <div className={styles.galleryIntro}>
        <h2 className={styles.galleryTitle} id="wedding-v2-gallery-title">
          {data.title}
        </h2>
        <span className={styles.storyHeart} aria-hidden="true">
          ♡
        </span>
        <p>{data.subtitle}</p>
      </div>

      <div className={styles.galleryCollage}>
        {data.photos.map((photo, index) => (
          <figure className={styles.galleryPhoto} data-variant={photo.variant} key={`${photo.src}-${index}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={720}
              height={720}
              loading="eager"
              sizes="(min-width: 1200px) 210px, (min-width: 768px) 200px, 45vw"
            />
          </figure>
        ))}
      </div>

      <a className={styles.galleryLink} href="#wedding-v2-gallery-title">
        <span>{data.cta}</span>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
