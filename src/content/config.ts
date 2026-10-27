import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
  }),
})

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    // 履歷上寫的年資，有填就直接顯示，不用日期推算
    duration: z.string().optional(),
    stack: z.array(z.string()).default([]),
  }),
})

export const collections = {
  projects,
  experience,
}
