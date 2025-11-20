import { Button } from "@/components/ui/button"

export function ProductTabs() {
  const products = [
    { name: "产业数字化C2M", active: false },
    { name: "财务数字化GMC", active: false },
    { name: "泛ERP", active: false },
    { name: "ITO", active: false },
    { name: "数字平台系统", active: false },
    { name: "品牌案例", active: false },
  ]

  return (
    <section className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {products.map((product) => (
            <Button
              key={product.name}
              variant="ghost"
              className="text-white hover:text-white hover:bg-gray-700 text-sm md:text-base"
            >
              {product.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
