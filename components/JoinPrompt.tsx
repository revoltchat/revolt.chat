import { JoinLinks } from './JoinLinks';
import styles from './JoinPrompt.module.scss';

export function JoinPrompt() {
    return (
        <div className={styles.container}>
            <div className={styles.prompt}>
                <div className={styles.info}>
                    <h1>Ready to try Revolt?</h1>
                    <p>We use PWA technologies so that you can get a native app-like experience without having to download it to your device.</p>
                </div>
                <JoinLinks contrast />
            </div>
        </div>
    )
}

