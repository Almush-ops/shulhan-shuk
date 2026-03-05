import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string().optional(),
    image: z.string().optional(),
    priceRange: z.string().optional(),
    minGuests: z.string().optional(),
    includes: z.array(z.string()).optional(),
    suitableFor: z.array(z.object({
      title: z.string(),
      href: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    order: z.number().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string().optional(),
    image: z.string().optional(),
    recommendedTables: z.array(z.object({
      title: z.string(),
      href: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    order: z.number().optional(),
  }),
});

const areas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    heroTitle: z.string(),
    image: z.string().optional(),
    nearbyAreas: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    author: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { services, events, areas, blog };
