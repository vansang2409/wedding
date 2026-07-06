"use client"

import { useEffect, useRef } from "react"
import { JourneyControls } from "./controls/journey-controls"
import { LoadingExperience } from "./loading-experience"
import { VisualStage } from "./stage/visual-stage"
import { SceneStack } from "./scenes/scene-stack"
import { weddingJourneyData } from "./data/wedding-journey-data"
import { useScrollCamera } from "./providers/scroll-camera-provider"
import { useMotionPreference } from "./providers/motion-preference-provider"

export function JourneyShell() {
  const { activeScene } = useScrollCamera()
  const { reducedMotion, deviceProfile } = useMotionPreference()
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || reducedMotion || deviceProfile === "low") return

    const onPointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / window.innerHeight - 0.5) * 2
      root.style.setProperty("--journey-pointer-x", x.toFixed(3))
      root.style.setProperty("--journey-pointer-y", y.toFixed(3))
    }

    const reset = () => {
      root.style.setProperty("--journey-pointer-x", "0")
      root.style.setProperty("--journey-pointer-y", "0")
    }

    root.addEventListener("pointermove", onPointerMove)
    root.addEventListener("pointerleave", reset)
    reset()

    return () => {
      root.removeEventListener("pointermove", onPointerMove)
      root.removeEventListener("pointerleave", reset)
    }
  }, [deviceProfile, reducedMotion])

  return (
    <main
      ref={rootRef}
      className="journey-root relative min-h-screen overflow-x-hidden bg-[#FBF6F6] text-[#201939]"
      data-active-scene={activeScene.id}
    >
      <LoadingExperience />
      <JourneyControls scenes={weddingJourneyData.scenes} />
      <VisualStage />
      <SceneStack />
      <JourneyStyles />
    </main>
  )
}

function JourneyStyles() {
  return (
    <style jsx global>{`
      .journey-root {
        --journey-sans: Inter, Arial, Helvetica, sans-serif;
        --journey-serif: var(--font-playfair), Georgia, serif;
        --journey-progress: 0;
        --journey-pointer-x: 0;
        --journey-pointer-y: 0;
        --journey-scene-glow: rgba(216, 200, 241, 0.24);
        --journey-scene-warmth: rgba(217, 165, 90, 0.12);
        --journey-scene-depth: rgba(50, 22, 47, 0.055);
        scroll-behavior: smooth;
        isolation: isolate;
      }

      .journey-scene {
        min-height: auto;
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
        justify-items: stretch;
        scroll-margin-top: 7.5rem;
        padding: clamp(5.5rem, 6vw, 7rem) clamp(1rem, 2.5vw, 2rem);
        isolation: isolate;
      }

      .journey-scene::before,
      .journey-scene::after {
        content: "";
        pointer-events: none;
        position: absolute;
        inset-inline: 0;
        z-index: 0;
      }

      .journey-scene::before {
        top: -8rem;
        height: 16rem;
        background:
          radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.38), transparent 68%),
          linear-gradient(180deg, transparent 0%, rgba(255, 249, 239, 0.34) 45%, transparent 100%);
      }

      .journey-scene::after {
        left: 50%;
        top: 50%;
        width: min(68rem, 92vw);
        height: min(36rem, 64vw);
        border-radius: 999px;
        background:
          radial-gradient(circle at 68% 24%, var(--journey-scene-glow), transparent 52%),
          radial-gradient(circle at 24% 72%, var(--journey-scene-warmth), transparent 56%),
          radial-gradient(ellipse at 50% 100%, var(--journey-scene-depth), transparent 64%);
        filter: blur(18px);
        opacity: 0.76;
        transform: translate(
          calc(-50% + var(--journey-pointer-x) * 8px),
          calc(-50% + var(--journey-pointer-y) * 6px)
        );
        transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .journey-scene > :not(style) {
        position: relative;
        z-index: 1;
      }

      .journey-perspective {
        perspective: 1200px;
        transform-style: preserve-3d;
      }

      @media (max-width: 767px) {
        .journey-scene {
          padding: 5.25rem 0.9rem 2.75rem;
          scroll-margin-top: 7.25rem;
        }

        .journey-scene::after {
          width: 92vw;
          height: 58vh;
          opacity: 0.48;
          filter: blur(12px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .journey-root *,
        .journey-root *::before,
        .journey-root *::after {
          animation-duration: 1ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 1ms !important;
        }
      }
    `}</style>
  )
}
