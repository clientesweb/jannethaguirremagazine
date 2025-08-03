import Header from "@/components/header"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"
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
  const articles = getArticlesByCategory("finanzas")

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
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={
                      article.image.startsWith("http")
                        ? article.image
                        : `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(article.title)}`
                    }
                    alt={article.title}
                    fill
                    className="object-cover"
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
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <AppBanner />
      <Footer />
    </div>
  )
}
