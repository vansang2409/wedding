import type { Metadata } from "next"
import { Dancing_Script, Geist } from "next/font/google"
import { DamNgoV2Experience } from "@/components/dam-ngo-v2/dam-ngo-v2-experience"

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dam-ngo",
  display: "swap",
})

const calligraphy = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dam-ngo-calligraphy",
  display: "swap",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Lễ Dạm Ngõ | Thu Thương & Văn Sang",
  description: "Ngày hai gia đình gặp nhau, 31.08.2026.",
}

export default function DamNgoV2Page() {
  return <DamNgoV2Experience fontClassName={`${geist.variable} ${calligraphy.variable}`} />
}
