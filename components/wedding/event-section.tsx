"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react"

const events = [
  {
    title: "Lễ Vu Quy",
    subtitle: "Nhà Gái",
    date: "25/12/2027",
    time: "8:00 - 10:00",
    location: "Nhà hàng ABC, 123 Đường XYZ, Quận 1, TP.HCM",
    description: "Lễ rước dâu tại nhà gái",
    gradient: "from-rose-500/20 via-pink-500/20 to-primary/20",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    title: "Lễ Thành Hôn",
    subtitle: "Tiệc Cưới",
    date: "25/12/2027",
    time: "17:00 - 21:00",
    location: "Trung tâm Tiệc cưới Diamond Palace, 456 Đường ABC, Quận 7, TP.HCM",
    description: "Tiệc cưới chính thức",
    gradient: "from-amber-500/20 via-orange-500/20 to-primary/20",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
]

export function EventSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Events
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Thời Gian & Địa Điểm
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {/* Floating glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${event.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Card */}
              <div className="relative bg-card/90 backdrop-blur-md rounded-3xl overflow-hidden border border-border/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                {/* Header with gradient */}
                <div className={`relative h-40 bg-gradient-to-br ${event.gradient} flex flex-col items-center justify-center overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${event.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <Calendar className="w-8 h-8 text-card" />
                  </div>
                  
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/60">{event.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                    {event.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <p className="text-center text-muted-foreground font-serif italic">
                    {event.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-secondary/80 to-secondary/40 group-hover:from-secondary group-hover:to-secondary/60 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Ngày</p>
                        <p className="text-muted-foreground">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-secondary/80 to-secondary/40 group-hover:from-secondary group-hover:to-secondary/60 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Thời gian</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-secondary/80 to-secondary/40 group-hover:from-secondary group-hover:to-secondary/60 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Địa điểm</p>
                        <p className="text-muted-foreground text-sm">{event.location}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group-hover:scale-[1.02]">
                    <MapPin className="w-5 h-5" />
                    Xem chỉ đường
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
