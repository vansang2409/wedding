import styles from "@/styles/wedding-v2/wedding-v2.module.css"

type WeddingV2HeaderProps = {
  monogram: string
}

export function WeddingV2Header({ monogram }: WeddingV2HeaderProps) {
  return (
    <header className={styles.header} aria-label="Wedding invitation mark">
      <div className={styles.monogram} aria-label={monogram}>
        <span>{monogram.slice(0, 1)}</span>
        <span>{monogram.slice(1)}</span>
      </div>
    </header>
  )
}
