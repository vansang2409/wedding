import { weddingV2Data } from "@/data/wedding-v2"
import tokens from "@/styles/wedding-v2/tokens.module.css"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

import { BackgroundSystem } from "./background-system"
import { CinematicOverlay } from "./cinematic-overlay"
import { CountdownSection } from "./sections/countdown-section"
import { GallerySection } from "./sections/gallery-section"
import { HeroSection } from "./sections/hero-section"
import { StorySection } from "./sections/story-section"
import { ThankYouSection } from "./sections/thank-you-section"
import { WeddingInfoSection } from "./sections/wedding-info-section"
import { FixedMusicButton } from "./fixed-music-button"
import { WeddingV2Header } from "./wedding-v2-header"

export function WeddingJourneyV2() {
  return (
    <main className={`${tokens.tokens} ${styles.page}`}>
      <FixedMusicButton src={weddingV2Data.audio.src} label={weddingV2Data.audio.label} />
      <CinematicOverlay />
      <div className={styles.stage}>
        <BackgroundSystem />
        <article className={styles.frame} aria-label="Thiệp cưới Văn Sang và Thu Thương">
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <HeroSection data={weddingV2Data.hero} couple={weddingV2Data.couple} />
          </div>
        </article>
        <article className={`${styles.frame} ${styles.storyFrame}`} id="wedding-v2-story" aria-label={weddingV2Data.story.title}>
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <StorySection data={weddingV2Data.story} />
          </div>
        </article>
        <article className={`${styles.frame} ${styles.galleryFrame}`} id="wedding-v2-gallery" aria-label={weddingV2Data.gallery.title}>
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <GallerySection data={weddingV2Data.gallery} />
          </div>
        </article>
        <article className={`${styles.frame} ${styles.weddingInfoFrame}`} id="wedding-v2-wedding-info" aria-label={weddingV2Data.weddingInfo.title}>
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <WeddingInfoSection data={weddingV2Data.weddingInfo} />
          </div>
        </article>
        <article className={`${styles.frame} ${styles.countdownFrame}`} id="wedding-v2-countdown" aria-label={weddingV2Data.countdown.title}>
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <CountdownSection data={weddingV2Data.countdown} />
          </div>
        </article>
        <article className={`${styles.frame} ${styles.thankYouFrame}`} id="wedding-v2-thank-you" aria-label={weddingV2Data.thankYou.scriptTitle}>
          <div className={styles.frameContent}>
            <WeddingV2Header
              monogram={weddingV2Data.couple.monogram}
            />
            <ThankYouSection data={weddingV2Data.thankYou} />
          </div>
        </article>
      </div>
    </main>
  )
}
