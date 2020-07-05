import Head from 'next/head';
import styles from './index.module.scss';

import SignupForm from '../components/SignupForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0"></meta>
                <meta property="og:title" content="REVOLT" />
                <meta property="og:description" content="Don't bother with chat apps that don't respect your privacy. REVOLT is a brand new chat platform designed around you." />
                <meta property="og:url" content="https://revolt.chat" />
                <meta property="og:image" content="/embed.png" />
                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:image" content="/embed.png"></meta>
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />
            </Head>
        
            <main>
                
                <header>
                    <img className={styles.logo} src="/logo.svg" />
                    <h1 className="tagline">
                        Don't bother with chat apps that don't respect your privacy.
                    </h1>
                    <p className="description">
                        Communication is critical.<br />Privacy is essential.
                    </p>
                    <SignupForm />
                </header>
                <section>
                    <div>
                        <div className={styles.description}>
                            <div>
                                <h1>Fast & lightweight.</h1>
                                <p>Built on the latest technologies, with old hardware support in mind. 
                                    Whether you game on an ultra-high powered computer that can shoot lazers, or an old Tefal toaster, 
                                    Revolt runs the same way on any device.</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div data-reverse={true}>
                        <div className={styles.description}>
                            <div>
                                <h1>Get back to playing.</h1>
                                <p>No fuss, sync your friends from all platforms and get back to chatting and playing together. Switching over to Revolt takes less couple of minutes.</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div>
                        <div className={styles.description}>
                            <div>
                                <h1>Make it yours.</h1>
                                <p>Customize Revolt to your liking, change the default theme or the accent color and make it more personal.</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div data-reverse={true}>
                        <div className={styles.description}>
                            <div>
                                <h1>The whole gang is here.</h1>
                                <p>Riot Communities allow you to join a server based on your favorite game. Communities host their own events and giveaways. So be there or be square!</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div>
                        <div className={styles.description}>
                            <div>
                                <h1>Available everywhere</h1>
                                <p>From Desktop to Mobile, the Revolt app is available wherever you are, so you can chat, call or get in a video call, even if you're not infront of your computer. Revolt is now available for download on Windows, macOS and Linux.</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div data-reverse={true}>
                        <div className={styles.description}>
                            <div>
                                <h1>Open Source</h1>
                                <p>There's more to it than just code. By having Revolt open source to the public, means that we can create a transparent layer between us and the user. Contribute, create your own bot or make your own version of the Revolt client.</p>
                            </div>
                        </div>
                        <img className={styles.image} src="/embed.png" />
                    </div>
                </section>
                <section>
                    <div className={styles.description}>
                        <div>
                            <h1>Collaborating with uvid</h1>
                            <p>put statement here</p>
                        </div>
                        <img className={styles.image} src="/uvid.svg" />
                    </div>
                </section>
            </main>
        </div>
    );
}
