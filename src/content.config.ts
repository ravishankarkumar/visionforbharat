import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proposals = defineCollection({
  loader: glob({ base: './src/content/proposals', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    domains: z.array(z.string()).min(1),
    horizons: z.array(z.enum(['2050', '2075'])).min(1).default(['2075']),
    places: z.array(z.string()).min(1).default(['India']),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    related: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const editorials = defineCollection({
  loader: glob({ base: './src/content/editorials', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    format: z.enum(['note', 'essay']),
    domains: z.array(z.string()).min(1),
    horizons: z.array(z.enum(['2050', '2075'])).min(1),
    places: z.array(z.string()).min(1).default(['India']),
    relatedIdeas: z.array(z.string()).optional(),
    relatedEditorials: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proposals, editorials };
