import Head from 'next/head';
import styles from './index.module.scss';

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
                    <div className={styles.nav}>
                        <img className={styles.logo} src="/logo.svg" />
                        <a href="https://app.revolt.chat"><button>Open App</button></a>
                    </div>
                    <div className={styles.columns}>
                        <div className={styles.column}>
                            <div>
                                <h1 className="tagline">
                                    Don't bother with chat apps that don't respect your privacy.
                                </h1>
                                <p className="description">
                                    Communication is critical.<br />Privacy is essential.
                                </p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.concept}>
                                <img src="/concept_inner.svg" />
                            </div>
                        </div>
                    </div>
                    <h1 className={styles.signup}>
                        Sign up for the Revolt beta <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFqBG5_0F6-2h_-aljV_i3v-QRLhYYm1_1-zSC77ZMx0LX_w/viewform">here</a>
                    </h1>
                </header>
                <section>
                    <div>
                        <div className={styles.description}>
                            <div>
                                <h1>Interested in more?</h1>
                                <p>
                                    You can contact us through any of these mediums, do get in touch if you want to learn more or are interested in helping out.
                                </p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <div>
                                <p>
                                    Discord server: <a href="https://discord.gg/AWFZeCc">discord.gg/AWFZeCc</a><br/>
                                    Matrix channel: <a href="https://matrix.to/#/!ZRsAZFoabQbTvEmERw:clustor.net?via=clustor.net">#revolt-chat:clustor.net</a> <br/>
                                    Email the lead developer: <a href="mailto:me@insrt.uk">me@insrt.uk</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div data-reverse="true">
                        <img className={styles.image} src="/code.png" style={{ borderRadius: '12px' }} />
                        <div className={styles.description}>
                            <div>
                                <h1>Open source.</h1>
                                <p>
                                    You can feel free to browse all of <a href="https://gitlab.insrt.uk/revolt">our platform's source code online</a>, we plan to allow users to have completely unrestricted options (to a reasonable extent!) when it comes to what clients and software they use with Revolt. <br/>
                                    <br/>
                                    Currently the majority of the code is unlicensed but we are planning to release it with a suitable license towards the end of development so anyone can feel free to contribute, fork, and extend as they wish.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section>
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
                </section>*/}
            </main>
        </div>
    );
}
