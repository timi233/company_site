import Link from "next/link"

import casesData from "@/src/data/cases.json"
import productsData from "@/src/data/products.json"
import solutionsData from "@/src/data/solutions.json"
import type { Case, Product, Solution } from "@/src/types"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Award, Shield, Target } from "lucide-react"

const solutions = (solutionsData as Solution[]).slice(0, 2)
const products = (productsData as Product[]).slice(0, 3)
const cases = (casesData as Case[]).slice(0, 2)

export default function Page() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-slate-900" />
        <Header />
        <Hero />

        <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-900">
          <div className="pointer-events-none absolute inset-x-6 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="pointer-events-none absolute -right-20 top-16 h-52 w-52 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
          <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-cyan-100/30 blur-2xl dark:bg-cyan-500/20" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <SectionIntro
              icon={Target}
              eyebrow="行业数字化场景"
              title="聚焦业务连续性的整体解决方案"
              description="联合IP-Guard、爱数、深信服等生态伙伴，覆盖终端安全、数据保护与零信任访问的关键场景。"
            />
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              查看全部方案
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {solutions.map((solution) => (
              <Card
                key={solution.id}
                className="border border-slate-200 bg-white/90 shadow-xl shadow-primary/5 dark:border-white/10 dark:bg-slate-800/90"
              >
                <CardHeader className="gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{solution.title}</CardTitle>
                    <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      {solution.industry}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-gray-600 dark:text-slate-300">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-300">
                    {solution.painPoints.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute inset-x-12 top-12 mx-auto h-24 max-w-4xl rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70 dark:via-slate-800" />
          <div className="pointer-events-none absolute right-10 top-6 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-500/20" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <SectionIntro
              icon={Shield}
              eyebrow="可信数据与安全矩阵"
              title="旗舰产品组合"
              description="从终端管控到数据备份，提供可持续演进的安全底座。"
            />
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              查看更多产品
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border border-slate-200 bg-white/90 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-800/90"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 w-fit rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    {product.vendor}
                  </Badge>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 dark:text-slate-300">
                  <p className="text-gray-600 dark:text-slate-300">{product.description}</p>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-slate-300">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-900">
          <div className="pointer-events-none absolute inset-x-8 top-10 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/30" />
          <div className="pointer-events-none absolute left-6 top-20 h-36 w-36 rounded-full bg-amber-100/40 blur-3xl dark:bg-amber-400/20" />
          <div className="pointer-events-none absolute right-8 bottom-6 h-40 w-40 rounded-full bg-violet-100/30 blur-3xl dark:bg-violet-400/20" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <SectionIntro
              icon={Award}
              eyebrow="标杆案例"
              title="客户信赖的实践成果"
              description="银行、制造、能源等行业客户与我们共建安全可靠的数字底座。"
            />
            <Link href="/cases" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
              更多案例
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {cases.map((item) => (
              <Card
                key={item.id}
                className="border border-slate-200 bg-white/95 shadow-2xl shadow-slate-200/80 dark:border-white/10 dark:bg-slate-800/95"
              >
                <CardHeader className="gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{item.companyName}</CardTitle>
                    <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      {item.industry}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-500 dark:text-slate-400">规模：{item.scale}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-700 dark:text-slate-300">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">挑战</p>
                    <p className="mt-1 text-gray-600 dark:text-slate-300">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">方案</p>
                    <p className="mt-1 text-gray-600 dark:text-slate-300">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 text-gray-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">成效</p>
                    <p className="mt-1 text-gray-700 dark:text-slate-300">{item.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function SectionIntro({ icon: Icon, eyebrow, title, description }: { icon: LucideIcon; eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-primary/10 p-3 text-primary dark:bg-primary/20">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <p className="mt-4 text-base text-gray-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
