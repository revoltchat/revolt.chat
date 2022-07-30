import Head from "next/head";

const GlobalMeta = () => {
    return (
        <Head>
            <title>Revolt - Find Your Community</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.9, user-scalable=0"
            />
            <meta property="og:title" content="Revolt" />
            <meta property="og:url" content="https://revolt.chat" />
            <meta
                property="og:image"
                content="https://revolt.chat/opengraph.png"
            />
            <meta
                property="og:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
            />
            <meta property="twitter:title" content="Revolt" />
            <meta property="twitter:site" content="@revoltchat" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:image"
                content="https://revolt.chat/opengraph.png"
            />
            <meta
                property="twitter:image:alt"
                content="Revolt. Find your community, connect with the world. Illustration of the Revolt app."
            />
            <meta
                property="twitter:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1280" />
            <meta property="og:image:height" content="720" />
        </Head>
    );
};

export default GlobalMeta;
