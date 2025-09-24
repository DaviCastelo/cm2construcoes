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
        url: '/imagens/logocm2.png',
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
            images: ['/imagens/logocm2.png'],
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
        <link rel="icon" type="image/png" sizes="32x32" href="/imagens/logocm2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imagens/logocm2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/imagens/logocm2.png" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//instagram.com" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJV4R8SF');
            `
          }}
        />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17552993084"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17552993084');
            `
          }}
        />
        
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
              "telephone": "+558594264434",
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
              "image": "/imagens/logocm2.png",
              "sameAs": [
                "https://www.instagram.com/cm2construcoes?igsh=bm9kM2oxYzdhenVy"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJV4R8SF"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
