"use client"

import { useInView } from "@/hooks/use-in-view"
import { Heart } from "lucide-react"

export function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <footer ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40" />
          <Heart className="w-6 h-6 text-primary fill-primary/30" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        {/* Names */}
        <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
          Sang & Thương
        </h3>
        
        {/* Date */}
        <p className="text-xl text-primary font-serif italic mb-8">25.12.2027</p>

        {/* Thank you message */}
        <p className="text-muted-foreground font-serif max-w-md mx-auto mb-10 leading-relaxed">
          Cảm ơn bạn đã dành thời gian xem thiệp cưới của chúng tôi.
          Sự hiện diện của bạn sẽ là niềm vinh dự lớn lao.
        </p>

        {/* Made with love */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-lg">
          <span className="text-sm text-muted-foreground">Made with</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">for our special day</span>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-muted-foreground/50">
          © 2027 Sang & Thương Wedding. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
