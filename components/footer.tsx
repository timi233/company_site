import Image from "next/image"
import Link from "next/link"

import companyData from "@/src/data/company.json"
import type { CompanyInfo } from "@/src/types"

const company = companyData as CompanyInfo

export function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-600 dark:bg-slate-900 dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 公司简介 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/puryue-logo.png"
                alt="普悦天诚"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{company.shortName}</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-slate-400">{company.slogan}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">{company.description.substring(0, 80)}...</p>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  解决方案
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  产品
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-primary transition-colors">
                  案例
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-primary transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">联系方式</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-500 dark:text-slate-400">电话：</span>
                <a href={`tel:${company.contact.phone}`} className="hover:text-primary transition-colors">
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <span className="text-gray-500 dark:text-slate-400">邮箱：</span>
                <a href={`mailto:${company.contact.email}`} className="hover:text-primary transition-colors">
                  {company.contact.email}
                </a>
              </li>
              <li>
                <span className="text-gray-500 dark:text-slate-400">官网：</span>
                <a href={`https://${company.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {company.contact.website}
                </a>
              </li>
            </ul>
          </div>

          {/* 办公地址 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">办公地址</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-gray-900 dark:text-white">济南总部</span>
                <p className="text-gray-500 dark:text-slate-400">{company.contact.jinanOffice}</p>
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">胶东地区·青岛</span>
                <p className="text-gray-500 dark:text-slate-400">{company.contact.qingdaoOffice}</p>
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">鲁中地区·潍坊</span>
                <p className="text-gray-500 dark:text-slate-400">{company.contact.weifangOffice}</p>
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">鲁东南地区·临沂</span>
                <p className="text-gray-500 dark:text-slate-400">{company.contact.linyiOffice}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-sm text-gray-500 dark:border-slate-800 dark:text-slate-400">
          <p>© 2024 {company.name} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
