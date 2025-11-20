# 普悦天诚官网 (PYTC Company Website)

普悦天诚信息科技有限公司官方网站 - 数字化综合解决方案平台

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC)](https://tailwindcss.com/)

## 🌐 在线访问

- **生产环境**: [https://purytech.pages.dev](https://purytech.pages.dev)
- **GitHub 仓库**: [https://github.com/timi233/company_site](https://github.com/timi233/company_site)

## 📋 项目简介

普悦天诚官网是一个基于 Next.js 的现代化企业官网，采用静态站点生成 (SSG) 技术，部署在 Cloudflare Pages 上。

### 核心特性

- ✅ **响应式设计** - 完美适配桌面端和移动端
- ✅ **深色/浅色主题** - 支持主题切换
- ✅ **静态站点生成** - 快速加载，SEO 友好
- ✅ **组件化开发** - 基于 Radix UI 和 shadcn/ui
- ✅ **TypeScript** - 类型安全，开发体验优秀
- ✅ **Cloudflare Pages 部署** - 全球 CDN 加速

## 🏢 公司信息

**普悦天诚信息科技有限公司** (PYTC)

- **定位**: 数字化综合解决方案平台
- **愿景**: 成为国内领先的新型智慧数据服务商
- **使命**: 助力客户数字化转型成功，保障数字化安全
- **战略**: 数字化轻咨询服务 + 数字化更安全

### 服务范围

服务覆盖山东全省，在以下城市设有办事处：
- 济南总部
- 青岛办事处
- 潍坊办事处
- 临沂办事处

## 🛠️ 技术栈

### 核心框架
- **Next.js 16.0.0** - React 框架，支持 SSG/SSR
- **React 19.2.0** - UI 库
- **TypeScript 5.x** - 类型安全的 JavaScript

### UI 组件
- **Tailwind CSS 4.1.9** - 原子化 CSS 框架
- **Radix UI** - 无障碍的 UI 组件库
- **shadcn/ui** - 可复用的组件集合
- **Lucide React** - 图标库

### 开发工具
- **Turbopack** - 高性能打包工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 处理器

## 📦 项目结构

```
hdcode/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于我们
│   ├── cases/             # 客户案例
│   ├── contact/           # 联系我们
│   ├── join/              # 加入我们
│   ├── partners/          # 合作伙伴
│   ├── products/          # 产品中心
│   ├── services/          # 服务内容
│   ├── solutions/         # 解决方案
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── header.tsx        # 页头组件
│   ├── footer.tsx        # 页脚组件
│   └── hero.tsx          # 首页 Hero 组件
├── src/
│   ├── data/             # 静态数据（JSON）
│   │   ├── company.json  # 公司信息
│   │   ├── products.json # 产品数据
│   │   ├── solutions.json # 解决方案数据
│   │   └── cases.json    # 案例数据
│   └── types/            # TypeScript 类型定义
├── public/               # 静态资源
│   ├── *.png            # 图片资源
│   └── *.svg            # SVG 图标
├── docs/                 # 项目文档
├── out/                  # 构建输出目录
└── package.json          # 项目依赖

```

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 pnpm

### 安装依赖

```bash
npm install
# 或
npm install --legacy-peer-deps  # 如果遇到依赖冲突
```

### 开发模式

```bash
npm run dev
```

访问 [http://10.242.94.9:3000](http://10.242.94.9:3000) 查看开发环境

### 构建生产版本

```bash
npm run build
```

构建输出位于 `out/` 目录

### 预览生产构建

```bash
npm run start
```

## 📤 部署

### Cloudflare Pages 部署

项目使用 Cloudflare Pages 进行部署。

#### 前置要求

- Cloudflare 账户
- Wrangler CLI（已安装在项目中）

#### 部署步骤

1. **登录 Cloudflare**
```bash
npx wrangler login
```

2. **构建项目**
```bash
npm run build
```

3. **部署到 Cloudflare Pages**
```bash
npx wrangler pages deploy out --project-name=purytech
```

#### 使用环境变量（可选）

如果需要使用 API Token：
```bash
export CLOUDFLARE_API_TOKEN=你的token
npx wrangler pages deploy out --project-name=purytech
```

## 📝 内容更新

网站内容通过修改以下文件进行更新：

### 公司信息
编辑 `src/data/company.json`

### 产品/服务/案例
编辑相应的 JSON 文件：
- `src/data/products.json` - 产品数据
- `src/data/solutions.json` - 解决方案
- `src/data/cases.json` - 客户案例

### 页面组件
直接编辑 `app/` 目录下的页面组件

更新后需要：
1. 提交到 Git
2. 重新构建
3. 重新部署

## 📚 文档

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Radix UI 文档](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

## 📄 更新日志

详见 [更新记录](./docs/website-content-updates-2025-11-20.md)

### 最近更新 (2025-11-20)

- ✅ 更新办事处联系方式
- ✅ 调整统计数据展示
- ✅ 优化文案表述
- ✅ 更新公司愿景
- ✅ 统一核心价值展示格式

## 🤝 贡献

本项目由普悦天诚信息科技有限公司内部维护。

## 📞 联系我们

- **官网**: www.purytech.cn
- **邮箱**: info@purytech.cn
- **电话**: +86-18660780581
- **地址**: 山东省济南市高新区舜华路街道凤凰北路涵园新居3号楼底商1-101

## 📜 许可证

Copyright © 2025 普悦天诚信息科技有限公司. All rights reserved.

---

🤖 Built with [Claude Code](https://claude.com/claude-code)
