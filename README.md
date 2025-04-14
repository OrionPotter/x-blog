# x-blog 技术方案设计

以下是为 **x-blog** 博客网站设计的方案，完全仿照 X 的风格，使用 **Next.js 15**，支持 Markdown，仅管理员（你）有发文权限，其他人只能查看。设计贴近 X 的视觉风格和交互体验，同时确保高效和可维护。

---

## 1. 功能需求

### 核心功能
- **博客发布**：支持 Markdown 格式，仅管理员可发布。
- **博客查看**：访客可浏览文章列表和文章详情，无需登录。
- **样式仿 X**：界面设计、交互、配色、字体等尽量贴近 X 平台。
- **权限控制**：仅管理员可访问发布页面，访客无发布权限。

### 附加功能
- 文章列表分页或无限滚动（模仿 X 时间线）。
- 文章支持点赞、分享（模仿 X 互动）。
- 响应式设计，支持移动端和桌面端。
- SEO 优化，确保文章可被搜索引擎抓取。

---

## 2. 技术栈

- **前端**：Next.js 15（React 框架，服务端渲染 + 静态生成）
- **后端**：
  - Next.js API Routes（处理文章存储、认证等）
  - 数据库：Supabase 或 MongoDB（存储文章和用户数据）
- **Markdown 处理**：
  - `marked` 或 `markdown-it`（解析 Markdown）
  - `highlight.js`（代码高亮）
  - `react-markdown`（在 React 中渲染 Markdown）
- **样式**：
  - Tailwind CSS（快速实现 X 风格的响应式设计）
  - Font Awesome 或 X 风格图标
- **认证**：NextAuth.js（管理员登录认证）
- **部署**：Vercel（Next.js 官方推荐）
- **其他**：
  - ESLint + Prettier（代码规范）
  - TypeScript（类型安全）

---

## 3. 界面设计（仿 X 风格）

X 的风格以简洁、暗色调、圆角卡片为主，注重内容展示和交互流畅性。

### 配色
- 背景：深灰色（`#15202B`）或黑色（`#000000`）
- 文字：白色（`#FFFFFF`）或浅灰（`#D9D9D9`）
- 强调色：X 蓝色（`#1DA1F2`）
- 卡片：略浅灰色（`#192734`）

### 字体
- 字体：`Inter` 或 `Helvetica Neue`（现代无衬线）
- 标题：加粗，16-20px
- 正文：14-16px

### 布局
- **顶部导航栏**：
  - 左侧：Logo（“x-blog”）
  - 中间：搜索框（可选，搜索文章）
  - 右侧：管理员登录/退出按钮（访客无此区域）
- **主内容区**：
  - 左侧（桌面端）：侧边栏（“首页”“关于”等，模仿 X 导航）
  - 中间：文章列表（卡片式，标题、摘要、发布日期）
  - 右侧（桌面端）：趋势或推荐文章（可选）
- **文章详情页**：
  - 标题居中，发布日期和作者（你）在下方
  - Markdown 渲染正文，支持图片、代码块、链接
  - 底部：点赞、分享按钮（模仿 X 互动栏）
- **发布页面**（仅管理员）：
  - Markdown 编辑器（支持实时预览）
  - 标题、标签输入框
  - 发布/保存草稿按钮

### 交互
- 卡片悬停：轻微放大或阴影
- 无限滚动：加载文章（模仿 X 时间线）
- 响应式：移动端隐藏侧边栏，导航折叠为汉堡菜单

---

## 4. 数据库设计

使用 **Supabase**（PostgreSQL）或 **MongoDB**，结构如下：

- **Posts 表**：
  - `id`：文章 ID（唯一）
  - `title`：文章标题
  - `content`：Markdown 内容
  - `slug`：URL 友好的文章标识
  - `createdAt`：发布日期
  - `updatedAt`：更新日期
  - `tags`：文章标签（数组）
  - `likes`：点赞数（可选）
- **Users 表**（仅管理员）：
  - `id`：用户 ID
  - `email`：邮箱
  - `password`：加密密码
  - `role`：角色（admin）

---

## 5. 实现步骤

### 5.1 初始化项目
使用 `create-next-app` 初始化，安装依赖：
- NextAuth.js
- marked
- react-markdown
- highlight.js
- @supabase/supabase-js

### 5.2 项目结构

x-blog/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts      # 认证
│   │   ├── posts/
│   │   │   ├── route.ts                     # 获取/创建文章
│   │   │   ├── [slug]/route.ts              # 单篇文章
│   ├── layout.tsx                           # 全局布局
│   ├── page.tsx                             # 首页（文章列表）
│   ├── post/[slug]/page.tsx                 # 文章详情
│   ├── write/page.tsx                       # 发布页面
│   ├── globals.css                          # 全局样式
├── components/
│   ├── Navbar.tsx                           # 导航栏
│   ├── Sidebar.tsx                          # 侧边栏
│   ├── PostCard.tsx                         # 文章卡片
│   ├── MarkdownRenderer.tsx                 # Markdown 渲染
│   ├── MarkdownEditor.tsx                   # Markdown 编辑器
├── lib/
│   ├── supabase.ts                          # Supabase 客户端
│   ├── auth.ts                              # 认证工具
├── public/
│   ├── fonts/                               # 自定义字体
│   ├── icons/                               # X 风格图标
├── types/
│   ├── post.ts                              # 文章类型
├── .env.local                               # 环境变量


### 5.3 部署
1. 推送代码到 GitHub。
2. 在 Vercel 导入项目，配置环境变量。
3. 部署后访问域名。

---

## 6. 优化与扩展

- **SEO**：使用 Next.js `generateMetadata` 生成动态元数据。
- **性能**：启用图像优化（`next/image`）和静态生成。
- **扩展**：
  - 评论系统（访客评论，需审核）
  - 草稿功能
  - RSS 订阅
- **安全**：
  - 使用 bcrypt 加密密码
  - 限制 API 请求频率

---

## 7. 注意事项

- **X 风格版权**：避免直接复制 X 的图标或专有资源，可用开源图标库（如 Font Awesome）或自制类似风格图标。
- **Markdown 编辑器**：可集成 `react-quill` 或 `monaco-editor` 提升体验。
- **权限控制**：发布页面和 API 需严格验证管理员身份。
