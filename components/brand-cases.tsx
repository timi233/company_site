export function BrandCases() {
  const cases = [
    {
      title: "品牌案例",
      subtitle: "BRAND CASES",
      items: [
        {
          name: "青岛啤酒",
          description: "提供管理咨询业界卓越实践应用集成",
        },
        {
          name: "光明乳业",
          description: "帮助国际巨头优化国内业务运营",
        },
      ],
    },
    {
      title: "品牌案例",
      subtitle: "BRAND CASES",
      items: [
        {
          name: "顺道速递",
          description: "积累过往一体化管理经验先行",
        },
        {
          name: "携程旅行",
          description: "降低目积一体化经营经营先行",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseGroup, groupIndex) => (
            <div key={groupIndex}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{caseGroup.title}</h2>
                <p className="text-sm text-gray-500">{caseGroup.subtitle}</p>
              </div>
              <div className="space-y-4">
                {caseGroup.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-600 text-white p-8 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
