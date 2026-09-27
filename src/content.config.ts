import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proposals = defineCollection({
  loader: glob({ base: './src/content/proposals', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thesis: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    status: z.enum(['seed', 'draft', 'developed', 'revised']),
    entryType: z.enum(['foundation', 'proposal', 'case-study']),
    domains: z.array(z.string()).min(1),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    related: z.array(z.string()).optional(),
    seriesLabel: z.string().optional(),
    seriesUrl: z.string().optional(),
    series: z.object({
      name: z.string(),
      slug: z.string(),
      order: z.number().int().positive().optional(),
      parentId: z.string().optional(),
    }).optional(),
    changeNote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proposals };
