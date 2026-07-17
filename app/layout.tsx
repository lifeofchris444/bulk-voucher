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
  title: "Costco Discounts They Don't Advertise",
  description: "Discover how members are unlocking hidden Costco discount codes on bulk essentials, electronics, home items, and everyday needs. Complete simple steps and claim your discounts today.",
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
    title: "Costco Discounts They Don't Advertise",
    description: "Unlock hidden Costco discount codes with a simple process.",
    siteName: "Costco Discounts They Don't Advertise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Costco Discounts They Don't Advertise - Hidden Discount Codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Costco Discounts They Don't Advertise",
    description: "Unlock hidden Costco discount codes with a simple process.",
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": "Costco Discounts They Don't Advertise",
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
