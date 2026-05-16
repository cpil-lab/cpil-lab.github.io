import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z.string().url().or(z.literal('')).optional();
const optionalEmail = z.string().email().or(z.literal('')).optional();

const role = z.enum([
  'Principal Investigator',
  'PI',
  'Director',
  'Faculty / Senior Researchers',
  'PhD Students',
  "Undergraduate / Master's Students",
  'Postdocs',
  'Visiting Scholars',
  'Interns',
  'Alumni',
]);

const people = defineCollection({
  loader: glob({ base: './src/content/people', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    role,
    affiliation: z.string(),
    photo: z.string().default('/images/people/placeholder.png'),
    email: optionalEmail,
    website: optionalUrl,
    interests: z.array(z.string()).default([]),
    bio: z.string(),
    order: z.number().int().default(100),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    members: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().default('/images/projects/placeholder.png'),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    status: z.enum(['active', 'completed']).default('active'),
    featured: z.boolean().default(false),
    order: z.number().int().default(100),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum([
      'journal article',
      'conference paper',
      'workshop paper',
      'preprint',
      'book chapter',
      'thesis',
      'demo',
    ]),
    abstract: z.string(),
    badges: z.array(z.string()).default([]),
    links: z
      .object({
        paper: optionalUrl,
        code: optionalUrl,
        project: optionalUrl,
        bibtex: z.string().optional(),
      })
      .default({}),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    date: z.coerce.date(),
    displayDate: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    sourceType: z.string().optional(),
    sourceUrl: optionalUrl,
    image: z.string().optional(),
    link: optionalUrl,
  }),
});

export const collections = {
  people,
  projects,
  publications,
  news,
};
