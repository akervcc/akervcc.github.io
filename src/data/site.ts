// 全站共用的個人資訊。聯絡方式改這裡就會套用到每一頁。
export const site = {
  name: 'Aker',
  title: 'Senior Software Engineer',
  email: 'akervcc@gmail.com',
  github: 'https://github.com/akervcc',
  url: 'https://akervcc.github.io',
}

// href 不含語言前綴，顯示時用 localePath() 轉成各語言的網址
export const navLinks = [
  { href: '/', key: 'nav.about' },
  { href: '/experience', key: 'nav.experience' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/contact', key: 'nav.contact' },
] as const
