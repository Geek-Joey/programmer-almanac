# 程序员老黄历 📜

每日生成程序员专属运势 —— 今日宜重构、忌用 `eval`，幸运语言 Rust，代码吉凶一键抽签。

## 功能

- **每日宜忌** — 基于日期确定性生成，同一天所有人看到相同内容
- **今日幸运元素** — 幸运编程语言、颜色、方向、数字
- **每日一言** — 程序员名言/段子
- **代码吉凶** — 64 签仿周易签文，每日一签

## 技术栈

Vue 3 + Vite，纯前端静态站点，零后端依赖。

内容库手工维护在 `src/data/` 下，想加直接改。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 构建

```bash
npm run build
```

产物在 `dist/` 目录，可直接部署到任何静态托管服务。

## 部署到 GitHub Pages

```bash
npm run build
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m deploy
git push https://github.com/<你的用户名>/programmer-almanac.git gh-pages --force
```

然后在 GitHub 仓库 Settings > Pages 中设置 Source 为 `gh-pages` 分支。

## 内容维护

所有内容在 `src/data/` 目录下：

| 文件 | 内容 |
|---|---|
| `advice.js` | 宜忌条目（各 20+ 条，支持权重） |
| `lucky.js` | 幸运语言/颜色/方向 |
| `quotes.js` | 每日一言库 |
| `fortunes.js` | 64 签签文 |

每条约 `0.5KB`，增加条目不影响性能。

## License

MIT
