"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  onWhatsAppClick: () => void
}

const menuItems = [
  { href: "#sobre", label: "SOBRE NÓS" },
  { href: "#portfolio", label: "PORTFÓLIO" },
  { href: "#contato", label: "CONTATO" }
]

export function MobileMenu({ onWhatsAppClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const handleMenuItemClick = (href: string) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="md:hidden p-2"
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6 text-[#374151]" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#9ca3af] bg-white">
                <h2 className="text-xl font-bold text-[#374151] uppercase tracking-wide">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="p-2 hover:bg-[#9ca3af] hover:text-white"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6 bg-white">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => handleMenuItemClick(item.href)}
                        className="w-full text-left px-4 py-4 text-lg font-semibold text-[#374151] hover:text-white hover:bg-[#374151] rounded-lg transition-all duration-300 uppercase tracking-wide"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Section */}
              <div className="p-6 border-t border-[#9ca3af] bg-white">
                <Button
                  onClick={() => {
                    onWhatsAppClick()
                    closeMenu()
                  }}
                  className="w-full bg-[#374151] hover:bg-[#374151] text-white py-4 text-lg font-semibold uppercase tracking-wide"
                >
                  SOLICITAR ORÇAMENTO
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
