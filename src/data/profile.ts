// 主理人的履歷資料（技能、學歷、簡介），內容依 Cake 履歷整理。

export const summary =
  '資深 Java 後端工程師，10+ 年開發經驗，長期投入高併發交易系統與金流平台開發，熟悉注單、結算、第三方支付整合與多幣別、多語系架構。具備 B2B/B2C 平台與東南亞跨境專案經驗，前端可獨立以 Vue.js 完成管理後台。近期建立以 Claude Code + MCP 為核心的 AI 輔助開發流程，一人完成從架構設計到部署上線的全端平台。'

export const yearsOfExperience = '10+'

// 撲克花色只是分組記號，不代表程度
export const skillGroups = [
  {
    suit: '♠',
    name: 'Backend',
    skills: ['Java 8–21', 'Spring Boot 2/3', 'MyBatis / MyBatis-Plus', 'Sa-Token', 'MySQL', 'Redis', 'Kafka', 'RESTful API', 'Webhook', 'Microservice'],
  },
  {
    suit: '♥',
    name: 'Frontend',
    skills: ['Vue 2/3', 'TypeScript', 'Element Plus', 'JavaScript (ES6+)', 'HTML5', 'jQuery'],
  },
  {
    suit: '♣',
    name: 'Tools',
    skills: ['Docker Compose', 'Git / Gitflow', 'Claude Code', 'MCP', 'n8n'],
  },
  {
    suit: '♦',
    name: 'Integration',
    skills: ['第三方支付 API', 'Google Maps API', 'Telegram API', 'WhatsApp API', 'Viber API'],
  },
] as const

export const education = [
  { period: '2014/05 – 2014/10', school: '資策會', program: 'Java 企業級軟體工程師養成班' },
  { period: '2008/09 – 2011/06', school: '逢甲大學', program: '風險管理與保險學系' },
]
