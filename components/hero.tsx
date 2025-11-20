"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import companyData from "@/src/data/company.json"
import type { CompanyInfo } from "@/src/types"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const company = companyData as CompanyInfo

const stats = [
  { target: 800, suffix: "+", label: "服务企业级客户" },
  { target: 120, suffix: "+", label: "大型成功交付项目" },
  { target: 24, prefix: "7×", suffix: "小时响应", label: "本地化技术支持" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_58%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(99,102,241,0.25)_1px,_transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 animate-grid-move opacity-25 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:140px_140px] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 via-blue-100/20 to-transparent blur-3xl dark:from-cyan-400/30 dark:via-blue-500/20 dark:to-transparent" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-primary/10 via-blue-50/30 to-transparent blur-3xl dark:from-indigo-500/30 dark:via-slate-900 dark:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-transparent dark:from-slate-950" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">
        <div className="order-2 flex flex-1 flex-col gap-8 text-center lg:order-1 lg:text-left">
          <Badge className="mx-auto w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-gray-900 shadow-lg shadow-primary/20 dark:border-white/20 dark:bg-white/10 dark:text-white/90 lg:mx-0">
            普悦天诚 · PYTC
          </Badge>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold text-gray-900 drop-shadow-xl dark:text-white md:text-5xl lg:text-6xl">
              终端安全与数据中心一体化专家
            </h1>
            <p className="text-lg font-semibold text-primary dark:text-cyan-300">{company.slogan}</p>
            <p className="text-base leading-relaxed text-gray-700 dark:text-slate-300">{company.description}</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-left shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-3xl font-semibold text-gray-900 dark:text-white">
                  <AnimatedStat prefix={stat.prefix} suffix={stat.suffix} target={stat.target} />
                </div>
                <div className="mt-1 text-sm text-gray-700 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 px-8 text-base text-white shadow-lg shadow-cyan-500/30"
            >
              <Link href="/solutions">立即了解方案</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-primary/40 bg-transparent px-8 text-base text-gray-900 hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
            >
              <Link href="/services">预约顾问</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 flex flex-1 justify-center lg:order-2">
          <FloatingIsometric />
        </div>
      </div>
    </section>
  )
}

function AnimatedStat({ target, prefix, suffix, duration = 1800 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let cancelled = false
    let current = 0
    const steps = 40
    const stepDuration = duration / steps
    const increment = target / steps
    let timeoutId: NodeJS.Timeout | undefined

    const tick = () => {
      if (cancelled) return
      current = Math.min(current + increment, target)
      setValue(Math.round(current))
      if (current < target) {
        timeoutId = setTimeout(tick, stepDuration)
      }
    }

    tick()

    return () => {
      cancelled = true
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [target, duration])

  const formatted = new Intl.NumberFormat("zh-CN").format(value)

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

function FloatingIsometric() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".float-element")
    if (!elements) return

    elements.forEach((el, index) => {
      const element = el as HTMLElement
      const delay = index * 0.2
      element.style.animation = `float 3s ease-in-out ${delay}s infinite`
    })
  }, [])

  return (
    <div ref={containerRef} className="relative h-[500px] w-full">
      {/* Servers - Back */}
      <div className="float-element absolute top-8 left-12 animate-float">
        <div className="relative h-40 w-32 -rotate-6 transform rounded-lg bg-gradient-to-br from-primary/50 to-primary/70 shadow-xl dark:from-blue-400 dark:to-blue-500">
          <div className="absolute inset-0 flex flex-col gap-2 p-3">
            <div className="h-8 w-full rounded bg-gradient-to-r from-primary/30 to-transparent dark:from-blue-300/60 dark:to-blue-500/40" />
            <div className="h-8 w-full rounded bg-gradient-to-r from-primary/30 to-transparent dark:from-blue-300/60 dark:to-blue-500/40" />
            <div className="h-8 w-full rounded bg-gradient-to-r from-primary/30 to-transparent dark:from-blue-300/60 dark:to-blue-500/40" />
          </div>
        </div>
      </div>

      {/* Central Laptop */}
      <div className="float-element absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          {/* Lock Icon */}
          <div className="absolute -top-16 -right-16 flex h-20 w-20 animate-bounce items-center justify-center rounded-2xl bg-gradient-to-br from-primary/60 to-primary/80 shadow-xl dark:from-blue-500 dark:to-blue-700">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
          </div>

          {/* Laptop */}
          <div className="h-48 w-64 rounded-lg bg-gradient-to-br from-primary/60 to-primary/80 p-4 shadow-2xl dark:from-blue-600 dark:to-blue-800">
            <div className="flex h-full w-full items-center justify-center rounded bg-gradient-to-br from-white to-slate-100 dark:from-blue-900 dark:to-slate-900">
              <svg
                viewBox="0 0 24 24"
                className="h-24 w-24 text-primary dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="11" width="14" height="10" rx="1"></rect>
                <path d="M12 11V7"></path>
                <circle cx="12" cy="7" r="3"></circle>
              </svg>
            </div>
          </div>
          <div className="-mt-1 mx-auto h-2 w-80 rounded-full bg-gradient-to-r from-primary/60 to-primary/40 shadow-lg dark:from-blue-700 dark:to-blue-600"></div>
        </div>
      </div>

      {/* Cloud Icon */}
      <div className="float-element absolute top-4 right-24">
        <div className="relative h-16 w-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 shadow-lg dark:from-cyan-400 dark:to-cyan-500">
          <div className="absolute -bottom-2 left-4 h-12 w-16 rounded-full bg-gradient-to-br from-primary/50 to-primary/30 dark:from-cyan-400 dark:to-cyan-500"></div>
        </div>
      </div>

      {/* Stack of Layers - Right */}
      <div className="float-element absolute top-40 right-8">
        <div className="space-y-2">
          <div className="h-6 w-24 rotate-3 transform rounded bg-gradient-to-r from-primary/20 to-primary/40 shadow-md dark:from-blue-300 dark:to-blue-400"></div>
          <div className="h-6 w-24 rounded bg-gradient-to-r from-primary/30 to-primary/60 shadow-md dark:from-blue-400 dark:to-blue-500"></div>
          <div className="h-6 w-24 -rotate-3 transform rounded bg-gradient-to-r from-primary/40 to-primary/70 shadow-md dark:from-blue-500 dark:to-blue-600"></div>
        </div>
      </div>

      {/* Database Icon */}
      <div className="float-element absolute bottom-20 left-8">
        <div className="w-16 h-20 relative">
          <div className="absolute top-0 h-6 w-16 rounded-full bg-gradient-to-r from-primary/30 to-primary/50 dark:from-blue-400 dark:to-blue-500"></div>
          <div className="absolute top-3 h-14 w-16 bg-gradient-to-b from-primary/40 to-primary/70 dark:from-blue-400 dark:to-blue-500"></div>
          <div className="absolute bottom-0 h-6 w-16 rounded-full bg-gradient-to-r from-primary/50 to-primary/70 dark:from-blue-500 dark:to-blue-600"></div>
        </div>
      </div>
    </div>
  )
}
