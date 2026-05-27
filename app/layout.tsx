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
  title: "Costco Method",
  description: "Discover how people are unlocking up to $750 in Costco rewards. Complete simple steps and claim your gift card today.",
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
    title: "Costco Method",
    description: "Unlock up to $750 in Costco rewards with a simple process.",
    siteName: "Costco Method",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Costco Method - $750 Gift Card Rewards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Costco Method",
    description: "Unlock up to $750 in Costco rewards with a simple process.",
    images: ["/og-image.jpg"],
  },
  other: {
    "apple-mobile-web-app-title": "Costco Method",
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
