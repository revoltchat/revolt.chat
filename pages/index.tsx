import Head from 'next/head';
import { Footer } from '../components/Footer';
import { JoinLinks } from '../components/JoinLinks';
import { ArrowRight, HelpCircle } from '@styled-icons/feather';
import { JoinPrompt } from '../components/JoinPrompt';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.scss';
import { URLs } from '../urls';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />

                <meta property="og:title" content="Revolt" />
                <meta property="og:url" content="https://revolt.chat" />
                <meta property="og:image" content="https://revolt.chat/embed_new.png" />
                <meta property="og:description" content="Don't bother with chat apps that don't respect your privacy. Revolt is a brand new chat platform designed around you." />

                <meta property="twitter:title" content="Revolt" />
                <meta property="twitter:site" content="@revoltchat" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://revolt.chat/embed_new.png" />
                <meta property="twitter:image:alt" content='Image of REVOLT app alongside logo with subtext "Communication is critical. Privacy is essential."' />
                <meta property="twitter:description" content="Don't bother with chat apps that don't respect your privacy. Revolt is a brand new chat platform designed around you." />

                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />

                <script async defer data-domain='revolt.chat' src='https://plausible.insrt.uk/js/plausible.js' />

                {   // Disabled scroll snapping.
                    /* // Firefox only: Scroll snapping.
                    // Doesn't work properly with Chromium.
                    typeof window !== 'undefined' &&
                    typeof (window as any).InstallTrigger !== 'undefined' &&
                    <style dangerouslySetInnerHTML={{ __html: `html { scroll-snap-type: y mandatory; }` }} /> */ }
            </Head>
            <main>
                <a className={styles.feedback} href={URLs.Feedback} target="_blank">
                    <HelpCircle size={24} strokeWidth={2}/>Feedback
                </a>
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
                            <img src="/client_vector.svg" draggable={false} />
                        </div>
                    </div>
                </section>
                <section className={styles.section} data-reverse="true">
                    <div className={styles.image}>
                        <img src="/appearance.jpg" draggable={false} style={{ borderRadius: '8px' }} />
                    </div>
                    <div className={styles.content}>
                        <div>
                            <h1>Familiar and simple,<br/>just how you like it.</h1>
                            <p>Revolt is built on the same technologies as other popular chat applications, so there won’t be any need to re-learn on how to use it. Also, you can customize it to your heart’s content.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.content}>
                        <div>
                            <h1>Open source<br />to the public</h1>
                            <p>We believe that there’s more to it than just code. By having the Revolt project open source means that we can create a transparent layer between us and the user.<br/><br/>Contribute, create your own bot or make your own version of the Revolt client.</p>
                            <a className={styles.link} href="https://gitlab.insrt.uk/revolt" target="_blank"><ArrowRight size={24} strokeWidth={2}/>View project on GitLab</a>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="/opensource.svg" draggable={false} />
                    </div>
                </section>
                <section className={styles.section} data-reverse="true">
                    <div className={styles.image}>
                        <img src="/everywhere.svg" draggable={false} />
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
                        <img src="/privacy.svg" draggable={false} />
                    </div>
                </section>
                <JoinPrompt />
                <Footer />
            </main>
        </div>
    );
}
