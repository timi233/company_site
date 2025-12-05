import { Lightbulb } from "lucide-react"

import productsData from "@/src/data/products.json"
import solutionsData from "@/src/data/solutions.json"
import type { Product, Solution } from "@/src/types"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = solutionsData as Solution[]
const products = productsData as Product[]

// 创建产品ID到显示名称的映射
const productDisplayNames: Record<string, string> = {
  "ipguard": "IP-Guard",
  "huorong-enterprise": "火绒安全",
  "anyshare": "爱数 AnyShare",
  "eaglecloud-sase": "亿格云 SASE",
  "anybackup": "爱数 AnyBackup",
  "nsfocus-waf": "绿盟 WAF",
  "nsfocus-wvss": "绿盟 WVSS",
  "qianxin-tianqing": "奇安信天擎",
  "qianxin-edr": "奇安信 EDR",
  "sangfor-atrust": "深信服 aTrust",
  "sangfor-iam": "深信服 IAM",
  "tianrongxin-ngfw": "天融信 NGFW",
  "winicssec-firewall": "威努特工控防火墙",
  "skyguard-dlp": "天空卫士 DLP",
  "sandstone-mos": "杉岩 MOS",
  "jit-cert": "吉大正元",
  "chaitin-safeline": "长亭 SafeLine",
  "hikvision-video": "海康威视",
  "sangfor-ngaf": "深信服 NGAF",
  "sangfor-adesk": "深信服 aDesk",
  "qianxin-ngsoc": "奇安信 NGSOC",
  "nsfocus-nti": "绿盟 NTI",
  "tianrongxin-bastion": "天融信堡垒机",
}

export default function SolutionsPage() {
  return (
    <>
    <main className="relative min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-32 h-72 w-72 rounded-full bg-primary/10 dark:bg-primary/25 blur-[140px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/20 dark:bg-cyan-500/20 blur-[160px]" />
        <div className="absolute bottom-20 left-1/2 h-px w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-white/40" />
      </div>
      <Header />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 pb-32 pt-32 text-gray-900 dark:text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-6 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/30 blur-[100px]" />
          <div className="absolute bottom-20 right-16 h-60 w-60 rounded-full bg-purple-200/15 dark:bg-purple-500/20 blur-[120px]" />
          <div className="absolute inset-x-10 top-32 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/20" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-medium text-gray-900 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
              <Lightbulb className="h-5 w-5 text-primary" />
            </span>
            解决方案 · 安全与合规一体化
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            行业数字化场景解决方案
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
            聚焦终端安全、数据保护和零信任接入，结合爱数、IP-Guard、深信服、绿盟、奇安信等厂商，
            打造兼具业务韧性与合规保障的专业化方案组合。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 dark:text-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              行业规则快速对齐
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              终端·数据·网络一体防护
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              服务交付全生命周期陪伴
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-950" />
      </section>
      <section className="relative -mt-16 rounded-t-[48px] bg-white pb-24 pt-24 text-gray-900 dark:bg-slate-900 dark:text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Solutions</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">因行业而生的安全组合</p>
          <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
            针对各行业监管与场景挑战，以模块化能力矩阵快速拼装，构建高可靠、可持续的数字化底座。
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          {solutions.map((solution) => {
            return (
              <Card
                key={solution.id}
                className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white/90 text-gray-900 shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none"
              >
                {/* 背景图片层 - 从左到右渐显效果 */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to right,
                          rgba(255, 255, 255, 0.98) 0%,
                          rgba(255, 255, 255, 0.95) 30%,
                          rgba(255, 255, 255, 0.85) 60%,
                          rgba(255, 255, 255, 0.7) 100%
                        ),
                        url('/industry-bg/${solution.industry.split("、")[0]}.jpg')
                      `,
                    }}
                  />
                  {/* 暗色模式背景 */}
                  <div
                    className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to right,
                          rgba(15, 23, 42, 0.95) 0%,
                          rgba(15, 23, 42, 0.90) 30%,
                          rgba(15, 23, 42, 0.80) 60%,
                          rgba(15, 23, 42, 0.65) 100%
                        ),
                        url('/industry-bg/${solution.industry.split("、")[0]}.jpg')
                      `,
                    }}
                  />
                </div>

                {/* Hover效果层 */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 dark:bg-primary/20 blur-[60px]" />
                </div>
                <CardHeader className="relative z-10 flex flex-col gap-6">
                  {/* 标题栏 - 居中拉伸 - 固定最小高度 */}
                  <div className="w-full rounded-3xl border border-slate-100 bg-white px-6 py-6 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                    <CardTitle className="min-h-[64px] text-2xl font-semibold text-gray-900 dark:text-white">{solution.title}</CardTitle>
                    <CardDescription className="mt-3 min-h-[48px] text-base text-gray-700 dark:text-slate-200">
                      {solution.description}
                    </CardDescription>
                  </div>
                  <p className="min-h-[40px] text-sm font-medium text-gray-700 dark:text-slate-300">目标客户：{solution.targetCustomers}</p>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-1 flex-col gap-6 text-sm text-gray-800 dark:text-slate-200">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">场景挑战</p>
                      <ul className="mt-3 space-y-3">
                        {solution.painPoints.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-transparent p-5 shadow-lg shadow-primary/10 dark:border-primary/20 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-800/40 dark:shadow-none">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-primary/90">方案组合</p>
                      <ul className="mt-3 space-y-3">
                        {solution.solutions.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-primary shadow dark:bg-slate-700/60 dark:shadow-none">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                {/* 合规要求 - 固定高度区域，独立于CardContent */}
                <div className="relative z-10 h-[120px] px-6">
                  {solution.compliance && (
                    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/60 p-5 text-sm text-gray-700 dark:border-emerald-500/20 dark:from-emerald-900/40 dark:via-slate-800/60 dark:to-emerald-900/30 dark:text-slate-200">
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">合规要求</p>
                      <p className="mt-1 leading-relaxed">{solution.compliance}</p>
                    </div>
                  )}
                </div>

                {/* 涉及产品 - 固定在底部 */}
                <CardFooter className="relative z-10 flex flex-wrap gap-2 rounded-2xl border border-dashed border-slate-200 bg-white/80 px-5 py-4 text-sm text-gray-700 dark:border-white/20 dark:bg-white/5 dark:text-slate-300">
                  <span className="font-medium text-gray-900 dark:text-white">涉及产品：</span>
                  {solution.products.map(id => productDisplayNames[id] || id).join("、")}
                </CardFooter>
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
