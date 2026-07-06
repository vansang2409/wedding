import { CountdownScene } from "./countdown/countdown-scene"
import { GalleryScene } from "./gallery/gallery-scene"
import { OpeningScene } from "./opening/opening-scene"
import { StoryScene } from "./story/story-scene"
import { ThankYouScene } from "./thank-you/thank-you-scene"
import { WeddingInfoScene } from "./wedding-info/wedding-info-scene"

export function SceneStack() {
  return (
    <div className="relative z-10">
      <OpeningScene />
      <StoryScene />
      <GalleryScene />
      <WeddingInfoScene />
      <CountdownScene />
      <ThankYouScene />
    </div>
  )
}
