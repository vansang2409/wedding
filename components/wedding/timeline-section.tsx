"use client"

import { useInView } from "@/hooks/use-in-view"
import { Heart, MessageCircle, Gem, Home } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    title: "Lần Đầu Gặp Gỡ",
    description: "Chúng tôi gặp nhau lần đầu trong một buổi họp mặt bạn bè. Ánh mắt đầu tiên đã để lại ấn tượng khó phai.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    year: "2021",
    title: "Bắt Đầu Hẹn Hò",
    description: "Sau nhiều lần trò chuyện và tìm hiểu, chúng tôi chính thức yêu nhau. Tình yêu bắt đầu nảy nở từ đây.",
    icon: MessageCircle,
    color: "from-primary to-primary/80",
  },
  {
    year: "2025",
    title: "Lời Cầu Hôn",
    description: "Trong một buổi tối lãng mạn, anh đã quỳ gối cầu hôn em. Và em đã nói 'Đồng ý!'",
    icon: Gem,
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2027",
    title: "Về Chung Một Nhà",
    description: "Chúng tôi sẽ chính thức trở thành vợ chồng, bắt đầu chương mới trong cuộc đời.",
    icon: Home,
    color: "from-emerald-500 to-teal-500",
  },
]

export function TimelineSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 bg-gradient-to-b from-card/50 via-background to-card/50 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden lg:block" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Section title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Câu Chuyện Tình Yêu
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={event.year}
                className={`relative mb-16 last:mb-0 transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Mobile layout */}
                <div className="flex lg:hidden items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-full blur-lg opacity-50`} />
                      <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-card" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <span className="text-sm font-bold text-primary tracking-wider">{event.year}</span>
                    <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className={`hidden lg:flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                    <div className={`inline-block bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-md ${isEven ? "ml-auto" : "mr-auto"}`}>
                      <span className="text-sm font-bold text-primary tracking-wider">{event.year}</span>
                      <h3 className="text-2xl font-display font-bold text-foreground mt-2 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground font-serif leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-full blur-xl opacity-40 scale-150`} />
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-2xl border-4 border-card`}>
                      <Icon className="w-8 h-8 text-card" />
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="flex-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
