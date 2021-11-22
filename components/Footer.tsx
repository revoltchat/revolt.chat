import URLs from '../urls';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { Gitlab, Reddit, Twitter, Mastodon, Github } from '@styled-icons/simple-icons';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.branding}>
                <img src="/logo.svg" draggable={false} />
                <div className={styles.socials}>
                    <a href={URLs.GitHub}>
                        <Github size={24} />
                    </a>
                    <a href={URLs.GitLab}>
                        <Gitlab size={24} />
                    </a>
                    <a href={URLs.Reddit}>
                        <Reddit size={24} />
                    </a>
                    <a href={URLs.Twitter}>
                        <Twitter size={24} />
                    </a>
                    <a rel="me" href={URLs.Mastodon}>
                        <Mastodon size={24} />
                    </a>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.column}>
                    <b>App</b>
                    <a href={URLs.App}>Open App</a>
                    <a href={URLs.ProjectTracker}>
                        <a>Project Tracker</a>
                    </a>
                    {/*<a>Download</a>
                    <a>Features</a>
                    <a>Branding</a>*/}
                </div>
                <div className={styles.column}>
                    <b>Developers</b>
                    <a href={URLs.GitHub}>Contribute</a>
                    <a href={URLs.Developers}>Documentation</a>
                    <a href={URLs.Translate}>Help translate</a>
                </div>
                <div className={styles.column}>
                    <b>Team</b>
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