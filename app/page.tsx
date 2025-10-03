"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Clock, Wrench, HandHeart, Phone, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { StatsSection } from "@/components/ui/stats-section"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { FormValidation, ValidatedInput } from "@/components/ui/form-validation"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { trackCompleteConversion, CONVERSION_TYPES, EVENT_CATEGORIES } from "@/lib/conversion-tracking"

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  })


  // Evitar problemas de hidratação
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleWhatsAppMessage = (message: string, buttonType: string = 'whatsapp') => {
    const phoneNumber = "558594264434" // Número principal
    const encodedMessage = encodeURIComponent(message)
    
    // Rastrear conversão completa
    trackCompleteConversion(
      CONVERSION_TYPES.WHATSAPP_CLICK,
      EVENT_CATEGORIES.CONTACT,
      buttonType,
      1
    )
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleSubmitForm = async (data: any) => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Mensagem:* ${data.mensagem}`

    // Rastrear conversão completa do formulário
    trackCompleteConversion(
      CONVERSION_TYPES.FORM_SUBMIT,
      EVENT_CATEGORIES.CONTACT,
      'contact_form',
      1
    )

    handleWhatsAppMessage(message, 'contact_form')
    
    // Reset form
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      mensagem: "",
    })
  }

  const validationRules = {
    nome: { required: true, minLength: 2 },
    telefone: { 
      required: true, 
      pattern: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
      custom: (value: string) => {
        if (!value.match(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)) {
          return "Telefone inválido"
        }
        return null
      }
    },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      custom: (value: string) => {
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return "E-mail inválido"
        }
        return null
      }
    },
    mensagem: { required: true, minLength: 10 }
  }

  // Não renderizar nada até o componente estar montado no cliente
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#374151] mx-auto mb-4"></div>
            <p className="text-[#374151] text-lg">Carregando...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#9ca3af] z-50 safe-area-top">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between">
          <div className="flex items-center ml-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-80 transition-opacity"
              aria-label="Voltar ao topo da página"
            >
              <Image
                src="/imagens/logocm2.png"
                alt="CM² Construções"
                width={240}
                height={120}
                className="h-20 sm:h-24 md:h-28 w-auto"
              />
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#sobre" className="text-black hover:text-[#374151] transition-colors font-semibold uppercase tracking-wide text-sm lg:text-base">
              SOBRE NÓS
            </a>
            <a href="#portfolio" className="text-black hover:text-[#374151] transition-colors font-semibold uppercase tracking-wide text-sm lg:text-base">
              PORTFÓLIO
            </a>
            <a href="#contato" className="text-black hover:text-[#374151] transition-colors font-semibold uppercase tracking-wide text-sm lg:text-base">
              CONTATO
            </a>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={() => handleWhatsAppMessage("Olá! Gostaria de solicitar um orçamento para meu projeto.", "header_button")}
              className="hidden md:inline-flex bg-[#374151] hover:bg-[#374151] text-white transition-colors text-sm px-4 py-2 lg:px-6 lg:py-3"
            >
              <span className="hidden lg:inline">SOLICITAR ORÇAMENTO</span>
              <span className="lg:hidden">ORÇAMENTO</span>
            </Button>
            <MobileMenu onWhatsAppClick={() => handleWhatsAppMessage("Olá! Gostaria de solicitar um orçamento para meu projeto.", "mobile_menu")} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XScuQotuIsktEqkMGEfCMFa8Z84dl4.png"
            alt="Casa moderna CM² Construções"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Transformando espaços com excelência
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Criamos ambientes que inspiram com durabilidade.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={400}>
            <Button
              onClick={() => handleWhatsAppMessage("Olá! Gostaria de falar com um especialista sobre meu projeto.", "hero_button")}
              className="btn-mobile-large bg-[#374151] hover:bg-[#374151] text-white transition-colors"
            >
              FALE COM O NOSSO TIME
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Estatísticas */}
      <StatsSection />

      {/* Sobre Nós */}
      <section id="sobre" className="section-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="grid grid-mobile-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-4 sm:mb-6">Sobre Nós</h2>
                <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] mb-4 sm:mb-6 leading-relaxed">
                  A CM² Construções nasceu da união de dois profissionais apaixonados por transformar espaços com
                  excelência e inovação. Atuamos com reformas e construções de alto padrão no Ceará, sempre com atenção
                  aos detalhes e execução impecável.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] leading-relaxed">
                  Com forte presença nos condomínios mais valorizados da região, como Alphaville Fortaleza e Cidade Alpha,
                  a CM² Construções se destaca pela atenção aos detalhes, soluções modernas e execução impecável em cada
                  projeto.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/imagens/IMG_1252 (1).png"
                  alt="Equipe CM² Construções"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="servicos" className="section-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-4">Nossos Diferenciais</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af]">O que nos torna únicos no mercado.</p>
          </ScrollAnimation>
          <div className="grid grid-mobile">
            <ScrollAnimation animation="fade-up" delay={200}>
              <Card className="text-center card-mobile hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#374151] mb-4">Qualidade de Mão de Obra</h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af]">
                    Nossa excelência se reflete em cada detalhe, desde os acabamentos até os aspectos estruturais,
                    garantindo durabilidade e precisão em todas as etapas.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <Card className="text-center card-mobile hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#374151] mb-4">Respeito aos Prazos</h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af]">
                    Garantimos a execução da obra dentro do cronograma estabelecido, com planejamento e eficiência.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <Card className="text-center card-mobile hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-6">
                    <HandHeart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#374151] mb-4">Atendimento Pós-Obra</h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af]">
                    Nosso compromisso com o cliente vai além da entrega da obra, com suporte contínuo e atenção a qualquer
                    necessidade que surja após a finalização.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="section-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-4">Nosso Processo Construtivo</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af]">Como trabalhamos para entregar excelência</p>
          </ScrollAnimation>


          <div className="grid grid-mobile">
            <div className="col-span-full">
              <ScrollAnimation animation="fade-up">
                  <Card className="card-mobile">
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <h4 className="font-semibold text-[#374151] mb-2">Planejamento</h4>
                        <p className="text-sm text-[#9ca3af]">
                          Análise detalhada do projeto e cronograma de execução.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <h4 className="font-semibold text-[#374151] mb-2">Execução</h4>
                        <p className="text-sm text-[#9ca3af]">
                          Trabalho com equipe especializada e materiais de qualidade.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <h4 className="font-semibold text-[#374151] mb-2">Acompanhamento</h4>
                        <p className="text-sm text-[#9ca3af]">
                          Supervisão constante e comunicação com o cliente.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <h4 className="font-semibold text-[#374151] mb-2">Entrega</h4>
                        <p className="text-sm text-[#9ca3af]">
                          Finalização com qualidade e suporte pós-obra.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-4">Depoimentos de Clientes</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af]">O que nossos clientes dizem sobre nós.</p>
          </ScrollAnimation>

          <div className="grid grid-mobile">
            <ScrollAnimation animation="fade-up" delay={200}>
              <Card className="card-mobile hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#374151]">Júlia Demétrio</h4>
                      <p className="text-sm text-[#9ca3af]">Alpha Fortaleza</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] italic">
                    "A CM² Construções superou todas as minhas expectativas. A qualidade do trabalho e o respeito aos
                    prazos foram impressionantes. Recomendo para todos!"
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <Card className="card-mobile hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#374151]">Everton Maia</h4>
                      <p className="text-sm text-[#9ca3af]">Terras Alphaville</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] italic">
                    "Profissionais extremamente competentes e atenciosos. Transformaram minha casa em um espaço
                    incrível. O resultado final foi perfeito!"
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <Card className="card-mobile hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#374151]">Nina Machado</h4>
                      <p className="text-sm text-[#9ca3af]">Apartamento de Alto Padrão</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] italic">
                    "Excelente trabalho desde o planejamento até a finalização. A equipe é muito profissional e
                    o resultado ficou exatamente como planejado."
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-4">Entre em Contato</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af]">Vamos transformar seu projeto em realidade.</p>
          </ScrollAnimation>

          <div className="grid grid-mobile-2 gap-8 lg:gap-12">
            <ScrollAnimation animation="fade-left">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#374151] mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#374151] mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#374151]">Telefone</p>
                      <p className="text-[#9ca3af]">(85) 9426-4434</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-[#374151] mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#374151]">WhatsApp</p>
                      <p className="text-[#9ca3af]">(85) 9426-4434</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-6 h-6 text-[#374151] mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#374151]">Instagram</p>
                      <p className="text-[#9ca3af]">@cm2construcoes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={() => handleWhatsAppMessage("Olá! Gostaria de falar com um especialista sobre meu projeto.", "contact_section_button")}
                    className="btn-mobile bg-[#374151] hover:bg-[#374151] text-white"
                  >
                    FALE COM UM ESPECIALISTA
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right">
              <FormValidation
                onSubmit={handleSubmitForm}
                validationRules={validationRules}
                initialData={formData}
                submitButtonText="Enviar Mensagem"
              >
                {({ formData, updateField }: { formData: any; updateField: (fieldName: string, value: string) => void }) => (
                  <>
                    <ValidatedInput
                      name="nome"
                      label="Nome Completo"
                      placeholder="Digite seu nome completo"
                      validationRule={validationRules.nome}
                      value={formData.nome}
                      onChange={(value) => updateField("nome", value)}
                    />
                    <ValidatedInput
                      name="telefone"
                      label="Telefone"
                      type="tel"
                      placeholder="(85) 99999-9999"
                      validationRule={validationRules.telefone}
                      value={formData.telefone}
                      onChange={(value) => updateField("telefone", value)}
                    />
                    <ValidatedInput
                      name="email"
                      label="E-mail"
                      type="email"
                      placeholder="seu@email.com"
                      validationRule={validationRules.email}
                      value={formData.email}
                      onChange={(value) => updateField("email", value)}
                    />
                    <ValidatedInput
                      name="mensagem"
                      label="Mensagem"
                      type="textarea"
                      placeholder="Descreva seu projeto ou dúvida"
                      validationRule={validationRules.mensagem}
                      value={formData.mensagem}
                      onChange={(value) => updateField("mensagem", value)}
                    />
                  </>
                )}
              </FormValidation>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374151] text-white py-12 safe-area-bottom">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:opacity-80 transition-opacity"
                aria-label="Voltar ao topo da página"
              >
                <Image
                  src="/imagens/logocm2.png"
                  alt="CM² Construções"
                  width={200}
                  height={60}
                  className="h-16 w-auto mb-4"
                />
              </button>
              <p className="text-white text-sm sm:text-base">
                Transformando espaços com excelência e inovação desde 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#sobre" className="text-white hover:text-[#9ca3af] transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-white hover:text-[#9ca3af] transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="text-white hover:text-[#9ca3af] transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="text-white hover:text-[#9ca3af] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-white text-sm sm:text-base">
                <li>Construções Residenciais</li>
                <li>Reformas de Alto Padrão</li>
                <li>Acabamentos</li>
                <li>Projetos Arquitetônicos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-white text-sm sm:text-base">
                <p>(85) 9426-4434</p>
                <p>contato@cm2construcoes.com.br</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/cm2construcoes?igsh=bm9kM2oxYzdhenVy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#9ca3af] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white mt-8 pt-8 text-center text-white text-sm sm:text-base">
            <p>&copy; 2025 CM² Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}
