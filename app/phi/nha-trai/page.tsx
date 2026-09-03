import type { Metadata } from "next"

import { PhiInvitation } from "@/components/phi/phi-invitation"
import { phiWeddingData } from "@/data/phi-wedding"

export const metadata: Metadata = {
  title: "Thiệp nhà trai | Phi & Duyên",
  description: "Lễ tân hôn và tiệc cưới của Hoàng Phi và Mỹ Duyên ngày 20 tháng 09 năm 2026.",
  openGraph: { images: ["/images/phi/garden-couple.webp"] },
}

export default function PhiGroomInvitationPage() {
  return <PhiInvitation data={phiWeddingData.groom} />
}
