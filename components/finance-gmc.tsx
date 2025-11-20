import { Button } from "@/components/ui/button"

export function FinanceGMC() {
  const features = [
    {
      title: "汇联整合面向管理平台",
      subtitle: "汇联数据 | 智能财务 | 统一支付 | 标准管理",
    },
    {
      title: "一体智能合同云",
      subtitle: "打造业财一体的合同管理体系统",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">财务数字化 GMC</h2>
            <p className="text-xl text-gray-600 mb-8">数智化时代无限升级的精细管控</p>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.subtitle}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="border-gray-900 text-gray-900 bg-transparent">
              了解更多
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
