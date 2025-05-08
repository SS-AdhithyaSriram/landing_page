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
    let animationId: number
    let isPaused = false

    const animate = () => {
      if (!isPaused) {
        position -= speed

        // Reset position when text has scrolled completely
        if (Math.abs(position) >= scrollWidth / 2) {
          position = 0
        }

        if (container) {
          container.style.transform = `translateX(${position}px)`
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    container.addEventListener("mouseenter", () => {
      isPaused = true
    })

    container.addEventListener("mouseleave", () => {
      isPaused = false
    })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [text])

  return (
    <div className="overflow-hidden py-3 relative border-y border-accent hover:border-primary transition-colors duration-300 cursor-default">
      <div
        ref={containerRef}
        className="whitespace-nowrap font-playfair text-2xl sm:text-3xl text-foreground transition-all duration-300 hover:text-primary"
        style={{ willChange: "transform" }}
      >
        {text} • {text} • {text} • {text}
      </div>
    </div>
  )
}
