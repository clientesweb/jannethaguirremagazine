import { ARTICLES_VARIOS } from "./articles-original"
import { ARTICLES_NEW } from "./articles-new"

// Combinar todos los artículos
const ALL_ARTICLES = [...ARTICLES_VARIOS, ...ARTICLES_NEW]

// Función para obtener artículo por categoría y slug
function getArticleBySlug(category: string, slug: string) {
  return (
    ALL_ARTICLES.find(
      (article) => article.category.toLowerCase() === category.toLowerCase() && article.slug === slug,
    ) || null
  )
}

// Función para obtener artículos por categoría
function getArticlesByCategory(category: string) {
  return ALL_ARTICLES.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}

// Función para obtener todas las categorías
function getCategories() {
  const categories = [...new Set(ALL_ARTICLES.map((article) => article.category.toLowerCase()))]
  return categories
}

// Función para obtener todos los artículos
function getAllArticles() {
  return ALL_ARTICLES
}

// Export all functions
export { getArticleBySlug, getArticlesByCategory, getCategories, getAllArticles }
