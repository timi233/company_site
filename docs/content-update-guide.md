# 内容更新指南

本项目的动态内容均来源于 `src/data` 目录下的 JSON 文件。更新网站文案或数据时，建议遵循以下步骤：

1. **选择对应文件**
   - 产品：`src/data/products.json`
   - 解决方案：`src/data/solutions.json`
   - 客户案例：`src/data/cases.json`
   - 合作伙伴：`src/data/partners.json`
   - 技术服务：`src/data/services.json`
   - 公司信息：`src/data/company.json`

2. **保持字段完整**
   - 每个对象的 `id` 字段需保持唯一，便于页面引用。
   - 避免删除定义在 `src/types/index.ts` 中的必填字段，必要时可新增可选字段。

3. **内容格式建议**
   - 文案尽量控制在 60 字以内，保持页面整洁。
   - `features`、`painPoints`、`scope` 等数组字段适合填写 3~5 条要点。

4. **新增条目**
   - 复制现有对象结构，修改 `id` 与文案即可。
   - 若需要新增图片或图标，将文件放入 `public` 目录并在 JSON 中写入相对路径（如 `/images/example.png`）。

5. **校验与预览**
   - 修改完成后运行 `npm run check` 验证类型和语法。
   - 使用 `npm run dev` 启动本地预览，确认展示效果无误。

如需批量导入数据，可先在其他工具中整理成 JSON，再替换对应文件。提交代码前请确保格式化正确、JSON 语法无误。
