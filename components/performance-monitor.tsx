"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Solo ejecutar en producción y si está disponible
    if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
      // Importar web-vitals de forma dinámica y con manejo de errores
      import("web-vitals")
        .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          // Función para enviar métricas (puedes personalizar esto)
          const sendToAnalytics = (metric: any) => {
            // En desarrollo, solo log a consola
            if (process.env.NODE_ENV === "development") {
              console.log(metric)
            }
            // Aquí podrías enviar a Google Analytics, etc.
          }

          getCLS(sendToAnalytics)
          getFID(sendToAnalytics)
          getFCP(sendToAnalytics)
          getLCP(sendToAnalytics)
          getTTFB(sendToAnalytics)
        })
        .catch((error) => {
          console.warn("Error loading web-vitals:", error)
        })
    }
  }, [])

  return null
}
