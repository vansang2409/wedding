import { JourneyProvider } from "./providers/journey-provider"
import { JourneyShell } from "./journey-shell"

export function WeddingJourneyPage() {
  return (
    <JourneyProvider>
      <JourneyShell />
    </JourneyProvider>
  )
}
