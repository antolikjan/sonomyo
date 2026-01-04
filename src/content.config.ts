import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({
    base: './src/content',
    pattern: '{cs,en}/blog/**/*.md',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string().optional(),
	  pubDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
	  draft: z.boolean().optional(),
    }),
})

// New collection for static markdown pages
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // optional: subtitle, order, etc.
  }),
});

export const collections = {
	blog,
	pages,
}
