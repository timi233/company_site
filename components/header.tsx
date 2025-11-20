"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Moon, PhoneCall, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品中心", href: "/products" },
  { label: "解决方案", href: "/solutions" },
  { label: "技术服务", href: "/services" },
  { label: "客户案例", href: "/cases" },
  { label: "合作伙伴", href: "/partners" },
  { label: "渠道加盟", href: "/join" },
  { label: "关于我们", href: "/about" },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    // 设置手动覆盖标记
    localStorage.setItem("theme-manual-override", "true")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9"
      title={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">切换主题</span>
    </Button>
  )
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/puryue-logo.png"
              alt="普悦天诚"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">普悦天诚</span>
              <span className="text-xs tracking-wide text-gray-500 dark:text-slate-400">PYTC</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex dark:text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full bg-primary px-5 font-medium text-white hover:bg-primary/90 md:inline-flex">
            <Link href="/contact" className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              联系我们
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开导航</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 bg-white p-6 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Image
                  src="/puryue-logo.png"
                  alt="普悦天诚"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">普悦天诚</span>
                  <span className="text-xs text-gray-500 dark:text-slate-400">PYTC</span>
                </div>
              </div>
              <nav className="flex flex-col gap-4 text-sm text-gray-700 dark:text-slate-300">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="font-medium" prefetch={false}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="rounded-full bg-primary px-4 font-medium text-white hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  联系我们
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
