"use client"

import { useEffect, useRef } from "react"

interface NamasteBannerProps {
  text: string
}

export default function NamasteBanner({ text }: NamasteBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    if (scrollWidth <= clientWidth) return

    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed

      // Reset position when text has scrolled completely
      if (Math.abs(position) >= scrollWidth / 2) {
        position = 0
      }

      if (container) {
        container.style.transform = `translateX(${position}px)`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [text])

  return (
    <div className="overflow-hidden py-2 relative border-y border-accent">
      <div
        ref={containerRef}
        className="whitespace-nowrap font-playfair text-2xl sm:text-3xl text-foreground transition-colors duration-300"
        style={{ willChange: "transform" }}
      >
        {text} • {text} • {text} • {text}
      </div>
    </div>
  )
}
