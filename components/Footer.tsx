import URLs from '../urls';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { Gitlab, Reddit, Twitter } from '@styled-icons/simple-icons';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.branding}>
                <img src="/logo.svg" draggable={false} />
                <div className={styles.socials}>
                    <a href="https://gitlab.insrt.uk/revolt">
                        <Gitlab size={24} />
                    </a>
                    <a href="https://reddit.com/r/revoltchat">
                        <Reddit size={24} />
                    </a>
                    <a href="https://twitter.com/revoltchat">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.column}>
                    <b>App</b>
                    <a href={URLs.App}>Open App</a>
                    <Link href="/roadmap">
                        <a>Roadmap</a>
                    </Link>
                    <a href={URLs.Wekan}>
                        <a>Wekan Board</a>
                    </a>
                    {/*<a>Download</a>
                    <a>Features</a>
                    <a>Branding</a>*/}
                </div>
                <div className={styles.column}>
                    <b>Developers</b>
                    <a href={URLs.SourceCode}>Contribute</a>
                    <a href={URLs.Developers}>Documentation</a>
                    <a href={URLs.Translate}>Help translate</a>
                </div>
                <div className={styles.column}>
                    <b>Company</b>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                    <a href="mailto:hello@revolt.chat">Email</a>
                </div>
                <div className={styles.column}>
                    <b>Legal</b>
                    <Link href="/terms">
                        <a>Terms of Service</a>
                    </Link>
                    <Link href="/privacy">
                        <a>Privacy Policy</a>
                    </Link>
                    <Link href="/aup">
                        <a>Acceptable Usage</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}