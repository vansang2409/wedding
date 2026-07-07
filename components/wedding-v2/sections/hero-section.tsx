import Image from "next/image"

import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type HeroSectionProps = {
  data: typeof weddingV2Data.hero
  couple: typeof weddingV2Data.couple
}

export function HeroSection({ data, couple }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="wedding-v2-hero-title">
      <div>
        <p className={styles.eyebrow}>{data.eyebrow}</p>
        <h1 className={styles.names} id="wedding-v2-hero-title">
          <span>{couple.groom}</span>
          <span className={styles.ampersand}>&amp;</span>
          <span>{couple.bride}</span>
        </h1>
        <div className={styles.date}>{data.date}</div>
      </div>

      <div className={styles.visualWrap}>
        <div className={styles.visualGlow} aria-hidden="true" />
        <Image
          className={styles.heroImage}
          src={data.image.src}
          alt={data.image.alt}
          width={509}
          height={1032}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1200px) 430px, (min-width: 768px) 400px, 88vw"
        />
        <div className={styles.lavenderField} aria-hidden="true" />
      </div>

      <div className={styles.heroFooter}>
        <a className={styles.cta} href="#wedding-v2-story">
          {data.cta}
        </a>
        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.mouse} />
          <span>{data.scrollLabel}</span>
        </div>
      </div>
    </section>
  )
}
