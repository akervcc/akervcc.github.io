// 內容依語言放在 zh/、en/ 子資料夾，這裡負責依語言篩選與取出不含語言前綴的 slug。
import { getCollection, type CollectionEntry } from 'astro:content'
import type { Lang } from '../i18n'

export async function getExperiences(lang: Lang) {
  const entries = await getCollection('experience', (e) => e.slug.startsWith(`${lang}/`))
  return entries.sort((a, b) => (b.data.endDate || '9999-12').localeCompare(a.data.endDate || '9999-12'))
}

export async function getProjects(lang: Lang) {
  const entries = await getCollection('projects', (e) => e.slug.startsWith(`${lang}/`))
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function entrySlug(entry: CollectionEntry<'projects'>) {
  return entry.slug.split('/').slice(1).join('/')
}
