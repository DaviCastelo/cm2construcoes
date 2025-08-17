"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatItem {
  number: number
  label: string
  suffix?: string
  description?: string
}

const stats: StatItem[] = [
  {
    number: 150,
    label: "Projetos Concluídos",
    description: "Obras de alto padrão entregues com excelência"
  },
  {
    number: 98,
    label: "Clientes Satisfeitos",
    suffix: "%",
    description: "Taxa de satisfação dos nossos clientes"
  },
  {
    number: 15,
    label: "Anos de Experiência",
    description: "Tradição e expertise no mercado"
  },
  {
    number: 24,
    label: "Horas de Suporte",
    suffix: "h",
    description: "Atendimento disponível quando você precisar"
  }
]

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setIsMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()
          
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(target * easeOutQuart)
            
            setCount(currentCount)
            
            if (progress >= 1) {
              clearInterval(timer)
              setCount(target)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [target, duration, hasStarted])

  // Não renderizar contador animado até o componente estar montado no cliente
  if (!isMounted) {
    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {target.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Nossa trajetória de sucesso é marcada por conquistas e reconhecimentos que demonstram nossa excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="h-full"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#374151] mb-2">
                    {stat.label}
                  </h3>
                  {stat.description && (
                    <p className="text-sm text-[#9ca3af] leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
