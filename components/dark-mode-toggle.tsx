"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-background text-foreground border border-accent transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  )
}
