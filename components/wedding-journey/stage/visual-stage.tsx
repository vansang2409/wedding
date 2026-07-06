"use client"

import { ParticleField } from "../effects/particle-field"
import { useMotionPreference } from "../providers/motion-preference-provider"

export function VisualStage() {
  const { deviceProfile } = useMotionPreference()

  return (
    <div className="journey-stage pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="journey-stage-base absolute inset-0" />
      <div className="journey-stage-light absolute inset-0" />
      <div className="journey-stage-depth absolute inset-0" />
      <div className="journey-stage-vignette absolute inset-0" />
      {deviceProfile !== "low" && <ParticleField />}
      <style jsx>{`
        .journey-stage-base {
          background:
            radial-gradient(circle at 78% 16%, rgba(216, 200, 241, 0.34), transparent 30%),
            radial-gradient(circle at 16% 88%, rgba(217, 165, 90, 0.12), transparent 36%),
            linear-gradient(180deg, #fffafb 0%, #fbf2f7 48%, #efe8fb 100%);
          transition: background 1400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .journey-stage-light {
          opacity: 0.66;
          mix-blend-mode: soft-light;
          background:
            radial-gradient(circle at 18% 26%, rgba(255, 255, 255, 0.68), transparent 18%),
            linear-gradient(116deg, transparent 0%, rgba(255, 255, 255, 0.48) 42%, transparent 72%);
          transform: translate3d(calc(var(--journey-pointer-x) * 10px), calc(var(--journey-pointer-y) * 8px), 0);
          transition: opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .journey-stage-depth {
          opacity: 0.7;
          background:
            radial-gradient(ellipse at 50% 112%, rgba(32, 25, 57, 0.06), transparent 48%),
            radial-gradient(ellipse at 18% 22%, rgba(255, 255, 255, 0.5), transparent 30%),
            radial-gradient(ellipse at 86% 70%, rgba(216, 200, 241, 0.2), transparent 34%);
          transform: translate3d(calc(var(--journey-pointer-x) * -6px), calc(var(--journey-pointer-y) * -4px), 0);
        }

        .journey-stage-vignette {
          background:
            radial-gradient(circle at 50% 42%, transparent 0%, transparent 58%, rgba(32, 25, 57, 0.03) 100%),
            linear-gradient(90deg, rgba(255, 250, 251, 0.64), transparent 18%, transparent 82%, rgba(239, 233, 255, 0.48));
        }

        .journey-root[data-active-scene="story"] .journey-stage-base {
          background:
            radial-gradient(circle at 78% 24%, rgba(244, 201, 107, 0.18), transparent 32%),
            radial-gradient(circle at 12% 82%, rgba(217, 204, 255, 0.22), transparent 36%),
            linear-gradient(180deg, #fff8ee 0%, #f7efe6 52%, #fff9ef 100%);
        }

        .journey-root[data-active-scene="gallery"] .journey-stage-base {
          background:
            radial-gradient(circle at 72% 20%, rgba(255, 255, 255, 0.78), transparent 28%),
            radial-gradient(circle at 18% 86%, rgba(217, 204, 255, 0.26), transparent 34%),
            linear-gradient(180deg, #fff9ef 0%, #efe9ff 58%, #fff8ee 100%);
        }

        .journey-root[data-active-scene="wedding-info"] .journey-stage-base,
        .journey-root[data-active-scene="rsvp"] .journey-stage-base {
          background:
            radial-gradient(circle at 72% 18%, rgba(244, 201, 107, 0.16), transparent 28%),
            radial-gradient(circle at 18% 82%, rgba(217, 204, 255, 0.3), transparent 38%),
            linear-gradient(180deg, #fff8ee 0%, #f4edff 54%, #fff9ef 100%);
        }

        .journey-root[data-active-scene="countdown"] .journey-stage-base {
          background:
            radial-gradient(circle at 50% 44%, rgba(244, 201, 107, 0.2), transparent 28%),
            radial-gradient(circle at 50% 62%, rgba(217, 204, 255, 0.34), transparent 42%),
            linear-gradient(180deg, #fff9ef 0%, #efe9ff 56%, #fff8ee 100%);
        }

        .journey-root[data-active-scene="thank-you"] .journey-stage-base {
          background:
            radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.9), transparent 34%),
            radial-gradient(circle at 50% 64%, rgba(217, 204, 255, 0.24), transparent 46%),
            linear-gradient(180deg, #fff9ef 0%, #fff8ee 62%, #efe9ff 100%);
        }

        @media (max-width: 767px) {
          .journey-stage-light {
            opacity: 0.46;
            transform: none;
          }

          .journey-stage-depth {
            opacity: 0.5;
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
