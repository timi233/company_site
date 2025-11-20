import Image from "next/image"
import Link from "next/link"

import { Award, ExternalLink, Handshake } from "lucide-react"

import partnersData from "@/src/data/partners.json"
import type { Partner } from "@/src/types"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const partners = partnersData as Partner[]

const categoryCount = new Set(partners.map((p) => p.category)).size

const stats = [
  { label: "生态伙伴", value: `${partners.length}家`, accent: "bg-primary" },
  { label: "合作类型", value: `${categoryCount}种`, accent: "bg-cyan-400" },
  { label: "资质认证", value: "100%", accent: "bg-emerald-400" },
]

export default function PartnersPage() {
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
                <Handshake className="h-5 w-5" />
              </span>
              合作伙伴 · 共赢生态
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              一线厂商生态体系
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
              与爱数、IP-Guard、深信服、绿盟科技等厂商建立深度合作，提供从产品到服务的完整保障。
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Partners</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">认证资质与战略协同</p>
            <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
              携手行业领军企业，通过产品代理、技术合作与联合方案交付，为客户提供可信赖的安全保障体系。
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                className="group relative overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20" />
                  <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/20 blur-[90px]" />
                </div>
                <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm dark:border-white/30 dark:bg-white/10 dark:text-white/80">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  {partner.category}
                </div>
                <CardHeader className="relative z-10 pb-4 pt-8">
                  <div className="mx-auto flex h-24 w-48 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/10">
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="192px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-white">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-col gap-4">
                  {partner.certificate && (
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/20 dark:bg-white/5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">
                        授权资质
                      </p>
                      <div className="relative h-48 w-full">
                        <Image
                          src={partner.certificate}
                          alt={`${partner.name} 授权资质`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="rounded-lg object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <Link
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-primary/20 dark:border-white/20 dark:bg-white/10 dark:text-white"
                  >
                    访问官网
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
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
