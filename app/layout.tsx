import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Optimize font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
})

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Adhithya Sriram Suresh | Link in Bio",
  description: "Connect with Adhithya Sriram Suresh!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${noto.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
