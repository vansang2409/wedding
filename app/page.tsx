import { FallingPetals } from "@/components/wedding/falling-petals"
import { MusicPlayer } from "@/components/wedding/music-player"
import { HeroSection } from "@/components/wedding/hero-section"
import { CoupleSection } from "@/components/wedding/couple-section"
import { TimelineSection } from "@/components/wedding/timeline-section"
import { EventSection } from "@/components/wedding/event-section"
import { MapSection } from "@/components/wedding/map-section"
import { GallerySection } from "@/components/wedding/gallery-section"
import { InvitationSection } from "@/components/wedding/invitation-section"
import { Footer } from "@/components/wedding/footer"

export default function WeddingPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating effects */}
      <FallingPetals />
      <MusicPlayer />

      {/* Main content */}
      <HeroSection />
      <CoupleSection />
      <TimelineSection />
      <EventSection />
      <MapSection />
      <GallerySection />
      <InvitationSection />
      <Footer />
    </main>
  )
}
