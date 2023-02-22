/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    redirects: async () => [
        {
            source: "/publicbeta",
            destination: "/",
            permanent: false,
        },
        {
            source: "/beta",
            destination: "/",
            permanent: false,
        },
        {
            // Temporary
            source: "/about",
            destination:
                "https://github.com/revoltchat/legal/blob/master/About.md#communication-is-critical",
            permanent: false,
        },
    ],
    async rewrites() {
        return [
            {
                source: "/js/p.js",
                destination:
                    "https://plausible.insrt.uk/js/script.outbound-links.js",
            },
            {
                source: "/api/hello",
                destination: "https://plausible.insrt.uk/api/event",
            },
        ];
    },
};

module.exports = nextConfig;
