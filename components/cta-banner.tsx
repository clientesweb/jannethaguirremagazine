import Link from "next/link"
import Image from "next/image"

export default function CTABanner() {
  return (
    <section className="w-full">
      <Link
        href="https://www.jannethaguirre.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full hover:opacity-95 transition-opacity duration-300"
      >
        <Image
          src="/banner-encuentra-hogar.webp"
          alt="¡Encuentra tu hogar ideal! Con Janneth Aguirre, encuentra la propiedad ideal para ti o invierte con confianza"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          priority
          sizes="100vw"
        />
      </Link>
    </section>
  )
}
