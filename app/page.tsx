import Header from "@/components/header"
import Banner from "@/components/banner"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"
import YouTubeVideo from "@/components/youtube-video"
import { getAllArticles } from "@/lib/articles"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Mantente al día con las últimas noticias del sector inmobiliario, análisis de mercado y oportunidades de inversión en Ecuador y el mundo.",
  openGraph: {
    title: "Magazine Bienes Raíces - Janneth Aguirre | Inicio",
    description:
      "Mantente al día con las últimas noticias del sector inmobiliario, análisis de mercado y oportunidades de inversión.",
    images: ["/og-image-inicio.jpg"],
  },
  twitter: {
    title: "Magazine Bienes Raíces - Janneth Aguirre | Inicio",
    description:
      "Mantente al día con las últimas noticias del sector inmobiliario, análisis de mercado y oportunidades de inversión.",
    images: ["/og-image-inicio.jpg"],
  },
}

export default function Home() {
  // Obtener los 5 artículos más recientes (los últimos en el array)
  const allArticles = getAllArticles()
  const latestArticles = allArticles.slice(-5).reverse() // Últimos 5 en orden inverso

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CTABanner />

      {/* Sección de Últimas Noticias */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl text-primary mb-4">ÚLTIMAS NOTICIAS</h1>
            <p className="font-poppins font-semibold text-gray-600 text-lg max-w-2xl mx-auto">
              Mantente al día con las últimas novedades del sector inmobiliario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <article
                key={article.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-48"}`}>
                  <Image
                    src={
                      article.image.startsWith("http")
                        ? article.image
                        : `/placeholder.svg?height=${index === 0 ? "400" : "300"}&width=${index === 0 ? "800" : "400"}&query=${encodeURIComponent(article.title)}`
                    }
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2
                    className={`font-poppins font-extrabold text-gray-900 mb-3 line-clamp-2 ${
                      index === 0 ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {article.title}
                  </h2>
                  <p className="font-poppins font-semibold text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <Link
                    href={`/${article.category}/${article.slug}`}
                    className="inline-flex items-center font-poppins font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Botón para ver todas las noticias */}
          <div className="text-center mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-poppins font-semibold text-lg transition-colors duration-300"
            >
              Ver Todas las Noticias
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Video */}
      <YouTubeVideo videoId="XsrT_U7qE50" />

      {/* Banner de App */}
      <AppBanner />

      <Footer />
    </div>
  )
}
