"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitorear Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Lazy load del script de web vitals solo en producción
      if (process.env.NODE_ENV === "production") {
        import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log)
          getFID(console.log)
          getFCP(console.log)
          getLCP(console.log)
          getTTFB(console.log)
        })
      }
    }
  }, [])

  return null
}
