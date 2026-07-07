import Image from "next/image"

import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type StorySectionProps = {
  data: typeof weddingV2Data.story
}

export function StorySection({ data }: StorySectionProps) {
  return (
    <section className={styles.story} aria-labelledby="wedding-v2-story-title">
      <div className={styles.storyIntro}>
        <h2 className={styles.storyTitle} id="wedding-v2-story-title">
          {data.title}
        </h2>
        <span className={styles.storyHeart} aria-hidden="true">
          ♡
        </span>
      </div>

      <div className={styles.timeline}>
        {data.moments.map((moment, index) => (
          <article className={styles.storyMoment} data-side={index % 2 === 0 ? "right" : "left"} key={moment.year}>
            <div className={styles.timelineMark} aria-hidden="true" />
            <div className={styles.storyCopy}>
              <p className={styles.storyYear}>{moment.year}</p>
              <h3>{moment.title}</h3>
              <p>{moment.body}</p>
            </div>
            <figure className={styles.storyPhoto}>
              <Image
                src={moment.image.src}
                alt={moment.image.alt}
                width={720}
                height={720}
                sizes="(min-width: 1200px) 210px, (min-width: 768px) 200px, 44vw"
              />
            </figure>
          </article>
        ))}
      </div>
    </section>
  )
}
