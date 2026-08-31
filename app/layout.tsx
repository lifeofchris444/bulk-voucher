import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.costcodiscounts.com"
const SITE_NAME = "Costco Discounts"
const TITLE = "The Costco Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how members are unlocking hidden discount codes on bulk groceries and pantry staples, electronics and TVs, home and furniture, and gas, tires, and auto care. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Costco discount code",
    "Costco promo code",
    "Costco discounts",
    "Costco coupons",
    "Costco membership deals",
    "Costco warehouse deals",
    "bulk grocery and pantry deals",
    "electronics and TV deals",
    "home and furniture deals",
    "Costco gas discounts",
    "Costco gas prices",
    "gas, tires and auto care deals",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: "A bulk multi-pack of pantry goods and a large bag of coffee beans, a stack of paper towel rolls, a slim flat-screen 4K television, a folded gray upholstered cushion and rolled mattress topper, a red portable fuel can, and a black car tire with a silver rim arranged on a deep Costco blue and dark navy background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#004A8A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
