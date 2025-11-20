"use client"

import { useEffect, useState } from "react"

import {
  Building2,
  Eye,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
  Users,
  Globe,
} from "lucide-react"

import companyData from "@/src/data/company.json"
import type { CompanyInfo } from "@/src/types"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const company = companyData as CompanyInfo

type OfficeLocation = {
  id: string
  city: string
  region: string
  address: string
  coordinates: [number, number]
  contact: string
  phone: string
  serviceScope: string
  mapImage: string
}

const stats = [
  { label: "服务地区", value: "山东全省", accent: "bg-primary" },
  { label: "产品体系", value: "24+", accent: "bg-cyan-400" },
  { label: "合作伙伴", value: "15家", accent: "bg-emerald-400" },
]

const coreValues = [
  { icon: Target, title: "使命 Mission", content: company.mission },
  { icon: Eye, title: "愿景 Vision", content: company.vision },
  { icon: Lightbulb, title: "战略 Strategy", content: company.strategy },
  {
    icon: Sparkles,
    title: "经营理念 Philosophy",
    content: company.values.join(" · "),
  },
]

const offices: OfficeLocation[] = [
  {
    id: "jinan",
    city: "济南总部",
    region: "总部 Headquarters",
    address: company.contact.jinanOffice,
    coordinates: [117.120102, 36.6512],
    contact: "董雪 · 区域总监",
    phone: "+86-17864152898",
    serviceScope: "济南都市圈 / 高新区项目交付",
    mapImage: "/map-jinan.png",
  },
  {
    id: "qingdao",
    city: "青岛办事处",
    region: "胶东地区",
    address: company.contact.qingdaoOffice,
    coordinates: [120.38264, 36.06708],
    contact: "纪壮 · 客户成功经理",
    phone: "+86-18265136920",
    serviceScope: "青岛、自贸区与港口集群",
    mapImage: "/map-qingdao.png",
  },
  {
    id: "weifang",
    city: "潍坊办事处",
    region: "鲁中地区",
    address: company.contact.weifangOffice,
    coordinates: [119.107078, 36.70925],
    contact: "朱昊 · 区域交付负责人",
    phone: "+86-15095255997",
    serviceScope: "潍坊、淄博与鲁中产业园",
    mapImage: "/map-weifang.png",
  },
  {
    id: "linyi",
    city: "临沂办事处",
    region: "鲁东南地区",
    address: company.contact.linyiOffice,
    coordinates: [118.356448, 35.104672],
    contact: "王晓强 · 行业顾问",
    phone: "+86-15192888211",
    serviceScope: "临沂商贸物流与鲁南城市群",
    mapImage: "/map-linyi-new.png",
  },
]

export default function AboutPage() {
  const [selectedOffice, setSelectedOffice] = useState<string>("jinan")
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const activeOffice = offices.find((office) => office.id === (selectedOffice || "jinan")) ?? offices[0]
  const mapUrl = activeOffice.mapImage

  useEffect(() => {
    setIsMapLoaded(false)
  }, [activeOffice.id])

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
                <Building2 className="h-5 w-5" />
              </span>
              关于我们 · 企业文化
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {company.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
              {company.description}
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Core Values</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">企业核心价值</p>
            <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
              以数字化转型为核心，通过专业服务与技术创新，助力企业实现安全可控的数字化发展。
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {coreValues.map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
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
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-sm leading-relaxed text-gray-700 dark:text-slate-200">
                    {item.content}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
        <section className="relative bg-white pb-24 pt-16 text-gray-900 dark:bg-slate-900 dark:text-white">
          <div className="pointer-events-none absolute right-0 top-10 h-56 w-56 rounded-full bg-cyan-100/40 blur-[120px] dark:bg-cyan-500/20" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Locations</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">服务网络覆盖</p>
              <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
                服务覆盖山东全省，济南、青岛、潍坊、临沂四地设有办事处，为您提供快速响应的本地化服务支持。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="order-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30">
                <div className="relative aspect-square w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
                  <img
                    key={activeOffice.id}
                    src={mapUrl}
                    alt={`${activeOffice.city}服务网络地图`}
                    className={`h-full w-full object-cover transition-opacity duration-500 ${isMapLoaded ? "opacity-100" : "opacity-0"}`}
                    loading="lazy"
                    onLoad={() => setIsMapLoaded(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/70 dark:border-white/10" />
                  <div className="pointer-events-none absolute inset-x-10 inset-y-8 rounded-[32px] border border-white/30 dark:border-white/5" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 px-6 py-5 text-sm text-gray-700 dark:border-white/10 dark:text-slate-200">
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{activeOffice.city}</p>
                    <p className="text-xs uppercase tracking-wide text-primary">{activeOffice.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-slate-400">服务范围</p>
                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{activeOffice.serviceScope}</p>
                  </div>
                </div>
              </div>
              <div className="order-2 rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20">
                <Accordion
                  type="single"
                  collapsible
                  value={selectedOffice}
                  onValueChange={setSelectedOffice}
                  className="divide-y divide-slate-200 dark:divide-white/10"
                >
                  {offices.map((office) => (
                    <AccordionItem key={office.id} value={office.id} className="border-0">
                      <AccordionTrigger className="px-6 text-left text-base font-semibold text-gray-900 dark:text-white">
                        <span className="flex items-center gap-3">
                          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                            <MapPin className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-base">{office.city}</span>
                            <span className="mt-0.5 block text-xs font-medium text-primary">{office.region}</span>
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-sm text-gray-700 dark:text-slate-200">
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">地址</p>
                            <p className="mt-1 leading-relaxed">{office.address}</p>
                          </div>
                          <div className="flex flex-wrap gap-6">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">联系人</p>
                              <p className="mt-1 font-medium text-gray-900 dark:text-white">{office.contact}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">电话</p>
                              <a href={`tel:${office.phone}`} className="mt-1 block font-medium text-primary">
                                {office.phone}
                              </a>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">服务范围</p>
                            <p className="mt-1 leading-relaxed">{office.serviceScope}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="mt-12">
              <Card className="mx-auto max-w-2xl border border-primary/20 bg-white/90 text-gray-900 shadow-xl shadow-slate-200/60 dark:border-white/20 dark:bg-white/5 dark:text-white dark:shadow-none">
                <CardContent className="px-8 py-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">电话</p>
                        <a
                          href={`tel:${company.contact.phone}`}
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          {company.contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">邮箱</p>
                        <a
                          href={`mailto:${company.contact.email}`}
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          {company.contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">官网</p>
                        <a
                          href={`https://${company.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          {company.contact.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
