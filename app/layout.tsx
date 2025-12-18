import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Asset Shield - AI-Powered French Vocabulary Learning App",
  description:
    "Master French vocabulary with AI-generated content, interactive quizzes, practice phrases, and crossword puzzles. Free and premium plans available.",
  keywords: "French learning, vocabulary app, AI language learning, CEFR, French words, language practice",
  openGraph: {
    title: "Asset Shield - Master French Vocabulary with AI",
    description: "Learn French smarter with personalized practice and adaptive learning",
    images: ["/og-image.png"],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
