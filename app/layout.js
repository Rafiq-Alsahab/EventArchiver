import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Mashriq - Modern Photo Gallery with Arabian Aesthetics",
  description: "Create stunning photo galleries with rich Arabian textures and immersive scroll animations",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
          {children}
        
      </body>
    </html>
  )
}
