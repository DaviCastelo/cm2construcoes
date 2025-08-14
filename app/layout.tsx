import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "CM² Construções - Transformando espaços com excelência",
  description:
    "Obras e reformas de alto padrão no Ceará. Especialistas em construções residenciais com atenção aos mínimos detalhes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
