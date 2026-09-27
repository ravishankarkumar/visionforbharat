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
    topics: z.array(z.string()).min(1),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    related: z.array(z.string()).optional(),
    changeNote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proposals };
