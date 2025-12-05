"use client"

import { useState } from "react"
import Image from "next/image"

import {
  Building2,
  Compass,
  Database,
  Eye,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Target,
} from "lucide-react"

import companyData from "@/src/data/company.json"
import partnersData from "@/src/data/partners.json"
import type { CompanyInfo, Partner } from "@/src/types"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const company = companyData as CompanyInfo
const partners = partnersData as Partner[]
const partnerLogos = partners.slice(0, 15)
const heroImage = "/digital-business-tech.png"

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
  {
    label: "服务地区",
    value: "山东全省",
    description: "济南总部辐射青岛、潍坊、临沂，2小时极速响应",
    accent: "bg-primary",
  },
  {
    label: "核心安全产品体系",
    value: "3大体系",
    description: "构建“安全底座、数据韧性、轻咨询”一体化矩阵",
    accent: "bg-cyan-400",
  },
  {
    label: "战略生态伙伴",
    value: "全球10+",
    description: "汇聚细分领域头部厂商，打造可持续生态",
    accent: "bg-emerald-400",
  },
]

const highlights = [
  {
    title: "以安全筑基",
    description: "零信任、终端管控与边界防护协同，构建可信数字底座。",
    icon: Shield,
  },
  {
    title: "以数据赋能",
    description: "数据灾备、治理与流转分析联动，驱动资产“理得清、调得动”。",
    icon: Database,
  },
  {
    title: "行业纵深",
    description: "深耕政府、教育、医疗与企业场景，提供可复制的最佳实践。",
    icon: Compass,
  },
]

const coreValues = [
  { icon: Eye, title: "公司愿景 Vision", content: company.vision },
  { icon: Target, title: "公司使命 Mission", content: company.mission },
  { icon: Lightbulb, title: "公司战略 Strategy", content: company.strategy },
  {
    icon: Sparkles,
    title: "经营理念 Philosophy",
    content: company.values.join(" · "),
  },
]

