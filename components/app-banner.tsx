import Image from "next/image"
import Link from "next/link"

export default function AppBanner() {
  return (
    <section className="w-full py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4">
        <Link
          href="https://www.jannethaguirre.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full hover:opacity-95 transition-opacity duration-300"
        >
          <Image
            src="/images/banner-app-descarga.webp"
            alt="¡Oportunidades de inversiones, a un click! Lleva nuestra app en tu bolsillo y aprovecha cada posibilidad"
            width={1920}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            sizes="100vw"
          />
        </Link>
      </div>
    </section>
  )
}
