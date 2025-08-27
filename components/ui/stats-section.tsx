"use client"

import { useEffect, useState } from "react"
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
    label: "PROJETOS CONCLUÍDOS",
    description: "Obras de alto padrão entregues com excelência"
  },
  {
    number: 98,
    label: "CLIENTES SATISFEITOS",
    suffix: "%",
    description: "Taxa de satisfação dos nossos clientes"
  },
  {
    number: 15,
    label: "ANOS DE EXPERIÊNCIA",
    description: "Tradição e expertise no mercado"
  },
  {
    number: 24,
    label: "HORAS DE SUPORTE",
    suffix: "h",
    description: "Atendimento disponível quando você precisar"
  }
]

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Animação simples
    const timer = setTimeout(() => {
      let currentCount = 0
      const increment = target / (duration / 16) // 60fps
      
      const animate = () => {
        currentCount += increment
        if (currentCount < target) {
          setCount(Math.floor(currentCount))
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      
      animate()
    }, 500) // Delay inicial

    return () => clearTimeout(timer)
  }, [target, duration])

  // Fallback para SSR
  if (!isMounted) {
    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {target.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Fallback para SSR
  if (!isMounted) {
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
            {stats.map((stat) => (
              <div key={stat.label} className="h-full">
                <Card className="h-full border-0 shadow-lg bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {stat.number.toLocaleString()}{stat.suffix}
                      </span>
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
              style={{ 
                animationDelay: `${index * 200}ms` 
              }}
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
