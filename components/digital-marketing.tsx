import { Button } from "@/components/ui/button"

export function DigitalMarketing() {
  const platforms = [
    {
      title: "私域运营平台",
      features: "私域流系统浓 | 品牌客户化营销 | 互联网社区",
    },
    {
      title: "渠道数字化平台",
      features: "渠道管理 | 营销活动协同用伴成体化",
    },
    {
      title: "全渠道电商平台",
      features: "自有品牌商城 | 全渠道计营销管理CMS",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">数字营销，为您打造全域营销价值和体验</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.title}</h3>
              <p className="text-sm text-gray-600">{platform.features}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" className="border-gray-900 text-gray-900 bg-transparent">
            了解更多
          </Button>
        </div>
      </div>
    </section>
  )
}
