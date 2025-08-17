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
  title: "CM² Construções - Transformando Espaços com Excelência",
  description: "CM² Construções - Empresa especializada em construções e reformas de alto padrão no Ceará. Atuamos em Alphaville Fortaleza, Cidade Alpha e região com qualidade e inovação.",
  keywords: "construção, reforma, alto padrão, Fortaleza, Ceará, Alphaville, Cidade Alpha, arquitetura, engenharia",
  authors: [{ name: "CM² Construções" }],
  creator: "CM² Construções",
  publisher: "CM² Construções",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cm2construcoes.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CM² Construções - Transformando Espaços com Excelência",
    description: "Empresa especializada em construções e reformas de alto padrão no Ceará. Atuamos em Alphaville Fortaleza, Cidade Alpha e região.",
    url: 'https://cm2construcoes.com.br',
    siteName: 'CM² Construções',
    images: [
      {
        url: '/imagens/logo-cm2.png',
        width: 1200,
        height: 630,
        alt: 'CM² Construções - Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CM² Construções - Transformando Espaços com Excelência",
    description: "Empresa especializada em construções e reformas de alto padrão no Ceará.",
    images: ['/imagens/logo-cm2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Meta tags para mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#374151" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CM² Construções" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#374151" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/imagens/logo-cm2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imagens/logo-cm2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/imagens/logo-cm2.png" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//instagram.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CM² Construções",
              "description": "Empresa especializada em construções e reformas de alto padrão no Ceará",
              "url": "https://cm2construcoes.com.br",
              "telephone": "+5585999733454",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fortaleza",
                "addressRegion": "CE",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-3.7319",
                "longitude": "-38.5267"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "image": "/imagens/logo-cm2.png",
              "sameAs": [
                "https://instagram.com/cm2construcoes"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
