import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const urlLike = z
  .string()
  .trim()
  .refine((value) => {
    if (!value) return true;
    const normalized = /^[a-z][a-z\d+\-.]*:\/\//i.test(value) ? value : `https://${value}`;

    try {
      new URL(normalized);
      return true;
    } catch {
      return false;
    }
  }, 'Invalid url');

const optionalUrl = urlLike.or(z.literal('')).optional();
const optionalEmail = z.string().email().or(z.literal('')).optional();
const pathWithFallback = (fallback: string) =>
  z
    .string()
    .trim()
    .transform((value) => value || fallback)
    .default(fallback);

const projectPublication = z.object({
  title: z.string(),
  authors: z.string().optional().default(''),
  venue: z.string().optional().default(''),
  year: z.number().int().optional(),
  url: optionalUrl,
  summary: z.string().optional().default(''),
});

const impactHolder = z.object({
  name: z.string(),
  role: z.string().optional().default(''),
  url: optionalUrl,
  summary: z.string().optional().default(''),
});

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
    photo: pathWithFallback('/images/people/placeholder.png'),
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
    leaders: z.array(z.string()).default([]),
    members: z.array(z.string()).default([]),
    collaborators: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: pathWithFallback('/images/projects/placeholder.png'),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: urlLike,
        }),
      )
      .default([]),
    publications: z.array(projectPublication).default([]),
    impactHolders: z.array(impactHolder).default([]),
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
