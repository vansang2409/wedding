"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export function InvitationSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div
          className={`relative transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Outer decorative frame */}
          <div className="absolute -inset-4 border border-primary/10 rounded-[3rem]" />
          <div className="absolute -inset-8 border border-primary/5 rounded-[3.5rem]" />
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-card via-card to-card/95 rounded-[2.5rem] p-10 md:p-20 border border-primary/20 shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z' fill='%23000'/%3E%3C/svg%3E")`,
                backgroundSize: '50px 50px',
              }}
            />

            <div className="pointer-events-none absolute bottom-0 left-0 z-10 hidden w-36 -translate-x-8 translate-y-8 opacity-95 drop-shadow-[0_24px_40px_rgba(87,65,105,0.16)] lg:block xl:w-44">
              <Image
                src="/images/groom-cartoon.png"
                alt=""
                width={919}
                height={1712}
                className="h-auto w-full"
                aria-hidden="true"
              />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden w-36 translate-x-8 translate-y-8 opacity-95 drop-shadow-[0_24px_40px_rgba(87,65,105,0.16)] lg:block xl:w-44">
              <Image
                src="/images/bride-cartoon.png"
                alt=""
                width={941}
                height={1672}
                className="h-auto w-full"
                aria-hidden="true"
              />
            </div>

            {/* Decorative corners with animation */}
            <div className="absolute top-6 left-6 w-20 h-20 md:w-32 md:h-32">
              <div className="absolute inset-0 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
              <Sparkles className="absolute top-2 left-2 w-4 h-4 text-primary/40 animate-pulse" />
            </div>
            <div className="absolute top-6 right-6 w-20 h-20 md:w-32 md:h-32">
              <div className="absolute inset-0 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl" />
              <Sparkles className="absolute top-2 right-2 w-4 h-4 text-primary/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute bottom-6 left-6 w-20 h-20 md:w-32 md:h-32">
              <div className="absolute inset-0 border-b-2 border-l-2 border-primary/40 rounded-bl-3xl" />
              <Sparkles className="absolute bottom-2 left-2 w-4 h-4 text-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-6 right-6 w-20 h-20 md:w-32 md:h-32">
              <div className="absolute inset-0 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />
              <Sparkles className="absolute bottom-2 right-2 w-4 h-4 text-primary/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center">
              <span className="inline-block px-6 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 mb-8">
                Invitation
              </span>

              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-10">
                Tran Trong Kinh Moi
              </h2>

              <div className="mx-auto mb-10 flex h-36 max-w-xs items-end justify-center gap-3 lg:hidden">
                <Image
                  src="/images/groom-cartoon.png"
                  alt=""
                  width={919}
                  height={1712}
                  className="h-full w-auto drop-shadow-[0_18px_28px_rgba(87,65,105,0.14)]"
                  aria-hidden="true"
                />
                <Image
                  src="/images/bride-cartoon.png"
                  alt=""
                  width={941}
                  height={1672}
                  className="h-full w-auto drop-shadow-[0_18px_28px_rgba(87,65,105,0.14)]"
                  aria-hidden="true"
                />
              </div>

              <div className="max-w-2xl mx-auto space-y-8 text-muted-foreground font-serif text-lg md:text-xl leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  That vinh du cho chung toi duoc don tiep Quy khach trong ngay
                  trong dai cua doi minh.
                </p>
                <p>
                  Chung toi{" "}
                  <span className="text-foreground font-display font-bold text-xl">
                    Tran Van Sang
                  </span>{" "}
                  <span className="text-primary">&</span>{" "}
                  <span className="text-foreground font-display font-bold text-xl">
                    Ngo Thi Thu Thuong
                  </span>{" "}
                  tran trong kinh moi Quy khach den du buoi tiec mung le thanh hon
                  cua chung toi.
                </p>
                <p>
                  Su hien dien cua Quy khach la niem vinh hanh lon lao va la nguon
                  dong vien to lon cho chung toi trong ngay dac biet nay.
                </p>
              </div>

              {/* Heart divider */}
              <div className="mt-14 flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  <svg
                    className="relative w-10 h-10 text-primary drop-shadow-lg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
              </div>

              {/* Signature */}
              <div className="mt-10">
                <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Sang & Thuong
                </p>
                <p className="text-sm text-muted-foreground mt-2 tracking-widest">25.12.2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
