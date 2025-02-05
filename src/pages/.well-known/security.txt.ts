import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response(
        `Contact: mailto:security@revolt.chat
Contact: https://github.com/revoltchat/backend/security/advisories/new
Contact: https://github.com/revoltchat/frontend/security/advisories/new
Contact: https://github.com/revoltchat/android/security/advisories/new
Contact: https://github.com/revoltchat/ios/security/advisories/new
Policy: https://github.com/revoltchat/.github/blob/master/.github/SECURITY.md
Expires: 2026-01-01T00:00:00Z`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    )
}
