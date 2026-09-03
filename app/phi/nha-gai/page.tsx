import type { Metadata } from "next"

import { PhiInvitation } from "@/components/phi/phi-invitation"
import { phiWeddingData } from "@/data/phi-wedding"

export const metadata: Metadata = {
  title: "Thiệp nhà gái | Phi & Duyên",
  description: "Lễ vu quy và tiệc cưới của Mỹ Duyên và Hoàng Phi ngày 19 tháng 09 năm 2026.",
  openGraph: { images: ["/images/phi/studio-focus.webp"] },
}

export default function PhiBrideInvitationPage() {
  return <PhiInvitation data={phiWeddingData.bride} />
}
