"use client"

import { CheckCircle2, Heart } from "lucide-react"

export function RSVPSubmitState({ name, attendance, onReset }: { name: string; attendance: "yes" | "no" | ""; onReset: () => void }) {
  const title = attendance === "yes" ? "Hẹn gặp bạn trong ngày vui" : "Cảm ơn lời chúc của bạn"
  const message =
    attendance === "yes"
      ? `${name.trim()}, tụi mình đã nhận được lời hồi đáp. Cảm ơn bạn vì sẽ có mặt cùng tụi mình.`
      : `${name.trim()}, tụi mình đã nhận được lời chúc từ xa. Cảm ơn bạn rất nhiều.`

  return (
    <div className="rsvp-success relative overflow-hidden rounded-[2.5rem] border border-white/68 bg-white/64 p-8 text-center shadow-[0_30px_92px_rgba(72,55,38,0.14),0_1px_0_rgba(255,255,255,0.84)_inset] backdrop-blur-2xl md:p-12">
      <div className="success-bloom pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9CCFF]/42 blur-3xl" />
      <div className="success-bloom success-bloom-gold pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4C96B]/30 blur-2xl" />

      <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#32162F] text-white shadow-[0_18px_52px_rgba(50,22,47,0.22)]">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <p className="relative z-10 mt-7 text-xs font-black uppercase tracking-[0.22em] text-[#FF8517] [font-family:Arial,Helvetica,sans-serif]">
        RSVP received
      </p>
      <h3 className="relative z-10 mt-3 text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.96] text-[#071936] [font-family:Arial,Helvetica,sans-serif]">
        {title}
      </h3>
      <p className="relative z-10 mx-auto mt-5 max-w-xl text-base font-semibold leading-7 text-[#8B8175] md:text-lg md:leading-8">
        {message}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="relative z-10 mt-8 inline-flex h-[3.25rem] min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-[#FF8517] px-7 text-sm font-black uppercase text-white shadow-[0_18px_42px_rgba(255,138,28,0.28),0_0_0_1px_rgba(255,255,255,0.42)_inset] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [font-family:Arial,Helvetica,sans-serif] hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(255,138,28,0.34)] focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]/70"
      >
        <Heart className="h-4 w-4" />
        Sửa hồi đáp
      </button>

      <style jsx>{`
        .rsvp-success {
          animation: success-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .success-bloom {
          animation: success-bloom 1500ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .success-bloom-gold {
          animation-delay: 120ms;
        }

        @keyframes success-rise {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes success-bloom {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.62);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
