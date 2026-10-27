// 語言設定：中文放在根目錄（/experience），英文放在 /en 底下（/en/experience）。
export type Lang = 'zh' | 'en'
export const langs: Lang[] = ['zh', 'en']

export const htmlLang: Record<Lang, string> = { zh: 'zh-TW', en: 'en' }

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'zh'
}

// 把不含語言前綴的路徑（例如 /experience）轉成該語言的網址
export function localePath(lang: Lang, path: string): string {
  if (lang === 'zh') return path
  return path === '/' ? '/en/' : `/en${path}`
}

// 目前頁面在另一個語言的對應網址
export function switchPath(url: URL, target: Lang): string {
  const base = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return localePath(target, base)
}

export const ui = {
  zh: {
    'meta.description': 'Aker 的個人網站：資深 Java 後端工程師的經歷、技能與作品。',
    'nav.about': '關於',
    'nav.experience': '經歷',
    'nav.projects': '作品',
    'nav.contact': '聯絡',
    'lang.switch': 'EN',
    'lang.switchLabel': 'Switch to English',
    'theme.toggle': '切換深色模式',
    'menu.open': '開啟選單',
    'footer.tagline': '穩扎穩打，細水長流。',
    'home.hi': '嗨，我是',
    'home.ctaExperience': '看工作經歷',
    'home.ctaContact': '聯絡我',
    'home.about': '關於我',
    'home.stack': '技術棧',
    'home.hobbies': '工作之餘',
    'home.quoteBy': '— 我的工程信條',
    'home.moreExperience': '看完整經歷',
    'home.moreProjects': '查看作品',
    'exp.title': '工作經歷',
    'exp.empty': '尚無工作經歷資料。',
    'exp.skills': '技能',
    'exp.education': '學歷與訓練',
    'exp.present': '至今',
    'projects.title': '作品集',
    'projects.subtitle': '個人獨立開發的專案與作品。',
    'projects.all': '全部',
    'projects.empty': '尚無作品，敬請期待！',
    'projects.back': '返回作品列表',
    'contact.title': '聯絡我',
    'contact.intro': '工作機會、技術合作或專案諮詢，都歡迎來信。通常 24 小時內回覆。',
    'title.experience': '經歷',
    'title.projects': '作品集',
    'title.contact': '聯絡我',
  },
  en: {
    'meta.description': 'Personal site of Aker, a senior Java backend engineer: experience, skills and projects.',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'lang.switch': '中文',
    'lang.switchLabel': '切換成中文',
    'theme.toggle': 'Toggle dark mode',
    'menu.open': 'Open menu',
    'footer.tagline': 'Slow and steady, built to last.',
    'home.hi': "Hi, I'm",
    'home.ctaExperience': 'View experience',
    'home.ctaContact': 'Get in touch',
    'home.about': 'About me',
    'home.stack': 'Tech stack',
    'home.hobbies': 'Outside of work',
    'home.quoteBy': '— my engineering motto',
    'home.moreExperience': 'Full experience',
    'home.moreProjects': 'View projects',
    'exp.title': 'Experience',
    'exp.empty': 'No experience entries yet.',
    'exp.skills': 'Skills',
    'exp.education': 'Education & Training',
    'exp.present': 'Present',
    'projects.title': 'Projects',
    'projects.subtitle': 'Projects I designed and built on my own.',
    'projects.all': 'All',
    'projects.empty': 'No projects yet.',
    'projects.back': 'Back to projects',
    'contact.title': 'Contact',
    'contact.intro': 'For job opportunities, technical collaboration or project inquiries, feel free to email me. I usually reply within 24 hours.',
    'title.experience': 'Experience',
    'title.projects': 'Projects',
    'title.contact': 'Contact',
  },
} as const

export type UiKey = keyof (typeof ui)['zh']

export function useT(lang: Lang) {
  return (key: UiKey) => ui[lang][key]
}
