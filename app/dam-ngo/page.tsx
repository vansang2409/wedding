import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { DamNgoScene3D } from "@/components/wedding/dam-ngo-scene-3d"
import { ChevronLeft, Flower2, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Lễ Dạm Ngõ - Sang & Thương",
  description: "Màn hình trình chiếu ngày dạm ngõ của Sang và Thương.",
}

export default function DamNgoPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#fff8f3] text-[#341b2a]">
      <section className="dam-ngo-stage relative flex h-full w-full items-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
        <Image
          src="/images/dam-ngo-floral-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />

        <DamNgoScene3D />

        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(255,249,246,0.2)_0%,rgba(255,249,246,0.52)_30%,rgba(255,249,246,0.22)_58%,rgba(255,249,246,0.12)_100%)]" />

        <div className="pointer-events-none absolute inset-5 z-[2] hidden sm:block md:inset-10">
          <div className="absolute left-0 top-0 h-28 w-28 border-l border-t border-primary/30" />
          <div className="absolute right-0 top-0 h-28 w-28 border-r border-t border-primary/30" />
          <div className="absolute bottom-0 left-0 h-28 w-28 border-b border-l border-primary/30" />
          <div className="absolute bottom-0 right-0 h-28 w-28 border-b border-r border-primary/30" />
        </div>

        <Link
          href="/"
          className="absolute left-4 top-6 z-20 inline-flex h-11 items-center gap-2 rounded-full border border-primary/25 bg-white/75 px-4 text-sm font-semibold text-primary shadow-[0_14px_35px_rgba(96,66,124,0.12)] backdrop-blur transition hover:bg-white sm:left-8 lg:hidden"
        >
          <ChevronLeft className="h-4 w-4" />
          Thiệp cưới
        </Link>

        <div className="dam-ngo-character-left pointer-events-none absolute bottom-[-4vh] left-[-9.4rem] z-[6] hidden w-[430px] opacity-95 drop-shadow-[0_34px_54px_rgba(87,65,105,0.18)] lg:block xl:left-[-7.5rem] xl:w-[470px] 2xl:left-[max(-7.5rem,calc(50%-66rem))]">
          <Image
            src="/images/groom-cartoon.png"
            alt=""
            width={919}
            height={1712}
            className="h-auto w-full"
            priority
            aria-hidden="true"
          />
        </div>

        <div className="dam-ngo-character-right pointer-events-none absolute bottom-[-4vh] right-[-8.8rem] z-[6] hidden w-[410px] opacity-95 drop-shadow-[0_34px_54px_rgba(87,65,105,0.18)] lg:block xl:right-[-7rem] xl:w-[450px] 2xl:right-[max(-7rem,calc(50%-66rem))]">
          <Image
            src="/images/bride-cartoon.png"
            alt=""
            width={941}
            height={1672}
            className="h-auto w-full"
            priority
            aria-hidden="true"
          />
        </div>

        <div className="dam-ngo-layout relative z-10 mx-auto grid h-full w-full max-w-6xl items-center gap-8 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:pt-4 xl:max-w-7xl">
          <div className="dam-ngo-copy flex flex-col items-center text-center lg:pl-20 xl:pl-24">
            <div className="mb-4 inline-flex items-center gap-3 px-5 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#6a3a20] xl:text-base">
              <Flower2 className="h-4 w-4" />
              Ngày hai họ gặp nhau
            </div>

            <h1 className="dam-ngo-title whitespace-nowrap text-[clamp(4.9rem,8.6vw,8.6rem)] font-normal leading-[0.78] tracking-normal text-[#5a1830] drop-shadow-[0_18px_45px_rgba(126,77,91,0.13)] xl:text-[clamp(6.4rem,7.5vw,9.2rem)]">
              <span className="block">Lễ Dạm</span>
              <span className="block text-primary">Ngõ</span>
            </h1>

            <div className="my-5 flex items-center justify-center gap-5 xl:my-6">
              <Heart className="h-10 w-10 rotate-[-8deg] fill-[#e6a5ad] text-[#e6a5ad] opacity-90" />
              <Heart className="h-9 w-9 rotate-[9deg] fill-[#e6a5ad] text-[#e6a5ad] opacity-90" />
            </div>

            <div className="dam-ngo-date w-full max-w-[540px] rounded-[1rem] border border-white/85 bg-white/55 px-8 py-6 text-center shadow-[0_22px_55px_rgba(116,69,83,0.14)] outline outline-1 outline-[#d6aa72]/30 backdrop-blur-md xl:max-w-[560px] xl:px-10">
              <span className="text-base font-semibold uppercase tracking-[0.36em] text-[#341b2a]">
                Thứ Hai
              </span>
              <span className="mt-2 block font-display text-5xl font-bold leading-none text-[#341b2a] md:text-6xl xl:text-7xl">
                31.08.2026
              </span>
              <div className="mx-auto my-4 h-px w-56 bg-gradient-to-r from-transparent via-[#d2a15f]/55 to-transparent" />
              <p className="mx-auto max-w-[470px] text-lg font-medium leading-7 text-[#23141f] xl:text-xl xl:leading-8">
                Gia đình chúng tôi trân trọng báo tin về buổi gặp mặt thân mật,
                nơi hai bên gia đình cùng ngỏ lời, gửi gắm và bắt đầu một chặng
                đường mới cho Sang & Thương.
              </p>
            </div>
          </div>

          <div className="dam-ngo-photo mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative p-5">
              <div className="pointer-events-none absolute -inset-5 rounded-[2rem] border border-[#cba56d]/55" />
              <div className="pointer-events-none absolute -inset-2 rounded-[1.65rem] border border-white/90" />
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 border-l border-t border-[#cba56d]/55" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 border-b border-r border-[#cba56d]/55" />
              <Image
                src="/images/6.jpg"
                alt="Sang và Thương"
                width={720}
                height={900}
                className="relative h-[390px] w-full rounded-[1.25rem] border-4 border-white object-cover object-center shadow-[0_24px_64px_rgba(95,64,82,0.18)] outline outline-2 outline-[#cba56d]/45 xl:h-[470px]"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-b-[1.35rem] bg-gradient-to-t from-[#30223c]/78 to-transparent px-5 pb-5 pt-24 text-center text-white">
                <p className="dam-ngo-title text-5xl font-normal leading-none">Sang & Thương</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
                  Lời thưa chuyện đầu tiên
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes dam-ngo-rise {
            from {
              opacity: 0;
              transform: translate3d(0, 24px, 0) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }

          @keyframes dam-ngo-float-left {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(-1.5deg);
            }
            50% {
              transform: translate3d(10px, -18px, 0) rotate(1deg);
            }
          }

          @keyframes dam-ngo-float-right {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(1.5deg);
            }
            50% {
              transform: translate3d(-10px, -18px, 0) rotate(-1deg);
            }
          }

          @keyframes dam-ngo-pulse {
            0%, 100% {
              box-shadow: 0 18px 50px rgba(96, 66, 124, 0.13);
            }
            50% {
              box-shadow: 0 22px 70px rgba(171, 117, 226, 0.24);
            }
          }

          .dam-ngo-copy {
            animation: dam-ngo-rise 900ms ease-out both;
          }

          .dam-ngo-photo {
            animation: dam-ngo-rise 1100ms 140ms ease-out both;
          }

          .dam-ngo-date {
            animation: dam-ngo-pulse 4s ease-in-out infinite;
          }

          .dam-ngo-title {
            font-family: "Edwardian Script ITC", "Palace Script MT", "Brush Script MT", var(--font-playfair), Georgia, serif;
          }

          .dam-ngo-character-left {
            animation: dam-ngo-float-left 6.5s ease-in-out infinite;
          }

          .dam-ngo-character-right {
            animation: dam-ngo-float-right 6.8s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .dam-ngo-copy,
            .dam-ngo-photo,
            .dam-ngo-date,
            .dam-ngo-character-left,
            .dam-ngo-character-right {
              animation: none;
            }
          }

          @media (max-width: 767px) and (orientation: portrait) {
            .dam-ngo-stage {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 100svh;
              height: 100svw;
              min-width: 100svh;
              min-height: 100svw;
              padding: 0.55rem 0.9rem;
              transform: translate(-50%, -50%) rotate(90deg);
              transform-origin: center;
            }

            .dam-ngo-stage a[href="/"] {
              display: none;
            }

            .dam-ngo-layout {
              grid-template-columns: 0.9fr 1.1fr;
              gap: 0.7rem;
              max-width: none;
              padding-top: 0;
            }

            .dam-ngo-copy {
              padding-left: 2.9rem;
            }

            h1.dam-ngo-title {
              font-size: clamp(2.8rem, 11.5svh, 4.15rem);
              line-height: 0.78;
            }

            .dam-ngo-copy > div:first-child {
              margin-bottom: 0.25rem;
              padding-block: 0.2rem;
              font-size: 0.58rem;
              letter-spacing: 0.24em;
            }

            .dam-ngo-copy svg {
              width: 1.4rem;
              height: 1.4rem;
            }

            .dam-ngo-copy > div:nth-of-type(2) {
              margin-block: 0.28rem;
              gap: 0.5rem;
            }

            .dam-ngo-date {
              max-width: 16.8rem;
              padding: 0.6rem 0.85rem;
            }

            .dam-ngo-date > span:first-child {
              font-size: 0.62rem;
              letter-spacing: 0.3em;
            }

            .dam-ngo-date > span:nth-child(2) {
              margin-top: 0.1rem;
              font-size: clamp(1.85rem, 7svh, 2.55rem);
            }

            .dam-ngo-date p {
              display: none;
            }

            .dam-ngo-date div {
              margin-block: 0.42rem 0;
              width: 8rem;
            }

            .dam-ngo-photo {
              max-width: min(43svh, 19rem);
            }

            .dam-ngo-photo img {
              height: min(42svh, 13.6rem);
            }

            .dam-ngo-photo .dam-ngo-title {
              font-size: 2.2rem;
            }

            .dam-ngo-photo p:last-child {
              margin-top: 0.25rem;
              font-size: 0.58rem;
              letter-spacing: 0.18em;
            }

            .dam-ngo-character-left,
            .dam-ngo-character-right {
              display: block !important;
              bottom: -1.8rem;
              width: 10.8rem;
              opacity: 0.95;
            }

            .dam-ngo-character-left {
              left: -4.8rem;
            }

            .dam-ngo-character-right {
              right: -4.6rem;
            }
          }

          @media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
            .dam-ngo-stage {
              padding: 0.55rem 0.9rem;
            }

            .dam-ngo-stage a[href="/"] {
              display: none;
            }

            .dam-ngo-layout {
              grid-template-columns: 0.9fr 1.1fr;
              gap: 0.7rem;
              max-width: none;
              padding-top: 0;
            }

            .dam-ngo-copy {
              padding-left: 2.9rem;
            }

            h1.dam-ngo-title {
              font-size: clamp(2.8rem, 11.5svh, 4.15rem);
              line-height: 0.78;
            }

            .dam-ngo-copy > div:first-child {
              margin-bottom: 0.25rem;
              padding-block: 0.2rem;
              font-size: 0.58rem;
              letter-spacing: 0.24em;
            }

            .dam-ngo-copy svg {
              width: 1.4rem;
              height: 1.4rem;
            }

            .dam-ngo-copy > div:nth-of-type(2) {
              margin-block: 0.28rem;
              gap: 0.5rem;
            }

            .dam-ngo-date {
              max-width: 16.8rem;
              padding: 0.6rem 0.85rem;
            }

            .dam-ngo-date > span:first-child {
              font-size: 0.62rem;
              letter-spacing: 0.3em;
            }

            .dam-ngo-date > span:nth-child(2) {
              margin-top: 0.1rem;
              font-size: clamp(1.85rem, 7svh, 2.55rem);
            }

            .dam-ngo-date p {
              display: none;
            }

            .dam-ngo-date div {
              margin-block: 0.42rem 0;
              width: 8rem;
            }

            .dam-ngo-photo {
              max-width: min(35svw, 22rem);
            }

            .dam-ngo-photo img {
              height: min(54svh, 14.2rem);
            }

            .dam-ngo-photo .dam-ngo-title {
              font-size: 2.2rem;
            }

            .dam-ngo-photo p:last-child {
              margin-top: 0.25rem;
              font-size: 0.58rem;
              letter-spacing: 0.18em;
            }

            .dam-ngo-character-left,
            .dam-ngo-character-right {
              display: block !important;
              bottom: -1.8rem;
              width: 10.8rem;
              opacity: 0.95;
            }

            .dam-ngo-character-left {
              left: -4.8rem;
            }

            .dam-ngo-character-right {
              right: -4.6rem;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
