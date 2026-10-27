# akervcc.github.io

Aker 的個人網站：關於、工作經歷、技能與作品。

- 技術：Astro 5 + Tailwind CSS 4
- 部署：推到 `master` 後由 GitHub Actions 建置並發佈到 GitHub Pages
- 內容：經歷在 `src/content/experience/`，作品在 `src/content/projects/`，技能與學歷在 `src/data/profile.ts`，聯絡方式在 `src/data/site.ts`

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```
