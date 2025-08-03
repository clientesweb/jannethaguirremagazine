import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"

interface Article {
  id: number
  title: string
  description: string
  image: string
  slug: string
  category: string
  subtitle: string
  importantFact: string
  fullContent: string
}

interface ArticleContentProps {
  article: Article
}

export default function ArticleContent({ article }: ArticleContentProps) {
  // Función para procesar el contenido y convertir [IMAGE:url] en componentes Image
  const processContent = (content: string) => {
    const parts = content.split(/(\[IMAGE:[^\]]+\])/g)

    return parts.map((part, index) => {
      if (part.startsWith("[IMAGE:") && part.endsWith("]")) {
        const imageUrl = part.slice(7, -1) // Remover [IMAGE: y ]
        return (
          <div key={index} className="my-8">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Imagen del artículo"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )
      }

      // Procesar texto normal con formato markdown básico
      return (
        <div key={index} className="prose prose-lg max-w-none">
          {part.split("\n\n").map((paragraph, pIndex) => {
            if (paragraph.trim() === "") return null

            // Títulos con **
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={pIndex} className="font-poppins font-extrabold text-xl md:text-2xl text-gray-800 mt-8 mb-4">
                  {paragraph.slice(2, -2)}
                </h3>
              )
            }

            // Párrafos normales
            return (
              <p key={pIndex} className="font-poppins font-semibold text-gray-700 leading-relaxed mb-4">
                {paragraph.split("**").map((text, tIndex) =>
                  tIndex % 2 === 1 ? (
                    <strong key={tIndex} className="text-primary">
                      {text}
                    </strong>
                  ) : (
                    text
                  ),
                )}
              </p>
            )
          })}
        </div>
      )
    })
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm font-poppins font-semibold">
          <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
            Inicio
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/${article.category}`} className="text-gray-500 hover:text-primary transition-colors capitalize">
            {article.category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">{article.title}</span>
        </div>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold capitalize">
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm font-poppins font-semibold">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Publicado recientemente</span>
          </div>
        </div>

        <h1 className="font-anton text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        <p className="font-poppins font-extrabold text-lg md:text-xl text-gray-600 mb-6">{article.subtitle}</p>

        {/* Imagen principal */}
        <div className="mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Dato importante */}
        <div className="bg-contrast/50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <p className="font-poppins font-semibold text-gray-800 text-lg">{article.importantFact}</p>
        </div>
      </header>

      {/* Contenido */}
      <div className="prose prose-lg max-w-none">{processContent(article.fullContent)}</div>

      {/* Footer del artículo */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span className="font-poppins font-semibold">Janneth Aguirre</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="h-5 w-5 mr-2" />
              <span className="font-poppins font-semibold capitalize">{article.category}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href={`/${article.category}`}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-poppins font-semibold transition-colors"
            >
              Ver más en {article.category}
            </Link>
          </div>
        </div>
      </footer>
    </article>
  )
}
