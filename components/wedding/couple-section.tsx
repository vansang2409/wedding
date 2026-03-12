"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function CoupleSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Couple
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Cô Dâu & Chú Rể
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <svg className="w-6 h-6 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Groom */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative group mb-8">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0" />
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Photo container */}
              <div className="relative w-56 h-72 md:w-72 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-10" />
                <Image
                  src="/images/14.jpg"
                  alt="Chú rể - Trần Văn Sang"
                  width={288}
                  height={384}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-card mb-1">
                    Trần Văn Sang
                  </h3>
                  <p className="text-card/80 font-medium">Chú Rể</p>
                </div>
              </div>
            </div>
            
            {/* Info card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg max-w-sm mx-auto">
              <p className="text-muted-foreground font-serif leading-relaxed">
                Con trai của
                <br />
                <span className="text-foreground font-medium">Ông Trần Văn A & Bà Nguyễn Thị B</span>
              </p>
              <div className="h-px w-16 bg-primary/30 mx-auto my-4" />
              <p className="text-sm text-muted-foreground">
                Sinh năm 1995 - TP. Hồ Chí Minh
              </p>
            </div>
          </div>

          {/* Bride */}
          <div
            className={`text-center transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative group mb-8">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Photo container */}
              <div className="relative w-56 h-72 md:w-72 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-10" />
                <Image
                  src="/images/8.jpg"
                  alt="Cô dâu - Ngô Thị Thu Thương"
                  width={288}
                  height={384}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-card mb-1">
                    Ngô Thị Thu Thương
                  </h3>
                  <p className="text-card/80 font-medium">Cô Dâu</p>
                </div>
              </div>
            </div>
            
            {/* Info card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg max-w-sm mx-auto">
              <p className="text-muted-foreground font-serif leading-relaxed">
                Con gái của
                <br />
                <span className="text-foreground font-medium">Ông Ngô Văn C & Bà Lê Thị D</span>
              </p>
              <div className="h-px w-16 bg-primary/30 mx-auto my-4" />
              <p className="text-sm text-muted-foreground">
                Sinh năm 1997 - TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
