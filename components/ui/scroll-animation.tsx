"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { config } from "@/lib/config"

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

  useEffect(() => {
    setIsMounted(true)
    
    // Em produção, mostrar imediatamente
    if (config.isProduction) {
      setIsVisible(true)
      return
    }
    
    // Animação simples sem IntersectionObserver
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay + 100) // Delay + pequeno offset

    return () => clearTimeout(timer)
  }, [delay])

  const animationClasses = {
    "fade-up": "animate-fade-up",
    "fade-left": "animate-fade-left",
    "fade-right": "animate-fade-right",
    "scale": "animate-scale",
    "slide-up": "animate-slide-up",
  }

  // Fallback para SSR
  if (!isMounted) {
    return (
      <div className={cn("transition-all duration-700 ease-out opacity-0", className)}>
        {children}
      </div>
    )
  }

  // Em produção, mostrar sem animação
  if (config.isProduction) {
    return (
      <div className={cn("transition-all duration-700 ease-out", className)}>
        {children}
      </div>
    )
  }

  return (
    <div
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
