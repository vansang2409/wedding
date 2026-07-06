import type { JourneyScene, JourneySceneId } from "../data/wedding-journey-data"

export function getActiveScene(scenes: JourneyScene[], progress: number): JourneyScene {
  return scenes.find((scene) => progress >= scene.range[0] && progress <= scene.range[1]) ?? scenes[0]
}

export function getSceneProgress(scene: JourneyScene, progress: number): number {
  const [start, end] = scene.range
  const distance = end - start
  if (distance <= 0) return 0
  return Math.min(Math.max((progress - start) / distance, 0), 1)
}

export function getSceneById(scenes: JourneyScene[], id: JourneySceneId): JourneyScene {
  const scene = scenes.find((item) => item.id === id)
  if (!scene) {
    throw new Error(`Unknown journey scene: ${id}`)
  }
  return scene
}
