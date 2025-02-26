import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { FeedbackForm } from "@/components/feedback-form"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "이지티켓",
  description: "쉽고 빠른 티켓 거래 플랫폼",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <FeedbackForm />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}



import './globals.css'