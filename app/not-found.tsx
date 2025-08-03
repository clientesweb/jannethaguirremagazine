import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-center">
          <h1 className="font-anton text-6xl md:text-8xl text-primary mb-4">404</h1>
          <h2 className="font-poppins font-extrabold text-2xl md:text-3xl text-gray-800 mb-4">Página no encontrada</h2>
          <p className="font-poppins font-semibold text-gray-600 mb-8 max-w-md">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
