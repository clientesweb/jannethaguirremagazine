import Header from "@/components/header"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces, inversiones inmobiliarias y oportunidades de negocio. Asesoría profesional en Ecuador.",
  openGraph: {
    title: "Contacto | Magazine Bienes Raíces - Janneth Aguirre",
    description:
      "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces e inversiones inmobiliarias.",
    images: ["/og-image-contacto.jpg"],
  },
  twitter: {
    title: "Contacto | Magazine Bienes Raíces - Janneth Aguirre",
    description:
      "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces e inversiones inmobiliarias.",
    images: ["/og-image-contacto.jpg"],
  },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-primary mb-4">CONTACTO</h1>
            <p className="font-poppins font-semibold text-gray-600 text-lg max-w-2xl mx-auto">
              Ponte en contacto con nosotros para consultas sobre bienes raíces e inversiones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="font-poppins font-semibold text-gray-700 text-center text-lg">
                Para consultas y asesorías inmobiliarias, visita nuestro sitio web principal:
              </p>
              <div className="text-center mt-8">
                <a
                  href="https://www.jannethaguirre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors duration-300"
                >
                  Visitar www.jannethaguirre.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppBanner />
      <Footer />
    </div>
  )
}
