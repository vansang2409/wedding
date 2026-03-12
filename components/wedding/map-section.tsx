"use client"

import { useInView } from "@/hooks/use-in-view"
import { Navigation } from "lucide-react"

export function MapSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary/70 mb-4 block">
            Chỉ Đường
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Địa Điểm Tiệc Cưới
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </div>

        {/* Map container */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl border border-border transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="aspect-video md:aspect-[21/9] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197956!2d106.70041271533423!3d10.777599492319465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zQuG6v24gTmjDoCBSb25n!5e0!3m2!1svi!2s!4v1635000000000!5m2!1svi!2s"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ địa điểm tiệc cưới"
            />
          </div>

          {/* Overlay info */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-border">
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                Trung tâm Tiệc cưới Diamond Palace
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                456 Đường ABC, Quận 7, TP. Hồ Chí Minh
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                Mở Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
