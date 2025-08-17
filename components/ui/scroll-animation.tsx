"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "slide-up"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-up": "animate-fade-up",
    "fade-left": "animate-fade-left",
    "fade-right": "animate-fade-right",
    "scale": "animate-scale",
    "slide-up": "animate-slide-up",
  }

  // Não renderizar animações até o componente estar montado no cliente
  if (!isMounted) {
    return (
      <div className={cn("transition-all duration-700 ease-out", className)}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible && animationClasses[animation],
        !isVisible && "opacity-0 translate-y-8",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
