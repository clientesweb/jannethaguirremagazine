import Link from "next/link"
import { Phone } from "lucide-react"

export default function WhatsAppContactBanner() {
  const whatsappNumber = "593982573799"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-primary py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <h2 className="font-poppins font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight text-center md:text-left">
            ¿Necesitas publicar inversiones, obtener colaboración o visualización a tu proyecto?
          </h2>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-lg font-poppins font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-5 h-5" />
            <span>Contáctanos</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
