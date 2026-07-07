import Image from "next/image"

import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type ThankYouSectionProps = {
  data: typeof weddingV2Data.thankYou
}

export function ThankYouSection({ data }: ThankYouSectionProps) {
  return (
    <section className={styles.thankYou} aria-labelledby="wedding-v2-thank-you-title">
      <div className={styles.thankYouCopy}>
        <h2 id="wedding-v2-thank-you-title">{data.scriptTitle}</h2>
        <span className={styles.storyHeart} aria-hidden="true">
          ♡
        </span>
        <p>{data.message}</p>
        <div className={styles.thankYouSignature}>
          <span>{data.signature}</span>
          <strong>{data.date}</strong>
        </div>
      </div>

      <figure className={styles.finalPortrait}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={509}
          height={1032}
          sizes="(min-width: 1200px) 260px, (min-width: 768px) 240px, 62vw"
        />
      </figure>
    </section>
  )
}
