import type { Metadata } from "next"
import { WeddingJourneyPage } from "@/components/wedding-journey/wedding-journey-page"
import { weddingJourneyData } from "@/components/wedding-journey/data/wedding-journey-data"

export const metadata: Metadata = {
  title: `${weddingJourneyData.event.title} - ${weddingJourneyData.couple.displayNames}`,
  description: `${weddingJourneyData.event.title}: ${weddingJourneyData.event.displayDate}`,
}

export default function ThiepCuoi3DPage() {
  return <WeddingJourneyPage />
}
