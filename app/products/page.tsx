import { Boxes } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"

export default function ProductsPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <Header />
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 pt-32 pb-24 text-gray-900 dark:text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary/10 dark:bg-primary/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/20 dark:bg-emerald-400/20 blur-[160px]" />
            <div className="absolute inset-x-0 top-16 mx-auto h-1 w-3/4 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent opacity-75 dark:via-white/20" />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gray-900 dark:border-white/20 dark:bg-white/10 dark:text-white/80 backdrop-blur">
              <Boxes className="h-4 w-4" />
              <span>产品中心</span>
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-5xl">
              一线品牌安全产品，打造可信数据与防护底座
            </h1>
            <p className="mt-6 text-base text-gray-700 dark:text-white/80 sm:text-lg">
              覆盖终端安全、数据保护、网络安全、应用安全、工控安全、身份认证、云计算、安全运营与物理安防的24款旗舰级产品，满足不同行业的业务连续性与合规要求。
            </p>
            <div className="mt-10 grid gap-6 text-left text-gray-700 dark:text-white/80 sm:grid-cols-3">
              {[
                { title: "24+", desc: "旗舰安全产品" },
                { title: "8 大", desc: "核心防护领域" },
                { title: "360°", desc: "立体安全部署" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-gray-900 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white dark:shadow-none"
                >
                  <p className="text-3xl font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="mt-2 text-sm uppercase tracking-wide text-gray-700 dark:text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProductSection />
      </main>
      <Footer />
    </>
  )
}