const capabilityMatrix = [
  {
    id: "01",
    title: "数字安全底座",
    english: "Security Foundation",
    description: "整合传统网安、工业安全与内网管理，构建无死角的防御体系。",
    keywords: ["零信任", "终端安全", "边界防护"],
    icon: Shield,
  },
  {
    id: "02",
    title: "数据韧性与治理",
    english: "Data Resilience & Governance",
    description: "从数据备份到分类分级，确保核心资产“丢不了、泄不掉、理得清”。",
    keywords: ["容灾备份", "数据防泄露", "数据资产梳理"],
    icon: Database,
  },
  {
    id: "03",
    title: "数字化轻咨询",
    english: "Consulting Service",
    description: "拒绝盲目堆砌产品。提供现状诊断、架构规划与演进路线设计，让每一分投入都产生价值。",
    keywords: ["现状诊断", "架构规划", "演进路线"],
    icon: Compass,
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

  const activeOffice = offices.find((office) => office.id === (selectedOffice || "jinan")) ?? offices[0]
  const mapUrl = activeOffice.mapImage

  return (
    <>
      <main className="relative min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-primary/10 dark:bg-primary/25 blur-[140px]" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/20 dark:bg-cyan-500/20 blur-[160px]" />
          <div className="absolute bottom-10 left-1/2 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-white/40" />
        </div>
        <Header />
        <section className="relative isolate overflow-hidden bg-white px-4 pb-24 pt-32 text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-primary/10 blur-[160px] dark:bg-primary/30" />
            <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-[200px] dark:bg-cyan-500/30" />
          </div>
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-medium text-gray-900 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                  <Building2 className="h-5 w-5" />
                </span>
                关于我们 · 企业文化
              </div>
              <h1 className="mt-10 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {company.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-primary dark:text-cyan-200 sm:text-lg">
                {company.slogan}
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-700 dark:text-slate-200 sm:text-lg">
                <p>
                  山东普悦天诚信息科技有限公司致力于成为国内领先的新型智慧数据服务商。公司成立于2022年，总部位于济南，服务网络覆盖山东全省的核心产业集群。
                </p>
                <p>
                  在数字经济浪潮下，我们前瞻性地提出了
                  <span className="font-semibold text-gray-900 dark:text-white">“以安全筑基，以数据赋能”</span>
                  的发展战略。不同于传统的设备供应商，普悦天诚从客户业务视角出发，提供
                  <span className="font-semibold text-gray-900 dark:text-white">“数字化轻咨询+全场景落地”</span>
                  的一站式服务，构建自主可控的数字化安全生态体系。
                </p>
                <p>
                  作为企业数字化转型的护航者，我们不仅通过零信任、终端管控等技术守住企业的安全底线，更致力于通过数据灾备、数据治理与流转分析，帮助客户实现从“防御风险”到“管理资产”的跨越。
                </p>
                <p>
                  目前，普悦天诚已在政府、教育、医疗及企业等多个行业积累了成熟的实战经验，正逐步实现从“网络安全守护者”向“智慧数据合伙人”的战略演进。
                </p>
              </div>
              <div className="mt-10 grid gap-8 text-left sm:grid-cols-2">
                <div className="border-l-4 border-primary/50 pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">成立年份</p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">2022 · 济南</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">扎根泉城，构建自研数字化安全能力中心。</p>
                </div>
                <div className="border-l-4 border-cyan-400/70 pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">服务网络</p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">山东全域</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">济南总部联动青岛、潍坊、临沂三大区域中心。</p>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:pl-8">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-slate-900/30">
                <Image
                  src={heroImage}
                  alt="普悦天诚数字化安全与智慧数据图景"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-4 px-8 py-6 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">Digital Foundation</p>
                    <p className="text-lg font-semibold">安全与数据双轮驱动</p>
                  </div>
                  <div className="rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                    PYTC · 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative -mt-12 bg-[#021126] pb-24 pt-32 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[180px]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">Core Values</p>
              <p className="mt-2 text-3xl font-semibold">咨询驱动 · 安全为本 · 数据为核</p>
              <p className="mt-3 text-base text-white/70">
                以现代化治理理念打造可信数字未来，在深色沉浸背景下突出战略聚焦与关键指标。
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/70">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">{item.content}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                  <p className="text-5xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative bg-[#F5F7FA] pb-20 pt-16 text-gray-900 dark:bg-slate-950 dark:text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-0 h-48 w-48 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15" />
            <div className="absolute right-0 bottom-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-[140px] dark:bg-cyan-500/20" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Capability Matrix</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">能力全景图</p>
              <p className="mt-3 text-base text-gray-600 dark:text-slate-200">
                以系统性思维串联安全底座、数据韧性与轻咨询服务，聚焦“我们能解决什么问题”，而非简单罗列合作厂商。
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3">
              {capabilityMatrix.map((item) => {
                const Icon = item.icon
                return (
                  <Card
                    key={item.id}
                    className="relative flex h-full flex-col overflow-hidden border border-slate-200/70 bg-white text-gray-900 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    <CardHeader className="relative space-y-4">
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-slate-400">
                        <span className="text-primary">{item.id}</span>
                        <span>{item.english}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-auto flex flex-1 flex-col justify-between">
                      <p className="text-sm leading-relaxed text-gray-700 dark:text-slate-200">{item.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-[#E6F7FF] px-3 py-1 text-xs font-medium text-[#0F3B69] dark:bg-white/10 dark:text-white"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
        <section className="relative isolate min-h-[80vh] overflow-hidden bg-slate-900 text-white">
          <Image
            key={activeOffice.id}
            src={mapUrl}
            alt={`${activeOffice.city}全域服务覆盖图`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-start lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">Locations</p>
              <p className="mt-4 text-3xl font-semibold">立足山东，深耕本地，2小时极速响应圈</p>
              <p className="mt-4 text-base text-white/80">
                以济南总部为核心，联动青岛、潍坊、临沂三大区域中心，构建起“1+3”全省服务矩阵。我们承诺核心地市 2 小时极速抵达，服务能力辐射山东全域 16 地市，为客户提供无差别的本地化技术支持。
              </p>
              <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">覆盖城市</p>
                  <p className="mt-2 text-2xl font-semibold text-white">16市</p>
                  <p className="mt-1 text-xs text-white/70">全省无盲区覆盖</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">现场响应</p>
                  <p className="mt-2 text-2xl font-semibold text-white">2h / 4h</p>
                  <p className="mt-1 text-xs text-white/70">核心圈 / 全省直达</p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-2xl rounded-[32px] border border-white/20 bg-white/90 text-gray-900 shadow-xl shadow-black/20 backdrop-blur lg:ml-auto">
              <div className="flex flex-col gap-1 border-b border-slate-200 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">当前区域</p>
                <p className="text-2xl font-semibold text-gray-900">{activeOffice.city}</p>
                <p className="text-sm text-gray-600">{activeOffice.region} · {activeOffice.serviceScope}</p>
              </div>
              <div className="px-2 pb-2 pt-4 sm:px-6">
                <Accordion
                  type="single"
                  collapsible
                  value={selectedOffice}
                  onValueChange={setSelectedOffice}
                  className="divide-y divide-slate-200"
                >
                  {offices.map((office) => (
                    <AccordionItem key={office.id} value={office.id} className="border-0">
                      <AccordionTrigger className="px-4 text-left text-base font-semibold text-gray-900">
                        <span className="flex items-center gap-3">
                          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <MapPin className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-base">{office.city}</span>
                            <span className="mt-0.5 block text-xs font-medium text-primary">{office.region}</span>
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-sm text-gray-700">
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">地址</p>
                            <p className="mt-1 leading-relaxed">{office.address}</p>
                          </div>
                          <div className="flex flex-wrap gap-6">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">联系人</p>
                              <p className="mt-1 font-medium text-gray-900">{office.contact}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">电话</p>
                              <a href={`tel:${office.phone}`} className="mt-1 block font-medium text-primary">
                                {office.phone}
                              </a>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">服务范围</p>
                            <p className="mt-1 leading-relaxed">{office.serviceScope}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-6 text-sm text-gray-700 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">电话</p>
                    <a href={`tel:${company.contact.phone}`} className="mt-1 text-sm font-medium text-primary hover:underline">
                      {company.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:justify-end">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">邮箱</p>
                    <a href={`mailto:${company.contact.email}`} className="mt-1 text-sm font-medium text-primary hover:underline">
                      {company.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 text-gray-900 dark:bg-slate-950 dark:text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Strategic Ecosystem</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">与全球10+顶尖安全厂商建立战略生态</p>
              <p className="mt-3 text-base text-gray-600 dark:text-slate-200">
                黑白滤镜的Logo矩阵展示合作伙伴的层级与专业度，鼠标悬停即显彩色，凸显开放融合的生态构建能力。
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {partnerLogos.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[110px] items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/20 dark:border-white/10 dark:bg-white/5"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="h-10 w-auto object-contain opacity-70 filter grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
