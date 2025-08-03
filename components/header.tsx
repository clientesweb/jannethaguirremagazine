"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: "Inicio", href: "/" },
    { name: "Noticias", href: "/noticias" },
    { name: "Finanzas", href: "/finanzas" },
    { name: "Mercado", href: "/mercado" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="w-full bg-white shadow-sm border-b border-contrast">
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between h-14 sm:h-16 lg:hidden px-2 sm:px-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-magazine.webp"
              alt="Bienes Raíces - Janneth Aguirre"
              width={120}
              height={60}
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-contrast h-10 w-10 sm:h-12 sm:w-12">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="sr-only">Abrir menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[400px] bg-white">
              <div className="flex flex-col space-y-4 mt-6 sm:mt-8">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <Image
                    src="/images/logo-magazine.webp"
                    alt="Bienes Raíces - Janneth Aguirre"
                    width={150}
                    height={75}
                    className="h-12 sm:h-16 w-auto"
                  />
                </div>
                <nav className="flex flex-col space-y-3 sm:space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base sm:text-lg font-poppins font-semibold text-gray-800 hover:text-primary transition-colors py-2 sm:py-3 border-b border-gray-200 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-semibold py-3"
                    >
                      <Link href="/suscribirse">Suscríbete</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-16 xl:h-20 2xl:h-24">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <Link
              href="/"
              className="text-sm xl:text-base text-gray-700 hover:text-primary font-poppins font-semibold transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/noticias"
              className="text-sm xl:text-base text-gray-700 hover:text-primary font-poppins font-semibold transition-colors"
            >
              Noticias
            </Link>
            <Link
              href="/finanzas"
              className="text-sm xl:text-base text-gray-700 hover:text-primary font-poppins font-semibold transition-colors"
            >
              Finanzas
            </Link>
          </nav>

          {/* Centered Logo */}
          <div className="flex-shrink-0 mx-4 xl:mx-6">
            <Link href="/">
              <Image
                src="/images/logo-magazine.webp"
                alt="Bienes Raíces - Janneth Aguirre"
                width={200}
                height={100}
                className="h-12 xl:h-16 2xl:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <Link
              href="/mercado"
              className="text-sm xl:text-base text-gray-700 hover:text-primary font-poppins font-semibold transition-colors"
            >
              Mercado
            </Link>
            <Link
              href="/contacto"
              className="text-sm xl:text-base text-gray-700 hover:text-primary font-poppins font-semibold transition-colors"
            >
              Contacto
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-4 xl:px-6 py-2 xl:py-3 font-poppins font-semibold text-sm xl:text-base"
            >
              <Link href="/suscribirse">Suscríbete</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
