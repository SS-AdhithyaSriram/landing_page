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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-background text-foreground border border-accent transition-all duration-300 
                hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 cursor-pointer"
      aria-label="Toggle dark mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <MoonIcon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  )
}
