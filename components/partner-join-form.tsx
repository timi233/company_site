"use client"

import { ChangeEvent, FormEvent, useState } from "react"

import { CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const companySizeOptions = ["10人以下", "10-50人", "50-200人", "200人以上"]
const companyAgeOptions = ["1年以内", "1-3年", "3-5年", "5-10年", "10年以上"]
const cooperationTypeOptions = ["代理商", "分销商", "集成商", "服务商"]
const salesGoalOptions = ["100万以下", "100-500万", "500-1000万", "1000万以上"]

interface PartnerFormData {
  companyName: string
  contactName: string
  position: string
  phone: string
  email: string
  address: string
  companySize: string
  companyAge: string
  businessFocus: string
  cooperationType: string
  targetRegion: string
  salesGoal: string
  message: string
}

type FormErrors = Partial<Record<keyof PartnerFormData, string>>

const initialFormData: PartnerFormData = {
  companyName: "",
  contactName: "",
  position: "",
  phone: "",
  email: "",
  address: "",
  companySize: "",
  companyAge: "",
  businessFocus: "",
  cooperationType: "",
  targetRegion: "",
  salesGoal: "",
  message: "",
}

const RequiredMark = () => <span className="ml-1 text-red-500">*</span>

export function PartnerJoinForm() {
  const [formData, setFormData] = useState<PartnerFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field: keyof PartnerFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

  const handleSelectChange = (field: keyof PartnerFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const validate = () => {
    const nextErrors: FormErrors = {}
    const requiredFields: Array<keyof PartnerFormData> = [
      "companyName",
      "contactName",
      "position",
      "phone",
      "email",
      "address",
      "businessFocus",
      "targetRegion",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        nextErrors[field] = "该字段为必填项"
      }
    })

    if (formData.phone && !/^\d{11}$/.test(formData.phone)) {
      nextErrors.phone = "请输入11位手机号"
    }

    if (formData.email && !/^[\w-.]+@[\w-]+\.\w{2,}$/.test(formData.email)) {
      nextErrors.email = "请输入有效邮箱地址"
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccess(false)

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // TODO: Replace with real API call
    console.log("渠道合作申请", formData)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData(initialFormData)
    }, 1000)
  }

  return (
    <Card className="relative overflow-hidden border border-primary/20 bg-white/90 shadow-2xl shadow-slate-200/60">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>
      <CardHeader className="relative z-10">
        <div>
          <CardTitle className="text-2xl font-semibold text-gray-900">提交合作申请</CardTitle>
          <CardDescription className="mt-2 text-base text-gray-600">
            填写以下信息，我们的渠道顾问将在1个工作日内与您取得联系。
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <p className="text-base font-semibold text-gray-900">基本信息</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  公司名称<RequiredMark />
                </Label>
                <Input
                  id="companyName"
                  placeholder="请输入公司全称"
                  value={formData.companyName}
                  onChange={handleInputChange("companyName")}
                  className="mt-1"
                  aria-invalid={!!errors.companyName}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="contactName" className="text-sm font-medium text-gray-700">
                  联系人姓名<RequiredMark />
                </Label>
                <Input
                  id="contactName"
                  placeholder="请输入联系人姓名"
                  value={formData.contactName}
                  onChange={handleInputChange("contactName")}
                  className="mt-1"
                  aria-invalid={!!errors.contactName}
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                  职位<RequiredMark />
                </Label>
                <Input
                  id="position"
                  placeholder="请输入职位"
                  value={formData.position}
                  onChange={handleInputChange("position")}
                  className="mt-1"
                  aria-invalid={!!errors.position}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-500">{errors.position}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold text-gray-900">联系方式</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  手机号<RequiredMark />
                </Label>
                <Input
                  id="phone"
                  placeholder="请输入11位手机号"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  inputMode="numeric"
                  className="mt-1"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  邮箱<RequiredMark />
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="mt-1"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                  公司地址<RequiredMark />
                </Label>
                <Input
                  id="address"
                  placeholder="请输入公司所在城市及办公地址"
                  value={formData.address}
                  onChange={handleInputChange("address")}
                  className="mt-1"
                  aria-invalid={!!errors.address}
                />
                {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-gray-900">公司信息</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-gray-700">公司规模</Label>
                <Select
                  value={formData.companySize}
                  onValueChange={handleSelectChange("companySize")}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="请选择公司规模" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">成立年限</Label>
                <Select
                  value={formData.companyAge}
                  onValueChange={handleSelectChange("companyAge")}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="请选择成立年限" />
                  </SelectTrigger>
                  <SelectContent>
                    {companyAgeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="businessFocus" className="text-sm font-medium text-gray-700">
                主营业务<RequiredMark />
              </Label>
              <Input
                id="businessFocus"
                placeholder="例如：网络安全集成、数据中心建设等"
                value={formData.businessFocus}
                onChange={handleInputChange("businessFocus")}
                className="mt-1"
                aria-invalid={!!errors.businessFocus}
              />
              {errors.businessFocus && (
                <p className="mt-1 text-sm text-red-500">{errors.businessFocus}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-gray-900">合作意向</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-gray-700">合作类型</Label>
                <Select
                  value={formData.cooperationType}
                  onValueChange={handleSelectChange("cooperationType")}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="请选择合作类型" />
                  </SelectTrigger>
                  <SelectContent>
                    {cooperationTypeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">年度销售目标</Label>
                <Select
                  value={formData.salesGoal}
                  onValueChange={handleSelectChange("salesGoal")}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="请选择销售目标" />
                  </SelectTrigger>
                  <SelectContent>
                    {salesGoalOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="targetRegion" className="text-sm font-medium text-gray-700">
                目标区域<RequiredMark />
              </Label>
              <Input
                id="targetRegion"
                placeholder="请输入计划拓展的省市或行业"
                value={formData.targetRegion}
                onChange={handleInputChange("targetRegion")}
                className="mt-1"
                aria-invalid={!!errors.targetRegion}
              />
              {errors.targetRegion && (
                <p className="mt-1 text-sm text-red-500">{errors.targetRegion}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              合作留言（选填）
            </Label>
            <Textarea
              id="message"
              placeholder="补充当前客户资源、项目或赋能需求"
              rows={4}
              value={formData.message}
              onChange={handleInputChange("message")}
              className="mt-1"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-primary to-primary/80 px-8 py-6 text-base font-medium text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "提交中..." : "提交合作需求"}
            </Button>
            {isSuccess && (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                提交成功，我们会尽快与您联系。
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
