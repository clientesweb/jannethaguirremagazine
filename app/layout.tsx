import type React from "react"
import type { Metadata } from "next"
import { Anton, Poppins } from "next/font/google"
import "./globals.css"
import AnnouncementBar from "@/components/announcement-bar"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jannethaguirremagazine.com"),
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
    "propiedades en venta Ecuador",
    "asesoría inmobiliaria",
    "inversiones rentables",
    "desarrollo inmobiliario",
    "tendencias inmobiliarias",
    "compra venta propiedades",
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
    url: "https://www.jannethaguirremagazine.com",
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
    canonical: "https://www.jannethaguirremagazine.com",
    languages: {
      "es-EC": "https://www.jannethaguirremagazine.com",
    },
  },
  category: "business",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${anton.variable} ${poppins.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F04438" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        <meta name="apple-mobile-web-app-title" content="Magazine JA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#F04438" />
        <meta name="msapplication-navbutton-color" content="#F04438" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo-magazine.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/banner-principal-magazine.webp" as="image" type="image/webp" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Magazine Bienes Raíces - Janneth Aguirre",
              url: "https://www.jannethaguirremagazine.com",
              description: "Explora todo sobre el mundo inmobiliario con información confiable y actualizada",
              publisher: {
                "@type": "Person",
                name: "Janneth Aguirre",
                url: "https://www.jannethaguirre.com",
                sameAs: [
                  "https://www.instagram.com/magazinejannethaguirre/",
                  "https://www.facebook.com/jannethaguirre",
                ],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.jannethaguirremagazine.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: "es-EC",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Magazine Bienes Raíces - Janneth Aguirre",
              url: "https://www.jannethaguirremagazine.com",
              logo: "https://www.jannethaguirremagazine.com/images/logo-magazine.webp",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+593-98-257-3799",
                contactType: "customer service",
                areaServed: "EC",
                availableLanguage: "Spanish",
              },
              sameAs: ["https://www.instagram.com/magazinejannethaguirre/"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
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
