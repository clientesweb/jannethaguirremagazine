import type React from "react"
import type { Metadata } from "next"
import { Anton, Poppins } from "next/font/google"
import "./globals.css"
import AnnouncementBar from "@/components/announcement-bar"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jannethaguirre.online"),
  title: {
    default: "Magazine Bienes Raíces - Janneth Aguirre | Información Inmobiliaria Confiable",
    template: "%s | Magazine Bienes Raíces - Janneth Aguirre",
  },
  description:
    "Explora todo sobre el mundo inmobiliario con información confiable y actualizada. Noticias, análisis de mercado, finanzas y oportunidades de inversión de la mano de Janneth Aguirre, experta en bienes raíces.",
  keywords: [
    "bienes raíces",
    "inmobiliaria",
    "Janneth Aguirre",
    "propiedades Ecuador",
    "inversión inmobiliaria",
    "mercado inmobiliario",
    "noticias inmobiliarias",
    "finanzas inmobiliarias",
    "Guayaquil",
    "Samborondón",
    "magazine inmobiliario",
  ],
  authors: [{ name: "Janneth Aguirre", url: "https://www.jannethaguirre.com" }],
  creator: "Janneth Aguirre",
  publisher: "Janneth Aguirre Bienes Raíces",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jannethaguirre.online",
    siteName: "Magazine Bienes Raíces - Janneth Aguirre",
    title: "Magazine Bienes Raíces - Janneth Aguirre | Información Inmobiliaria Confiable",
    description:
      "Explora todo sobre el mundo inmobiliario con información confiable y actualizada. Noticias, análisis de mercado, finanzas y oportunidades de inversión.",
    images: [
      {
        url: "/og-image-inicio.jpg",
        width: 1200,
        height: 630,
        alt: "Magazine Bienes Raíces - Janneth Aguirre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Bienes Raíces - Janneth Aguirre",
    description: "Explora todo sobre el mundo inmobiliario con información confiable y actualizada.",
    images: ["/og-image-inicio.jpg"],
    creator: "@jannethaguirre",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.jannethaguirre.online",
  },
  category: "business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        <meta name="apple-mobile-web-app-title" content="Magazine JA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Magazine Bienes Raíces - Janneth Aguirre",
              url: "https://www.jannethaguirre.online",
              description: "Explora todo sobre el mundo inmobiliario con información confiable y actualizada",
              publisher: {
                "@type": "Person",
                name: "Janneth Aguirre",
                url: "https://www.jannethaguirre.com",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.jannethaguirre.online/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${anton.variable} ${poppins.variable} antialiased`}>
        <AnnouncementBar />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
