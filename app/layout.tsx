import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Walmart Method",
  description: "Discover how people are unlocking up to $750 in Walmart rewards. Complete simple steps and claim your gift card today.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Walmart Method",
    description: "Unlock up to $750 in Walmart rewards with a simple process.",
    siteName: "Walmart Method",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6859811db8c0679449725597_new-Walmart-logo-01-q4bSMtQp8YRVUjJtK8NQAs5C3ye3n8.png",
        width: 1000,
        height: 1000,
        alt: "Walmart Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walmart Method",
    description: "Unlock up to $750 in Walmart rewards with a simple process.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6859811db8c0679449725597_new-Walmart-logo-01-q4bSMtQp8YRVUjJtK8NQAs5C3ye3n8.png"],
  },
  other: {
    "apple-mobile-web-app-title": "Walmart Method",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
