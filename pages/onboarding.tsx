import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Legal.module.scss';
import { useRouter } from 'next/dist/client/router';
import { URLs } from '../urls';
import { ExternalLink } from '@styled-icons/feather';

export default function Onboarding() {
    const { query } = useRouter();
    const { code } = query;

    return (
        <div>
            <Head>
                <title>Welcome to Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />
            </Head>
            <main>
                <Navbar />
                <div className={styles.content}>
                    <h1 className={styles.title}>Welcome to Revolt</h1>
                    <p>
                        If you've been linked to this page, you likely applied to join the beta and have now been invited to sign up. To sign up, use the invite code below from the app or click the button below to be taken straight to the account creation screen.
                    </p>
                    { code && <p>
                        You've been given an invite code: <code className={styles.inviteCode}>{ code }</code>
                    </p> }
                    <span>
                        <a className="button red"
                            target="_blank"
                            href={code ? `${URLs.App}/login/create?code=${code}` : URLs.App}>
                            <ExternalLink size={24} /> Open App
                        </a>
                    </span>
                    <h3>Having problems?</h3>
                    <p>
                        We have a number of channels you can contact us directly through for help.
                    </p>
                    <ul>
                        <li>Email support: <a href="mailto:contact@revolt.chat">contact@revolt.chat</a></li>
                        <li>Online support: <a href="https://help.revolt.chat" target="_blank">help.revolt.chat</a></li>
                        <li>Matrix channel: <a href="https://matrix.to/#revolt-chat:clustor.net" target="_blank">#revolt-chat:clustor.net</a></li>
                        <li>Discord server: <a href="https://discord.gg/AWFZeCc" target="_blank">discord.gg/AWFZeCc</a></li>
                    </ul>
                </div>
                <Footer />
            </main>
        </div>
    );
}
