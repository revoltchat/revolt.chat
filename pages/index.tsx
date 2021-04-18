import { Download } from '@styled-icons/feather';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div>
            <Head>
                <title>REVOLT</title>
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

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet" /> 
            </Head>
            <main>
                <section className={styles.hero}>
                    <Navbar />
                    <div className={styles.overview}>
                        <div className={styles.tagline}>
                            <div>
                                <p>Don't bother with other chat apps when</p>
                                <h1>Communication is critical.</h1>
                                <h1>Privacy is essential.</h1>
                                <div className={styles.actions}>
                                    <a className="button red">
                                        <Download size={24} /> Download for Linux
                                    </a>
                                    <a className="button">
                                        Sign up for REVOLT
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.graphic}>
                            <img src="/client_vector.svg" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
