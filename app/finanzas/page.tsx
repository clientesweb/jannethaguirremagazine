import Header from "@/components/header"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"
import CTABanner from "@/components/cta-banner"
import { getArticlesByCategory } from "@/lib/articles"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finanzas Inmobiliarias",
  description:
    "Información financiera especializada para tomar las mejores decisiones de inversión inmobiliaria. Créditos hipotecarios, análisis financiero y consejos de inversión.",
  openGraph: {
    title: "Finanzas Inmobiliarias | Magazine Bienes Raíces - Janneth Aguirre",
    description: "Información financiera especializada para tomar las mejores decisiones de inversión inmobiliaria.",
    images: ["/og-image-finanzas.jpg"],
  },
  twitter: {
    title: "Finanzas Inmobiliarias | Magazine Bienes Raíces - Janneth Aguirre",
    description: "Información financiera especializada para tomar las mejores decisiones de inversión inmobiliaria.",
    images: ["/og-image-finanzas.jpg"],
  },
}

export default function FinanzasPage() {
  const allArticles = getArticlesByCategory("finanzas")
  // Mostrar solo los primeros 9 artículos inicialmente
  const articles = allArticles.slice(0, 9)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-primary mb-4">FINANZAS</h1>
            <p className="font-poppins font-semibold text-gray-600 text-lg max-w-2xl mx-auto">
              Información financiera especializada para tomar las mejores decisiones de inversión inmobiliaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                      Finanzas
                    </span>
                  </div>
                  <h2 className="font-poppins font-extrabold text-xl text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="font-poppins font-semibold text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <Link
                    href={`/finanzas/${article.slug}`}
                    className="inline-flex items-center font-poppins font-semibold text-primary hover:text-primary/80 transition-colors"
                    prefetch={index < 3}
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Mostrar información de paginación si hay más artículos */}
          {allArticles.length > 9 && (
            <div className="text-center mt-12">
              <p className="font-poppins font-semibold text-gray-600 mb-4">
                Mostrando {articles.length} de {allArticles.length} artículos
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-colors duration-300">
                Cargar más artículos
              </button>
            </div>
          )}
        </div>
      </main>
      <CTABanner />
      <AppBanner />
      <Footer />
    </div>
  )
}
