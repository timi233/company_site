import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function NewsSection() {
  const newsItems = [
    {
      category: "公司动态",
      title: "「得·灵」体·开于国际市场！",
      description: "汉得AI服务出海",
      tag: "MORE",
    },
    {
      category: "产品讯息",
      title: "汉得B端AI应用产品/服务【得·灵】",
      description: "助力企业高效AI",
      tag: "MORE",
    },
    {
      category: "品牌案例",
      title: "汉得 x 中化土",
      description: "为智能农业关工程信息上线",
      tag: "MORE",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                <Button variant="outline" size="sm" className="text-xs border-gray-300 bg-transparent">
                  {item.tag}
                </Button>
              </div>
              <h4 className="text-base font-medium text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
