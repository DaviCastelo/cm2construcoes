"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Não renderizar nada até o componente estar montado no cliente
  if (!isMounted) {
    return null
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50",
            "w-12 h-12 rounded-full shadow-lg",
            "bg-primary hover:bg-primary/90 text-white",
            "transition-all duration-300 ease-in-out",
            "animate-in slide-in-from-bottom-4",
            "focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Voltar ao topo"
        >
          {isMounted && <MessageCircle className="w-6 h-6" />}
        </Button>
      )}
    </>
  )
}
