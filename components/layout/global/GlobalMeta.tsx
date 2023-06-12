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
            <meta property="og:title" content="Revolt" key="title" />
            <meta property="og:url" content="https://revolt.chat" key="url" />
            <meta
                property="og:image"
                content="https://revolt.chat/opengraph.png"
                key="thumbnail"
            />
            <meta
                property="og:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
                key="description"
            />
            <meta property="twitter:title" content="Revolt" key="tw-title" />
            <meta property="twitter:site" content="@revoltchat" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:image"
                content="https://revolt.chat/opengraph.png"
                key="tw-thumbnail"
            />
            <meta
                property="twitter:image:alt"
                content="Revolt. Find your community, connect with the world. Illustration of the Revolt app."
                key="tw-thumbnail-alt"
            />
            <meta
                property="twitter:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
                key="tw-description"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1280" />
            <meta property="og:image:height" content="720" />
            <meta name="theme-color" content="#ff4654" />
        </Head>
    );
};

export default GlobalMeta;
