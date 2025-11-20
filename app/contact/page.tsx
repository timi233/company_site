import companyData from "@/src/data/company.json"
import type { CompanyInfo } from "@/src/types"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const company = companyData as CompanyInfo

export default function ContactPage() {
  const { contact } = company

  return (
    <>
    <main className="min-h-screen bg-slate-50">
      <Header />
      <section className="bg-gradient-to-b from-white to-slate-50 pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">联系我们</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900">与普悦天诚专家取得联系</h1>
          <p className="mt-4 text-base text-gray-600">我们提供本地化售前咨询、方案设计与交付服务，欢迎随时与我们沟通合作需求。</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">业务咨询</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <p className="text-sm text-gray-500">邮箱</p>
                <p className="text-lg font-semibold text-gray-900">{contact.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">电话</p>
                <p className="text-lg font-semibold text-gray-900">{contact.phone}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">办公地址</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <p className="text-sm text-gray-500">济南总部</p>
                <p>{contact.jinanOffice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">青岛分部</p>
                <p>{contact.qingdaoOffice}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
