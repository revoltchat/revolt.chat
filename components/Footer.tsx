import { Gitlab, Reddit, Twitter } from '@styled-icons/simple-icons';
import { URLs } from '../urls';
import styles from './Footer.module.scss';

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
                    <a href={URLs.Roadmap}>Roadmap</a>
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
                    <a href={URLs.AboutUs}>About Us</a>
                </div>
                <div className={styles.column}>
                    <b>Legal</b>
                    <a href={URLs.TermsOfService}>Terms of Service</a>
                    <a href={URLs.PrivacyPolicy}>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}