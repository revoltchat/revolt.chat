import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Legal.module.scss';
import { Markdown } from '../components/Markdown';

export default function Home({ content }: { content: string }) {
    return (
        <div>
            <Head>
                <title>Terms of Service - Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Navbar />
                <div className={styles.content}>
                    <Markdown content={content} />
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const { readFile } = require('fs/promises');
    const file = await readFile('./legal/Terms of Service.md');
    const content = file.toString();
    
    return { props: { content } }
}
