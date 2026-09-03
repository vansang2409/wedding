import type { Metadata } from "next"
import { Philosopher, Quicksand } from "next/font/google"

import { PhiGroomV2 } from "@/components/phi/phi-groom-v2"
import { phiWeddingData } from "@/data/phi-wedding"

const philosopher = Philosopher({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  variable: "--font-phi-philosopher",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-phi-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thiệp nhà trai V2 | Phi & Duyên",
  description: "Thiệp lễ tân hôn và tiệc cưới của Hoàng Phi và Mỹ Duyên ngày 20 tháng 09 năm 2026.",
  openGraph: { images: ["/images/phi/garden-couple.webp"] },
}

export default function PhiGroomInvitationV2Page() {
  return (
    <div className={`${philosopher.variable} ${quicksand.variable}`}>
      <PhiGroomV2 groom={phiWeddingData.groom} bride={phiWeddingData.bride} />
    </div>
  )
}
