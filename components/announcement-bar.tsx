"use client"

import { X, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-white py-2 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center gap-2">
          <span className="font-poppins font-semibold text-sm sm:text-base">Magazine oficial de Janneth Aguirre</span>
          <span className="hidden sm:inline">•</span>
          <Link
            href="https://www.instagram.com/magazinejannethaguirre/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins font-semibold text-sm sm:text-base hover:underline transition-all duration-300 inline-flex items-center gap-1"
          >
            <Instagram className="h-4 w-4" />
            <span>Síguenos @magazinejannethaguirre</span>
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
            aria-label="Cerrar anuncio"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
