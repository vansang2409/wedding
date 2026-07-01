import type { Metadata } from "next"
import { DamNgoInvitation3D } from "./dam-ngo-invitation-3d"

export const metadata: Metadata = {
  title: "Lễ Dạm Ngõ - Sang & Thương",
  description: "Màn hình trình chiếu ngày dạm ngõ của Sang và Thương.",
}

export default function DamNgoPage() {
  return <DamNgoInvitation3D />
}
