import { Edit, ExternalLink } from '@styled-icons/feather';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { JoinLinks } from '../components/JoinLinks';
import { JoinPrompt } from '../components/JoinPrompt';
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
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet" /> 
            </Head>
            <main>
                <section className={styles.hero}>
                    <Navbar />
                    <div className={styles.overview}>
                        <div className={styles.left}>
                            <div className={styles.tagline}>
                                <p>Don't bother with other chat apps when</p>
                                <h1>Communication is critical.<br />Privacy is essential.</h1>
                                <JoinLinks />
                            </div>
                        </div>
                        <div className={styles.graphic}>
                            <img src="/client_vector.svg" />
                        </div>
                    </div>
                </section>
                <section className={styles.section} data-reverse="true">
                    <div className={styles.image}>
                        <img src="/temp_abc.jpg" />
                    </div>
                    <div className={styles.content}>
                        <div>
                            <h1>Simple,<br/>just how you like it.</h1>
                            <p>Revolt is built on the same technologies as other popular chat applications, so there won’t be any need to re-learn on how to use it. Also, you can customize it to your heart’s content.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.content}>
                        <div>
                            <h1>Open source<br />to the public</h1>
                            <p>We believe that there’s more to it than just code. By having the Revolt project open source means that we can create a transparent layer between us and the user.<br/><br/>Contribute, create your own bot or make your own version of the Revolt client.</p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="/temp_abc.jpg" />
                    </div>
                </section>
                <section className={styles.section} data-reverse="true">
                    <div className={styles.image}>
                        <img src="/temp_abc.jpg" />
                    </div>
                    <div className={styles.content}>
                        <div>
                            <h1>Available<br/>everywhere</h1>
                            <p>From desktop to mobile, the Revolt app is available wherever you are, so you can chat, call or get in a video call, even if you're not in front of your computer.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.content}>
                        <div>
                            <h1>Your data should be yours,<br/>not ours.</h1>
                            <p>Privacy has become a major concern over the past few years, and we wanted to take action by building a <u>privacy-safe, open source chat platform without any data aggregation.</u></p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="/temp_abc.jpg" />
                    </div>
                </section>
                <JoinPrompt />
                <Footer />
            </main>
        </div>
    );
}
