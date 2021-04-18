import Head from 'next/head';
import styles from './styles/Home.module.scss';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0"></meta>

                <meta property="og:title" content="REVOLT" />
                <meta property="og:image" content="/embed.png" />
                <meta property="og:url" content="https://revolt.chat" />
                <meta property="og:description" content="Don't bother with chat apps that don't respect your privacy. REVOLT is a brand new chat platform designed around you." />

                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:image" content="/embed.png"></meta>

                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />
            </Head>
            <main>
                
            </main>
        </div>
    );
}
