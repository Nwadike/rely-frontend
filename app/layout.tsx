import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Rely Exchange - Decentralized Options Trading Protocol",
  description:
    "Trade crypto volatility without permission. Rely is a community-governed options exchange featuring transparent on-chain settlement, global liquidity, and unrestricted markets. No KYC. No limits.",
  keywords: "decentralized options, crypto derivatives, DeFi, options trading, permissionless, on-chain settlement",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Rely Exchange - Decentralized Options Trading",
    description: "Trade crypto volatility without permission. Community-governed, transparent, on-chain.",
    type: "website",
  },
  generator: "Rely Team",
  metadataBase: new URL("https://rely.exchange"),
  robots: "index, follow",
  alternates: {
    canonical: "https://rely.exchange",
  },
}

import { PreloaderProvider, usePreloader } from "@/contexts/PreloaderContext"

// ... existing code ...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ... existing head elements ... */}
      </head>
      <PreloaderProvider>
        <AppBody>{children}</AppBody>
      </PreloaderProvider>
    </html>
  )
}

function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  )
}
