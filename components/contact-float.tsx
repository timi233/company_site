"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="bg-white text-gray-900 shadow-lg hover:shadow-xl rounded-lg px-6 py-6 flex flex-col items-center gap-1"
      >
        <Phone className="h-5 w-5" />
        <span className="text-xs">联系我们</span>
        <span className="text-xs font-semibold">400-168-4263</span>
      </Button>
    </div>
  )
}
