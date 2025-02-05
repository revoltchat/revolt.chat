import { z, defineCollection } from "astro:content"

const legalCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        showDescriptionOnPage: z.boolean(),
    }),
})

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        coverImage: z.string().optional(),
        date: z.string(),
        giscus: z.boolean().default(false),
        hidden: z.boolean().default(false),
    }),
})

const changelogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        product: z.union([
            z.literal("web"),
            z.literal("android"),
            z.literal("ios"),
            z.literal("api"),
            z.literal("all"),
        ]),
        date: z.string(),
        relevance: z.object({
            minVersionCode: z.number().optional(),
            maxVersionCode: z.number().optional(),
        }),
    }),
})

export const collections = {
    legal: legalCollection,
    blog: blogCollection,
    changelog: changelogCollection,
}
