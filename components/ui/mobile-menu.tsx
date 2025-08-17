"use client"

import { useState, useEffect } from "react"

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
  const [isMounted, setIsMounted] = useState(false)

  // Evitar problemas de hidratação
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleMenuItemClick = (href: string) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Não renderizar nada até o componente estar montado no cliente
  if (!isMounted) {
    return (
      <button
        className="md:hidden p-3 text-[#6D6D6D] bg-white border-2 border-[#6D6D6D] rounded-lg transition-colors hover:bg-[#6D6D6D] hover:text-white"
        aria-label="Abrir menu"
        style={{ minWidth: '48px', minHeight: '48px' }}
      >
        <span className="text-xl font-bold">≡</span>
      </button>
    )
  }

  return (
    <>
      {/* Menu Button - Sempre visível em mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-3 text-[#6D6D6D] bg-white border-2 border-[#6D6D6D] rounded-lg transition-colors hover:bg-[#6D6D6D] hover:text-white"
        aria-label="Abrir menu"
        style={{ minWidth: '48px', minHeight: '48px' }}
      >
        <span className="text-xl font-bold">≡</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden mobile-menu-overlay">
          {/* Background overlay escuro */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />
          
          {/* Menu Panel - Branco sólido */}
          <div 
            className="absolute right-0 top-0 h-screen w-80 shadow-2xl z-[100000] mobile-menu-panel"
            data-mobile-menu="true"
            style={{
              backgroundColor: '#ffffff',
              opacity: 1,
              backdropFilter: 'none',
              height: '100vh',
              maxHeight: '100vh',
              minHeight: '100vh',
              overflow: 'hidden',
              position: 'fixed',
              top: 0,
              right: 0,
              width: '20rem'
            }}
          >
            <div 
              className="flex flex-col h-screen"
              style={{
                height: '100vh',
                maxHeight: '100vh',
                minHeight: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header - Altura fixa */}
              <div 
                className="flex items-center justify-between p-6 border-b border-[#6D6D6D] flex-shrink-0"
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <h2 className="text-xl font-bold text-[#6D6D6D] uppercase tracking-wide">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-[#6D6D6D] hover:bg-opacity-10 rounded-lg transition-colors text-2xl text-[#6D6D6D]"
                  aria-label="Fechar menu"
                >
                  ×
                </button>
              </div>

              {/* Navigation Items - Espaço flexível centralizado */}
              <nav 
                className="flex-1 p-6 flex items-start justify-center"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  paddingTop: '1rem',
                  paddingBottom: '1rem'
                }}
              >
                <ul className="space-y-4 w-full">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => handleMenuItemClick(item.href)}
                        className="w-full text-left px-6 py-4 text-xl font-semibold text-[#6D6D6D] hover:text-white hover:bg-[#6D6D6D] rounded-lg transition-all duration-300 uppercase tracking-wide"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                  
                  {/* Botão CTA logo abaixo dos itens de navegação */}
                  <li className="mt-6">
                    <button
                      onClick={() => {
                        onWhatsAppClick()
                        closeMenu()
                      }}
                      className="w-full bg-[#6D6D6D] hover:bg-[#6D6D6D] hover:bg-opacity-90 text-white py-4 text-lg font-semibold uppercase tracking-wide rounded-lg transition-colors"
                      style={{
                        display: 'block',
                        visibility: 'visible',
                        opacity: 1,
                        height: 'auto',
                        width: '100%'
                      }}
                    >
                      SOLICITAR ORÇAMENTO
                    </button>
                    <p className="text-center text-[#6D6D6D] mt-3 text-sm">
                      Atendimento disponível quando você precisar
                    </p>
                  </li>
                </ul>
              </nav>

              {/* Espaço flexível para empurrar o conteúdo para cima */}
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
