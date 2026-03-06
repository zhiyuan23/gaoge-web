# 高歌体育官网（Vue + Vite）

一个现代化、炫酷风格的单页展示官网模板，适合企业品牌官网展示。

## 本地运行

```bash
pnpm install
pnpm dev
```

默认地址：`http://localhost:5173`

## 生产构建

```bash
pnpm build
pnpm preview
```

## GitHub Pages 自动部署

已内置工作流：`.github/workflows/deploy.yml`。

### 部署设置

1. 将仓库默认分支设为 `main`
2. 进入 GitHub 仓库 `Settings -> Pages`
3. 在 `Build and deployment` 中将 Source 设为 `GitHub Actions`
4. 推送代码到 `main` 后会自动构建并发布

发布成功后可在 Actions 的 `deploy` 任务中看到线上 URL。

## 目录结构

```txt
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── main.js
│   └── style.css
└── vite.config.js
```
