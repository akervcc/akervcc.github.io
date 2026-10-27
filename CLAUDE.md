# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Aker 的公開個人網站（關於、經歷、技能、學歷、作品、聯絡），中英雙語，部署在 https://akervcc.github.io/ 。內容來自 `akervcc/portfolio` 的個人區，但這裡是獨立維護的另一份程式，**沒有接案／工作室頁**，也**沒有撲克風格**（Aker 已要求移除）。

## 指令

```sh
npm install
npm run dev      # http://localhost:4321（Repository/.claude/launch.json 的 github-io 設定用 4322）
npm run build    # 輸出到 dist/，也會檢查 content collection 的 schema
npm run preview
```

沒有測試與 lint。改完以 `npm run build` 通過、再用瀏覽器看中英兩個版本為準。

## 部署

推到 `master` 就會由 `.github/workflows/deploy.yml`（`withastro/action` + `actions/deploy-pages`）建置並發佈；Pages 的 build_type 是 `workflow`，不是從分支直接發佈。**推送 = 上線**，所以 push 前先確認內容可以公開。`astro.config.mjs` 的 `site` 用在 canonical 與 hreflang 網址。

## 雙語架構

- 中文是預設語言，放在根路徑（`/experience/`）；英文放在 `/en/` 底下（`/en/experience/`）。
- `src/pages/**` 只是薄殼，例如 `<Experience lang="zh" />`；真正的版面在 `src/views/*.astro`，接收 `lang` prop。新增頁面要在 `src/pages/` 與 `src/pages/en/` 各放一個殼。
- `src/i18n.ts`：`ui` 字典（介面文字，中英兩邊 key 必須一致）、`useT(lang)`、`localePath(lang, path)`（把不含語言前綴的路徑轉成該語言網址）、`switchPath()`（Header 的語言切換）、`getLang(url)`（元件從網址判斷語言，所以 Header／Footer／TimelineItem 不用傳 lang）。
- `src/data/profile.ts`：`profile.zh` / `profile.en`，放簡介、首頁資訊卡、關於文案、技能分組、學歷等非 Markdown 的個人資料。
- `src/data/site.ts`：名字、Email、GitHub、網址，以及 `navLinks`（只存路徑與 ui key）。
- `src/lib/content.ts`：依語言篩選 collection、排序，`entrySlug()` 去掉語言前綴當網址 slug。

## 內容

- 經歷：`src/content/experience/{zh,en}/<slug>.md`；作品：`src/content/projects/{zh,en}/<slug>.md`。中英兩邊用同一個檔名，才能互相對應切換。改內容要兩個語言一起改。
- schema 在 `src/content/config.ts`。經歷的 `duration` 直接照履歷文字顯示（不用日期推算，履歷的算法不一致）；`stack` 是技術標籤。作品的 `stats` 是 `{ value, label }` 陣列，卡片最多顯示 4 個。
- 經歷依 `endDate` 由新到舊排序。
- 內容依 Aker 的 Cake 履歷整理。**電話、真實姓名、住址、年薪刻意不放上網站**；不要補履歷上沒有的數字或成果。
- 英文版的公司名稱：有正式英文名的才用英文（Cathay United Bank、Institute for Information Industry (III)），其餘六家維持中文是 Aker 的決定，不要自行翻譯或音譯。

## 樣式

Tailwind CSS 4（`@tailwindcss/vite`），沒有 tailwind.config；自訂色票 `brand-*`（深藍）用 `@theme` 定義在 `src/styles/global.css`，中性色用 `slate-*`。深色模式是 class 策略（`@custom-variant dark`），由 `BaseLayout` 的 inline script 與 Header 的切換按鈕控制。標題字型是 Noto Serif TC。Markdown 內文的排版靠 `global.css` 裡手寫的 `.prose` 規則（沒有裝 typography plugin）。
