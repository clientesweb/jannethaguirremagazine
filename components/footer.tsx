"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Noticias", href: "/noticias" },
    { name: "Finanzas", href: "/finanzas" },
    { name: "Mercado", href: "/mercado" },
    { name: "Contacto", href: "/contacto" },
  ]

  const legalLinks = [
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Cookies", href: "/cookies" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/jannethaguirrebienesraices" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/janneth_aguirrem/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/janneth-aguirre-0b1b3b1b3/" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@jannethaguirrebienesraices?si=uTMn0_L6y0Yv5TJK" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-magazine.webp"
                alt="Bienes Raíces - Janneth Aguirre"
                width={180}
                height={90}
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
            <p className="font-poppins font-semibold text-gray-300 mb-6 leading-relaxed">
              Tu fuente confiable de información inmobiliaria. Descubre las mejores oportunidades de inversión y
              mantente actualizado con las tendencias del mercado.
            </p>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 hover:bg-primary p-2 sm:p-3 rounded-full transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-poppins font-extrabold text-lg mb-6 text-primary">Navegación</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins font-semibold text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-poppins font-extrabold text-lg mb-6 text-primary">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins font-semibold text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-poppins font-extrabold text-lg mb-6 text-primary">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-gray-300">Email</p>
                  <Link
                    href="mailto:jannethaguirremagazine@gmail.com"
                    className="font-poppins font-semibold text-white hover:text-primary transition-colors duration-300"
                  >
                    jannethaguirremagazine@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-gray-300">Teléfono</p>
                  <Link
                    href="tel:+593982573799"
                    className="font-poppins font-semibold text-white hover:text-primary transition-colors duration-300"
                  >
                    +593 98 257 3799
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-gray-300">Ubicación</p>
                  <p className="font-poppins font-semibold text-white">Guayaquil, Ecuador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-poppins font-extrabold text-lg sm:text-xl text-white mb-2">
                Suscríbete a nuestro newsletter
              </h3>
              <p className="font-poppins font-semibold text-sm sm:text-base text-gray-300">
                Recibe las últimas noticias inmobiliarias directamente en tu email
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 sm:gap-0">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Tu email aquí..."
                className="flex-1 sm:w-64 md:w-80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none border-0 focus:ring-2 focus:ring-primary font-poppins font-semibold text-gray-900 text-sm sm:text-base"
              />
              <button
                onClick={() => {
                  const email = document.getElementById("newsletter-email").value
                  if (email) {
                    const message = `Hola! Me gustaría suscribirme al newsletter de Janneth Aguirre Magazine. Mi email es: ${email}`
                    const whatsappUrl = `https://wa.me/593982573799?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                  } else {
                    alert("Por favor, ingresa tu email")
                  }
                }}
                className="bg-primary hover:bg-primary/90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-poppins font-semibold text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 text-center sm:text-left">
            <div>
              <p className="font-poppins font-semibold text-gray-400 text-xs sm:text-sm">
                © {currentYear} Magazine Bienes Raíces - Janneth Aguirre. Todos los derechos reservados.
              </p>
            </div>
            <div>
              <p className="font-poppins font-semibold text-gray-400 text-xs sm:text-sm">
                Powered by{" "}
                <Link
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Duality Domain
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
