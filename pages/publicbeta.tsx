import URLs from '../urls';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Legal.module.scss';
import { ExternalLink } from '@styled-icons/feather';
import { JoinLinks } from '../components/JoinLinks';
import classNames from 'classnames';

export default function Beta() {
    return (
        <div>
            <Head>
                <title>Revolt Public Beta</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />
            </Head>
            <main>
                <Navbar />
                <div className={styles.content}>
                    <h1 className={styles.title}>Revolt Public Beta</h1>
                    <h3>
                        Hi there! <img src="https://static.revolt.chat/emoji/mutant/1f44b-10160a.svg" style={{ height: '1.2em', verticalAlign: 'top' }} />
                    </h3>
                    <p>
                        Before we let you in, there's just a few ground rules:
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li><b style={{ fontWeight: 700 }}>Be respectful to others in our public spaces.</b><br/>
                        We have a steadily growing and friendly community in the public tester server, please be nice to others when you join.</li>
                        <li><b style={{ fontWeight: 700 }}>Follow our Acceptable Usage policy.</b><br/>
                        Failure to do so may result in your access being revoked.</li>
                        <li><b style={{ fontWeight: 700 }}>Expect some bugs!</b><br/>
                        We're trying our best to keep everything stable but sometimes things slip through.<br/>
                        Most of the time we don't run into issues, but if you do have any issues please report them through the app.</li>
                    </ul>
                    <p>
                        Thank you!
                    </p>
                    <p>
                        <a className={classNames("button", "red")} href={URLs.GenerateCode}>
                            Continue
                        </a>
                    </p>
                </div>
                <Footer />
            </main>
        </div>
    );
}
