import servicesData from "@/src/data/services.json"
import type { Service } from "@/src/types"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import {
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react"

const services = servicesData as Service[]

const serviceIconMap: Record<string, LucideIcon> = {
  "service-assessment": ClipboardCheck,
  "service-design": Lightbulb,
  "service-implementation": Wrench,
  "service-operations": Settings,
  "service-security": ShieldCheck,
  "service-training": GraduationCap,
}

const serviceBgMap: Record<string, string> = {
  "service-assessment": "/services-bg/planning.jpg",
  "service-design": "/services-bg/design.jpg",
  "service-implementation": "/services-bg/implementation.jpg",
  "service-operations": "/services-bg/operations.jpg",
  "service-security": "/services-bg/security.jpg",
  "service-training": "/services-bg/training.jpg",
}

const servicesWithMeta = services.map((service, index) => ({
  ...service,
  order: index + 1,
  Icon: serviceIconMap[service.id] ?? Settings,
}))

export default function ServicesPage() {
  return (
    <>
    <main className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 px-4 pb-24 pt-32 text-gray-900 dark:text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 dark:bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-200/20 dark:bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold tracking-widest text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <Settings className="h-4 w-4 text-primary" />
            TECH SERVICES
          </div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            全生命周期技术服务能力
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-700 dark:text-slate-200">
            提供评估规划、方案设计、实施交付、运维保障与赋能培训，打造覆盖IT与安全建设全流程的专业团队与方法论。
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-700 dark:text-slate-300">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-primary shadow-inner shadow-white/40 dark:bg-white/5">
              <Wrench className="h-7 w-7 text-primary" />
            </div>
            <p className="max-w-lg text-left">
              通过标准化流程与可视化工具，确保从评估规划到持续运维的每个阶段可控、可度量、可优化。
            </p>
          </div>
        </div>
      </section>
      <section className="relative px-4 pb-24 pt-16 text-gray-900 dark:text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-slate-100 via-white to-white dark:from-slate-900/40 dark:via-slate-950 dark:to-slate-950" />
        <div className="relative mx-auto max-w-6xl">
          {/* 流程图标题 */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">服务流程</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">从评估到运维，全流程专业化服务</p>
          </div>

          <div className="mb-12 space-y-6">
            {/* 桌面端流程图 - 优化版 */}
            <div className="hidden items-center gap-2 md:flex">
              {servicesWithMeta.map((service, index) => {
                const Icon = service.Icon
                return (
                  <div key={service.id} className="flex w-full items-center">
                    {/* 流程节点 */}
                    <div className="group relative flex flex-col items-center text-center">
                      {/* 背景光晕 */}
                      <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* 数字徽章 + 图标 */}
                      <div className="relative">
                        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-white via-primary/5 to-primary/10 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/30 dark:from-slate-800 dark:via-primary/10 dark:to-primary/20 dark:shadow-primary/40">
                          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xs font-bold text-white shadow-md">
                            {service.order}
                          </span>
                        </div>
                      </div>

                      {/* 服务标题 */}
                      <span className="mt-4 w-28 text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary dark:text-slate-200 dark:group-hover:text-primary">
                        {service.title}
                      </span>
                    </div>

                    {/* 箭头连接线 */}
                    {index < servicesWithMeta.length - 1 && (
                      <div className="relative mx-2 flex h-0.5 flex-1 items-center">
                        <div className="h-full w-full bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60 dark:from-primary/80 dark:via-primary/50 dark:to-primary/80" />
                        <div className="absolute right-0 h-0 w-0 border-y-4 border-l-8 border-y-transparent border-l-primary/60 dark:border-l-primary/80" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-4 md:hidden">
              {servicesWithMeta.map((service) => (
                <div key={service.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-gray-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-sm font-semibold text-white">
                    {service.order}
                  </span>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesWithMeta.map((service) => {
              const Icon = service.Icon
              return (
                <Card
                  key={service.id}
                  className="group relative overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-900/40 dark:text-white dark:shadow-[0_25px_60px_rgba(15,23,42,0.7)]"
                >
                  {/* 背景图片层 - 右下角渐显 */}
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 0.95) 0%,
                            rgba(255, 255, 255, 0.90) 40%,
                            rgba(255, 255, 255, 0.70) 70%,
                            rgba(255, 255, 255, 0.50) 100%
                          ),
                          url('${serviceBgMap[service.id]}')
                        `,
                        backgroundPosition: 'bottom right',
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:block"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            135deg,
                            rgba(15, 23, 42, 0.90) 0%,
                            rgba(15, 23, 42, 0.85) 40%,
                            rgba(15, 23, 42, 0.70) 70%,
                            rgba(15, 23, 42, 0.50) 100%
                          ),
                          url('${serviceBgMap[service.id]}')
                        `,
                        backgroundPosition: 'bottom right',
                      }}
                    />
                  </div>

                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-70 dark:from-primary/20 dark:via-primary/5" />
                  <CardHeader className="relative space-y-5 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-widest text-primary/80">0{service.order}</span>
                      <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-primary shadow-sm dark:border-white/10 dark:bg-white/5">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm text-gray-700 dark:text-slate-300">{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3 text-sm text-gray-700 dark:text-slate-200">
                      {service.scope.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
