import Image from "next/image"

import { Award, Building2, Factory, GraduationCap, Heart, Landmark, Lightbulb, Trophy, Zap, type LucideIcon } from "lucide-react"

import casesData from "@/src/data/cases.json"
import type { Case } from "@/src/types"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cases = casesData as Case[]

const industryIcons: Record<string, LucideIcon> = {
  制造: Factory,
  金融: Landmark,
  能源: Zap,
  医疗: Heart,
  教育: GraduationCap,
  政企: Building2,
}

const industryCount = new Set(cases.map((item) => item.industry)).size

const stats = [
  { label: "累计项目交付", value: `${cases.length}+`, accent: "bg-primary" },
  { label: "覆盖行业", value: `${industryCount}个`, accent: "bg-cyan-400" },
  { label: "客户满意度", value: "98%", accent: "bg-emerald-400" },
]

export default function CasesPage() {
  return (
    <>
    <main className="relative min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-primary/10 dark:bg-primary/25 blur-[140px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/20 dark:bg-cyan-500/20 blur-[160px]" />
        <div className="absolute bottom-10 left-1/2 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-white/40" />
      </div>
      <Header />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 pb-32 pt-32 text-gray-900 dark:text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-16 top-0 h-40 w-40 rounded-full bg-primary/10 dark:bg-primary/30 blur-[120px]" />
          <div className="absolute right-16 top-24 h-56 w-56 rounded-full bg-purple-200/15 dark:bg-purple-500/20 blur-[140px]" />
          <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/30" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-medium text-gray-900 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 backdrop-blur">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
              <Award className="h-5 w-5" />
            </span>
            客户案例 · 交付品质见证
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            标杆客户成功实践
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
            服务制造、金融、能源等关键行业，通过终端安全、备份容灾与零信任接入，实现业务连续性与合规防护的统一。
          </p>
          <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-gray-900 shadow-sm shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:shadow-black/10"
              >
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300">
                  <span className={`inline-flex h-2 w-2 rounded-full ${stat.accent}`} />
                  {stat.label}
                </div>
                <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-950" />
      </section>
      <section className="relative -mt-16 rounded-t-[48px] bg-white pb-24 pt-24 text-gray-900 dark:bg-slate-900 dark:text-white">
        <div className="pointer-events-none absolute inset-x-6 top-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
        <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/25 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 bottom-24 h-56 w-56 rounded-full bg-cyan-100/40 dark:bg-cyan-500/20 blur-[120px]" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Cases</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">可验证的数字化交付成果</p>
          <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
            跨行业数字化转型案例，验证我们从终端安全到数据保护的完整交付能力。
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {cases.map((item) => {
            const IndustryIcon = industryIcons[item.industry] ?? Lightbulb

            return (
              <Card
                key={item.id}
                className="group relative overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20" />
                  <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/20 blur-[90px]" />
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-90"
                  aria-hidden="true"
                  style={{
                    maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                  }}
                >
                  <Image
                    src={item.image ?? "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm dark:border-white/30 dark:bg-white/10 dark:text-white/80">
                  <Trophy className="h-3.5 w-3.5 text-primary" />
                  成功实践
                </div>
                <CardHeader className="relative z-10 gap-5">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                      <IndustryIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{item.companyName}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 dark:text-slate-300">规模：{item.scale}</CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit rounded-full border border-primary/20 bg-primary/10 text-gray-900 dark:border-white/20 dark:bg-white/10 dark:text-white/80"
                  >
                    {item.industry}
                  </Badge>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-col gap-5 text-sm text-gray-800 dark:text-slate-200">
                  <div className="rounded-2xl bg-slate-50/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:bg-white/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">业务挑战</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-slate-200">{item.challenge}</p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-lg shadow-primary/5 dark:border-primary/30 dark:bg-white/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">解决方案</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-slate-200">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-5 text-sm text-gray-900 dark:bg-gradient-to-br dark:from-primary/30 dark:via-primary/10 dark:to-transparent dark:text-slate-200">
                    <p className="font-semibold text-primary">交付成效</p>
                    <p className="mt-2 text-gray-900 dark:text-slate-200">{item.result}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-slate-400">
                    <span className="font-medium text-gray-800 dark:text-white">涉及产品：</span>
                    {item.products.join("、")}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
