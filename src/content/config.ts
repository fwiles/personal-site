import { defineCollection, z } from 'astro:content';

const policies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    heroVideo: z.string().url().optional(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      avatar: z.string().optional(),
      socials: z.array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      ),
    }),
  }),
});

export const collections = { policies, articles };
