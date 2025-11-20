"use client"

import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Grid3x3, Laptop, Lock, Network, Shield } from "lucide-react"

import productsData from "@/src/data/products.json"
import type { Product } from "@/src/types"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = productsData as Product[]
const tabConfig: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "all", label: "全部产品", icon: Grid3x3 },
  { value: "终端安全", label: "终端安全", icon: Laptop },
  { value: "数据保护", label: "数据保护", icon: Shield },
  { value: "网络安全", label: "网络安全", icon: Network },
  { value: "应用安全", label: "应用安全", icon: Lock },
]

const categoryIcons: Record<string, LucideIcon> = {
  all: Grid3x3,
  终端安全: Laptop,
  数据保护: Shield,
  网络安全: Network,
  应用安全: Lock,
}

export function ProductSection() {
  const getProducts = (category: string) =>
    category === "all" ? products : products.filter((product) => product.category === category)

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/25" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-[140px] dark:bg-emerald-400/20" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent dark:from-slate-900" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">核心产品矩阵</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">可信数据与安全产品</h2>
          <p className="mt-4 text-base text-gray-700 dark:text-slate-200 sm:text-lg">
            覆盖终端安全、数据保护、网络安全与应用安全的完整产品能力
          </p>
        </div>
        <Tabs defaultValue="all" className="mt-12 flex flex-col gap-10">
          <TabsList className="mx-auto flex w-full flex-wrap justify-center gap-3 rounded-full border border-slate-200/80 bg-white/90 p-2 shadow-lg shadow-slate-200/60 backdrop-blur dark:border-white/20 dark:bg-slate-800/80 dark:shadow-none">
            {tabConfig.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="group inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 data-[state=active]:border-slate-200 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md dark:text-slate-400 dark:hover:text-slate-100 dark:data-[state=active]:border-white/20 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <tab.icon className="h-4 w-4 text-gray-500 transition-all duration-300 group-data-[state=active]:text-primary dark:text-slate-500 dark:group-data-[state=active]:text-primary" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabConfig.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getProducts(tab.value).map((product) => {
                  const Icon = categoryIcons[product.category] ?? Grid3x3

                  return (
                    <Card
                      key={product.id}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl dark:border-white/10 dark:bg-slate-800/90 dark:shadow-none"
                    >
                      <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-gradient-to-br from-white/40 via-white/10 to-white/0 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:from-primary/20 dark:via-primary/5 dark:to-transparent" />
                      <CardHeader className="relative z-[1] flex flex-col gap-5 border-b border-slate-100/80 bg-white/60 p-6 dark:border-slate-700/80 dark:bg-slate-800/60">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary dark:from-primary/20 dark:to-primary/10">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{product.name}</CardTitle>
                            <p className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                              <Icon className="h-4 w-4 text-primary" />
                              {product.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="secondary" className="rounded-full border border-primary/10 bg-primary/5 text-primary dark:border-primary/20 dark:bg-primary/10">
                            {product.vendor}
                          </Badge>
                        </div>
                        <CardDescription className="text-base text-gray-700 dark:text-slate-300">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-[1] flex flex-col gap-5 p-6">
                        <div className="flex flex-col gap-6 lg:flex-row">
                          <ul className="flex flex-1 flex-col gap-3 text-sm text-gray-700 dark:text-slate-300">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {product.image && (
                            <div className="relative h-36 w-full flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 p-2 shadow-inner shadow-white sm:w-40 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/20" />
                              <Image
                                src={product.image}
                                alt={`${product.name}产品截图`}
                                fill
                                className="relative z-[1] rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                                sizes="(min-width: 1024px) 160px, 100vw"
                              />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
