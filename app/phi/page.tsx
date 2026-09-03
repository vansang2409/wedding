import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import styles from "@/components/phi/phi-invitation.module.css"

export const metadata: Metadata = {
  title: "Thiệp cưới Phi & Duyên",
  description: "Thiệp cưới trực tuyến của Hoàng Phi và Mỹ Duyên, tháng 09 năm 2026.",
}

export default function PhiWeddingPage() {
  return (
    <main className={styles.selector}>
      <section className={styles.selectorPhoto} aria-label="Ảnh cưới Hoàng Phi và Mỹ Duyên">
        <Image src="/images/phi/studio-editorial.webp" alt="Hoàng Phi và Mỹ Duyên trong trang phục cưới" fill priority sizes="(max-width: 767px) 100vw, 42vw" />
      </section>
      <section className={styles.selectorContent}>
        <p className={styles.eyebrow}>Trân trọng kính mời</p>
        <div className={styles.selectorMark} aria-hidden="true">P <i>&</i> D</div>
        <h1>Phi <i>&</i><br />Duyên</h1>
        <p className={styles.selectorLead}>Chọn thiệp phù hợp với buổi tiệc mà bạn được mời tham dự.</p>
        <nav className={styles.selectorChoices} aria-label="Chọn thiệp cưới">
          <Link href="/phi/nha-gai"><span>19.09.2026</span><strong>Thiệp nhà gái</strong><small>Tư gia nhà gái</small></Link>
          <Link href="/phi/nha-trai"><span>20.09.2026</span><strong>Thiệp nhà trai</strong><small>Nhà hàng Hoàng Lộc 1</small></Link>
        </nav>
      </section>
    </main>
  )
}
