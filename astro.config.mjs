import { defineConfig } from "astro/config"
import solidJs from "@astrojs/solid-js"
import node from "@astrojs/node"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
	site: "https://revolt.chat",
    output: "server",
    integrations: [solidJs(), mdx()],
    adapter: node({
        mode: "middleware",
    }),
    redirects: {
        "/terms": {
            status: 307,
            destination: "/legal/terms",
        },
        "/privacy": {
            status: 307,
            destination: "/legal/privacy",
        },
        "/aup": {
            status: 307,
            destination: "/legal/community-guidelines",
        },
        ".well-known/change-password": {
            status: 307,
            destination: "/login/reset",
        },
        "/posts": {
            status: 307,
            destination: "/updates",
        },
        "/posts/[slug]": {
            status: 307,
            destination: "/updates/[slug]",
        },
        "/updates/500K-users": {
            // DO! NOT! EVER! USE! UPPERCASE! CHARACTERS! IN! SLUGS!
            status: 307,
            destination: "/updates/500k-users",
        },
        "/updates/100K-users": {
            // I! MEAN! IT!
            // Okay, this one was on me, but you're the one who repeated my mistake in the 500K post Jen. - Vale
            status: 307,
            destination: "/updates/100k-users",
        },
    },
})
