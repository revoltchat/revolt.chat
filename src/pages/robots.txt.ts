import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response(
        `User-agent: *
Allow: /
Disallow: /api
Disallow: /api/

User-agent: Spambot
Disallow: /`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    )
}
