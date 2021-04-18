import { Gitlab, Reddit, Twitter } from '@styled-icons/simple-icons';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.branding}>
                <img src="/logo.svg" />
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
                    <a>Download</a>
                    <a>Features</a>
                    <a>Branding</a>
                </div>
                <div className={styles.column}>
                    <b>Developers</b>
                    <a>Contribute</a>
                    <a>Documentation</a>
                    <a>Help translate</a>
                </div>
                <div className={styles.column}>
                    <b>Company</b>
                    <a>About Us</a>
                    <a>Blog</a>
                </div>
                <div className={styles.column}>
                    <b>Legal</b>
                    <a>Terms of Service</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}