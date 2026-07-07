import type { weddingV2Data } from "@/data/wedding-v2"
import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type WeddingInfoSectionProps = {
  data: typeof weddingV2Data.weddingInfo
}

export function WeddingInfoSection({ data }: WeddingInfoSectionProps) {
  return (
    <section className={styles.weddingInfo} aria-labelledby="wedding-v2-info-title">
      <div className={styles.infoIntro}>
        <h2 id="wedding-v2-info-title">{data.title}</h2>
        <span className={styles.storyHeart} aria-hidden="true">
          ♡
        </span>
      </div>

      <div className={styles.familyNotes} aria-label="Thông tin hai bên gia đình">
        {[data.families.groom, data.families.bride].map((family) => (
          <div className={styles.familyNote} key={family.title}>
            <p>{family.title}</p>
            <strong>{family.parents}</strong>
            <span>{family.address}</span>
          </div>
        ))}
      </div>

      <div className={styles.ceremonyList}>
        {data.ceremonies.map((ceremony) => (
          <article className={styles.ceremonyCard} key={ceremony.label}>
            <div className={styles.ringIcon} aria-hidden="true">
              <span />
              <span />
            </div>
            <p className={styles.ceremonyLabel}>{ceremony.label}</p>
            <p className={styles.ceremonyTime}>{ceremony.time}</p>
            <p className={styles.ceremonyDate}>{ceremony.date}</p>
            <p className={styles.ceremonyVenue}>{ceremony.venue}</p>
            <p className={styles.ceremonyAddress}>{ceremony.address}</p>
            {"note" in ceremony ? <p className={styles.ceremonyNote}>{ceremony.note}</p> : null}
            <a className={styles.mapLink} href={ceremony.mapUrl} target="_blank" rel="noreferrer">
              Xem bản đồ
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
