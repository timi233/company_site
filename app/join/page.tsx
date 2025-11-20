import { ArrowRight, Award, CheckCircle, Rocket, UserPlus, Users } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PartnerJoinForm } from "@/components/partner-join-form"

const stats = [
  { label: "现有伙伴", value: "15家", accent: "bg-primary" },
  { label: "覆盖区域", value: "4城市", accent: "bg-cyan-400" },
  { label: "联合项目", value: "50+", accent: "bg-emerald-400" },
]

const advantages = [
  {
    icon: Award,
    title: "品牌授权",
    content: "共享一线品牌授权、渠道折扣与售前资源",
  },
  {
    icon: Users,
    title: "市场协同",
    content: "联合市场活动与行业峰会，快速拓展客户",
  },
  {
    icon: Rocket,
    title: "本地支撑",
    content: "提供售前顾问与交付工程师本地支撑",
  },
  {
    icon: CheckCircle,
    title: "激励政策",
    content: "完成培训认证后可获得专项激励政策",
  },
]

const steps = [
  { number: "01", title: "提交意向", desc: "提交合作意向，获得专属顾问对接" },
  { number: "02", title: "评估规划", desc: "资质评估与市场区域规划" },
  { number: "03", title: "签约赋能", desc: "签订合作协议，启动赋能计划" },
  { number: "04", title: "联合开拓", desc: "联合开拓重点行业项目" },
]

export default function JoinPage() {
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
                <UserPlus className="h-5 w-5" />
              </span>
              渠道加盟 · 共建生态
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              加入普悦天诚渠道生态
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
              面向山东及华北地区的集成商、服务商开放渠道合作，共建终端安全与数据中心生态圈。
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
        <section className="relative -mt-16 rounded-t-[48px] bg-white pb-16 pt-24 text-gray-900 dark:bg-slate-900 dark:text-white">
          <div className="pointer-events-none absolute inset-x-6 top-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
          <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/25 blur-[90px]" />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Advantages</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">合作优势</p>
            <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
              携手行业领先品牌，提供全方位渠道支持与资源协同。
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {advantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <Card
                  key={advantage.title}
                  className="group relative overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20" />
                    <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/20 blur-[90px]" />
                  </div>
                  <CardHeader className="relative z-10 space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-sm leading-relaxed text-gray-700 dark:text-slate-200">
                    {advantage.content}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
        <section className="relative bg-white pb-16 pt-16 text-gray-900 dark:bg-slate-900 dark:text-white">
          <div className="pointer-events-none absolute right-0 top-10 h-56 w-56 rounded-full bg-cyan-100/40 blur-[120px] dark:bg-cyan-500/20" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Process</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">合作流程</p>
              <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
                简单高效的合作流程，快速启动渠道合作。
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <Card className="group relative h-full overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none">
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/15" />
                      </div>
                      <CardHeader className="relative z-10 pb-3">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-lg font-bold text-white">
                          {step.number}
                        </div>
                        <CardTitle className="text-base text-gray-900 dark:text-white">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 text-sm leading-relaxed text-gray-700 dark:text-slate-200">
                        {step.desc}
                      </CardContent>
                    </Card>
                    {index < steps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                        <ArrowRight className="h-5 w-5 text-primary/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-white pb-24 pt-0 text-gray-900 dark:bg-slate-900 dark:text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <PartnerJoinForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
