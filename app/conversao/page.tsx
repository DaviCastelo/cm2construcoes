"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { trackConversion } from "@/lib/conversion-tracking"

export default function ConversaoPage() {
  useEffect(() => {
    // Disparar evento de conversão do Google Ads
    trackConversion()
  }, [])

  const handleWhatsAppMessage = (message: string) => {
    const phoneNumber = "558594264434"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#9ca3af] z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/imagens/logocm2.png"
              alt="CM² Construções"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
          <Link href="/">
            <Button variant="outline" className="bg-[#374151] hover:bg-[#374151] text-white">
              Voltar ao Site
            </Button>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8 sm:p-12">
              <CardContent>
                {/* Ícone de Sucesso */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374151] mb-6">
                  Obrigado pelo seu interesse!
                </h1>

                {/* Subtítulo */}
                <p className="text-lg sm:text-xl md:text-2xl text-[#9ca3af] mb-8 leading-relaxed">
                  Recebemos sua solicitação e nossa equipe entrará em contato em breve para 
                  discutir seu projeto e fornecer um orçamento personalizado.
                </p>

                {/* Informações de Contato */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#374151] mb-6">
                    Próximos Passos
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#374151] mb-2">Ligação</h3>
                      <p className="text-sm text-[#9ca3af]">
                        Entraremos em contato em até 24 horas
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#374151] mb-2">WhatsApp</h3>
                      <p className="text-sm text-[#9ca3af]">
                        Resposta rápida via WhatsApp
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#374151] mb-2">Instagram</h3>
                      <p className="text-sm text-[#9ca3af]">
                        Acompanhe nossos projetos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleWhatsAppMessage("Olá! Acabei de solicitar um orçamento no site e gostaria de falar com um especialista.")}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open("https://www.instagram.com/cm2construcoes?igsh=bm9kM2oxYzdhenVy", "_blank")}
                    variant="outline"
                    className="border-[#374151] text-[#374151] hover:bg-[#374151] hover:text-white px-8 py-3 text-lg"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir no Instagram
                  </Button>
                </div>

                {/* Informações Adicionais */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#374151] mb-4">
                    Informações de Contato
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#9ca3af]">
                    <div>
                      <strong>Telefone:</strong> (85) 9426-4434
                    </div>
                    <div>
                      <strong>WhatsApp:</strong> (85) 9426-4434
                    </div>
                    <div>
                      <strong>Instagram:</strong> @cm2construcoes
                    </div>
                    <div>
                      <strong>E-mail:</strong> contato@cm2construcoes.com.br
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#374151] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CM² Construções. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
