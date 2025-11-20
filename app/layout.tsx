import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_SC } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "普悦天诚",
  description: "普悦天诚致力于为企业提供全方位的数字化转型服务，包括产业数字化、财务数字化、泛ERP等解决方案",
  icons: {
    icon: "/puryue-logo.png",
    apple: "/puryue-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${notoSansSC.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
