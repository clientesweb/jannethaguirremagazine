import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Link href="/noticias" className="block w-full">
          <Image
            src="/images/banner-principal-magazine.webp"
            alt="Magazine Bienes Raíces - Explora todo sobre el mundo inmobiliario"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover sm:object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-none hover:opacity-95 transition-opacity duration-300"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </Link>
      </div>
    </section>
  )
}
