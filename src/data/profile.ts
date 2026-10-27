// 個人履歷資料（簡介、技能、學歷、首頁文案），內容依 Cake 履歷整理，中英各一份。
import type { Lang } from '../i18n'

const skills = {
  backend: ['Java 8–21', 'Spring Boot 2/3', 'MyBatis / MyBatis-Plus', 'Sa-Token', 'MySQL', 'Redis', 'Kafka', 'RESTful API', 'Webhook', 'Microservice'],
  frontend: ['Vue 2/3', 'TypeScript', 'Element Plus', 'JavaScript (ES6+)', 'HTML5', 'jQuery'],
  tools: ['Docker Compose', 'Git / Gitflow', 'Claude Code', 'MCP', 'n8n'],
}

export const profile = {
  zh: {
    yearsOfExperience: '10+',
    summary:
      '資深 Java 後端工程師，10+ 年開發經驗，長期投入高併發交易系統與金流平台開發，熟悉注單、結算、第三方支付整合與多幣別、多語系架構。具備 B2B/B2C 平台與東南亞跨境專案經驗，前端可獨立以 Vue.js 完成管理後台。近期建立以 Claude Code + MCP 為核心的 AI 輔助開發流程，一人完成從架構設計到部署上線的全端平台。',
    facts: [
      { label: '開發經驗', value: '10+ 年' },
      { label: '主力技術', value: 'Java / Spring Boot' },
      { label: '前端', value: 'Vue 2/3 · TypeScript' },
      { label: '擅長領域', value: '交易系統 · 金流整合' },
    ],
    about: [
      '我偏好務實的解決方案：不過度設計，也不輕忽細節。先讀懂需求、控制風險，再在對的時機做對的技術決定。',
      '10+ 年來從銀行電商專案、政府系統一路做到高併發交易平台與東南亞跨境金流，這些系統容不得差錯，培養了我對穩定性與安全性的執著。近兩年把 Claude Code 與 MCP 帶進日常開發，一個人也能交付完整的全端平台。',
    ],
    domains: [
      { title: '交易系統', body: '注單、交易、訂單管理與結算，處理高併發場景下的效能瓶頸。' },
      { title: '金流整合', body: '第三方支付串接、幣別與法幣轉換、多幣別與多語系架構。' },
      { title: '平台開發', body: 'B2B／B2C 平台、管理後台、API 設計與即時通訊系統整合。' },
    ],
    quote: '「不求一夜暴富，但求細水長流。」',
    hobbies: '德州撲克、偶爾彈彈鋼琴、電玩休閒玩家。',
    skillGroups: [
      { name: '後端', skills: skills.backend },
      { name: '前端', skills: skills.frontend },
      { name: '工具', skills: skills.tools },
      { name: '系統整合', skills: ['第三方支付 API', 'Google Maps API', 'Telegram API', 'WhatsApp API', 'Viber API'] },
    ],
    education: [
      { period: '2014/05 – 2014/10', school: '資策會', program: 'Java 企業級軟體工程師養成班' },
      { period: '2008/09 – 2011/06', school: '逢甲大學', program: '風險管理與保險學系' },
    ],
  },
  en: {
    yearsOfExperience: '10+',
    summary:
      'Senior Java backend engineer with 10+ years of experience, focused on high-concurrency trading systems and payment platforms. Well versed in wagers and settlement, third-party payment integration, and multi-currency, multi-language architecture. Has delivered B2B/B2C platforms and cross-border projects for Southeast Asia, and can build admin dashboards independently with Vue.js. Recently set up an AI-assisted workflow built around Claude Code + MCP and shipped a full-stack platform single-handedly, from architecture to production.',
    facts: [
      { label: 'Experience', value: '10+ years' },
      { label: 'Core stack', value: 'Java / Spring Boot' },
      { label: 'Frontend', value: 'Vue 2/3 · TypeScript' },
      { label: 'Focus', value: 'Trading systems · Payments' },
    ],
    about: [
      'I prefer pragmatic solutions: no over-engineering, but no cutting corners on details either. Understand the requirements, manage the risks, then make the right technical call at the right time.',
      'Over 10+ years I have worked on everything from a bank’s e-commerce project and government systems to high-concurrency trading platforms and cross-border payments in Southeast Asia. These systems leave no room for mistakes, which is where my obsession with stability and security comes from. For the past two years I have brought Claude Code and MCP into my daily work, which lets me deliver a complete full-stack platform on my own.',
    ],
    domains: [
      { title: 'Trading systems', body: 'Wagers, transactions, order management and settlement, including performance bottlenecks under high concurrency.' },
      { title: 'Payment integration', body: 'Third-party payment gateways, crypto-to-fiat conversion, multi-currency and multi-language architecture.' },
      { title: 'Platform development', body: 'B2B/B2C platforms, admin dashboards, API design and messaging-platform integration.' },
    ],
    quote: '“Not overnight riches, but steady, lasting growth.”',
    hobbies: 'Texas Hold’em, playing the piano now and then, and casual gaming.',
    skillGroups: [
      { name: 'Backend', skills: skills.backend },
      { name: 'Frontend', skills: skills.frontend },
      { name: 'Tools', skills: skills.tools },
      { name: 'Integration', skills: ['Third-party payment APIs', 'Google Maps API', 'Telegram API', 'WhatsApp API', 'Viber API'] },
    ],
    education: [
      { period: '2014/05 – 2014/10', school: 'Institute for Information Industry (III)', program: 'Java Enterprise Software Engineer Program' },
      { period: '2008/09 – 2011/06', school: 'Feng Chia University', program: 'Department of Risk Management and Insurance' },
    ],
  },
} satisfies Record<Lang, unknown>
