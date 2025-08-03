import { notFound } from "next/navigation"
import { getArticleBySlug, getArticlesByCategory } from "@/lib/articles"
import ArticleContent from "@/components/article-content"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"

interface PageProps {
  params: {
    slug: string
  }
}

export default function InversionPage({ params }: PageProps) {
  const article = getArticleBySlug("inversion", params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <ArticleContent article={article} />
      </main>
      <AppBanner />
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory("inversion")

  return articles.map((article) => ({
    slug: article.slug,
  }))
}
