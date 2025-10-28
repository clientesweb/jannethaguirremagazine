import Header from "@/components/header"
import Footer from "@/components/footer"
import AppBanner from "@/components/app-banner"
import type { Metadata } from "next"
import { MapPin, Instagram, Globe, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces, inversiones inmobiliarias y oportunidades de negocio. Asesoría profesional en Ecuador.",
  keywords: [
    "contacto Janneth Aguirre",
    "asesoría inmobiliaria Ecuador",
    "consultas bienes raíces",
    "inversiones inmobiliarias",
    "contacto magazine inmobiliario",
  ],
  openGraph: {
    title: "Contacto | Magazine Bienes Raíces - Janneth Aguirre",
    description:
      "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces e inversiones inmobiliarias.",
    images: ["/og-image-contacto.jpg"],
    url: "https://www.jannethaguirremagazine.com/contacto",
  },
  twitter: {
    title: "Contacto | Magazine Bienes Raíces - Janneth Aguirre",
    description:
      "Ponte en contacto con Janneth Aguirre para consultas sobre bienes raíces e inversiones inmobiliarias.",
    images: ["/og-image-contacto.jpg"],
  },
  alternates: {
    canonical: "https://www.jannethaguirremagazine.com/contacto",
  },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-primary mb-4">CONTÁCTANOS</h1>
            <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte con tus consultas sobre bienes raíces, inversiones y oportunidades de negocio
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/593982573799"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">WhatsApp</h3>
                  <p className="font-poppins text-gray-600 mb-3">Chatea con nosotros</p>
                  <p className="font-poppins font-semibold text-primary">+593 98 257 3799</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/magazinejannethaguirre/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">Instagram</h3>
                  <p className="font-poppins text-gray-600 mb-3">Síguenos en redes</p>
                  <p className="font-poppins font-semibold text-primary">@magazinejannethaguirre</p>
                </div>
              </a>

              {/* Website Card */}
              <a
                href="https://www.jannethaguirre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">Sitio Web</h3>
                  <p className="font-poppins text-gray-600 mb-3">Visita nuestro portal</p>
                  <p className="font-poppins font-semibold text-primary">jannethaguirre.com</p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-anton text-3xl md:text-4xl text-gray-900 mb-4">¿Necesitas Asesoría Inmobiliaria?</h2>
              <p className="font-poppins text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Obtén consultoría profesional sobre inversiones, publicación de proyectos y oportunidades en el mercado
                inmobiliario
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593982573799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                <a
                  href="https://www.jannethaguirre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors duration-300"
                >
                  <Globe className="w-5 h-5" />
                  Visitar Sitio Principal
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-anton text-2xl text-gray-900 mb-6 text-center">Horario de Atención</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <p className="font-poppins font-semibold text-gray-900 mb-2">Lunes a Viernes</p>
                  <p className="font-poppins text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="font-poppins font-semibold text-gray-900 mb-2">Sábados</p>
                  <p className="font-poppins text-gray-600">9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="font-poppins text-gray-600">
                  <MapPin className="w-5 h-5 inline-block mr-2 text-primary" />
                  Guayaquil, Ecuador
                </p>
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
